# Solar24 Demo v0.1.0 · Public Release

**Release date:** 20 September 2026  
**Release type:** Public static demo  
**Status:** Available for exploration

Solar24 Demo v0.1.0 is the first public release of the Solar24 digital culture project: an interactive introduction to China's Twenty-Four Solar Terms. It treats the calendar as a living landscape. Visitors move from the seasonal year wheel into an ink landscape, an artistic Sun–Earth view, and small scenes of everyday life.

This release is an experience prototype for public learning and discussion. It is not a claim that all 24 production modules, cultural interpretations, or research records have completed their separate human review process.

## Try the demo

- [English demo](https://solar24-demo.solar24.workers.dev/?lang=en#lichun/seasons)
- [Chinese demo](https://solar24-demo.solar24.workers.dev/?lang=zh#lichun/seasons)
- [Source repository](https://github.com/aiwindyjm/solar24)
- [How Solar24 Is Made](../development-journey/README.en.md)
- [Recorded English walkthrough](../../assets/demo/walkthrough-en.gif)
- [Recorded Chinese walkthrough](../../assets/demo/walkthrough-zh.gif)

## What is included

- A 24-node butterfly year wheel with seasonal color and atmosphere changes.
- A continuous landscape shared by **Seasons**, **Cosmos**, and **Human Life** views.
- A three-dimensional artistic Sun–Earth scene with a close Earth view and a yearly orbit view.
- Five independent reading scrolls for nature, phenology, agriculture, human life, and meaning.
- A calendar and year tour that follows the solar-term sequence from Lichun.
- Seasonal environmental motion, optional synthesized ambience, reduced-motion support, and a static fallback for browsers without WebGL.
- English and Chinese entry points that can be opened directly through the URL.

## Technical release

The demo is built with React, TypeScript, Vite, Three.js, and Web Audio. It is deployed as static assets with Cloudflare Workers Static Assets. It has no backend, account system, database, or runtime connection to the research knowledge base. The published build can be run locally with:

```text
pnpm demo:dev
```

The Cloudflare deployment was checked at desktop and mobile sizes, including language switching, refresh and browser history, camera changes, reading interactions, the calendar, seasonal actions, and the reduced-motion path. Repository CI passed for the release commit.

## Content and media boundaries

The demo presents a carefully bounded cultural experience. Local practices remain geographically described rather than presented as universal customs. The orbit is an artistic teaching model; it is not a live ephemeris and does not claim precise astronomical calculation. The village and landscape are an art direction, not a reconstruction of a named community or ritual.

The butterfly artwork was supplied for this project. Fonts retain their respective open licenses. The walkthrough GIFs are recordings of the browser experience. The ambient sound is synthesized and does not represent a field recording, an authorized local song, or a ritual performance. Publishing this demo does not change the review status of the production Host or the knowledge base.

## Next steps

The next release cycle will focus on Lichun reader observation, content and translation review, real-device performance baselines, and the integration boundary between the public experience and production modules. Community sound work will begin only after its contribution, rights, and review process has been defined.

## Release record

- Git commit: `6d941c6`
- Cloudflare Worker: `solar24-demo`
- Cloudflare deployment: `4229f26e-b592-4b47-8505-a1667e22fc18`
- Repository license: MIT for code; media and font licenses remain item-specific.
