# How Solar24 Is Made

English · [简体中文](README.md) · [Back to Solar24](../../README.md)

Solar24 began with a question: how can someone feel a solar term before reading about it? Five design iterations led to a living book of the seasons. V5 went live on Cloudflare on September 20, 2026. This guide connects the cultural questions, design decisions, implementation and release.

[Explore the demo](https://solar24-demo.solar24.workers.dev/?lang=en#lichun/seasons) · [Watch the walkthrough](../../README.md#demo-walkthrough) · [Detailed evolution, in Chinese](prototype-evolution.md)

## The journey

| Stage                  | What V5 delivers                                                                               | Evidence                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Research               | A static bibliography connected to selected chapters; research remains separate from the site  | [Editorial record](../design/solar24-v5/BOOK.md)            |
| Cultural understanding | Solar positions, local differences and classical observations explained in English and Chinese | [Chapter text](../design/solar24-v5/src/book-copy.ts)       |
| Story                  | Seasons, Cosmos and Human life share the selected solar term                                   | [View state](../design/solar24-v5/src/main.tsx)             |
| Visual direction       | Ink landscapes, open space, a complete butterfly and restrained movement                       | [Landscape](../design/solar24-v5/src/inkLandscape.ts)       |
| Colour                 | Five environmental roles change together with the term                                         | [Term data](../design/solar24-v5/src/data.ts)               |
| Sound                  | Optional synthesized ambience with seasonal tone changes                                       | [Audio](../design/solar24-v5/src/Audio.ts)                  |
| Interaction            | Independent reading scrolls, a daily calendar tour and three life entrances per term           | [Seasonal participation](../design/solar24-v5/LIFE.md)      |
| Prototype              | Five iterations, with V5 source and a public demo available                                    | [V5](../design/solar24-v5/README.md)                        |
| Implementation         | React, TypeScript, Vite, Three.js and Web Audio; static hosting                                | [Deployment](../design/solar24-v5/DEPLOYMENT.md)            |
| Refinement             | Language, keyboard, mobile, fallback, audio lifecycle and chapter checks                       | [Validation](../design/solar24-v5/DEPLOYMENT-VALIDATION.md) |
| Release                | A Cloudflare site, language-specific URLs and two recorded walkthroughs                        | [Release record](../development/v5-demo-release.md)         |

## Why the design changed

V1 explored a world calendar. V2 introduced ink and a calendar that stayed within the scene. V3 made butterflies and environmental colour central. V4 connected the three viewing scales in a continuous landscape. V5 turned that environment into an interactive introduction book.

Reading now unfolds as one scroll per topic, without moving the central butterfly or blocking the controls. Human life offers listening, seasonal drawings and personal memories instead of repeating the reading cards. The calendar advances daily during the year tour. Astronomy explains what the Sun–Earth positions mean. Local text and bibliographies keep the experience useful without opening external websites.

The English and Chinese links explicitly select a language; sharing a term does not depend on the recipient's previous language setting. Walkthroughs were recorded from actual browser interactions, then shortened and compressed for the READMEs.

## What has been verified

The release checkout passed lint, 47 tests, the Host build, V5 typecheck/build and two Host end-to-end tests. The live demo was checked at desktop and mobile sizes, including language persistence, browser back, reading, bibliography, camera switching and seasonal interaction. These are engineering checks, not evidence that a particular audience has understood the culture. The complete local research workspace has additional tests that are not part of this release checkout.

## What comes next

Start with Lichun and observe how new readers explain solar terms, local weather and the three viewing scales. Review selected production text, translations and media use; measure load and long-running performance on real low-end devices. Move proven shared capabilities into the production architecture only when needed. A small community sound call follows once organisers and review arrangements are in place.

The shared demo is live; the production Host, approved cultural content and community publishing remain distinct responsibilities. No review status is changed by publishing a visual experience.

[Journey template](journey-template.md) · [Lichun record](lichun/00-overview.md) · [Decision records](../decisions/README.md) · [Release process](../development/release-process.md)

Record each change as initial version, problem, evidence, adjustment, reason, trade-off, validation and next step. Link real source files and commits. Preserve earlier records and distinguish measured results from proposals. Several detailed working documents are in Chinese; code, the live interface and this guide provide English entry points.
