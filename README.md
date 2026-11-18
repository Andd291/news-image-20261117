# Sum up 17 November's world news in one image

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Andd291/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Andd291/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

Entry for the [make.fun bounty "Sum up 17 November's world news in one image"](https://make.fun/bounty/news-image-20261117).

The entry is a single newspaper front page dated **Tuesday, 17 November 2026** — "THE WORLD IN ONE DAY" — summing up the day's world news in six panels:

1. **US STRIKES IRAN** — the day's most consequential military story.
2. **KERCH BRIDGE HIT** — the attack on the Crimean bridge.
3. **TECH OUTAGES** — widespread service outages.
4. **NVIDIA SCANDAL** — the chip-industry story of the day.
5. **TRUMP XI PUTIN SUMMIT** — the leaders' summit.
6. **GAZA AID CALL** — the humanitarian appeal.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered image
`entry.png` (683 × 1024, under 1 MiB) byte-for-byte into the output
directory (`$MAKEFUN_OUTPUT_DIR/entry.png`, or `/output/entry.png`), then
verifies the written file is exactly as large as the source. No network, no
clock, no randomness — both graded runs write identical bytes.
