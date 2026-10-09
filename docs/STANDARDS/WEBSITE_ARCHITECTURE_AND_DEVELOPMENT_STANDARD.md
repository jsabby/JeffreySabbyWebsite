# WEBSITE ARCHITECTURE AND DEVELOPMENT STANDARD

**Project:** Jeffrey Sabby Scientific and Academic Website  
**Website:** https://jeffreysabby.com  
**Repository:** https://github.com/jsabby/JeffreySabbyWebsite  
**Document:** WEBSITE_ARCHITECTURE_AND_DEVELOPMENT_STANDARD.md  
**Version:** 1.0.0  
**Date:** October 8, 2026  
**Status:** Initial Architectural Standard  
**Author:** Jeffrey Sabby  
**Development Collaboration:** Kepler (OpenAI)

---

# 1. Purpose and Scope

## 1.1 Purpose

The Jeffrey Sabby Scientific and Academic Website is intended to provide a comprehensive, scientifically rigorous, and continuously evolving representation of the author's research, engineering, computational, educational, and scholarly activities.

The website is not intended to function solely as a conventional academic biography or static professional portfolio.

Instead, it will serve as an integrated scientific information environment that combines:

1. Historical scientific contributions.
2. Current research activities.
3. Scientific publications and scholarly works.
4. Observational astronomy programs.
5. Experimental engineering and instrumentation.
6. Scientific computing and software development.
7. University teaching and educational resources.
8. Computational textbooks and Jupyter Books.
9. Current scientific news and discoveries.
10. Selected scientific papers and research developments.
11. Links to scientific archives, databases, and research facilities.
12. Reproducible scientific documentation.

The website will be developed incrementally while maintaining a consistent architecture, appearance, navigation hierarchy, and scientific standard.

## 1.2 Long-Term Vision

The long-term objective is to establish a scientific website in which each major research or educational subject functions as a coherent, interconnected collection of pages.

Visitors should be able to navigate from a broad scientific discipline to increasingly specialized subjects without losing their understanding of the surrounding scientific context.

For example:

Research → Exoplanets → Transit Photometry → Current Research Targets

At each level, the website should provide:

- Appropriate navigation.
- Scientifically meaningful content.
- Relevant historical context.
- Current research developments.
- Links to publications and supporting resources.
- Connections to related scientific disciplines.

The website should remain extensible as new research projects, software systems, educational materials, and publications are developed.

---

# 2. Foundational Design Principles

All website development shall follow the principles defined in this section.

## 2.1 Scientific Integrity

Scientific content must distinguish between:

- Established scientific results.
- Observational measurements.
- Theoretical predictions.
- Numerical simulations.
- Preliminary research findings.
- Working hypotheses.
- Interpretations of existing evidence.
- Speculative scientific possibilities.
- Published and unpublished research.

Scientific conclusions must not be presented with greater certainty than the supporting evidence justifies.

Whenever practical, scientific statements should be supported by appropriate references, observations, calculations, or published literature.

## 2.2 Scientific Method

The scientific method will provide the conceptual foundation for research documentation.

The preferred scientific workflow is:

1. Scientific Question
2. Background and Existing Knowledge
3. Physical Model or Hypothesis
4. Testable Predictions
5. Observational or Experimental Strategy
6. Target or System Selection
7. Instrumentation
8. Observation or Experiment
9. Raw Data Acquisition
10. Calibration and Data Reduction
11. Measurement
12. Analysis and Modeling
13. Uncertainty Quantification and Validation
14. Results
15. Scientific Interpretation
16. Conclusions
17. Publication and Dissemination
18. New Scientific Questions

Not every webpage requires all eighteen components.

However, substantive research-project documentation should follow this sequence whenever applicable.

## 2.3 Reproducibility

Research documentation should provide sufficient information to understand how results were obtained.

Where appropriate, include:

- Observational methods.
- Instrument specifications.
- Calibration procedures.
- Data sources.
- Computational methods.
- Software versions.
- Numerical assumptions.
- Measurement uncertainties.
- Validation procedures.
- References to supporting publications.
- Links to publicly accessible datasets and source code.

Reproducibility is a central objective of the website.

## 2.4 Consistent Presentation

All major website sections shall follow a common visual and organizational standard.

Consistency includes:

- Navigation structure.
- Page hierarchy.
- Typography.
- Heading levels.
- Figure presentation.
- Tables.
- Mathematical notation.
- Citations.
- Scientific news panels.
- Publication metadata.
- Update timestamps.
- Internal and external links.

Individual sections may introduce specialized content without abandoning the overall website design.

## 2.5 Hierarchical Organization

Scientific information shall be organized hierarchically.

Each page must have a clearly defined position within the website.

A visitor should be able to determine:

1. The major website division.
2. The current scientific or educational subject.
3. The selected subsection.
4. Related subjects.
5. How to return to a higher organizational level.

## 2.6 Separation of Content and Presentation

Scientific content should remain separate from presentation and navigation configuration whenever practical.

Quarto source files will contain the principal scientific narrative.

CSS will control visual styling.

Quarto configuration will control site-wide navigation and rendering.

Python programs will handle automated data retrieval and content generation.

GitHub Actions will handle scheduled execution and deployment.

This separation will simplify maintenance and reduce unintended interactions between components.

---

# 3. Primary Website Divisions

The website shall contain seven principal navigation categories.

| Division | Primary Purpose |
|---|---|
| Home | Scientific identity and general introduction |
| Research | Scientific research programs and investigations |
| Engineering | Experimental engineering, instrumentation, and mechatronics |
| Scientific Computing | Scientific software, computational methods, and simulations |
| Education | University teaching and educational resources |
| Publications | Scholarly publications, technical reports, and books |
| About | Academic and professional background |

These categories will appear in the horizontal navigation bar.

Each category shall link to a dedicated homepage.

## 3.1 Home

The Home page introduces the author and the major areas of scientific activity.

Its primary functions are:

- Present scientific identity.
- Summarize research interests.
- Introduce engineering activities.
- Introduce scientific computing.
- Describe educational interests.
- Provide access to major website sections.
- Display general space and astronomy news.
- Provide professional and academic links.

The existing three-column homepage will serve as the visual reference for subsequent development.

## 3.2 Research

The Research division documents scientific investigations and observational programs.

Initial research categories include:

- Spectroscopic Eclipsing Binaries.
- Exoplanets.
- Rocketry.
- Drones.
- Rovers.
- Observatory Automation.

