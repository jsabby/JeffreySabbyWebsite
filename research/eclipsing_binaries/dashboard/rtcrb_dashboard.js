/* ============================================================
   RT CrB — Interactive Scientific Dashboard
   ------------------------------------------------------------
   Project: JeffreySabbyWebsite
   Target: RT Coronae Borealis

   Scientific sources:
       EBOP photometric solution
       SPECOB spectroscopic solution
       Sabby & Lacy (2003)

   Version: 1.0.0
   Date: 2026-10-09

   Scientific policy:
       Original observational and model values are preserved.
       No fitting, smoothing, or interpolation is performed.
   ============================================================ */

"use strict";

(function () {

    /* --------------------------------------------------------
       1. Configuration
       -------------------------------------------------------- */

    const CONFIG = {

        photometryFile:
            "data/rtcrb_photometry.csv",

        radialVelocityFile:
            "data/rtcrb_radial_velocities.csv",

        spectroscopicModelFile:
            "data/rtcrb_spectroscopic_model.csv",

        orbitalPeriodDays: 5.11714489,

        // RT CrB orbital geometry
        // Sabby & Lacy (2003)
        //
        // Masses: solar masses
        // Radii and orbital separation: solar radii
        // Inclination: degrees

        orbit: {

            inclinationDegrees: 84.36,

            eccentricity: 0.0,

            massA: 1.343,

            massB: 1.359,

            radiusA: 2.615,

            radiusB: 2.946,

            semiMajorAxisSolarRadii: 17.4

        },

        initialPhase: 0.0,

        phaseStep: 0.001,

        animationIntervalMs: 40,

        animationPhaseIncrement: 0.002,

        colors: {
            primary: "#2563eb",
            secondary: "#dc2626",
            photometry: "#2563eb",
            observations: "#111827",
            phaseIndicator: "#059669"
        }
    };


    /* --------------------------------------------------------
       2. Dashboard State
       -------------------------------------------------------- */

    const state = {

        phase: CONFIG.initialPhase,

        playing: false,

        animationTimer: null,

        photometry: [],

        radialVelocities: [],

        spectroscopicModel: []

    };


    /* --------------------------------------------------------
       3. DOM Elements
       -------------------------------------------------------- */

    const dashboard =
        document.getElementById("rtcrb-dashboard");

    if (!dashboard) {
        return;
    }

    const phaseSlider =
        document.getElementById("rtcrb-phase-slider");

    const phaseValue =
        document.getElementById("rtcrb-phase-value");

    const playButton =
        document.getElementById("rtcrb-play-button");

    const resetButton =
        document.getElementById("rtcrb-reset-button");

    const statusElement =
        document.getElementById("rtcrb-status");

    const photometryPlot =
        document.getElementById("rtcrb-photometry-plot");

    const radialVelocityPlot =
        document.getElementById("rtcrb-rv-plot");

    const orbitPlot =
        document.getElementById("rtcrb-orbit-plot");

    const orbitalPlanePlot =
        document.getElementById("rtcrb-orbital-plane-plot");

    /* --------------------------------------------------------
       4. Utility Functions
       -------------------------------------------------------- */

    function numeric(value) {

        if (value === null ||
            value === undefined ||
            value === "") {

            return NaN;
        }

        return Number(value);
    }


    function normalizePhase(phase) {

        return ((phase % 1) + 1) % 1;
    }


    function selectSeries(data, field, value) {

        return data.filter(row => row[field] === value);
    }


    function validRows(data, fields) {

        return data.filter(row =>
            fields.every(field =>
                Number.isFinite(numeric(row[field]))
            )
        );
    }


    function setStatus(message, error = false) {

        if (!statusElement) {
            return;
        }

        statusElement.textContent = message;

        statusElement.classList.toggle(
            "rtcrb-error",
            error
        );
    }


    /* --------------------------------------------------------
       5. CSV Loading
       -------------------------------------------------------- */

    async function loadCSV(filename) {

        const response = await fetch(filename);

        if (!response.ok) {

            throw new Error(
                `Unable to load ${filename}: HTTP ${response.status}`
            );
        }

        const text = await response.text();


        // CSV files contain simple comma-separated numeric
        // fields without quoted commas.
        //
        // The parser below preserves the original column names.

        const lines = text
            .trim()
            .split(/\r?\n/);

        const headers = lines[0]
            .split(",")
            .map(value => value.trim());

        return lines.slice(1)
            .filter(line => line.trim().length > 0)
            .map(line => {

                const values = line.split(",");

                const record = {};

                headers.forEach((header, index) => {

                    record[header] =
                        (values[index] || "").trim();

                });

                return record;

            });
    }


    /* --------------------------------------------------------
       6. Photometric Visualization
       -------------------------------------------------------- */

    async function plotPhotometry() {

        // Original EBOP photometric observations: 310 points.
        const observations = validRows(

            selectSeries(
                state.photometry,
                "series",
                "observation"
            ),

            ["phase", "photometric_value"]

        );

        // Original EBOP calculated light curve: 5001 points.
        const models = validRows(

            selectSeries(
                state.photometry,
                "series",
                "EBOP_model"
            ),

            ["phase", "photometric_value"]

        );

        const modelTrace = {

            x: models.map(row => numeric(row.phase)),

            y: models.map(
                row => numeric(row.photometric_value)
            ),

            type: "scatter",

            mode: "lines",

            name: "EBOP Model",

            line: {
                color: CONFIG.colors.photometry,
                width: 2.5
            },

            hovertemplate:
                "Phase: %{x:.5f}<br>" +
                "Model value: %{y:.5f}<extra></extra>"

        };

        const observationTrace = {

            x: observations.map(
                row => numeric(row.phase)
            ),

            y: observations.map(
                row => numeric(row.photometric_value)
            ),

            type: "scatter",

            mode: "markers",

            name: "Observations",

            marker: {
                color: CONFIG.colors.observations,
                size: 5,
                opacity: 0.75
            },

            hovertemplate:
                "Phase: %{x:.5f}<br>" +
                "Observed value: %{y:.5f}<extra></extra>"

        };

        const layout = {

            title: {
                text: "RT CrB — EBOP Photometric Solution",
                font: {size: 16}
            },

            xaxis: {
                title: "Orbital Phase",
                range: [0, 1],
                zeroline: false
            },

            yaxis: {
                title: "Photometric Value (EBOP output)",
                autorange: "reversed",
                zeroline: false
            },

            shapes: [
                phaseLine(state.phase)
            ],

            legend: {
                orientation: "h",
                y: -0.25
            },

            margin: {
                l: 65,
                r: 20,
                t: 55,
                b: 85
            },

            paper_bgcolor: "#ffffff",

            plot_bgcolor: "#ffffff",

            hovermode: "closest",

            autosize: true

        };

        await Plotly.newPlot(

            photometryPlot,

            [modelTrace, observationTrace],

            layout,

            {
                responsive: true,
                displaylogo: false
            }

        );
    }


    /* --------------------------------------------------------
       7. Spectroscopic Visualization
       -------------------------------------------------------- */

    async function plotRadialVelocities() {

        const primaryObservations = validRows(

            selectSeries(
                state.radialVelocities,
                "component",
                "primary_hotter"
            ),

            ["phase", "observed_rv_km_s"]

        );


        const secondaryObservations = validRows(

            selectSeries(
                state.radialVelocities,
                "component",
                "secondary_cooler"
            ),

            ["phase", "observed_rv_km_s"]

        );


        const primaryModel = validRows(

            state.spectroscopicModel.filter(row =>

                row.component === "primary_hotter" &&

                Number(row.repeated_block) === 1

            ),

            ["phase", "calculated_rv_km_s"]

        );


        const secondaryModel = validRows(

            state.spectroscopicModel.filter(row =>

                row.component === "secondary_cooler" &&

                Number(row.repeated_block) === 1

            ),

            ["phase", "calculated_rv_km_s"]

        );


        const primaryModelTrace = {

            x: primaryModel.map(
                row => numeric(row.phase)
            ),

            y: primaryModel.map(
                row => numeric(row.calculated_rv_km_s)
            ),

            type: "scatter",

            mode: "lines",

            name: "Primary SPECOB Model",

            line: {
                color: CONFIG.colors.primary,
                width: 2.5
            }

        };


        const secondaryModelTrace = {

            x: secondaryModel.map(
                row => numeric(row.phase)
            ),

            y: secondaryModel.map(
                row => numeric(row.calculated_rv_km_s)
            ),

            type: "scatter",

            mode: "lines",

            name: "Secondary SPECOB Model",

            line: {
                color: CONFIG.colors.secondary,
                width: 2.5
            }

        };


        const primaryObservationTrace = {

            x: primaryObservations.map(
                row => numeric(row.phase)
            ),

            y: primaryObservations.map(
                row => numeric(row.observed_rv_km_s)
            ),

            type: "scatter",

            mode: "markers",

            name: "Primary Observations",

            marker: {
                color: CONFIG.colors.primary,
                size: 7,
                symbol: "circle",
                line: {
                    color: "#111827",
                    width: 0.6
                }
            }

        };


        const secondaryObservationTrace = {

            x: secondaryObservations.map(
                row => numeric(row.phase)
            ),

            y: secondaryObservations.map(
                row => numeric(row.observed_rv_km_s)
            ),

            type: "scatter",

            mode: "markers",

            name: "Secondary Observations",

            marker: {
                color: CONFIG.colors.secondary,
                size: 7,
                symbol: "diamond",
                line: {
                    color: "#111827",
                    width: 0.6
                }
            }

        };


        const layout = {

            title: {
                text: "RT CrB — SPECOB Radial-Velocity Solution",
                font: {size: 16}
            },

            xaxis: {
                title: "Orbital Phase",
                range: [0, 1],
                zeroline: false
            },

            yaxis: {
                title: "Radial Velocity (km/s)",
                zeroline: true,
                zerolinecolor: "#9ca3af"
            },

            shapes: [
                phaseLine(state.phase)
            ],

            legend: {
                orientation: "h",
                y: -0.25
            },

            margin: {
                l: 65,
                r: 20,
                t: 55,
                b: 100
            },

            paper_bgcolor: "#ffffff",

            plot_bgcolor: "#ffffff",

            hovermode: "closest",

            autosize: true

        };


        await Plotly.newPlot(

            radialVelocityPlot,

            [
                primaryModelTrace,
                secondaryModelTrace,
                primaryObservationTrace,
                secondaryObservationTrace
            ],

            layout,

            {
                responsive: true,
                displaylogo: false
            }

        );
    }


    /* --------------------------------------------------------
       7A. Orbital Geometry Calculations
       -------------------------------------------------------- */

    function orbitalPositions(phase) {

        const orbit = CONFIG.orbit;

        const theta =
            2 * Math.PI * normalizePhase(phase);

        const inclination =
            orbit.inclinationDegrees * Math.PI / 180;

        const totalMass =
            orbit.massA + orbit.massB;

        const aA =
            orbit.semiMajorAxisSolarRadii *
            orbit.massB / totalMass;

        const aB =
            orbit.semiMajorAxisSolarRadii *
            orbit.massA / totalMass;


        // Orbital-plane coordinates.
        //
        // At phase zero, star A is behind star B.
        // Positive z points toward the observer.

        const xA = aA * Math.sin(theta);

        const yA = -aA * Math.cos(theta);

        const xB = -aB * Math.sin(theta);

        const yB = aB * Math.cos(theta);


        // Project the orbit onto the plane of the sky.

        const projectedYA =
            yA * Math.cos(inclination);

        const projectedYB =
            yB * Math.cos(inclination);


        // Line-of-sight positions.

        const zA =
            yA * Math.sin(inclination);

        const zB =
            yB * Math.sin(inclination);


        return {

            phase: normalizePhase(phase),

            theta: theta,

            aA: aA,

            aB: aB,

            xA: xA,

            yA: yA,

            xB: xB,

            yB: yB,

            projectedYA: projectedYA,

            projectedYB: projectedYB,

            zA: zA,

            zB: zB

        };
    }


    /* --------------------------------------------------------
       7A.1. Projected Orbital Tracks
       -------------------------------------------------------- */

    function projectedOrbitalTracks() {

        const orbit = CONFIG.orbit;

        const inclination =
            orbit.inclinationDegrees * Math.PI / 180;

        const totalMass =
            orbit.massA + orbit.massB;

        const aA =
            orbit.semiMajorAxisSolarRadii *
            orbit.massB / totalMass;

        const aB =
            orbit.semiMajorAxisSolarRadii *
            orbit.massA / totalMass;

        const primaryX = [];
        const primaryY = [];

        const secondaryX = [];
        const secondaryY = [];

        const numberOfPoints = 361;

        for (let index = 0;
             index < numberOfPoints;
             index++) {

            const phase =
                index / (numberOfPoints - 1);

            const theta =
                2 * Math.PI * phase;

            primaryX.push(
                aA * Math.sin(theta)
            );

            primaryY.push(
                -aA *
                Math.cos(theta) *
                Math.cos(inclination)
            );

            secondaryX.push(
                -aB * Math.sin(theta)
            );

            secondaryY.push(
                aB *
                Math.cos(theta) *
                Math.cos(inclination)
            );

        }

        return [

            {

                x: primaryX,

                y: primaryY,

                type: "scatter",

                mode: "lines",

                name: "Primary Orbit",

                line: {
                    color: CONFIG.colors.primary,
                    width: 1.5,
                    dash: "dot"
                },

                hoverinfo: "skip"

            },

            {

                x: secondaryX,

                y: secondaryY,

                type: "scatter",

                mode: "lines",

                name: "Secondary Orbit",

                line: {
                    color: CONFIG.colors.secondary,
                    width: 1.5,
                    dash: "dot"
                },

                hoverinfo: "skip"

            }

        ];
    }


    /* --------------------------------------------------------
       7A.2. Orbital-Plane Tracks
       -------------------------------------------------------- */

    function orbitalPlaneTracks() {

        const primaryX = [];
        const primaryY = [];

        const secondaryX = [];
        const secondaryY = [];

        const numberOfPoints = 361;

        for (let index = 0; index < numberOfPoints; index++) {

            const phase = index / (numberOfPoints - 1);

            const positions = orbitalPositions(phase);

            primaryX.push(positions.xA);
            primaryY.push(positions.yA);

            secondaryX.push(positions.xB);
            secondaryY.push(positions.yB);

        }

        return [

            {
                x: primaryX,
                y: primaryY,
                type: "scatter",
                mode: "lines",
                name: "Primary Orbit",
                line: {
                    color: CONFIG.colors.primary,
                    width: 1.5,
                    dash: "dot"
                },
                hoverinfo: "skip"
            },

            {
                x: secondaryX,
                y: secondaryY,
                type: "scatter",
                mode: "lines",
                name: "Secondary Orbit",
                line: {
                    color: CONFIG.colors.secondary,
                    width: 1.5,
                    dash: "dot"
                },
                hoverinfo: "skip"
            }

        ];
    }


    /* --------------------------------------------------------
       7B. Stellar Disk Geometry
       -------------------------------------------------------- */

    function stellarDisk(x, y, radius, color) {

        return {

            type: "circle",

            xref: "x",
            yref: "y",

            x0: x - radius,
            x1: x + radius,

            y0: y - radius,
            y1: y + radius,

            fillcolor: color,

            line: {
                color: "#ffffff",
                width: 1
            },

            opacity: 1.0,

            layer: "above"

        };
    }


    function projectedStellarDisks(phase) {

        const positions =
            orbitalPositions(phase);

        const orbit =
            CONFIG.orbit;


        const primaryDisk = stellarDisk(

            positions.xA,

            positions.projectedYA,

            orbit.radiusA,

            CONFIG.colors.primary

        );


        const secondaryDisk = stellarDisk(

            positions.xB,

            positions.projectedYB,

            orbit.radiusB,

            CONFIG.colors.secondary

        );


        // Plotly draws shapes in array order.
        // The foreground star must be drawn last.

        if (positions.zA > positions.zB) {

            return [
                secondaryDisk,
                primaryDisk
            ];

        }

        return [
            primaryDisk,
            secondaryDisk
        ];
    }


    /* --------------------------------------------------------
       7C. Orbital Visualization
       -------------------------------------------------------- */

    async function plotOrbit() {

        if (!orbitPlot) {
            return;
        }

        const layout = {

            title: {
                text: "RT CrB — Projected Orbital Geometry",
                font: {size: 16}
            },

            xaxis: {
                title: "Projected X (Solar Radii)",
                range: [-14, 14],
                zeroline: true,
                zerolinecolor: "#9ca3af",
                constrain: "domain"
            },

            yaxis: {
                title: "Projected Y (Solar Radii)",
                range: [-14, 14],
                zeroline: true,
                zerolinecolor: "#9ca3af",
                scaleanchor: "x",
                scaleratio: 1
            },

            shapes: projectedStellarDisks(state.phase),

            margin: {
                l: 65,
                r: 20,
                t: 55,
                b: 65
            },

            paper_bgcolor: "#ffffff",

            plot_bgcolor: "#ffffff",

            showlegend: false,

            autosize: true

        };

        const orbitalTracks =
            projectedOrbitalTracks();

        const barycenterTrace = {

            x: [0],

            y: [0],

            type: "scatter",

            mode: "markers",

            name: "Center of Mass",

            marker: {
                color: "#111827",
                size: 6,
                symbol: "cross"
            },

            hoverinfo: "skip"

        };

        await Plotly.newPlot(

            orbitPlot,

            [
                ...orbitalTracks,
                barycenterTrace
            ],

            layout,

            {
                responsive: true,
                displaylogo: false
            }

        );
    }


    /* --------------------------------------------------------
       7D. Face-On Orbital-Plane Visualization
       -------------------------------------------------------- */

    async function plotOrbitalPlane() {

        if (!orbitalPlanePlot) {
            return;
        }

        const positions = orbitalPositions(state.phase);

        const layout = {

            title: {
                text: "RT CrB — Face-On Orbital-Plane View",
                font: {size: 16}
            },

            xaxis: {
                title: "Orbital X (Solar Radii)",
                range: [-14, 14],
                zeroline: true,
                zerolinecolor: "#9ca3af",
                constrain: "domain"
            },

            yaxis: {
                title: "Orbital Y (Solar Radii)",
                range: [-14, 14],
                zeroline: true,
                zerolinecolor: "#9ca3af",
                scaleanchor: "x",
                scaleratio: 1
            },

            shapes: [
                stellarDisk(
                    positions.xA,
                    positions.yA,
                    CONFIG.orbit.radiusA,
                    CONFIG.colors.primary
                ),

                stellarDisk(
                    positions.xB,
                    positions.yB,
                    CONFIG.orbit.radiusB,
                    CONFIG.colors.secondary
                )
            ],

            margin: {
                l: 65,
                r: 20,
                t: 55,
                b: 65
            },

            paper_bgcolor: "#ffffff",

            plot_bgcolor: "#ffffff",

            showlegend: false,

            autosize: true

        };

        const orbitalTracks = orbitalPlaneTracks();

        const barycenterTrace = {

            x: [0],
            y: [0],

            type: "scatter",
            mode: "markers",

            name: "Center of Mass",

            marker: {
                color: "#111827",
                size: 6,
                symbol: "cross"
            },

            hoverinfo: "skip"

        };

        await Plotly.newPlot(

            orbitalPlanePlot,

            [
                ...orbitalTracks,
                barycenterTrace
            ],

            layout,

            {
                responsive: true,
                displaylogo: false
            }

        );
    }


    /* --------------------------------------------------------
       8. Orbital Phase Indicator
       -------------------------------------------------------- */

    function phaseLine(phase) {

        return {

            type: "line",

            x0: phase,
            x1: phase,

            y0: 0,
            y1: 1,

            xref: "x",
            yref: "paper",

            line: {
                color: CONFIG.colors.phaseIndicator,
                width: 2,
                dash: "dash"
            }

        };
    }


    /* --------------------------------------------------------
       9. Synchronization
       -------------------------------------------------------- */

    async function updatePhase(phase) {

        state.phase = normalizePhase(phase);

        // Update the orbital-phase slider.

        if (phaseSlider) {
            phaseSlider.value = state.phase.toFixed(3);
        }

        // Update the numerical phase display.

        if (phaseValue) {
            phaseValue.textContent = state.phase.toFixed(3);
        }

        // Shared orbital-phase indicator.

        const shape = phaseLine(state.phase);

        const updates = [];

        // Update EBOP photometric visualization.

        if (photometryPlot && photometryPlot.data) {

            updates.push(
                Plotly.relayout(
                    photometryPlot,
                    {shapes: [shape]}
                )
            );
        }

        // Update SPECOB radial-velocity visualization.

        if (radialVelocityPlot && radialVelocityPlot.data) {

            updates.push(
                Plotly.relayout(
                    radialVelocityPlot,
                    {shapes: [shape]}
                )
            );
        }

        // Update the observer's projected orbital geometry.

        if (orbitPlot && orbitPlot.data) {

            updates.push(
                Plotly.relayout(
                    orbitPlot,
                    {
                        shapes: projectedStellarDisks(state.phase)
                    }
                )
            );
        }

        // Update the face-on orbital-plane geometry.

        if (orbitalPlanePlot && orbitalPlanePlot.data) {

            const positions = orbitalPositions(state.phase);

            updates.push(
                Plotly.relayout(
                    orbitalPlanePlot,
                    {
                        shapes: [

                            stellarDisk(
                                positions.xA,
                                positions.yA,
                                CONFIG.orbit.radiusA,
                                CONFIG.colors.primary
                            ),

                            stellarDisk(
                                positions.xB,
                                positions.yB,
                                CONFIG.orbit.radiusB,
                                CONFIG.colors.secondary
                            )

                        ]
                    }
                )
            );
        }

        // Wait until all four visualizations finish updating.
        // This prevents animation frames from accumulating
        // faster than the browser can render them.

        await Promise.all(updates);
    }


    /* --------------------------------------------------------
       10. Animation Controls
       -------------------------------------------------------- */

    function stopAnimation() {

        if (state.animationTimer !== null) {

            clearTimeout(state.animationTimer);

            state.animationTimer = null;

        }

        state.playing = false;

        if (playButton) {

            playButton.textContent = "Play";

            playButton.setAttribute("aria-pressed", "false");

        }
    }


    function scheduleAnimationFrame() {

        if (!state.playing) {
            return;
        }

        state.animationTimer = setTimeout(async () => {

            state.animationTimer = null;

            if (!state.playing) {
                return;
            }

            const nextPhase = normalizePhase(

                state.phase +
                CONFIG.animationPhaseIncrement

            );

            try {

                await updatePhase(nextPhase);

            } catch (error) {

                console.error(
                    "RT CrB animation update failed:",
                    error
                );

                stopAnimation();

                setStatus(
                    "Animation update failed; see browser console.",
                    true
                );

                return;
            }

            if (state.playing) {

                scheduleAnimationFrame();

            }

        }, CONFIG.animationIntervalMs);
    }


    function startAnimation() {

        if (state.playing) {
            return;
        }

        state.playing = true;

        if (playButton) {

            playButton.textContent = "Pause";

            playButton.setAttribute("aria-pressed", "true");

        }

        scheduleAnimationFrame();
    }


    function toggleAnimation() {

        if (state.playing) {

            stopAnimation();

        } else {

            startAnimation();

        }
    }


    function resetDashboard() {

        stopAnimation();

        void updatePhase(CONFIG.initialPhase);
    }


        /* --------------------------------------------------------
       11. Event Handlers
       -------------------------------------------------------- */

    function registerControls() {

        if (phaseSlider) {

            phaseSlider.addEventListener(

                "input",

                event => {

                    stopAnimation();

                    void updatePhase(
                        numeric(event.target.value)
                    );

                }

            );
        }


        if (playButton) {

            playButton.addEventListener(

                "click",

                toggleAnimation

            );
        }


        if (resetButton) {

            resetButton.addEventListener(

                "click",

                resetDashboard

            );
        }
    }


    /* --------------------------------------------------------
       12. Dashboard Initialization
       -------------------------------------------------------- */

    async function initializeDashboard() {

        try {

            if (typeof Plotly === "undefined") {

                throw new Error(
                    "Plotly.js is not available."
                );
            }

            setStatus("Loading RT CrB research data...");

            const results = await Promise.all([

                loadCSV(CONFIG.photometryFile),

                loadCSV(CONFIG.radialVelocityFile),

                loadCSV(CONFIG.spectroscopicModelFile)

            ]);

            state.photometry = results[0];

            state.radialVelocities = results[1];

            state.spectroscopicModel = results[2];


            await plotPhotometry();

            await plotRadialVelocities();

            await plotOrbit();

            await plotOrbitalPlane();


            registerControls();

            await updatePhase(CONFIG.initialPhase);


            setStatus(
                "EBOP and SPECOB research data loaded successfully."
            );

        } catch (error) {

            console.error(
                "RT CrB Dashboard Error:",
                error
            );

            setStatus(
                error.message,
                true
            );
        }
    }


    /* --------------------------------------------------------
       13. Start Dashboard
       -------------------------------------------------------- */

    initializeDashboard();

})();