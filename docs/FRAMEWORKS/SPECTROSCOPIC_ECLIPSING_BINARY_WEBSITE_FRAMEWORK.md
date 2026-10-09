# Spectroscopic Eclipsing Binary Website Framework

**Project:** Jeffrey Sabby Website  
**Research Area:** Spectroscopic Eclipsing Binary Systems  
**Website Framework:** Quarto  
**Development Environment:** PyCharm Professional  
**Author:** Dr. Jeffrey Sabby  
**Framework Status:** Design Baseline  
**Created:** October 9, 2026  
**Version:** 1.0

---

## 1. Purpose

This document defines the scientific, structural, visual, navigational, and implementation framework for the **Spectroscopic Eclipsing Binary Systems** research section of the Jeffrey Sabby website.

The purpose of this section is not simply to provide a general educational description of eclipsing binary stars. It is intended to function as a public-facing representation of an active astrophysical research program.

The section should communicate:

- what spectroscopic eclipsing binary systems are,
- why they are important astrophysical laboratories,
- how they are observed,
- how photometric and spectroscopic observations complement one another,
- how orbital and stellar properties are derived,
- which binary systems are currently being investigated,
- which systems are proposed for future investigation,
- what observational data exist,
- what analysis and modeling methods are being used,
- what results have been obtained,
- what work has been published,
- what new questions are currently being investigated,
- and how the research connects to the broader scientific literature.

The website should be scientifically rigorous while remaining accessible to a scientifically interested general reader.

The governing principle is:

> **Preserve the science while making the physical meaning understandable.**

---

# 2. Scientific Philosophy

The Spectroscopic Eclipsing Binary section should reflect the scientific method rather than functioning merely as a collection of target descriptions.

The preferred conceptual progression for each system is:

```text
Scientific Question
        ↓
Background
        ↓
Observational Strategy
        ↓
Observations
        ↓
Measurements
        ↓
Analysis
        ↓
Physical Model
        ↓
Uncertainty / Validation
        ↓
Results
        ↓
Astrophysical Interpretation
        ↓
Publication
        ↓
New Questions
```

Whenever practical, the website should distinguish clearly between:

- observation,
- measurement,
- inference,
- model,
- interpretation,
- published result,
- and ongoing investigation.

Exploratory or preliminary results must not be presented as established conclusions.

---

# 3. Research Identity

The section should communicate that spectroscopic eclipsing binary systems are an area of actual research rather than merely a subject being explained.

The visitor should encounter the research through the progression:

```text
What are these systems?
        ↓
Why are they scientifically important?
        ↓
How are they observed?
        ↓
What can be measured?
        ↓
How are physical properties determined?
        ↓
Which systems are being investigated?
        ↓
What have we learned?
        ↓
What questions remain?
```

The central theme is **precision stellar astrophysics through the combination of photometry and spectroscopy**.

---

# 4. Core Scientific Concept

Spectroscopic eclipsing binary systems provide an unusually direct method for determining fundamental stellar properties.

Photometry provides information about eclipse geometry and relative stellar dimensions.

Spectroscopy provides information about orbital velocities and the dynamical scale of the system.

For a double-lined spectroscopic binary, the radial-velocity semi-amplitudes

$$
K_1
$$

and

$$
K_2
$$

provide the mass ratio

$$
q = \frac{M_2}{M_1} = \frac{K_1}{K_2}.
$$

The eclipses constrain the orbital inclination

$$
i.
$$

Combining the spectroscopic and photometric solutions allows the actual stellar masses and radii to be determined.

Conceptually:

```text
PHOTOMETRY
Light Curve
        ↓
Eclipse Geometry
        ↓
Inclination
Fractional Radii
Luminosity Ratio
        │
        │
        ├───────────────┐
        │               │
        ↓               ↓
                    COMBINED
                   ORBITAL MODEL
                        ↓
                 Absolute Properties
                        ↓
                 M1, M2, R1, R2
                 Teff, L, log g, ...
                        ↑
        │               │
        ├───────────────┘
        │
        ↓
SPECTROSCOPY
Spectral-Line Shifts
        ↓
Radial Velocities
        ↓
K1, K2, γ, e, ω
```

A central message of the website should be:

> **Spectroscopy establishes the dynamical scale of the system, while eclipses establish its geometry. Together they allow fundamental stellar properties to be measured.**

---

# 5. Persistent Research Portal Architecture

