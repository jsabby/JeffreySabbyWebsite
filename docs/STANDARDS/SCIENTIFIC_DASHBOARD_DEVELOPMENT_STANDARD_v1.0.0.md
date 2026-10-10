# Scientific Dashboard Development Standard

**Project:** JeffreySabbyWebsite  
**Document:** SCIENTIFIC_DASHBOARD_DEVELOPMENT_STANDARD  
**Version:** 1.0.0  
**Date:** 2026-10-09  
**Status:** Initial Standard  
**Author:** Dr. Jeffrey A. Sabby  
**Development Collaboration:** Kepler (OpenAI GPT-6)  

---

## 1. Purpose

This document establishes the scientific, computational, architectural, and presentation standards for interactive scientific dashboards developed for the JeffreySabbyWebsite project.

Scientific dashboards are intended to provide interactive representations of observational measurements, theoretical models, numerical calculations, and physical systems.

The primary objectives are:

1. Preserve the scientific integrity of original research data.
2. Present observational measurements and theoretical models accurately.
3. Provide interactive tools for exploring physical relationships.
4. Ensure reproducibility and traceability.
5. Maintain compatibility across desktop, tablet, and mobile devices.
6. Establish consistent software architecture and presentation.
7. Support future expansion without compromising validated implementations.

The RT Coronae Borealis interactive orbital dashboard, completed in October 2026, serves as the initial reference implementation.

---

## 2. Scientific Principles

Every scientific dashboard must follow the principles of the scientific method.

The preferred scientific workflow is:

Question → Background → Model/Hypothesis → Predictions → Observational Strategy → Target Selection → Instrumentation → Observation → Raw Data → Calibration/Reduction → Measurement → Analysis/Modeling → Uncertainty/Validation → Results → Interpretation → Conclusion → Publication → New Questions.

Not every dashboard requires every stage, but applicable stages must be identifiable.

### 2.1 Scientific Integrity

Original observational measurements must not be altered for presentation purposes.

The following operations require explicit documentation:

- Data filtering.
- Outlier rejection.
- Smoothing.
- Interpolation.
- Rebinning.
- Normalization.
- Phase folding.
- Coordinate transformations.
- Model fitting.
- Numerical approximations.

Whenever possible, retain the original observations separately from processed data and calculated models.

### 2.2 Distinguishing Observations and Models

Observational measurements and theoretical predictions must be visually distinguishable.

Recommended conventions:

| Scientific Quantity | Presentation |
|---|---|
| Observational measurements | Individual markers |
| Calculated model | Continuous curve |
| Uncertainties | Error bars or uncertainty bands |
| Reference values | Dashed or dotted lines |
| Current interactive state | Distinct indicator |
| Rejected measurements | Separate symbols, when scientifically appropriate |

Graph legends must identify the origin and meaning of each displayed series.

### 2.3 Units and Physical Quantities

SI units are preferred for internal calculations.

Astronomical units may be used when they improve scientific interpretation.

Examples include:

- Solar masses.
- Solar radii.
- Astronomical units.
- Parsecs.
- Days.
- Kilometers per second.

Every dimensional axis must identify its physical quantity and units.

Dimensionless quantities should be identified explicitly.

### 2.4 Numerical Validation

Numerical calculations should be validated using appropriate methods, including:

- Dimensional analysis.
- Analytical benchmarks.
- Limiting cases.
- Conservation laws.
- Independent calculations.
- Numerical convergence tests.
- Comparison with published results.

Where relevant, numerical precision and uncertainty propagation must be documented.

---

## 3. Dashboard Architecture

### 3.1 Separation of Responsibilities

A scientific dashboard should separate:

1. Scientific data.
2. Scientific calculations.
3. Visualization.
4. User interaction.
5. Presentation styling.
6. Documentation.

For the Quarto-based website, the preferred implementation uses:

- Quarto Markdown (`.qmd`) for scientific narrative and page structure.
- JavaScript (`.js`) for interactive behavior and visualization.
- CSS (`.css`) for presentation and responsive layout.
- CSV or other documented formats for scientific datasets.

Scientific calculations must not depend on visual styling.

### 3.2 Recommended Directory Structure

A dashboard should be stored within the appropriate research section.

Example:

