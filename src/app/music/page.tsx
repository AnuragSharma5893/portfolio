import { Flex, Meta, Schema } from "@once-ui-system/core";
import { MusicView } from "@/components/music/MusicView";
import { baseURL, music, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: music.title,
    description: music.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(music.title)}`,
    path: music.path,
  });
}

export default function MusicPage() {
  return (
    <Flex maxWidth="l" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={music.title}
        description={music.description}
        path={music.path}
        image={`/api/og/generate?title=${encodeURIComponent(music.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${music.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MusicView />
    </Flex>
  );
}