Additional research categories may be introduced as needed.

## 3.3 Engineering

The Engineering division documents the development, construction, testing, and operation of experimental systems.

Initial subjects may include:

- Astronomical Instrumentation.
- Mechatronics.
- Embedded Systems.
- Avionics.
- Autonomous Vehicles.
- Sensors and Telemetry.
- Data Acquisition.
- Feedback Control.
- GNSS and RTK Positioning.
- Mechanical Design.
- 3D Printing.
- Observatory Hardware.

Research-oriented applications of these systems may also appear under Research.

The Engineering section will emphasize design, implementation, testing, performance, and validation.

## 3.4 Scientific Computing

Scientific Computing shall remain independent from Education.

This division documents computational research, numerical methods, software development, and scientific analysis systems.

Potential subjects include:

- Numerical Methods.
- Computational Physics.
- Computational Astrophysics.
- Scientific Python.
- Data Analysis.
- Time-Series Analysis.
- Signal Processing.
- Orbital Mechanics Software.
- Binary-Star Modeling.
- Exoplanet Modeling.
- Scientific Visualization.
- Software Validation.
- Reproducible Computing.
- Scientific Computing Infrastructure.

The emphasis is on computational methodology and software as scientific tools.

## 3.5 Education

Education documents university teaching, instructional development, and educational resources.

Potential subjects include:

- Astrophysics.
- Orbital Mechanics.
- Digital Signal Processing.
- Computational Physics.
- Astronomy.
- Physics.
- Scientific Programming.
- Computational Notebooks.
- Jupyter Books.
- Student Research.
- Laboratory Instruction.
- Teaching Philosophy.

Educational materials should remain distinguishable from original research publications.

## 3.6 Publications

Publications provides a consolidated record of scholarly output.

The section may include:

- Peer-reviewed journal articles.
- Conference proceedings.
- Technical reports.
- Scientific monographs.
- Computational textbooks.
- Jupyter Books.
- Publicly released scientific software documentation.
- Preprints.
- Research manuscripts in preparation.

Publication status must be clearly identified.

Unpublished manuscripts shall not be represented as peer-reviewed publications.

## 3.7 About

The About section documents academic and professional background.

Potential content includes:

- Education.
- Academic Appointments.
- Research Experience.
- Teaching Experience.
- Research Facilities.
- Professional Service.
- Awards and Recognition.
- Curriculum Vitae.
- Professional Contact Information.

---

# 4. Hierarchical Navigation Standard

## 4.1 Level 1 — Primary Navigation

The top horizontal navigation bar selects the major website division.

Example:

Home | Research | Engineering | Scientific Computing | Education | Publications | About

Clicking a primary navigation item opens that division's homepage.

The top navigation bar shall remain consistent throughout the website.

## 4.2 Level 2 — Division Navigation

The left sidebar displays the major subjects within the selected division.

For example, the Research homepage may display:

Research Topics

- Research Overview.
- Spectroscopic Eclipsing Binaries.
- Exoplanets.
- Rocketry.
- Drones.
- Rovers.
- Observatory Automation.

Selecting a topic opens that topic's homepage.

## 4.3 Level 3 — Topic Navigation

When a visitor enters a specialized subject, the left sidebar changes to display the internal structure of that subject.

For example:

Exoplanet Research

- Overview.
- Detection Methods.
- Transit Photometry.
- Radial Velocities.
- TESS and Kepler.
- Current Research Targets.
- Data Analysis.
- Modeling.
- Publications.
- Research Resources.

The sidebar should provide a clearly identified path back to the parent division.

## 4.4 Level 4 — Project Navigation

Individual research projects may require additional organizational levels.

Example:

Research
    Exoplanets
        Current Research Targets
            Target A
                Observations
                Data Reduction
                Modeling
                Results
                Publications

Additional levels should be introduced only when scientifically or organizationally justified.

## 4.5 Navigation Behavior

The navigation system shall follow these rules:

1. The top navigation remains persistent.
2. The left sidebar reflects the active website section.
3. Selecting a specialized topic opens its dedicated homepage.
4. Specialized topics may have their own sidebar configuration.
5. A visitor must be able to return to the parent topic.
6. The active page should be visually identifiable.
7. Navigation should not require unnecessary duplication of content.
8. Internal links should use paths compatible with Quarto rendering.
9. Navigation must remain functional on desktop and mobile devices.

## 4.6 Quarto Implementation

The website will use Quarto's native navigation capabilities wherever practical.

These include:

- Navbar configuration.
- Sidebar configuration.
- Nested navigation.
- Section-specific navigation.
- Relative links.
- Page-level metadata.
- Reusable includes.

Where Quarto's native behavior does not directly support the desired hierarchy, separate sidebar configurations may be assigned to different topic groups.

Custom JavaScript should not be introduced unless necessary.

The preferred implementation is the simplest maintainable solution that satisfies the navigation requirements.

---

# 5. Standard Three-Column Page Layout

The website will use a three-column layout as its primary desktop presentation.

## 5.1 Left Column — Navigation

The left column provides contextual navigation.

Its content depends on the active website division and topic.

Typical content includes:

- Division title.
- Topic title.
- Parent-section navigation.
- Subtopic links.
- Project links.
- Related subjects.

The left column should not become an unstructured collection of unrelated links.

## 5.2 Center Column — Scientific Content

The center column contains the principal page content.

Depending on the page, it may contain:

- Scientific narrative.
- Historical context.
- Research objectives.
- Physical theory.
- Mathematical development.
- Observational methods.
- Experimental methods.
- Instrumentation.
- Figures.
- Tables.
- Numerical results.
- Data analysis.
- Conclusions.
- References.

The central content area must remain the dominant visual component.

## 5.3 Right Column — Scientific Discovery Panel

The right column provides contextual scientific information.

Possible components include:

- Recent scientific news.
- Selected research papers.
- Mission updates.
- Observatory developments.
- Scientific database links.
- Research archive links.
- Current discoveries.
- Scientific announcements.
- Update timestamps.

The content must be relevant to the current topic.

## 5.4 Layout Consistency

The existing homepage provides the initial visual reference.

Current layout characteristics include:

- A wide central content column.
- Pale-blue sidebar panels.
- Consistent sidebar borders.
- Clear heading hierarchy.
- Compact news headlines.
- Publication dates.
- Readable link formatting.
- A restrained scientific color palette.

New pages should preserve this visual identity.