```text
research/
    eclipsing_binaries/
        index.qmd
        dashboard/
            rtcrb_dashboard.js
            rtcrb_dashboard.css
        data/
            rtcrb_photometry.csv
            rtcrb_radial_velocities.csv
            rtcrb_spectroscopic_model.csv
            RTCRB_DATA_README.md
```

The same general architecture can be adapted to other research areas.

Avoid unnecessary duplication of datasets.

### 3.3 Naming Conventions

Use descriptive, lowercase filenames with underscores.

Examples:

```text
rtcrb_dashboard.js
rtcrb_dashboard.css
rtcrb_photometry.csv
rtcrb_radial_velocities.csv
```

JavaScript identifiers should use consistent naming conventions.

Prefer `camelCase` for variables and functions.

Use descriptive identifiers for scientific quantities.

Avoid ambiguous names when physical interpretation is important.

---

## 4. Scientific Data Management

### 4.1 Original Data

Original observational data should be preserved in its native form whenever practical.

Converted datasets must retain sufficient provenance to reconstruct their relationship to the original files.

### 4.2 Data Provenance

Each dataset should document:

- Scientific target.
- Original investigator or institution.
- Observing facility.
- Instrumentation.
- Observation dates, when available.
- Original filename.
- Original data format.
- Conversion procedure.
- Column definitions.
- Physical units.
- References.
- Known limitations.

A dedicated data README is recommended.

### 4.3 Data Processing

Any transformation applied to observational measurements must be documented.

Processed data should not silently replace original measurements.

If multiple versions of a dataset exist, their relationships must be explicit.

### 4.4 Missing and Invalid Values

Missing or invalid numerical values must be handled explicitly.

JavaScript implementations should verify numerical values before plotting.

Invalid values must not be silently converted into physically meaningful measurements.

---

## 5. Visualization Standards

### 5.1 Plotting Library

Plotly.js is the preferred interactive plotting library for the initial generation of scientific dashboards.

Other libraries may be used when they provide a clear scientific or technical advantage.

### 5.2 Plot Requirements

Every scientific plot should include:

1. A descriptive title.
2. Labeled axes.
3. Physical units where applicable.
4. A legend when multiple datasets are displayed.
5. Distinguishable observational and model representations.
6. Appropriate axis limits.
7. Readable typography.
8. Responsive behavior.

### 5.3 Scientific Plot Styling

Use consistent colors for the same physical components throughout a dashboard.

For a binary-star system, for example:

- Primary component: blue.
- Secondary component: red.
- Observational measurements: distinguishable markers.
- Current orbital phase: green dashed indicator.

These colors are conventions, not physical statements about stellar temperatures.

### 5.4 Plotly Configuration

The RT CrB reference implementation uses:

```javascript
const PLOTLY_CONFIG = {

    responsive: true,

    displaylogo: false,

    displayModeBar: false

};
```

This configuration suppresses Plotly toolbars on all supported devices.

Plot interaction and responsive resizing remain enabled.

All plots within a dashboard should use a shared Plotly configuration unless a documented exception is required.

### 5.5 Legends

Legends must not obscure:

- Observational measurements.
- Calculated curves.
- Axis labels.
- Plot titles.
- Other scientific annotations.

Legend positioning must be tested at narrow screen widths.

Mobile devices may require additional bottom margins and different legend positions.

---

## 6. Interactive Controls

### 6.1 Shared State

When several visualizations represent the same physical system, they should share a common application state.

For example:

```javascript
const state = {

    phase: 0.0,

    playing: false,

    animationTimer: null

};
```

A change in the shared state must be reflected consistently across all dependent visualizations.

### 6.2 Synchronization

Interactive controls must update every relevant visualization.

For an eclipsing-binary dashboard, the orbital phase may control:

- Photometric phase indicator.
- Radial-velocity phase indicator.
- Projected stellar positions.
- Face-on orbital positions.

All four representations must correspond to the same orbital phase.

### 6.3 Animation

Animations must not create overlapping update cycles that exceed the browser's rendering capability.

The RT CrB implementation waits for all Plotly updates to finish before scheduling the next animation frame.

The preferred pattern is:

```javascript
await Promise.all(updates);
```

The next animation frame is scheduled only after the current update has completed.

### 6.4 Animation Controls

