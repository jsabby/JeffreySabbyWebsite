# RT CrB dashboard data — source-preserving extraction

## Files

- `rtcrb_photometry.csv`: 310 original EBOP observational records and 5,001 EBOP calculated light-curve records in a single long-format CSV. `series` distinguishes observations and model. The observational fourth field is preserved without interpreting its meaning. The original header reads `RT CRB V`; the numerical zero point has not been independently established.
- `rtcrb_radial_velocities.csv`: 36 primary/hotter and 36 secondary/cooler SPECOB observational records. `hjd_fraction_in_source` is the third numeric column of the original plotfile; **it is not a complete HJD**. Residuals and calculated values are retained verbatim.
- `rtcrb_spectroscopic_model.csv`: SPECOB calculated curves, 1,000 records per component. The original file has a `500` marker before each model section but **contains two consecutive 500-record phase cycles**; both are retained, with `repeated_block` indicating the first or second set. Do not interpret the repeated block as additional independent measurements.

## Provenance and conventions

All numeric fields were transcribed directly as strings from the user-supplied `rtlv.lc` (EBOP) and `rtss.plotfile` (SPECOB). No fitting, smoothing, interpolation, rounding, or phase correction was performed. Component labels are taken from the SPECOB headings. Phases are taken from the original files. The photometric quantity is left as `photometric_value` pending confirmation of magnitude convention and zero point.

For synchronized plotting, the photometric and spectroscopic phase-zero conventions should still be validated against the published eclipse ephemeris and the EBOP model eclipse positions.

## Extraction checks

- Photometry: 310 observations + 5,001 model samples.
- Radial velocities: 36 primary + 36 secondary observations.
- RV model: 1,000 primary + 1,000 secondary records (two repeated 500-point phase cycles per star).

Original source files are included in the ZIP archive for reproducibility.
