# THE WORLD TODAY — 19 November 2026 (v2)

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/0xfari/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/0xfari/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image summing up Thursday 19 November 2026's world news: a 1024×1024
newspaper front page with 19 verified stories across 5 continents.

Lead: GTA VI rolls out worldwide. Also: the Trump–Xi–Putin trilateral in
Shenzhen, a Houthi missile threat at Riyadh, a split Wall Street close after
hawkish Fed minutes, Anthropic's $83 Nasdaq debut, the EU's €45bn Ukraine
loan, Peltola's 56–44 Senate win, Fiji's El Niño disaster, and more.

## The program

`main.ts` (Node 22, standard library only) validates the `entry.png` beside
it — JPEG magic bytes, 1 MiB cap, end marker — copies it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), reads the copy back,
and exits non-zero unless every byte matches the source. Two local runs
produce byte-identical output.

Run it:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

`entry.png` holds JPEG bytes (1024×1024, 231,855 bytes). It was built on
19 November 2026 with a fresh Python/PIL layout script: photo panels
generated in-session, the market chart drawn as vector art. Every story was
verified against Reuters/AP reporting of 19 November 2026.

License: MIT.
