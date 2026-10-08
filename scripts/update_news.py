"""
Space & Astronomy News Feed Updater
Jeffrey Sabby Academic Website

Sources:
    NASA
    Phys.org Astronomy
    Spaceflight Now (SpaceX-filtered)

Each feed generates an HTML fragment for Quarto.

If an individual feed fails, its previous HTML output
is preserved without interrupting the other feeds.
"""

from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import escape
from pathlib import Path

import feedparser


# ==========================================================
# Configuration
# ==========================================================

BASE_DIR = Path(__file__).resolve().parent.parent
NEWS_DIR = BASE_DIR / "news"

MAX_ARTICLES = 3

SPACEX_KEYWORDS = (
    "spacex",
    "starship",
    "starlink",
    "falcon 9",
    "falcon heavy",
)

FEEDS = {
    "NASA": {
        "url": "https://www.nasa.gov/feed/",
        "output": NEWS_DIR / "nasa_news.html",
        "keywords": None,
    },
    "Astronomy Research": {
        "url": "https://phys.org/rss-feed/space-news/astronomy/",
        "output": NEWS_DIR / "astronomy_news.html",
        "keywords": None,
    },
    "SpaceX": {
        "url": "https://spaceflightnow.com/feed/",
        "output": NEWS_DIR / "spacex_news.html",
        "keywords": SPACEX_KEYWORDS,
    },
}


# ==========================================================
# Retrieve and validate articles
# ==========================================================

def retrieve_news(url, keywords=None):
    """Retrieve, filter, and chronologically sort RSS articles."""

    feed = feedparser.parse(url)

    if feed.get("status") != 200:
        raise RuntimeError(
            f"RSS request failed: HTTP {feed.get('status', 'unknown')}"
        )

    if feed.bozo and not feed.entries:
        raise RuntimeError("RSS feed could not be parsed.")

    articles = []

    for entry in feed.entries:

        title = entry.get("title", "").strip()
        link = entry.get("link", "").strip()
        published = entry.get("published", "")

        if not title or not link:
            continue

        # Apply optional keyword filtering.
        if keywords:
            searchable = title.lower()

            if not any(keyword in searchable for keyword in keywords):
                continue

        try:
            date = parsedate_to_datetime(published)
            date = date.astimezone(timezone.utc)
        except (TypeError, ValueError, IndexError):
            date = None

        articles.append({
            "title": title,
            "link": link,
            "date": date,
        })

    if not articles:
        raise RuntimeError(
            "RSS feed returned no articles matching the selection criteria."
        )

    articles.sort(
        key=lambda article: (
            article["date"]
            or datetime.min.replace(tzinfo=timezone.utc)
        ),
        reverse=True,
    )

    return articles[:MAX_ARTICLES]


# ==========================================================
# Generate HTML
# ==========================================================

def generate_html(articles):
    """Generate a compact HTML fragment for Quarto."""

    lines = ['<div class="nasa-news-feed">']

    for article in articles:

        title = escape(article["title"])
        link = escape(article["link"], quote=True)

        if article["date"]:
            date = article["date"].strftime("%B %d, %Y")
        else:
            date = "Date unavailable"

        lines.extend([
            '  <div class="news-article">',
            f'    <div class="news-date">{date}</div>',
            f'    <a href="{link}" target="_blank" rel="noopener noreferrer">',
            f'      {title}',
            '    </a>',
            '  </div>',
        ])

    lines.append("</div>")

    return "\n".join(lines) + "\n"


# ==========================================================
# Update individual feed
# ==========================================================

def update_feed(name, config):
    """Update one feed, preserving previous output on failure."""

    print(f"\nRetrieving {name}...")

    try:
        articles = retrieve_news(
            config["url"],
            keywords=config["keywords"],
        )

        html = generate_html(articles)

        output = config["output"]
        output.parent.mkdir(parents=True, exist_ok=True)

        # Only replace the previous file after validation.
        output.write_text(html, encoding="utf-8")

        print(f"Retrieved {len(articles)} articles.")
        print(f"Saved: {output}")

        for article in articles:
            print(f"  - {article['title']}")

        return True

    except Exception as exc:
        print(f"Update failed: {exc}")
        print("Previous news file preserved.")

        return False


# ==========================================================
# Main
# ==========================================================

def main():

    print("=" * 60)
    print("Jeffrey Sabby — Space & Astronomy News")
    print("=" * 60)

    results = {}

    for name, config in FEEDS.items():
        results[name] = update_feed(name, config)

    print("\n" + "=" * 60)
    print("Update Summary")
    print("=" * 60)

    for name, success in results.items():
        status = "SUCCESS" if success else "FAILED"
        print(f"{name}: {status}")

    if not all(results.values()):
        raise SystemExit(1)


if __name__ == "__main__":
    main()