Where animation is provided, include appropriate controls:

- Play.
- Pause.
- Reset.
- Manual parameter adjustment.

Controls should have predictable behavior.

Reset must restore a documented initial state.

### 6.5 Touchscreen Compatibility

Interactive controls must support:

- Mouse input.
- Touch input.
- Apple Pencil or comparable stylus input.
- Keyboard activation where applicable.

On touch devices, pointer events may provide more reliable interaction than click events alone.

When both pointer and click handlers are used, duplicate activation must be prevented.

### 6.6 Accessibility

Interactive controls should use semantic HTML elements.

Buttons should have meaningful labels.

Where applicable, maintain accessibility attributes such as:

```javascript
button.setAttribute("aria-pressed", "true");
```

Accessibility should be evaluated alongside visual presentation.

---

## 7. Responsive Design

### 7.1 Supported Device Classes

Dashboards should be evaluated on:

1. Desktop computers.
2. Tablet computers.
3. Smartphones.

Testing should include portrait and landscape orientations where relevant.

### 7.2 Desktop Layout

Desktop presentations should preserve the established website architecture.

Scientific graphs should occupy sufficient horizontal space to display their contents clearly.

### 7.3 Tablet Layout

Tablet layouts should preserve side-by-side scientific visualizations when sufficient horizontal space is available.

For the RT CrB dashboard, the projected orbital geometry and face-on orbital-plane view remain side by side on the iPad Pro in landscape orientation.

### 7.4 Smartphone Layout

On narrow screens:

- Multi-column visualizations may stack vertically.
- Graphs may require additional height.
- Legends may require multiple rows.
- Interactive controls must remain usable.
- Titles and subtitles must wrap without clipping.
- Axis labels must remain visible.

Responsive behavior should be implemented through CSS media queries and, when necessary, visualization-specific layout adjustments.

### 7.5 Mobile Breakpoint

The initial RT CrB dashboard uses a breakpoint of:

```css
@media (max-width: 768px) {

    /* Mobile-specific presentation */

}
```

This breakpoint is a reference value rather than a universal requirement.

Actual device behavior must determine whether additional breakpoints are necessary.

---

## 8. Scientific Animation and Geometry

### 8.1 Physical Consistency

Animated visualizations must preserve the physical meaning of their coordinates.

The same physical parameters must be used consistently across related diagrams.

### 8.2 Coordinate Systems

Every coordinate system must be defined.

Examples include:

- Orbital-plane coordinates.
- Observer-projected coordinates.
- Line-of-sight coordinates.
- Barycentric coordinates.

Coordinate transformations must be documented.

### 8.3 Scale

Where visualizations represent physical dimensions, their scales must be physically meaningful.

For orbital geometry, the relative stellar radii and orbital separation should be represented consistently.

### 8.4 Aspect Ratio

Geometrical plots must preserve equal coordinate scaling when required.

For Plotly, this may be implemented using:

```javascript
yaxis: {

    scaleanchor: "x",

    scaleratio: 1

}
```

Without equal scaling, circular orbits may appear elliptical because of display geometry rather than physical eccentricity.

### 8.5 Eclipse Geometry

For eclipsing-binary visualizations, the projected foreground and background stellar components must be determined from their line-of-sight coordinates.

The drawing order must reproduce the correct eclipse configuration.

---

## 9. Performance and Reliability

### 9.1 Rendering Performance

Animation performance should be evaluated on both desktop and mobile hardware.

Avoid initiating new rendering operations before previous operations have completed.

### 9.2 Data Loading

Data files should be loaded asynchronously.

Failures must produce meaningful error messages.

### 9.3 Error Handling

Dashboard initialization and animation should use appropriate error handling.

Errors should be reported to the browser console.

Where practical, the dashboard should display a readable status message.

### 9.4 Scientific Reliability

Rendering failures must not silently produce misleading scientific results.

If required data cannot be loaded, the dashboard must report the failure rather than presenting an apparently valid but incomplete scientific visualization.

---

## 10. Testing and Validation

### 10.1 Local Testing

Before publication, launch the Quarto preview:

```bash
quarto preview
```

Verify that all scientific plots render correctly.

### 10.2 Functional Testing

For animated dashboards, test:

1. Initial rendering.
2. Manual parameter adjustment.
3. Play.
4. Pause.
5. Reset.
6. Synchronization between visualizations.
7. Data-loading status.
8. Browser resizing.
9. Touchscreen interactions.

### 10.3 Scientific Validation

Confirm that:

- Observational data match the documented source.
- Calculated models match their documented source.
- Units are correct.
- Coordinate transformations are correct.
- Orbital phases are consistent.
- Physical scales are preserved.
- Numerical results agree with validated benchmarks.

### 10.4 Cross-Platform Testing

The initial RT CrB dashboard was functionally tested on:

| Platform | Result |
|---|---|
| Mac mini / macOS | Passed |
| iPad Pro / iPadOS | Passed |
| iPhone / iOS | Passed |

These results establish the initial reference implementation.

They do not imply compatibility with every browser, operating system, or device.

### 10.5 Regression Testing

Previously validated behavior must be rechecked after changes to:

- JavaScript.
- CSS.
- Data files.
- Quarto page structure.
- Plotly configuration.
- Animation logic.

Changes intended for one device must not unintentionally degrade other devices.

---

## 11. Version Control and Publication

### 11.1 Repository

The authoritative source repository is:

```text
https://github.com/jsabby/JeffreySabbyWebsite
```

The primary development branch is:

```text
main
```

The published website is deployed through:

```text
gh-pages
```

### 11.2 Commit Requirements

Dashboard changes should be committed with descriptive messages.

Examples:

```text
Add RT CrB interactive orbital dashboard

Synchronize RT CrB orbital animations

Improve RT CrB dashboard layout for iPhone

Correct RT CrB spectroscopic legend spacing
```

### 11.3 Publication

After local validation, publish using:

```bash
quarto publish gh-pages
```

The published website is:

```text
https://jeffreysabby.com
```

### 11.4 Post-Publication Validation

After deployment:

1. Refresh the published page.
2. Confirm that updated files are loaded.
3. Verify that all scientific plots render.
4. Test interactive controls.
5. Confirm mobile compatibility.
6. Check for visible layout regressions.

GitHub Pages caching may delay the appearance of newly published files.

---

## 12. Versioning and Change Management

### 12.1 Semantic Versioning

Dashboard implementations should use semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Recommended interpretation:

- **MAJOR:** Incompatible architectural or interface changes.
- **MINOR:** New backward-compatible scientific or interactive capabilities.
- **PATCH:** Bug fixes, corrections, and presentation improvements.

### 12.2 Version Headers

JavaScript files should include a descriptive header.

Example:

```javascript
/*
 * RT CrB — Interactive Scientific Dashboard
 *
 * Project: JeffreySabbyWebsite
 * Target: RT Coronae Borealis
 *
 * Scientific sources:
 *     EBOP photometric solution
 *     SPECOB spectroscopic solution
 *     Sabby & Lacy (2003)
 *
 * Version: 1.0.1
 * Date: 2026-10-09
 *
 * Scientific policy:
 *     Original observational and model values are preserved.
 */
```

### 12.3 Stable Baselines

A dashboard that passes scientific and functional validation should be treated as a stable baseline.

New features should be developed incrementally.

Previously validated behavior should be preserved unless a documented scientific or technical reason requires modification.

---

## 13. Documentation Requirements

Every substantial dashboard should document:

1. Scientific purpose.
2. Physical system or phenomenon.
3. Observational data sources.
4. Theoretical or numerical models.
5. Physical assumptions.
6. Coordinate systems.
7. Units.
8. Interactive controls.
9. Known limitations.
10. Validation procedures.
11. References.
12. Software version.

Documentation may be distributed among the Quarto page, source-code comments, and accompanying Markdown files.

---

## 14. Reference Implementation: RT Coronae Borealis

### 14.1 Scientific Basis

The initial reference implementation presents the spectroscopic eclipsing binary RT Coronae Borealis.

Scientific reference:

Sabby, J. A., & Lacy, C. H. S. (2003), *Absolute Properties of the Eclipsing Binary Star RT Coronae Borealis*, The Astronomical Journal, 125, 1448–1457.

### 14.2 Scientific Components

The dashboard includes four synchronized visualizations:

1. EBOP photometric observations and calculated solution.
2. SPECOB radial-velocity observations and calculated solutions.
3. Observer-projected orbital geometry.
4. Face-on orbital-plane geometry.

### 14.3 Interactive Controls

The dashboard provides:

- Orbital-phase slider.
- Numerical orbital-phase display.
- Play/Pause.
- Reset.

### 14.4 Scientific Provenance

The original EBOP and SPECOB research datasets are preserved.

The dashboard does not perform new fitting of the original observational data.

The orbital geometry visualization is calculated from adopted published physical parameters.

### 14.5 Validated Features

The reference implementation demonstrates:

- Shared scientific state.
- Synchronized interactive plots.
- Asynchronous rendering.
- Touch-compatible controls.
- Responsive design.
- Cross-platform operation.
- Quarto integration.
- GitHub Pages publication.

---

## 15. Future Scientific Applications

The dashboard architecture is intended to support additional research applications.

### 15.1 Spectroscopic Eclipsing Binaries

Potential applications include:

- Light-curve analysis.
- Radial-velocity analysis.
- Orbital geometry.
- Eclipse timing.
- O–C diagrams.
- Stellar rotation.
- Starspot modulation.
- Absolute stellar dimensions.
- Comparison with stellar evolutionary models.

### 15.2 Exoplanets

Potential applications include:

- Transit photometry.
- Radial-velocity measurements.
- Orbital geometry.
- Transit timing variations.
- Parameter estimation.
- Exoplanet detection.

### 15.3 Observational Astronomy

Potential applications include:

- Spectroscopic observations.
- Photometric time series.
- Detector characterization.
- Calibration and reduction.
- Observatory monitoring.
- Instrumentation performance.

### 15.4 Computational Physics and Astrophysics

Potential applications include:

- Orbital mechanics.
- Numerical integration.
- Dynamical systems.
- Stellar structure.
- Radiative processes.
- Signal processing.
- Scientific uncertainty analysis.

---

## 16. Development Workflow

The recommended dashboard development workflow is:

### Phase 1 — Scientific Definition

Define the scientific objective, physical system, and required measurements.

### Phase 2 — Data Preparation

Identify, preserve, document, and validate the scientific datasets.

### Phase 3 — Physical Modeling

Establish the theoretical framework, numerical methods, and physical assumptions.

### Phase 4 — Software Architecture

Define the data structures, visualization components, and shared application state.

### Phase 5 — Initial Implementation

Develop the scientific plots and confirm correct rendering.

### Phase 6 — Interactivity

Implement parameter controls, synchronization, and animation where appropriate.

### Phase 7 — Scientific Validation

Verify the physical calculations and compare results against independent benchmarks.

### Phase 8 — Responsive Design

Adapt the presentation for desktop, tablet, and smartphone devices.

### Phase 9 — Functional Testing

Verify all controls, rendering operations, and cross-platform behavior.

### Phase 10 — Publication

Commit validated changes and publish through the established website deployment process.

### Phase 11 — Post-Publication Verification

Test the published implementation and establish a stable version.

### Phase 12 — Maintenance and Expansion

Introduce new scientific capabilities incrementally while preserving validated functionality.

---

## 17. Governing Principle

A scientific dashboard is not merely an animated illustration.

It is an interactive scientific communication instrument.

Its value depends on the accuracy of its physical interpretation, the integrity of its underlying data, the reproducibility of its calculations, and the clarity of its presentation.

**Scientific correctness takes precedence over visual appearance.**

**Validated functionality must be preserved during subsequent development.**

**Original observations, calculated models, and illustrative geometry must remain clearly distinguishable.**

---

## 18. References

1. Sabby, J. A., & Lacy, C. H. S. (2003). *Absolute Properties of the Eclipsing Binary Star RT Coronae Borealis*. The Astronomical Journal, 125, 1448–1457.

2. Plotly Technologies Inc. *Plotly JavaScript Graphing Library*. https://plotly.com/javascript/

3. Posit Software, PBC. *Quarto Documentation*. https://quarto.org/

4. GitHub. *GitHub Pages Documentation*. https://docs.github.com/en/pages

5. JeffreySabbyWebsite. *Website Architecture and Development Standard*, Version 1.1.0.

---

**End of Document**

**Scientific Dashboard Development Standard — Version 1.0.0**