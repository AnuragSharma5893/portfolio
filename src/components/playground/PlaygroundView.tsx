"use client";

import { useState } from "react";
import {
  Column,
  Heading,
  Text,
  Row,
  Tag,
  Button,
  Grid,
  Card,
} from "@once-ui-system/core";
import { playground } from "@/resources";

export function PlaygroundView() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const activeGameData = playground.games.find((g) => g.title === activeGame);

  return (
    <Column fillWidth gap="40" paddingY="40">
      <Column gap="8">
        <Heading variant="display-strong-s">{playground.label}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {playground.description}
        </Text>
      </Column>

      {activeGame && activeGameData?.embedUrl && (
        <Column gap="12" fillWidth>
          <Row fillWidth horizontal="between" vertical="center">
            <Text variant="body-strong-m">{activeGameData.title}</Text>
            <Button
              variant="tertiary"
              size="s"
              label="Close"
              onClick={() => setActiveGame(null)}
            />
          </Row>
          <iframe
            src={activeGameData.embedUrl}
            title={activeGameData.title}
            style={{
              width: "100%",
              height: "520px",
              border: "none",
              borderRadius: "12px",
            }}
            allow="fullscreen"
          />
        </Column>
      )}

      <Grid columns="3" s={{ columns: "1" }} m={{ columns: "2" }} gap="16">
        {playground.games.map((game, index) => (
          <Card
            key={index}
            padding="24"
            radius="l"
            border="neutral-alpha-weak"
            style={{ cursor: game.embedUrl ? "pointer" : "default" }}
            onClick={() => game.embedUrl && setActiveGame(game.title)}
          >
            <Column gap="16" fillWidth>
              <Column gap="4">
                <Text variant="body-strong-m">{game.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {game.description}
                </Text>
              </Column>

              <Row gap="8" wrap>
                {game.tags?.map((tag) => (
                  <Tag key={tag} size="s" label={tag} variant="neutral" />
                ))}
              </Row>

              <Row gap="8">
                {game.embedUrl && (
                  <Button
                    variant="primary"
                    size="s"
                    label="Play here"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setActiveGame(game.title);
                    }}
                  />
                )}
                <Button
                  href={game.link}
                  variant="secondary"
                  size="s"
                  label="Open tab"
                  prefixIcon="arrowUpRight"
                />
              </Row>
            </Column>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