The Spectroscopic Eclipsing Binary section will use a persistent three-region research portal architecture.

```text
┌─────────────────────┬───────────────────────────────┬─────────────────────┐
│                     │                               │                     │
│        LHS          │            CENTER             │         RHS         │
│                     │                               │                     │
│ Research Navigation │ Selected Binary System        │ Papers of the Week  │
│                     │                               │                     │
│ Current Systems     │ Hero                          │ Current Literature   │
│ Proposed Systems    │ Observations                  │                     │
│ Publications        │ Dashboard                     │ Short Synopses      │
│                     │ Absolute Properties           │                     │
│ Professional        │ Research Narrative            │ ADS / HTML / PDF    │
│ Computing           │ Analysis                      │                     │
│ Social              │ Results                       │                     │
│                     │                               │                     │
└─────────────────────┴───────────────────────────────┴─────────────────────┘
```

The fundamental rule is:

> **The LHS and RHS remain persistent while the center research content changes according to the selected binary system.**

---

# 6. Default Landing System — RT CrB

**RT CrB** will serve as the default and flagship system for the Spectroscopic Eclipsing Binary research section.

When a visitor first enters this portion of the website, the center content will display RT CrB.

RT CrB therefore serves two purposes:

1. an actual research target,
2. the default demonstration of the scientific methodology used throughout the research program.

RT CrB is particularly suitable because it connects:

- historical observations,
- spectroscopy,
- photometry,
- radial velocities,
- absolute stellar properties,
- published research,
- activity/timing behavior,
- archival observations,
- TESS observations,
- and modern reanalysis.

RT CrB should not, however, define the entire section.

The section title remains:

# Spectroscopic Eclipsing Binary Systems

RT CrB is the flagship **example within the broader research program**.

---

# 7. Dynamic Center Content

Selecting another system from the LHS navigation changes the central content.

For example:

```text
RT CrB
   ↓
WW Aur
   ↓
FT Ori
   ↓
Other Current System
   ↓
Proposed System
```

The surrounding research environment remains unchanged.

Conceptually:

```text
LHS              CENTER             RHS
persistent       dynamic            persistent
```

The active system should be visually indicated in the LHS navigation.

---

# 8. Separate System Pages

Although the user experience should feel like the center panel is being replaced, individual systems should preferably be implemented as separate Quarto pages.

Example URLs:

```text
/research/binaries/rt-crb/
/research/binaries/ww-aur/
/research/binaries/ft-ori/
```

Advantages include:

- direct linking,
- bookmarking,
- search-engine indexing,
- browser Back/Forward support,
- independent page growth,
- easier maintenance,
- simpler debugging,
- clearer provenance,
- and long-term scalability.

All system pages should share common LHS and RHS components.

---

# 9. Current-System Page Template

Current binary systems should follow a consistent scientific structure.

Recommended structure:

```text
System Hero

Scientific Question

System Identity

Light Curve + Radial Velocity Data

Interactive Orbital Dashboard

Absolute Properties

Research Narrative

Observations & Data

Analysis & Modeling

Results

Astrophysical Interpretation

Research Chronology

Related Publications

Current Questions / Future Work
```

Not every system must contain every section immediately.

The framework should allow sections to grow as research progresses.

---

# 10. Proposed-System Page Template

Proposed systems require a different emphasis.

Recommended structure:

```text
System Hero

Scientific Motivation

System Identity

Why This System?

Known Properties

Existing Literature

Existing Observations

Available Archival Data

Scientific Questions

Proposed Observations

Proposed Analysis

Expected Scientific Value

Research Status
```

A proposed target should not appear to have completed analysis or results when those stages have not occurred.

---

# 11. Hero Design

The system hero should immediately communicate that the visitor is viewing real astrophysical research.

For RT CrB, the preferred hero concept incorporates:

- RT CrB identification,
- representative light curve,
- radial-velocity curve,
- concise research description,
- and connection to the system's absolute physical properties.

Possible subtitle:

> **Precision stellar astrophysics through combined photometry and spectroscopy**

The hero should emphasize real research data rather than generic stock astronomical imagery.

---

# 12. Light Curve

The RT CrB light curve should be based on actual observational or published data whenever possible.

The visualization should communicate:

- primary eclipse,
- secondary eclipse,
- out-of-eclipse behavior,
- orbital phase,
- observational scatter,
- and fitted/model behavior where appropriate.

Observed data and fitted/model curves should be visually distinguishable.

---

# 13. Radial-Velocity Curve