## 5.5 Responsive Design

The layout must remain usable on smaller screens.

On mobile devices:

- Navigation must remain accessible.
- Scientific content must remain readable.
- Figures must scale appropriately.
- Tables must not become unusable.
- Side panels may move below the main content.
- No essential information should depend on hover interactions.

Desktop appearance shall not be optimized at the expense of mobile usability.

---

# 6. Scientific Discovery Panel Standard

## 6.1 Purpose

The Scientific Discovery Panel is a defining feature of the website.

Its purpose is to connect the author's scientific work with current developments in the corresponding discipline.

The panel should function as a compact scientific discovery resource.

It is not intended to reproduce entire articles or papers.

Instead, it should provide carefully selected summaries and links to original sources.

## 6.2 Contextual Content

Each major topic may have a specialized discovery panel.

Examples:

| Topic | Discovery Panel |
|---|---|
| Home | General Space and Astronomy News |
| Research | General Scientific Research News |
| Eclipsing Binaries | Stellar Astrophysics and Binary-Star Research |
| Exoplanets | Exoplanet Discoveries and Research |
| Rocketry | Rocket Science and Launch Research |
| Drones | UAV and Autonomous Flight Research |
| Rovers | Planetary Robotics and Autonomous Navigation |
| Observatory Automation | Telescope Instrumentation and Robotic Observatories |
| Scientific Computing | Scientific Software and Computational Research |
| Education | Physics and Astronomy Education Developments |

The discovery panel should adapt to the subject being viewed.

## 6.3 Standard Panel Components

A complete discovery panel may contain four sections.

### A. Current News

Recent developments from reliable scientific news sources.

### B. Selected Scientific Papers

Recent papers relevant to the topic.

### C. Missions, Facilities, and Programs

Updates from relevant observatories, missions, laboratories, or research organizations.

### D. Scientific Resources

Links to databases, archives, journals, and other authoritative resources.

Not every page must contain all four components.

The panel should remain compact and readable.

## 6.4 News Article Metadata

Each news entry should include:

- Headline.
- Publication date.
- Source.
- Link to the original article.

Optional information may include:

- Short description.
- Scientific category.
- Related mission.
- Related research topic.

## 6.5 Scientific Paper Metadata

Each selected scientific paper should include:

- Paper title.
- Author information.
- Publication or posting date.
- Journal or preprint server.
- DOI or arXiv identifier when available.
- Link to the paper.
- Concise scientific summary.
- Explanation of its relevance.

The presentation should distinguish published papers from preprints.

## 6.6 Paper Selection Philosophy

Selected papers should be chosen for scientific interest rather than popularity alone.

Selection criteria include:

1. Relevance to the page's scientific topic.
2. Scientific significance.
3. Quality of observational or experimental evidence.
4. Novelty of the scientific question.
5. Methodological importance.
6. Relevance to current research programs.
7. Availability of supporting data.
8. Potential for independent analysis.
9. Connection to established scientific theory.
10. Opportunities for future investigation.

A paper need not represent a major discovery to be scientifically interesting.

Careful methodological work, improved measurements, unexpected residuals, and new datasets may be equally valuable.

## 6.7 Scientific Interpretation

Where summaries are provided, they should distinguish between:

- What the authors measured.
- What the authors modeled.
- What the authors concluded.
- What remains uncertain.
- Why the result is scientifically interesting.

Automated summaries must not invent conclusions, measurements, or implications.

The original paper remains the authoritative source.

## 6.8 News Versus Research Literature

Scientific news and research literature shall remain distinguishable.

News articles may summarize research for a general audience.

Scientific papers provide the underlying methods, evidence, and interpretation.

When possible, news announcements should link to the corresponding scientific publication.

## 6.9 Recommended Number of Entries

Initial display limits:

| Content Type | Recommended Entries |
|---|---:|
| Current News | 3 |
| Selected Papers | 2–3 |
| Mission Updates | 2–3 |
| Scientific Resources | 3–5 |

These limits are guidelines rather than fixed requirements.

The panel should not become so long that it overwhelms the scientific content.

## 6.10 Update Timestamps

Automatically updated panels shall display an update timestamp.

UTC is the preferred time standard.

Example:

News updated: October 9, 2026 at 00:00 UTC

The timestamp must correspond to an actual successful update.

A page render alone must not be represented as a successful data retrieval.

For multiple independent feeds, a panel-wide timestamp represents the latest successful update of at least one source unless all sources are verified as current.

Where practical, individual sources should maintain their own retrieval timestamps.

---

# 7. Scientific Information Sources

## 7.1 General Requirements

Automated scientific information should be obtained from authoritative and reliable sources.

Preference should be given to:

1. Scientific journals.
2. Scientific archives.
3. Research institutions.
4. Space agencies.
5. Observatory and mission websites.
6. University research announcements.
7. Established science news organizations.

Source reliability must be considered separately from the scientific significance of an individual article.

## 7.2 Astronomy and Astrophysics Sources

Potential sources include:

- NASA.
- ESA.
- NASA Exoplanet Archive.
- NASA ADS.
- arXiv.
- MAST.
- STScI.
- ESO.
- NOIRLab.
- AAS Journals.
- Astronomy & Astrophysics.
- Monthly Notices of the Royal Astronomical Society.
- Nature Astronomy.
- The Astronomical Journal.
- The Astrophysical Journal.
- The Astrophysical Journal Letters.

These are candidate sources, not a claim that each provides a suitable RSS feed or unrestricted API.

## 7.3 Exoplanet Sources

Potential sources include:

- NASA Exoplanet Archive.
- NASA Exoplanet Exploration.
- TESS mission resources.
- Kepler mission archives.
- JWST research announcements.
- MAST.
- ADS.
- arXiv astrophysics categories.
- Peer-reviewed exoplanet research journals.

## 7.4 Engineering Sources

Potential sources include:

- NASA technical publications.
- NASA NTRS.
- IEEE publications.
- AIAA publications.
- Aerospace research institutions.
- University engineering research.
- Robotics research publications.
- Instrumentation journals.

## 7.5 Scientific Computing Sources

Potential sources include:

- Scientific Computing research journals.
- Journal of Open Source Software.
- SoftwareX.
- Computer Physics Communications.
- Numerical methods publications.
- Scientific Python project announcements.
- Relevant arXiv categories.
- Scientific software repositories.

## 7.6 Source Verification

Before integrating a source into an automated system, verify:

- Availability of RSS, Atom, API, or another supported interface.
- Terms of use.
- Authentication requirements.
- Rate limits.
- Metadata quality.
- Publication date reliability.
- Link stability.
- Content relevance.
- Long-term maintainability.

Automated retrieval should not depend on fragile or unauthorized scraping.

---

# 8. Automated Content Retrieval Standard

## 8.1 Existing Infrastructure

The initial website uses:

- Python.
- feedparser.
- Generated HTML fragments.
- Quarto includes.
- GitHub Actions.
- GitHub Pages.

The current general news system retrieves information from:

- NASA.
- Phys.org Astronomy.
- Spaceflight Now, filtered for SpaceX-related topics.

The system currently selects three articles per source.

## 8.2 General Architecture

The preferred automated publishing sequence is:

Source
    ↓
Retrieval
    ↓
Validation
    ↓
Filtering
    ↓
Classification
    ↓
Chronological Sorting
    ↓
Selection
    ↓
HTML Generation
    ↓
Quarto Rendering
    ↓
Deployment

Each stage should have a clearly defined responsibility.

## 8.3 Feed Independence

Individual sources should be processed independently.

A failure in one source should not automatically prevent successful sources from updating.

If a source fails:

1. Record the failure.
2. Preserve its previously validated content.
3. Continue processing other sources.
4. Publish successful updates when appropriate.
5. Report the partial failure in the execution log.

## 8.4 Total Failure

If all required sources fail, the automation should preserve the existing published website.

The system must not replace previously valid content with empty or malformed output.

## 8.5 Persistent Cache

The website should eventually maintain a persistent cache of the most recently successful retrieval for each source.

This is distinct from retaining the original HTML snapshots committed to the source repository.

The persistent cache should support:

- Source identification.
- Retrieval timestamp.
- Validation status.
- Last successful content.
- Article metadata.
- Failure diagnostics.

A dedicated cache mechanism should be implemented before expanding to a large number of automated sources.

## 8.6 Scheduling

The initial news update schedule is every six hours.

Current GitHub Actions cron expression:

17 */6 * * *

Scheduled execution times are interpreted in UTC.

GitHub Actions scheduled workflows are best-effort and may not start at the exact scheduled minute.

Future topic-specific feeds may use different schedules.

For example:

- General news: Every six hours.
- Research paper discovery: Daily.
- Mission announcements: Daily.
- Scientific resource links: Weekly or manually.
- Publication bibliographies: On demand.

Update frequency should reflect the rate at which the underlying information changes.

## 8.7 Validation

Automated content must be validated before publication.

Validation should include:

- Successful source retrieval.
- Valid response status.
- Parseable content.
- Nonempty results.
- Valid article links.
- Reasonable publication dates.
- Correct topic classification.
- Proper HTML escaping.
- Successful Quarto rendering.

Where practical, automated tests should verify these requirements.

## 8.8 Logging

Automated retrieval logs should record:

- Execution date and time.
- Source.
- Retrieval status.
- Number of retrieved entries.
- Number of accepted entries.
- Number of published entries.
- Output filename.
- Error information.
- Overall execution status.

Logs should permit diagnosis of failed or incomplete updates.

---

# 9. Research Page Standard

## 9.1 Research Homepage

Every major research subject shall have a dedicated homepage.

The homepage should provide a scientifically meaningful introduction rather than merely a list of links.

Recommended sections:

1. Research Overview.
2. Scientific Motivation.
3. Historical Background.
4. Current Scientific Questions.
5. Research Objectives.
6. Observational or Experimental Methods.
7. Computational Methods.
8. Current Projects.
9. Publications.
10. Research Resources.

The precise headings may vary with the subject.

## 9.2 Individual Research Projects

Detailed project pages should follow the scientific method.

Recommended structure:

### Project Overview

Brief description of the investigation.

### Scientific Motivation

Why the scientific problem is important.

### Background

Relevant historical and theoretical context.

### Research Questions

Explicit scientific questions.

### Physical Model

Relevant physical assumptions and governing equations.

### Predictions

Testable consequences of the model.

### Observational or Experimental Strategy

How the investigation is conducted.

### Instrumentation

Facilities, instruments, sensors, and software.

### Data Acquisition

Description of acquired data.

### Calibration and Reduction

Procedures used to prepare the data.

### Analysis

Measurement and modeling methods.

### Validation and Uncertainty

Numerical checks, observational uncertainties, and model limitations.

### Results

Measured or calculated findings.

### Interpretation

Scientific implications.

### Conclusions

Summary of supported conclusions.

### Publications and References

Relevant scholarly literature.

### Future Work

Unresolved questions and planned investigations.

## 9.3 Historical and Current Research

Historical research and ongoing work should be distinguishable.

Recommended project status categories:

- Historical Research.
- Published Research.
- Active Research.
- Preliminary Investigation.
- Planned Research.
- Completed Project.

Status should be clearly indicated when it materially affects interpretation.

## 9.4 Cross-Disciplinary Projects

Projects may belong conceptually to more than one division.

For example:

Observatory Automation connects:

- Research.
- Engineering.
- Scientific Computing.

A canonical project page should be maintained in one location.

Other divisions should link to that page rather than duplicating the entire project.

This avoids inconsistent updates and redundant maintenance.

---

# 10. Engineering Project Standard

Engineering pages should document the complete experimental development process.

Recommended sections:

1. Engineering Objective.
2. Design Requirements.
3. Physical Principles.
4. System Architecture.
5. Mechanical Design.
6. Electronics.
7. Sensors.
8. Embedded Computing.
9. Software and Control.
10. Instrumentation.
11. Calibration.
12. Experimental Testing.
13. Telemetry and Measurements.
14. Performance Analysis.
15. Uncertainty and Validation.
16. Design Revisions.
17. Results.
18. Conclusions.
19. Documentation and References.

## 10.1 System Documentation

Where applicable, include:

- Block diagrams.
- Wiring diagrams.
- Mechanical drawings.
- CAD renderings.
- Sensor specifications.
- Control algorithms.
- Software architecture.
- Experimental photographs.
- Telemetry plots.
- Performance measurements.

## 10.2 Experimental Validation

Engineering claims should be supported by measured performance whenever possible.

Predicted and measured behavior should be compared explicitly.

Residuals, uncertainties, limitations, and unexpected behavior should be documented.

---

# 11. Scientific Computing Standard

## 11.1 Scope

