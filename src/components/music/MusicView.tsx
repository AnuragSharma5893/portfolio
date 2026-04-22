"use client";

import { useState } from "react";
import {
  Column,
  Heading,
  Text,
  Row,
  Tag,
  Button,
  SmartLink,
} from "@once-ui-system/core";
import { music } from "@/resources";
import styles from "./MusicView.module.scss";

function Equalizer({ paused }: { paused: boolean }) {
  return (
    <div className={`${styles.equalizer} ${paused ? styles.equalizerPaused : ""}`}>
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

const moodColors: Record<string, string> = {
  energetic:   "brand",
  nostalgic:   "warning",
  emotional:   "danger",
  romantic:    "danger",
  upbeat:      "brand",
  fun:         "success",
  soulful:     "warning",
  chill:       "success",
  cool:        "neutral",
  dreamy:      "warning",
  melancholic: "neutral",
  catchy:      "brand",
  vibrant:     "success",
};

export function MusicView() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [vinylPaused, setVinylPaused] = useState(false);

  const genres = [...new Set(music.tracks.map((t) => t.genre).filter(Boolean))];

  return (
    <Column fillWidth gap="40" paddingY="40">

      {/* ── Hero ────────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.notesContainer}>
          <span className={styles.note}>♪</span>
          <span className={styles.note}>♫</span>
          <span className={styles.note}>♩</span>
          <span className={styles.note}>♬</span>
          <span className={styles.note}>♪</span>
          <span className={styles.note}>♫</span>
        </div>

        <Row gap="40" vertical="center" wrap style={{ position: "relative", zIndex: 1 }}>
          <div
            className={`${styles.vinyl} ${vinylPaused ? styles.vinylPaused : ""}`}
            onClick={() => setVinylPaused((p) => !p)}
            title="Click to pause / play"
            style={{ cursor: "pointer" }}
          />

          <Column gap="16" style={{ flex: 1 }}>
            <Column gap="4">
              <Text variant="label-default-s" onBackground="brand-medium">
                NOW SPINNING
              </Text>
              <Heading variant="display-strong-m">Music I Love</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {music.description}
              </Text>
            </Column>

            <Row gap="12" wrap>
              <div className={styles.statPill}>
                <Text variant="label-strong-s">{music.tracks.length} tracks</Text>
              </div>
              <div className={styles.statPill}>
                <Text variant="label-strong-s">{genres.length} genres</Text>
              </div>
              <div className={styles.statPill}>
                <Text variant="label-strong-s">Tap vinyl to pause</Text>
              </div>
            </Row>

            <Row gap="8" wrap>
              {genres.map((g) => (
                <span key={g} className={styles.genreChip}>{g}</span>
              ))}
            </Row>
          </Column>
        </Row>
      </div>

      {/* ── Track list ──────────────────────────────────────── */}
      <Column gap="4" fillWidth>
        <Row paddingX="20" paddingBottom="8" gap="16">
          <Text
            variant="label-default-xs"
            onBackground="neutral-weak"
            style={{ width: 24, textAlign: "center" }}
          >
            #
          </Text>
          <Text variant="label-default-xs" onBackground="neutral-weak" style={{ flex: 1 }}>
            TITLE
          </Text>
          <Text
            variant="label-default-xs"
            onBackground="neutral-weak"
            style={{ minWidth: 120 }}
            className={styles.trackMeta as string}
          >
            ALBUM
          </Text>
        </Row>

        <Column gap="2" fillWidth>
          {music.tracks.map((track, index) => (
            <div
              key={index}
              className={styles.trackRow}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className={styles.trackIndex}>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {index + 1}
                </Text>
              </span>
              <span className={styles.trackEqualizer}>
                <Equalizer paused={vinylPaused} />
              </span>

              <div className={styles.trackInfo}>
                <Text variant="body-strong-s">{track.title}</Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {track.artist}
                </Text>
              </div>

              <div className={styles.trackMeta}>
                {track.album && (
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {track.album}
                  </Text>
                )}
              </div>

              <Row gap="8" wrap>
                {track.genre && (
                  <Tag size="s" label={track.genre} variant="neutral" />
                )}
                {track.mood?.map((m) => (
                  <Tag
                    key={m}
                    size="s"
                    label={m}
                    variant={(moodColors[m] as "brand" | "danger" | "warning" | "success" | "neutral") ?? "neutral"}
                  />
                ))}
              </Row>

              {track.link && (
                <SmartLink href={track.link}>
                  <Button
                    variant="tertiary"
                    size="s"
                    prefixIcon="arrowUpRight"
                    aria-label={`Listen to ${track.title} on Spotify`}
                  />
                </SmartLink>
              )}
            </div>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