The radial-velocity visualization should display both stellar components.

The display should identify:

- primary star,
- secondary star,
- orbital phase,
- systemic velocity,
- radial-velocity semi-amplitudes,
- observations,
- and fitted orbital solution.

Where scientifically appropriate, uncertainties should be displayed.

---

# 14. Absolute Properties

A prominent **Absolute Properties** presentation will be included.

Possible stellar properties include:

| Property | Primary | Secondary |
|---|---:|---:|
| Mass | $M_1$ | $M_2$ |
| Radius | $R_1$ | $R_2$ |
| Effective Temperature | $T_{\mathrm{eff},1}$ | $T_{\mathrm{eff},2}$ |
| Surface Gravity | $\log g_1$ | $\log g_2$ |
| Luminosity | $L_1$ | $L_2$ |
| Bolometric Magnitude | $M_{\mathrm{bol},1}$ | $M_{\mathrm{bol},2}$ |
| Rotational Velocity | $v\sin i_1$ | $v\sin i_2$ |

System properties may include:

- orbital period,
- semimajor axis,
- eccentricity,
- inclination,
- mass ratio,
- systemic velocity,
- distance,
- age,
- evolutionary state,
- and other scientifically relevant quantities.

Only quantities supported by the underlying analysis should be shown.

---

# 15. Scientific Uncertainties

Uncertainties are first-class scientific quantities.

A website intended for a general audience should not remove uncertainties merely to simplify presentation.

For example, prefer:

$$
M_1 = 1.42 \pm 0.02\,M_\odot
$$

rather than:

$$
M_1 = 1.42\,M_\odot
$$

when the uncertainty is known and scientifically relevant.

The website should preserve the distinction between measurement precision and exact values.

---

# 16. Scientific Provenance

Numerical results must have identifiable provenance.

Possible provenance labels include:

```text
Published Result
Sabby et al. (2003)

Current Reanalysis
TESS + modern modeling

This Work

Literature Value
```

Historical and current values must not be silently mixed.

Where different analyses produce different values, those differences should be documented rather than hidden.

---

# 17. Research Status Labels

Research state should be clearly visible when appropriate.

Recommended labels include:

```text
PUBLISHED
CURRENT ANALYSIS
PROPOSED
ARCHIVAL REANALYSIS
PRELIMINARY
```

These labels should be visually restrained and should not dominate the scientific content.

---

# 18. Interactive Binary-System Dashboard

One of the signature features of the research section will be an interactive binary-system dashboard.

The dashboard should synchronize several representations of the same physical orbit.

Primary components:

1. orbital geometry,
2. light curve,
3. radial-velocity curves,
4. system state / orbital phase.

---

# 19. Dashboard Scientific Principle

The dashboard should communicate that:

> **The orbit, light curve, and radial-velocity curves are not separate phenomena. They are different observational manifestations of the same physical system.**

A single orbital phase variable

$$
\phi \in [0,1]
$$

should control all visualizations.

---

# 20. Dashboard — Orbital Geometry

The orbital display should show:

- primary star,
- secondary star,
- barycentric motion,
- relative stellar radii,
- observer line of sight,
- orbital inclination,
- and eclipse geometry.

Where appropriate, the geometry should reflect the actual inferred RT CrB parameters rather than an arbitrary schematic.

---

# 21. Dashboard — Light-Curve Synchronization

A moving phase marker should track the corresponding location on the light curve.

As the orbital geometry changes, the visitor should see the corresponding photometric state.

Examples:

```text
Quadrature
    ↓
stars spatially separated
    ↓
baseline system brightness

Primary Eclipse
    ↓
projected stellar overlap
    ↓
primary light-curve minimum
```

---

# 22. Dashboard — Radial-Velocity Synchronization

Markers should move simultaneously along the primary and secondary radial-velocity curves.

The dashboard should allow the visitor to see:

- approaching motion,
- receding motion,
- quadrature,
- conjunction,
- systemic-velocity crossing,
- and the relationship between orbital geometry and Doppler velocity.

---

# 23. Dashboard Controls

Minimum controls:

- phase slider,
- Play,
- Pause,
- Reset if useful.

The phase slider should allow manual exploration.

Animation should be optional rather than mandatory.

---

# 24. Dashboard System State

The dashboard may display dynamically:

- orbital phase,
- eclipse state,
- primary radial velocity,
- secondary radial velocity,
- approaching/receding state,
- projected separation,
- and other useful quantities.

