import { Flex, Meta, Schema } from "@once-ui-system/core";
import { PlaygroundView } from "@/components/playground/PlaygroundView";
import { baseURL, playground, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: playground.title,
    description: playground.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(playground.title)}`,
    path: playground.path,
  });
}

export default function PlaygroundPage() {
  return (
    <Flex maxWidth="l" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={playground.title}
        description={playground.description}
        path={playground.path}
        image={`/api/og/generate?title=${encodeURIComponent(playground.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${playground.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PlaygroundView />
    </Flex>
  );
}
