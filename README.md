# THE WORLD TODAY — 19 November 2026 (v3)

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/0xfari/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/0xfari/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image summing up Thursday 19 November 2026's world news: a 1024×1024
dense numbered front page with 32 verified stories across 6 continents.

Lead: the Shenzhen trilateral ends after 80 minutes with no deal. Also: the
world court rules Myanmar guilty of Rohingya genocide, Cyclone Akvan drives
80,000 from their homes, Florida drowns in 15 inches of rain, a Van Gogh
sells for a record $190.4m, COP31 enters its final 48 hours, and GTA VI
sells 17 million copies in a day.

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

`entry.png` holds JPEG bytes (1024×1024, 225,833 bytes). It was built on
19 November 2026 with a fresh Python/PIL layout script: masthead, stat band,
13 numbered feature stories with flat vector icons, a schematic world map
with numbered dots, briefs, and a DATE CHECK box listing stories left out
because they were first reported on an earlier day. Every story was verified
as first reported on 19 November 2026 (Reuters/AP/AFP/BBC/The Hindu/IMD/
ICJ/Sotheby's/Sensor Tower).

License: MIT.