Scientific Computing documents software and numerical methods used to investigate physical systems.

It remains separate from Education.

## 11.2 Recommended Software Project Structure

A software project page should include:

1. Project Overview.
2. Scientific Motivation.
3. Physical or Mathematical Foundation.
4. Software Architecture.
5. Numerical Algorithms.
6. Dependencies.
7. Installation.
8. Usage Examples.
9. Validation.
10. Numerical Accuracy.
11. Performance.
12. Known Limitations.
13. Documentation.
14. Source Repository.
15. Version History.
16. References.

## 11.3 Numerical Validation

Scientific software documentation should emphasize:

- Dimensional consistency.
- Limiting cases.
- Analytical benchmarks.
- Numerical convergence.
- Floating-point behavior.
- Error estimates.
- Reproducibility.
- Independent validation.

Where applicable, include comparisons between analytical and numerical solutions.

## 11.4 Source Code

Public software pages should link to source repositories when available.

Repository links should clearly distinguish:

- Active development.
- Stable releases.
- Archived software.
- Experimental implementations.

Dependencies and installation requirements should be documented.

---

# 12. Education Standard

## 12.1 Purpose

The Education division documents instructional philosophy, university courses, computational learning resources, and student research.

## 12.2 Course Homepages

Each course may have a dedicated homepage.

Recommended sections:

1. Course Overview.
2. Learning Objectives.
3. Prerequisites.
4. Course Topics.
5. Required Reading.
6. Computational Resources.
7. Jupyter Notebooks.
8. Jupyter Books.
9. Scientific Software.
10. Student Projects.
11. Additional References.

## 12.3 Computational Textbooks

Computational textbooks should be organized around scientific concepts and progressively developed computational examples.

Whenever possible, materials should connect:

- Physical theory.
- Mathematical derivation.
- Numerical implementation.
- Visualization.
- Scientific interpretation.
- Validation.

## 12.4 Jupyter Books

Jupyter Books may be published as standalone educational resources.

Examples include:

- Astrophysics.
- Orbital Mechanics.
- Digital Signal Processing.

Each book should provide:

- Title.
- Author.
- Description.
- Version.
- Publication or release date.
- Table of contents.
- Source repository.
- Citation information when appropriate.

Completed books may also be listed under Publications.

Books used for instruction should remain accessible from Education.

## 12.5 Student Accessibility

Educational materials should be understandable to their intended audience.

Advanced scientific content should not be unnecessarily simplified, but prerequisites, notation, assumptions, and computational requirements should be explained.

---

# 13. Publications and Scholarly Works Standard

## 13.1 Publication Categories

The Publications division should distinguish:

### Peer-Reviewed Publications

Journal articles and refereed proceedings.

### Conference Contributions

Conference papers, presentations, and proceedings.

### Technical Reports

Scientific and engineering reports.

### Books and Computational Texts

Jupyter Books, monographs, and substantial educational works.

### Preprints

Public manuscripts that have not necessarily completed peer review.

### Research in Preparation

Ongoing manuscripts and projects intended for future publication.

## 13.2 Bibliographic Metadata

Each publication should include, when available:

- Authors.
- Title.
- Year.
- Journal or publisher.
- Volume.
- Issue.
- Pages or article number.
- DOI.
- ADS bibliographic link.
- arXiv identifier.
- Abstract.
- Related research project.

## 13.3 Publication Status

Publication status must be explicit.

Examples:

- Published.
- Accepted.
- In Press.
- Submitted.
- Preprint.
- In Preparation.

A manuscript in preparation should not be represented as a completed publication.

## 13.4 Bibliography Organization

The primary bibliography may be organized chronologically.

Additional filtering may eventually be provided by:

- Research topic.
- Publication type.
- Year.
- Author.
- Journal.

## 13.5 Jupyter Book Publications

A completed Jupyter Book may be included as a scholarly work.

Its entry should provide:

- Book title.
- Version.
- Author.
- Release date.
- Description.
- Public book link.
- Source repository.
- Citation information.

Educational and publication listings should reference the same authoritative book release.

---

# 14. Scientific Writing Standard

## 14.1 General Style

Scientific writing should be:

- Accurate.
- Clear.
- Concise.
- Technically rigorous.
- Logically organized.
- Appropriately referenced.

Scientific terminology should be used consistently.

## 14.2 Mathematical Notation

Quarto mathematical content should use MathJax-compatible notation.

Inline mathematics:

$E = mc^2$

Display mathematics:

$$
E = mc^2
$$

SI units are preferred for scientific calculations.

Alternative units may be included when appropriate to the discipline.

## 14.3 Equations

Equations should be accompanied by explanations of:

- Physical meaning.
- Variable definitions.
- Units.
- Assumptions.
- Applicability.
- Limitations.

Important derivations should include dimensional checks and limiting cases where appropriate.

## 14.4 Figures

Scientific figures should include:

- Descriptive captions.
- Clearly labeled axes.
- Physical units.
- Legends where appropriate.
- Source attribution when required.

Figures should be centered and responsive.

Example:

<div style="text-align: center;">

<img src="figures/example.png"
     alt="Description of the scientific figure"
     style="width: 70%; max-width: 850px; height: auto;">

<p><strong>Figure 1.</strong> Description of the scientific result.</p>

</div>

Figure width may be adjusted according to content.

## 14.5 Tables

Tables should include:

- Descriptive headings.
- Units.
- Clearly identified quantities.
- Appropriate significant figures.
- Uncertainty information when relevant.

## 14.6 References

Research pages should provide references to original scientific literature.

Preferred identifiers include:

- DOI.
- ADS bibliographic code.
- arXiv identifier.
- Stable journal URL.

Where possible, references should link directly to authoritative records.

---

# 15. Media and Image Standard

## 15.1 Image Quality

Images should be appropriate for scientific and professional presentation.

Preferred formats:

- PNG for plots, diagrams, and graphics.
- JPEG for photographs.
- SVG for suitable vector graphics.
- WebP where beneficial and supported.

## 15.2 Image Optimization

Images should balance visual quality and loading performance.

Large photographic images should be optimized before publication.

Original high-resolution files may be retained separately.

## 15.3 Accessibility

Images must include meaningful alternative text.

Decorative images may use empty alternative text where appropriate.

Color alone should not convey essential scientific information.

## 15.4 Attribution

Third-party images must be used according to applicable licenses and permissions.

Required credits should be provided.