The state panel should remain concise.

---

# 25. Dashboard Physical Model

For circular systems, orbital phase mapping is straightforward.

For eccentric systems, the model should use the appropriate orbital relationships:

$$
\phi \rightarrow M \rightarrow E \rightarrow \nu,
$$

where:

- $M$ is mean anomaly,
- $E$ is eccentric anomaly,
- $\nu$ is true anomaly.

The radial velocity can then be represented using

$$
v_r = \gamma + K[\cos(\nu+\omega)+e\cos\omega].
$$

The orbital display, radial velocities, and eclipse geometry should derive from a physically consistent model whenever possible.

---

# 26. Dashboard Development Strategy

The dashboard should be developed incrementally.

## Version 1 — Core Demonstration

- phase slider,
- Play/Pause,
- orbital schematic,
- synchronized light curve,
- synchronized RV curves,
- primary/secondary identification,
- current phase.

## Version 2 — RT CrB Research Model

- actual RT CrB observational points,
- fitted curves,
- uncertainties,
- actual inclination,
- eccentricity if applicable,
- relative radii,
- systemic velocity,
- quadrature markers,
- eclipse identification.

## Version 3 — Advanced Research Features

Possible later additions:

- Roche geometry,
- limb darkening,
- stellar distortion,
- spots,
- activity modulation,
- residual plots,
- historical versus modern solutions,
- TESS comparison,
- or other system-specific effects.

Advanced features should only be added when they serve a scientific purpose.

---

# 27. Dashboard Implementation

The dashboard should be developed within the existing PyCharm website project.

Preferred technologies:

```text
HTML
CSS
JavaScript
SVG
```

Avoid unnecessary heavy frameworks.

A possible structure is:

```text
assets/
└── rt_crb_dashboard/
    ├── dashboard.html
    ├── dashboard.css
    ├── dashboard.js
    └── data/
        ├── rtcrb_lightcurve.csv
        ├── rtcrb_rv.csv
        └── rtcrb_parameters.json
```

The component should be modular so that the same framework can eventually support other systems.

---

# 28. Dashboard Reusability

The long-term goal should be to separate the visualization engine from system-specific data.

Conceptually:

```text
Binary Dashboard Engine
        +
System Data
        ↓
Interactive System Visualization
```

For example:

```text
dashboard.js
        +
rtcrb_parameters.json
        ↓
RT CrB Dashboard
```

or:

```text
dashboard.js
        +
wwaur_parameters.json
        ↓
WW Aur Dashboard
```

This prevents unnecessary duplication.

---

# 29. Dashboard Accessibility

The dashboard must remain scientifically useful without continuous animation.

Requirements should include:

- Play/Pause control,
- manual phase selection,
- keyboard-accessible controls where practical,
- readable labels,
- sufficient contrast,
- reduced-motion support,
- and a meaningful static fallback.

Users who disable JavaScript or cannot interact with the animation should still be able to understand the science.

---

# 30. Source-Driven Research Narrative

The research narrative should be derived primarily from authoritative source material.

For systems with published work, the original research paper should serve as a primary scientific source.

Workflow:

```text
Original Paper
      ↓
Structured Scientific Digestion
      ↓
Scientific Summary
      ↓
Public-Facing Narrative
      ↓
Website
```

---

# 31. Paper Digestion

For each paper, extract:

- scientific question,
- motivation,
- system description,
- observational setup,
- instrumentation,
- observations,
- data reduction,
- radial-velocity analysis,
- light-curve analysis,
- orbital solution,
- absolute dimensions,
- uncertainties,
- astrophysical interpretation,
- conclusions,
- important figures,
- important tables,
- and later questions raised by the work.

This structured digestion should precede webpage writing.

---

# 32. “Boil It Down” Principle

The published paper remains the scientific authority.

The website should translate the paper for a common reader without sacrificing scientific accuracy.

For example, rather than beginning with mass functions and inclination corrections, the website may explain:

> By measuring how the spectral lines of the two stars repeatedly shift toward the blue and red as they orbit one another, we determine how quickly each star moves. The eclipses reveal how the orbit is oriented to our line of sight. Together, these measurements allow the actual masses and sizes of both stars to be determined.

Technical details can then be progressively exposed for readers who want greater depth.

---

# 33. Layered Scientific Depth

The website should support multiple reader levels.

## Level 1 — General Reader

- physical explanation,
- concise narrative,
- major scientific conclusions.

