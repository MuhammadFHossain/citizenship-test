# Citizenship Civics

**Open the app: https://muhammadfhossain.github.io/citizenship-test/**

A study app for the 2025 U.S. naturalization civics test. It covers all 128 questions, with
daily spaced practice, practice tests that follow the real rules, a study plan with a mastery
date, and reading and writing drills for the English test.

## Install on your phone

- **iPhone:** open the address in Safari, tap Share, then **Add to Home Screen**.
- **Android:** open the address in Chrome, then tap **Install app** (or menu, then **Add to Home screen**).

It then opens from its own icon, full screen, and works without internet.

## Your progress

Progress is saved on the phone. Use **Settings, Back up** to keep a copy or to move it to
another device, and **Restore** to bring it back.

## Voice

Questions, answers, and the English practice sentences are read by a recorded voice (`voice.mp3`),
made with [Kokoro](https://github.com/hexgrad/kokoro), an open-weight text-to-speech model released
under the Apache 2.0 license, using its American male voice "Michael". Names you type yourself are
read by the phone's own voice.

## About this repository

The site is static files served by GitHub Pages from the `gh-pages` branch. `index.html`
holds the whole app; `sw.js` makes it work offline; `manifest.webmanifest` and `icons/`
make it installable.

Questions follow the USCIS 2025 civics test (form M-1778, 09/25). Answers that change with
elections (President, Vice President, Speaker, Chief Justice, and your own senators,
representative, and governor) should be checked on the USCIS test updates page before an
interview.

Fonts: Libre Caslon Text and Libre Caslon Display, SIL Open Font License (`fonts/OFL-LICENSE.txt`).