Scientific figures reproduced from publications must respect copyright and licensing requirements.

---

# 16. Directory and File Organization

## 16.1 General Principles

The directory structure should reflect the conceptual organization of the website.

Each major division should have its own directory.

Each specialized subject may have its own subdirectory.

Files should use descriptive, consistent names.

## 16.2 Proposed Repository Structure

JeffreySabbyWebsite/
|
|-- _quarto.yml
|-- index.qmd
|-- about.qmd
|-- styles.css
|-- CNAME
|
|-- research/
|   |-- index.qmd
|   |
|   |-- eclipsing_binaries/
|   |   |-- index.qmd
|   |   |-- observational_programs.qmd
|   |   |-- spectroscopy.qmd
|   |   |-- radial_velocities.qmd
|   |   |-- orbital_models.qmd
|   |   |-- current_targets.qmd
|   |   |-- publications.qmd
|   |   |
|   |   `-- targets/
|   |       `-- RT_CrB/
|   |           |-- index.qmd
|   |           |-- observations.qmd
|   |           |-- analysis.qmd
|   |           `-- results.qmd
|   |
|   |-- exoplanets/
|   |   |-- index.qmd
|   |   |-- detection_methods.qmd
|   |   |-- transit_photometry.qmd
|   |   |-- radial_velocities.qmd
|   |   |-- tess_kepler.qmd
|   |   |-- current_targets.qmd
|   |   `-- publications.qmd
|   |
|   |-- rocketry/
|   |   `-- index.qmd
|   |
|   |-- drones/
|   |   `-- index.qmd
|   |
|   |-- rovers/
|   |   `-- index.qmd
|   |
|   `-- observatory_automation/
|       `-- index.qmd
|
|-- engineering/
|   |-- index.qmd
|   |-- instrumentation/
|   |-- mechatronics/
|   |-- embedded_systems/
|   |-- avionics/
|   |-- autonomous_systems/
|   `-- control_systems/
|
|-- scientific_computing/
|   |-- index.qmd
|   |-- numerical_methods/
|   |-- astrophysics/
|   |-- orbital_mechanics/
|   |-- signal_processing/
|   |-- scientific_software/
|   `-- validation/
|
|-- education/
|   |-- index.qmd
|   |-- astrophysics/
|   |-- orbital_mechanics/
|   |-- digital_signal_processing/
|   |-- computational_physics/
|   `-- jupyter_books/
|
|-- publications/
|   |-- index.qmd
|   |-- journal_articles.qmd
|   |-- conference_papers.qmd
|   |-- technical_reports.qmd
|   |-- books.qmd
|   `-- preprints.qmd
|
|-- news/
|   |-- nasa_news.html
|   |-- spacex_news.html
|   |-- astronomy_news.html
|   `-- last_updated.html
|
|-- scripts/
|   `-- update_news.py
|
|-- images/
|
|-- docs/
|   `-- standards/
|       `-- WEBSITE_ARCHITECTURE_AND_DEVELOPMENT_STANDARD.md
|
|-- .github/
|   `-- workflows/
|       `-- update-news.yml
|
`-- _site/

This structure is a proposed long-term architecture.

Directories and pages should be created incrementally.

Empty placeholder directories are not required.

## 16.3 Naming Conventions

Use lowercase filenames for Quarto pages.

Examples:

index.qmd

transit_photometry.qmd

radial_velocities.qmd

observatory_automation.qmd

Use descriptive names that remain meaningful outside their immediate directory.

## 16.4 Research Target Names

Astronomical target names should remain recognizable.

Examples:

RT_CrB

WW_Aur

TESS_Targets

When practical, target pages should include standard astronomical identifiers.

---

# 17. Reusable Page Templates

## 17.1 Purpose

Common templates should be developed for frequently used page types.

Recommended templates include:

- Division Homepage.
- Research Topic Homepage.
- Individual Research Project.
- Engineering Project.
- Scientific Software Project.
- Course Homepage.
- Publication Entry.
- Jupyter Book Entry.

## 17.2 Research Topic Template

Recommended components:

Page Title

Research Overview

Scientific Motivation

Historical Background

Current Questions

Research Methods

Current Projects

Publications

References

The page should also include:

- Topic-specific left navigation.
- Topic-specific discovery panel.

## 17.3 Research Project Template

Recommended components:

Project Title

Project Status

Scientific Question

Background

Model and Predictions

Observational Strategy

Instrumentation

Data Acquisition

Reduction and Analysis

Results

Validation

Interpretation

Conclusions

Publications

Future Work

## 17.4 Engineering Template

Recommended components:

Project Title

Engineering Objective

Requirements

Design

Instrumentation

Software

Experimental Testing

Performance

Validation

Results

Conclusions

Documentation

## 17.5 Scientific Computing Template

Recommended components:

Software Title

Scientific Purpose

Algorithms

Dependencies

Installation

Usage

Validation

Performance

Limitations

Repository

References

---

# 18. Quarto Development Standard

## 18.1 Framework

Quarto will remain the primary website-generation framework.

## 18.2 Source Files

Scientific and narrative pages should use `.qmd` files.

Site-wide configuration should remain in `_quarto.yml`.

Shared styling should remain in `styles.css`.

Automated HTML fragments may be stored in dedicated directories.

## 18.3 Page Metadata

Pages should include appropriate Quarto front matter.

Example:

---
title: "Exoplanet Research"
toc: false
page-layout: article
---

Additional metadata may be introduced when needed.

## 18.4 Navigation Configuration

Navigation should be defined centrally whenever possible.

Separate sidebar configurations may be used for specialized topic groups.

Navigation changes should be tested before deployment.

## 18.5 Reusable Components

Repeated content should be managed through reusable components when practical.

Examples:

- News feeds.
- Scientific paper selections.
- Update timestamps.
- Research resource lists.
- Standard page elements.

## 18.6 Custom Styling

New CSS should be added carefully.

Existing homepage styling should not be modified unnecessarily.

CSS classes should use descriptive names.

Changes should be tested against existing pages.

## 18.7 Local Rendering

Before publication, run:

quarto render

The build must complete successfully.

## 18.8 Local Preview

Use:

quarto preview

Review:

- Navigation.
- Sidebar behavior.
- Page alignment.
- Typography.
- Figures.
- News panels.
- Internal links.
- External links.
- Mobile layout where practical.

---

# 19. Version Control and Deployment

## 19.1 Repository

GitHub is the primary source repository.