## Level 2 — Interested Student

- light curves,
- radial velocities,
- orbital geometry,
- important equations,
- dashboard.

## Level 3 — Scientist / Advanced Student

- absolute properties,
- uncertainties,
- methodology,
- analysis,
- literature,
- provenance.

## Level 4 — Original Research

- ADS,
- DOI,
- journal article,
- PDF/HTML where legally and technically available,
- underlying datasets where appropriate.

The reader should be able to choose how deeply to investigate.

---

# 34. Published Results vs. Current Investigation

Historical published results and current work must remain clearly separated.

For RT CrB, this may include:

```text
Published Research
        ↓
Original observations and analysis
        ↓
Published interpretation

Current Investigation
        ↓
TESS / archival data
        ↓
Modern computational analysis
        ↓
Testing previous interpretations
        ↓
New questions
```

This distinction is essential for scientific integrity.

---

# 35. Research Chronology

Where scientifically useful, system pages may include a research timeline.

For RT CrB, conceptually:

```text
Original Observations
        ↓
Original Analysis
        ↓
2003 Publication
        ↓
Archival Era
        ↓
TESS Observations
        ↓
Modern Reanalysis
        ↓
Current Investigation
```

The chronology emphasizes that scientific understanding evolves as new observations and methods become available.

---

# 36. Scientific Question

Every system page should include a concise **Scientific Question** near the top.

This should answer:

> Why are we investigating this system?

The page should not merely catalog the star.

The scientific question should guide the subsequent narrative:

```text
Question
   ↓
Observations
   ↓
Measurements
   ↓
Model
   ↓
Results
   ↓
Interpretation
```

---

# 37. Standard System Identity Block

Each system should have a standardized identity panel.

Possible fields:

```text
System:
Other Names:
Classification:
Spectroscopic Type:
Orbital Period:
Spectral Type(s):
Magnitude:
Coordinates:
TIC:
Gaia:
Other Catalog IDs:
Research Status:
Primary Data Sources:
```

Only relevant and verified fields should be displayed.

This block should facilitate comparison between systems.

---

# 38. LHS Research Navigation

The left-hand sidebar/bubble is the persistent research navigator.

Top-level structure:

```text
SPECTROSCOPIC ECLIPSING BINARIES

Research Overview

▸ Binary Systems

▸ Publications

────────────────────

PROFESSIONAL

COMPUTING

SOCIAL
```

The existing Professional, Computing, and Social links remain part of the site and are moved downward to make room for research-specific navigation.

---

# 39. Binary Systems Accordion

Binary Systems expands to:

```text
▾ Binary Systems

    ▸ Current Systems

    ▸ Proposed Systems
```

Current Systems expands to active research targets.

Example:

```text
▾ Current Systems

    ▸ RT CrB
    ▸ WW Aur
    ▸ FT Ori
    ▸ ...
```

Proposed Systems contains future candidate targets.

---

# 40. Per-System LHS Navigation

An active current system may expand to:

```text
▾ RT CrB

    Overview
    Observations & Data
    Analysis & Modeling
    Results
    Publications
```

Proposed systems may use a lighter structure:

```text
▾ Proposed System

    Overview
    Scientific Motivation
    Existing Data
    Proposed Observations
```

---

# 41. Accordion Behavior

The full navigation hierarchy should not be displayed simultaneously.

Use collapsible accordion/tree behavior.

Recommended behavior:

- collapsed by default where appropriate,
- Current Systems and Proposed Systems expand independently,
- individual targets expand when selected,
- only one binary target should normally be fully expanded at a time,
- active system is visually highlighted.

This allows deep navigation without consuming excessive vertical space.

---

# 42. Large Target Programs

If the research program grows to approximately 20 current systems and 20 proposed systems, do not display all targets simultaneously.

Instead:

```text
Current Systems
    RT CrB
    WW Aur
    FT Ori
    ...
    View All Systems →
```

A dedicated systems catalog can display the complete target list.

---

# 43. Publications Navigation

Publications remain a separate top-level LHS item.

Example:

```text
▸ Publications

    Sabby et al. — RT CrB
    Paper 2
    Paper 3

    View All Publications →
```

For astronomy publications, ADS should generally be the preferred external destination because it provides:

- abstract,
- citation information,
- references,
- DOI,
- journal links,
- and available full-text resources.

---

# 44. RHS — Papers of the Week

The persistent RHS panel will feature current scientific literature relevant to the research program.

Recommended title:

# Papers of the Week

The RHS remains unchanged as the visitor moves among binary systems.

Conceptually:

> **Center:** What we are working on.

> **RHS:** What the field is working on.

---

# 45. Number of Featured Papers

The preferred initial number is approximately **three featured papers**.

This provides sufficient scientific variety without overwhelming the sidebar.

A link can provide access to additional papers:

```text
More Papers →
```

The design may later support two to five papers depending on available space and synopsis length.

---

# 46. Paper Selection Topics

Relevant literature may include:

- eclipsing binaries,
- spectroscopic binaries,
- detached eclipsing binaries,
- absolute dimensions,
- stellar masses and radii,
- stellar structure,
- stellar evolution,
- radial velocities,
- light-curve modeling,
- tidal evolution,
- synchronization,
- circularization,
- apsidal motion,
- magnetic activity,
- starspots,
- orbital-period variation,
- TESS binary research,
- Kepler binary research,
- spectroscopy,
- photometry,
- instrumentation,
- and relevant computational methods.

---

# 47. Paper-of-the-Week Entry

Each entry may contain:

```text
Paper Title

Authors
Journal / arXiv / ADS

Short Synopsis

Why It Matters

ADS | HTML | PDF
```

The synopsis should normally be approximately two to four sentences.

The text must be an original summary rather than copied from the abstract.

---

# 48. Papers-of-the-Week Provenance

The RHS should display an update indicator such as:

```text
Updated Weekly
October 2026
```

Links should point to authoritative sources whenever possible:

- ADS,
- DOI,
- journal/publisher,
- arXiv,
- official HTML,
- official PDF.

---

# 49. Papers-of-the-Week Data Architecture

The literature panel should eventually be data-driven.

Possible source files:

```text
papers_of_week.yml
```

or:

```text
papers_of_week.json
```

Possible fields:

```yaml
title:
authors:
journal:
date:
synopsis:
why_it_matters:
ads:
doi:
html:
pdf:
```

This allows the sidebar to be updated without rewriting page markup.

---

# 50. Relationship to Daily Astronomy Read

The literature-selection methodology can build upon the existing **Daily Astronomy Read** process.

The website version should be narrower and specifically tuned to the Spectroscopic Eclipsing Binary research program.

The two processes may share discovery and evaluation methods while remaining separate products.

---

# 51. Responsive / Mobile Design

The desktop three-column architecture must degrade gracefully on narrow displays.

Desktop:

```text
LHS | CENTER | RHS
```

Mobile priority:

```text
CENTER

Research Navigation
(collapsible)

Papers of the Week
```

Alternatively, Research Navigation may be accessible from a compact control near the top of the page.

Nothing scientifically important should disappear merely because the viewport is narrow.

---

# 52. Mobile Dashboard

The dashboard must remain usable on phones and tablets.

Requirements:

- controls large enough for touch,
- plots resize responsively,
- labels remain readable,
- no required hover interaction,
- no horizontal page overflow,
- phase slider remains usable,
- animation remains optional.

Complex dashboard panels may stack vertically.

---

# 53. Global Website Footer

A persistent footer should be added across the entire Jeffrey Sabby website.

The footer is a **global website component**, not a binary-research-specific component.

It should remain consistent across research, teaching, computing, and other major sections.

---

# 54. Footer Purpose

The footer provides:

1. identity,
2. global navigation,
3. provenance.

It should remain visually subordinate to the main page.

---

# 55. Proposed Footer Structure

Conceptually:

```text
────────────────────────────────────────────────────────────

JS / Dr. Jeffrey Sabby
Astrophysics • Physics • Computational Science • Mechatronics


RESEARCH

Spectroscopic Eclipsing Binaries
Observational Astronomy
Exoplanets
Scientific Computing


TEACHING

Astrophysics
Orbital Mechanics
Digital Signal Processing
Course Resources


CONNECT

Professional
GitHub
Publications / ADS
Contact


────────────────────────────────────────────────────────────

© 2026 Jeffrey Sabby
Built with Quarto
```

The exact content can evolve as the overall website grows.

---

# 56. Footer Visual Design

The footer should use:

- a thin upper rule,
- generous whitespace,
- restrained typography,
- muted secondary text,
- three or four compact columns,
- consistent website colors,
- and responsive stacking on narrow displays.

A simple `JS` identity mark may be used rather than introducing an unnecessary complex logo.

---

# 57. Citation Support