Repository:

https://github.com/jsabby/JeffreySabbyWebsite

## 19.2 Primary Branch

The main branch contains authoritative website source files.

## 19.3 Deployment Branch

The gh-pages branch contains the published website generated by Quarto.

## 19.4 Deployment Workflow

The existing automated workflow performs:

1. Repository checkout.
2. Python environment setup.
3. Dependency installation.
4. News retrieval.
5. Quarto installation.
6. Website rendering.
7. Custom-domain preservation.
8. GitHub Pages deployment.

## 19.5 Custom Domain

The public website uses:

https://jeffreysabby.com

The CNAME file must be preserved during deployment.

HTTPS must remain enabled.

## 19.6 Commit Practices

Commits should represent meaningful changes.

Examples:

Add Research homepage

Create Exoplanet research section

Add exoplanet discovery panel

Publish orbital mechanics Jupyter Book

Improve scientific paper retrieval

Avoid combining unrelated changes into a single commit.

## 19.7 Deployment Validation

After deployment:

1. Confirm GitHub Actions completed successfully.
2. Open the public website.
3. Verify the modified pages.
4. Confirm navigation works.
5. Confirm news panels render correctly.
6. Verify custom-domain operation.
7. Check for missing images or broken links.

---

# 20. Security and Privacy

## 20.1 Public Repository

The website source repository is public.

Only material intended for public distribution should be committed.

## 20.2 Sensitive Information

Do not publish:

- Passwords.
- API credentials.
- Private access tokens.
- Confidential student information.
- Unreleased proprietary data.
- Restricted research data.
- Private correspondence.
- Sensitive institutional information.

## 20.3 API Credentials

If future automated services require credentials, they should be managed through GitHub Actions secrets or another appropriate secret-management mechanism.

Credentials must not be embedded in public source files.

## 20.4 External Links

External links should use appropriate security attributes.

For links opening in a new tab, use:

rel="noopener noreferrer"

## 20.5 Dependency Maintenance

Python packages and GitHub Actions dependencies should be reviewed periodically.

Security updates should be applied after compatibility testing.

---

# 21. Accessibility and Usability

## 21.1 Accessibility

The website should follow established web accessibility practices.

Requirements include:

- Meaningful headings.
- Descriptive links.
- Image alternative text.
- Adequate color contrast.
- Keyboard-accessible navigation.
- Responsive layout.
- Readable typography.
- Semantic HTML.

## 21.2 Scientific Accessibility

Scientific content should clearly define specialized notation and terminology.

Figures and equations should be accompanied by explanatory text.

Where appropriate, provide introductory material before advanced technical discussions.

## 21.3 Navigation Usability

Visitors should not need to understand the complete website hierarchy before locating information.

Each page should make its immediate context apparent.

---

# 22. Quality Assurance Standard

## 22.1 Pre-Publication Checks

Before publishing new content, verify:

1. Scientific accuracy.
2. Correct mathematical notation.
3. Consistent terminology.
4. Appropriate references.
5. Correct figure captions.
6. Functional links.
7. Correct navigation.
8. Responsive layout.
9. Successful Quarto rendering.
10. No unintended changes to existing pages.

## 22.2 Automated Content Checks

For automated news and paper feeds, verify:

- Successful retrieval.
- Valid metadata.
- Correct classification.
- Proper chronological ordering.
- Appropriate filtering.
- Correct output formatting.
- Timestamp accuracy.
- Failure recovery.

## 22.3 Scientific Review

Substantive scientific content should be reviewed for:

- Physical plausibility.
- Mathematical consistency.
- Dimensional correctness.
- Numerical validity.
- Observational support.
- Uncertainty treatment.
- Citation accuracy.

## 22.4 Regression Testing

Changes to shared CSS, navigation, or templates must be tested against representative existing pages.

The homepage should be included in regression checks.

---

# 23. Development Workflow

## 23.1 Standard Development Sequence

All substantial website additions should follow this sequence:

1. Define the scientific or organizational objective.
2. Identify the correct website division.
3. Establish the navigation hierarchy.
4. Define the page structure.
5. Identify required scientific content.
6. Identify relevant figures and data.
7. Identify supporting references.
8. Identify appropriate discovery-panel content.
9. Create the Quarto source files.
10. Implement navigation.
11. Implement discovery-panel components.
12. Render locally.
13. Inspect the layout.
14. Validate scientific content.
15. Commit changes.
16. Push to GitHub.
17. Deploy.
18. Verify the public website.
19. Document any required corrections.

## 23.2 Incremental Development

The website should be expanded one functional section at a time.

A preferred sequence is:

- Build the section homepage.
- Establish its navigation.
- Verify its layout.
- Add one specialized topic.
- Verify nested navigation.
- Add the topic-specific discovery panel.
- Validate the complete section.
- Extend the pattern to additional topics.

This minimizes the risk of large structural errors.

## 23.3 Preservation of Existing Functionality

New development must not unnecessarily disrupt existing features.

Particular care should be taken to preserve:

- Homepage layout.
- Existing news feeds.
- GitHub Actions automation.
- Custom-domain configuration.
- Sidebar styling.
- Published URLs.

---

# 24. Initial Implementation Plan

## Phase 1 — Foundation

Status: Substantially Complete.

Completed components include:

- Quarto website.
- Custom domain.
- HTTPS.
- GitHub repository.
- GitHub Pages deployment.
- Three-column homepage.
- Scientific profile.
- Research interests.
- Mechatronics overview.
- General astronomy news feeds.
- Automated six-hour news updates.
- UTC update timestamp.
- Partial-feed failure handling.

Remaining improvements include persistent news caching and additional automated validation.

## Phase 2 — Research Architecture

Objectives:

1. Add Research to the top navigation.
2. Create the Research homepage.
3. Create the Research sidebar.
4. Establish the standard three-column research layout.
5. Add initial research-topic navigation.
6. Verify all navigation behavior.

Initial topics:

- Spectroscopic Eclipsing Binaries.
- Exoplanets.
- Rocketry.
- Drones.
- Rovers.
- Observatory Automation.

## Phase 3 — Exoplanet Prototype

Objectives:

1. Create the Exoplanet homepage.
2. Establish its specialized left sidebar.
3. Add introductory scientific content.
4. Add a topic-specific discovery panel.
5. Retrieve exoplanet-related news.
6. Identify suitable scientific-paper sources.
7. Display selected recent papers.
8. Add authoritative research-resource links.
9. Validate automated updates.
10. Verify desktop and mobile presentation.