The website should eventually support a **Cite This Work** mechanism where appropriate.

For published research, this should point to the actual paper citation.

Possible outputs include:

- formatted citation,
- ADS,
- DOI,
- BibTeX.

For original datasets or website-based research products, citation information may be provided if scientifically warranted.

---

# 58. Accessibility

Accessibility should be considered during implementation rather than retrofitted later.

Requirements include:

- semantic headings,
- descriptive link text,
- image alternative text,
- keyboard-accessible navigation,
- sufficient contrast,
- readable typography,
- responsive layouts,
- reduced-motion support,
- accessible interactive controls,
- and meaningful static alternatives to animations.

---

# 59. Figure and Data Integrity

Scientific figures should:

- identify axes,
- include physical units,
- distinguish observations from models,
- show uncertainties when appropriate,
- avoid misleading axis ranges,
- identify data sources,
- and retain sufficient resolution.

Plots should prioritize scientific interpretation over decorative appearance.

---

# 60. Data Provenance

Whenever observational data are displayed, record:

- source,
- instrument where applicable,
- observation date or epoch,
- processing status,
- calibration status,
- archive/source repository,
- and analysis provenance.

For archival datasets, distinguish archival data from newly obtained observations.

---

# 61. Naming Conventions

Consistent naming should be established before large-scale implementation.

Suggested URL convention:

```text
rt-crb
ww-aur
ft-ori
```

Suggested internal file convention:

```text
rt_crb
ww_aur
ft_ori
```

Avoid mixing multiple conventions unnecessarily.

---

# 62. Possible Directory Architecture

A conceptual structure may be:

```text
research/
└── binaries/
    ├── rt-crb.qmd
    ├── ww-aur.qmd
    ├── ft-ori.qmd
    ├── systems.qmd
    └── publications.qmd

assets/
└── binaries/
    ├── shared/
    │   ├── binary-dashboard.js
    │   ├── binary-dashboard.css
    │   └── ...
    │
    ├── rt_crb/
    │   ├── data/
    │   ├── figures/
    │   └── ...
    │
    ├── ww_aur/
    │   ├── data/
    │   ├── figures/
    │   └── ...
    │
    └── ft_ori/
        ├── data/
        ├── figures/
        └── ...
```

The final structure should conform to the existing JeffreySabbyWebsite architecture rather than forcing unnecessary reorganization.

---

# 63. Development Workflow

Development should proceed incrementally.

Recommended sequence:

```text
1. Establish framework
2. Obtain RT CrB source paper
3. Digest paper scientifically
4. Obtain RT CrB light curve
5. Obtain RT CrB radial velocities
6. Obtain absolute-property results
7. Build RT CrB narrative
8. Build static RT CrB center page
9. Build dashboard prototype
10. Validate orbital physics
11. Replace placeholders with real data
12. Implement LHS accordion
13. Implement RHS Papers of the Week
14. Implement shared footer
15. Validate responsive behavior
16. Validate accessibility
17. Validate links
18. Render Quarto site
19. Commit to Git
20. Publish
```

Each stage should be tested before adding unnecessary complexity.

---

# 64. PyCharm Workflow

The website is maintained in the existing PyCharm project.

Because direct editing integration with PyCharm is not relied upon, complete code/configuration files should be supplied in chat for manual copy-and-paste into PyCharm.

Changes should be introduced incrementally and tested after each meaningful step.

Avoid large untested multi-file changes when a smaller validated sequence is possible.

---

# 65. Validation

Before publication, each system page should be checked for:

## Scientific Validation

- correct numerical values,
- correct units,
- correct uncertainties,
- correct orbital interpretation,
- correct citations,
- correct distinction between observation and inference.

## Technical Validation

- Quarto renders successfully,
- links work,
- dashboard loads,
- controls function,
- plots resize correctly,
- no JavaScript console errors,
- mobile layout works.

## Editorial Validation

- narrative is understandable,
- jargon is defined where necessary,
- paper-derived material is accurately paraphrased,
- no unsupported claims are introduced,
- published and preliminary work are clearly distinguished.

---

# 66. Design Restraint

The research section should look modern and sophisticated without becoming visually theatrical.

Avoid:

- unnecessary animation,
- excessive color,
- decorative effects that compete with data,
- generic stock-space imagery when actual research data are available,
- excessive cards,
- overly dense sidebars,
- and interaction for interaction's sake.

The guiding aesthetic should be:

> **Research visualization rather than astronomy exhibition.**

---

# 67. Long-Term Scalability

The framework should support growth from the initial flagship systems to a much larger observing/research program.

The architecture should accommodate:

- approximately 20 current systems,
- approximately 20 proposed systems,
- multiple publications,
- new observing campaigns,
- archival datasets,
- TESS/Kepler data,
- spectroscopy,
- photometry,
- new analysis methods,
- and future research results.

Scalability should be achieved through reusable templates and data-driven components rather than duplication.

---

# 68. Future Possibilities

Possible future features include:

- searchable binary-system catalog,
- sortable target tables,
- observation timelines,
- downloadable public datasets,
- interactive spectra,
- spectral-line identification,
- O−C diagrams,
- period-change visualization,
- TESS sector visualization,
- historical-versus-modern parameter comparisons,
- Roche geometry,
- evolutionary tracks,
- HR-diagram placement,
- synchronization comparisons,
- apsidal-motion visualization,
- observing-status indicators,
- bibliography database,
- BibTeX export,
- and links to associated software repositories.

These should only be implemented when they support an actual scientific or communication need.

---

# 69. Architectural Summary

The final conceptual architecture is:

```text
GLOBAL WEBSITE HEADER
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   SPECTROSCOPIC ECLIPSING BINARY RESEARCH PORTAL           │
│                                                             │
│  ┌───────────────┬───────────────────────┬───────────────┐  │
│  │               │                       │               │  │
│  │      LHS      │        CENTER         │      RHS      │  │
│  │               │                       │               │  │
│  │ Research      │ Selected Binary       │ Papers of     │  │
│  │ Overview      │                       │ the Week      │  │
│  │               │ Hero                  │               │  │
│  │ Binary        │ Scientific Question   │ Paper 1       │  │
│  │ Systems       │ System Identity       │ Paper 2       │  │
│  │               │ Light Curve           │ Paper 3       │  │
│  │ Current       │ RV Curve              │               │  │
│  │ Proposed      │ Dashboard             │ More →        │  │
│  │               │ Absolute Properties   │               │  │
│  │ Publications  │ Narrative             │               │  │
│  │               │ Analysis              │               │  │
│  │ Professional  │ Results               │               │  │
│  │ Computing     │ Interpretation        │               │  │
│  │ Social        │ Publications          │               │  │
│  │               │                       │               │  │
│  └───────────────┴───────────────────────┴───────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
GLOBAL WEBSITE FOOTER
```

---

# 70. Central Design Principle

The Spectroscopic Eclipsing Binary Systems section should ultimately allow a visitor to move naturally through the entire scientific inference process:

```text
We observe the stars.
        ↓
We measure their changing brightness.
        ↓
We measure their changing radial velocities.
        ↓
We determine the orbital geometry.
        ↓
We construct a physical model.
        ↓
We determine stellar masses and radii.
        ↓
We compare those properties with stellar physics.
        ↓
We interpret the system.
        ↓
We publish the results.
        ↓
New observations produce new questions.
```

The website should therefore not merely **describe** spectroscopic eclipsing binaries.

It should allow the visitor to understand **how observations become astrophysical knowledge**.

---

# 71. Framework Status

This document represents the agreed design baseline for the Spectroscopic Eclipsing Binary Systems section of the Jeffrey Sabby website as of October 9, 2026.

Major architectural decisions currently locked in include:

- RT CrB as the default flagship system,
- persistent LHS research navigation,
- dynamic system-specific center content,
- persistent RHS Papers of the Week,
- separate Quarto pages for individual systems,
- expandable Current and Proposed Systems navigation,
- source-driven research narratives,
- plain-language translation of published research,
- actual observational data where available,
- prominent Absolute Properties,
- synchronized interactive binary dashboard,
- scientific provenance,
- explicit uncertainties,
- research-status distinctions,
- responsive/mobile behavior,
- accessibility,
- global website footer,
- scalable target architecture,
- and preservation of scientific rigor throughout the public-facing presentation.

Changes to these architectural principles should be deliberate and documented.

---

## End of Framework

**File:**

```text
/Users/jeffreysabby/Library/CloudStorage/Dropbox/My_Websites/JeffreySabbyWebsite/docs/FRAMEWORKS/SPECTROSCOPIC_ECLIPSING_BINARY_WEBSITE_FRAMEWORK.md
```

**Version:** 1.0  
**Date:** October 9, 2026  
**Status:** Design Baseline