The Exoplanet section will serve as the initial prototype for nested research subjects.

## Phase 4 — Spectroscopic Eclipsing Binaries

Objectives:

1. Create the Eclipsing Binary homepage.
2. Document historical observational programs.
3. Introduce spectroscopy and photometry methods.
4. Document radial-velocity measurements.
5. Introduce orbital and light-curve modeling.
6. Add current research targets.
7. Establish links to publications.
8. Add relevant scientific news and papers.

RT CrB may serve as an initial detailed research-project example.

## Phase 5 — Engineering and Instrumentation

Objectives:

1. Create the Engineering homepage.
2. Document major instrumentation projects.
3. Organize mechatronics work.
4. Add autonomous systems.
5. Add embedded systems.
6. Add telemetry and sensor systems.
7. Add experimental results.
8. Connect engineering projects to relevant research programs.

## Phase 6 — Scientific Computing

Objectives:

1. Create the Scientific Computing homepage.
2. Organize software projects.
3. Document numerical methods.
4. Add scientific analysis tools.
5. Link to public repositories.
6. Document validation procedures.
7. Add software publications and technical reports.

## Phase 7 — Education

Objectives:

1. Create the Education homepage.
2. Organize university courses.
3. Add computational notebook resources.
4. Integrate Jupyter Books.
5. Document educational software.
6. Add instructional resources.
7. Establish links to relevant scientific computing projects.

## Phase 8 — Publications

Objectives:

1. Establish the historical bibliography.
2. Add DOI and ADS links.
3. Organize publications by type.
4. Add technical reports.
5. Add completed Jupyter Books.
6. Link publications to related research pages.
7. Add future publications as they become available.

---

# 25. Long-Term Development Considerations

## 25.1 Scientific Paper Discovery

A future automated paper-discovery system may retrieve relevant publications from sources such as ADS, arXiv, and journal feeds.

The system should support:

- Topic-specific queries.
- Publication-date filtering.
- Author filtering.
- Duplicate detection.
- DOI and arXiv identification.
- Abstract retrieval where permitted.
- Scientific relevance ranking.
- Concise research summaries.
- Links to original publications.

## 25.2 Human Scientific Review

Automated paper discovery and scientific interpretation should be treated as separate processes.

A paper may be discovered automatically without being scientifically endorsed.

For particularly important papers, the author may provide additional interpretation or commentary.

Such commentary should be clearly distinguished from the original authors' conclusions.

## 25.3 Research Archives

The website may eventually link to publicly released observational datasets.

Potential resources include:

- Light curves.
- Spectra.
- Radial-velocity measurements.
- Orbital solutions.
- Calibration information.
- Data-reduction documentation.
- Scientific notebooks.
- Software repositories.

Large datasets should generally be hosted in appropriate scientific archives or repositories rather than directly within the website repository.

## 25.4 Interactive Scientific Content

Future development may include:

- Interactive light curves.
- Orbital visualizations.
- Exoplanet transit models.
- Spectral-line demonstrations.
- Observatory status displays.
- Interactive scientific plots.
- Embedded computational demonstrations.

Interactive components must remain scientifically accurate and should not compromise website performance or accessibility.

## 25.5 Search and Discovery

As the website grows, a search function may become necessary.

Search should help visitors locate:

- Research topics.
- Individual projects.
- Publications.
- Software.
- Educational materials.
- Scientific resources.

Search functionality should be introduced when the volume of content justifies it.

---

# 26. Documentation and Change Management

## 26.1 Authoritative Standard

This document is the authoritative architectural and development standard for the website.

Substantial architectural changes should be evaluated against its principles.

## 26.2 Versioning

The document will use semantic-style version numbering.

Examples:

1.0.0 — Initial architectural standard.

1.1.0 — Addition of a new architectural capability.

2.0.0 — Major architectural revision.

Editorial corrections may use patch versions.

## 26.3 Change Documentation

Significant changes should record:

- Date.
- Version.
- Description.
- Reason for the change.
- Affected website components.

## 26.4 Change Log

| Version | Date | Description |
|---|---|---|
| 1.0.0 | 2026-10-08 | Initial website architecture and development standard |

---

# 27. Final Architectural Principles

The Jeffrey Sabby Scientific and Academic Website shall be developed according to the following enduring principles.

**Scientific Accuracy**

Scientific claims must remain grounded in evidence, physical reasoning, and appropriate references.

**Hierarchical Organization**

Information should progress logically from broad disciplines to specialized research subjects.

**Contextual Navigation**

Navigation should reflect the scientific subject currently being viewed.

**Consistent Presentation**

The website should maintain a recognizable visual identity across all sections.

**Scientific Discovery**

Relevant news, scientific papers, and research resources should connect established work with current developments.

**Reproducibility**

Scientific results should be accompanied by sufficient methodological information for meaningful evaluation.

**Cross-Disciplinary Integration**

Related work in research, engineering, scientific computing, and education should remain interconnected.

**Incremental Development**

New sections should be introduced, tested, and validated without compromising existing functionality.

**Long-Term Maintainability**

The website should remain manageable as its scientific content and automated services expand.

**Continuous Scientific Development**

The website should evolve alongside ongoing research, new discoveries, computational developments, educational work, and future publications.

---

# 28. Conclusion

The Jeffrey Sabby Scientific and Academic Website is intended to become a comprehensive scientific resource representing the integration of physical theory, observational astronomy, experimental engineering, scientific computing, and education.

Its architecture will support both historical scientific contributions and continuing research activities.

The hierarchical navigation system will allow visitors to move naturally between broad scientific disciplines and specialized investigations.

The three-column design will provide consistent access to navigation, scientific content, and current research developments.

The Scientific Discovery Panel will connect each major subject with relevant scientific news, selected research papers, mission information, and authoritative resources.

Automated retrieval, Quarto rendering, GitHub version control, and GitHub Actions deployment will provide a maintainable technical foundation.

The website will be developed progressively, with scientific accuracy, reproducibility, consistency, and long-term extensibility guiding all major decisions.

The immediate next development objective is to establish the Research division and implement the Exoplanet section as the first complete example of the hierarchical scientific website architecture.

---

**End of Document**

**WEBSITE_ARCHITECTURE_AND_DEVELOPMENT_STANDARD.md**  
**Version 1.0.0**  
**October 8, 2026**