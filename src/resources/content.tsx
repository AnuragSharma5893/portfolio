import { About, Blog, Gallery, Home, Music, Newsletter, Person, Playground, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Anurag",
  lastName: "Sharma",
  name: `Anurag Sharma`,
  role: "Software Engineer",
  avatar: "/images/avatar1.png",
  email: "anuragsharma58693@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AnuragSharma5893",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anurag-sharma-o7xd/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Helping people turn ideas into reality</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    My name is Anurag, a Sotware engineer and builder <br /> I help people turn there ideas into reality.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const music: Music = {
  path: "/music",
  label: "Music",
  title: `Music – ${person.name}`,
  description: `Songs and artists ${person.name} loves and listens to`,
  tracks: [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      genre: "Synth-pop",
      mood: ["energetic", "nostalgic"],
      link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      album: "Aashiqui 2",
      genre: "Bollywood",
      mood: ["emotional", "romantic"],
      link: "https://open.spotify.com/track/6vfqte2ICbzMy3Vu0MpSqC",
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      genre: "Pop",
      mood: ["upbeat", "fun"],
      link: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9",
    },
    {
      title: "Kesariya",
      artist: "Arijit Singh",
      album: "Brahmastra",
      genre: "Bollywood",
      mood: ["romantic", "soulful"],
      link: "https://open.spotify.com/track/2tRcCHORmXpDMFXKIjMhRo",
    },
    {
      title: "Starboy",
      artist: "The Weeknd ft. Daft Punk",
      album: "Starboy",
      genre: "R&B / Pop",
      mood: ["chill", "cool"],
      link: "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB",
    },
    {
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal & Asees Kaur",
      album: "Shershaah",
      genre: "Bollywood",
      mood: ["romantic", "dreamy"],
      link: "https://open.spotify.com/track/0pVD7RfGNXkbvfAhFsIWBs",
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      genre: "Indie Pop",
      mood: ["melancholic", "catchy"],
      link: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e",
    },
    {
      title: "Chaleya",
      artist: "Arijit Singh & Shilpa Rao",
      album: "Jawan",
      genre: "Bollywood",
      mood: ["romantic", "vibrant"],
      link: "https://open.spotify.com/track/6xPByLlB1MjbAqCvaBJGjW",
    },
  ],
};

const playground: Playground = {
  path: "/playground",
  label: "Playground",
  title: `Playground – ${person.name}`,
  description: "A collection of fun browser games to kill time and have a blast",
  games: [
    {
      title: "2048",
      description: "Slide tiles on a grid to combine numbers and reach 2048.",
      link: "https://play2048.co/",
      embedUrl: "https://play2048.co/",
      tags: ["puzzle", "numbers", "strategy"],
    },
    {
      title: "Flappy Bird",
      description: "Tap to keep the bird flying through the pipes — deceptively hard.",
      link: "https://flappybird.io/",
      embedUrl: "https://flappybird.io/",
      tags: ["arcade", "reflex", "one-tap"],
    },
    {
      title: "Snake Game",
      description: "Classic snake — eat, grow, and don't hit yourself.",
      link: "https://playsnake.org/",
      embedUrl: "https://playsnake.org/",
      tags: ["classic", "arcade", "strategy"],
    },
    {
      title: "Chrome Dinosaur",
      description: "Jump over cacti in the iconic offline Chrome dino game.",
      link: "https://chromedino.com/",
      embedUrl: "https://chromedino.com/",
      tags: ["arcade", "reflex", "classic"],
    },
    {
      title: "Pac-Man",
      description: "Eat dots, dodge ghosts — the arcade legend lives on in the browser.",
      link: "https://www.google.com/logos/2010/pacman10-i.html",
      embedUrl: "https://www.google.com/logos/2010/pacman10-i.html",
      tags: ["classic", "arcade", "maze"],
    },
    {
      title: "Wordle",
      description: "Guess the 5-letter word in 6 tries — the daily word puzzle.",
      link: "https://www.nytimes.com/games/wordle/index.html",
      tags: ["word", "puzzle", "daily"],
    },
    {
      title: "Tetris",
      description: "Stack falling blocks and clear lines in the timeless puzzle game.",
      link: "https://tetris.com/play-tetris",
      tags: ["puzzle", "classic", "strategy"],
    },
    {
      title: "Agar.io",
      description: "Grow your cell by eating others in this competitive multiplayer blob game.",
      link: "https://agar.io/",
      embedUrl: "https://agar.io/",
      tags: ["multiplayer", "strategy", "io-game"],
    },
    // ── Retro Classics ──────────────────────────────────────
    {
      title: "Space Invaders",
      description: "Defend Earth from relentless alien waves in the arcade original from 1978.",
      link: "https://www.retrogames.cc/arcade-games/space-invaders.html",
      tags: ["retro", "arcade", "shooter"],
    },
    {
      title: "Asteroids",
      description: "Blast floating rocks and enemy saucers drifting through deep space.",
      link: "https://www.retrogames.cc/arcade-games/asteroids.html",
      tags: ["retro", "arcade", "shooter"],
    },
    {
      title: "Galaga",
      description: "Intercept waves of alien attackers in this shoot-'em-up arcade legend.",
      link: "https://www.retrogames.cc/arcade-games/galaga.html",
      tags: ["retro", "arcade", "shooter"],
    },
    {
      title: "Frogger",
      description: "Guide your frog safely across busy roads and treacherous rivers.",
      link: "https://www.retrogames.cc/arcade-games/frogger.html",
      tags: ["retro", "arcade", "reflex"],
    },
    {
      title: "Centipede",
      description: "Shoot the descending centipede while dodging spiders and fleas.",
      link: "https://www.retrogames.cc/arcade-games/centipede.html",
      tags: ["retro", "arcade", "shooter"],
    },
    {
      title: "Missile Command",
      description: "Intercept ballistic missiles before they annihilate your cities.",
      link: "https://www.retrogames.cc/arcade-games/missile-command.html",
      tags: ["retro", "arcade", "strategy"],
    },
    {
      title: "Donkey Kong",
      description: "Climb ladders and dodge barrels to rescue the princess from the ape.",
      link: "https://www.retrogames.cc/arcade-games/donkey-kong.html",
      tags: ["retro", "arcade", "platformer"],
    },
    {
      title: "Dig Dug",
      description: "Drill tunnels and inflate monsters in this underground classic.",
      link: "https://www.retrogames.cc/arcade-games/dig-dug.html",
      tags: ["retro", "arcade", "puzzle"],
    },
    {
      title: "Q*bert",
      description: "Hop on cubes to change their colour while dodging snakes and balls.",
      link: "https://www.retrogames.cc/arcade-games/qbert.html",
      tags: ["retro", "arcade", "puzzle"],
    },
    {
      title: "Breakout",
      description: "Bounce the ball to smash every brick off the screen in this Atari gem.",
      link: "https://www.retrogames.cc/arcade-games/breakout.html",
      tags: ["retro", "arcade", "reflex"],
    },
    {
      title: "Bubble Bobble",
      description: "Trap enemies in bubbles and pop them to clear each stage.",
      link: "https://www.retrogames.cc/arcade-games/bubble-bobble.html",
      tags: ["retro", "arcade", "platformer"],
    },
    {
      title: "Ms. Pac-Man",
      description: "The iconic sequel with new mazes, faster ghosts, and a bow on top.",
      link: "https://www.retrogames.cc/arcade-games/ms-pac-man.html",
      tags: ["retro", "arcade", "classic"],
    },
    {
      title: "Super Mario Bros",
      description: "Run, jump, and stomp through the Mushroom Kingdom to save Princess Peach.",
      link: "https://supermariobros.io/",
      embedUrl: "https://supermariobros.io/",
      tags: ["retro", "nes", "platformer"],
    },
    {
      title: "Contra",
      description: "Run-and-gun your way through alien hordes in this NES co-op classic.",
      link: "https://www.retrogames.cc/nes-games/contra.html",
      tags: ["retro", "nes", "shooter"],
    },
    {
      title: "Mega Man",
      description: "Choose your stage, defeat robot masters, and steal their powers.",
      link: "https://www.retrogames.cc/nes-games/mega-man.html",
      tags: ["retro", "nes", "platformer"],
    },
    {
      title: "Castlevania",
      description: "Whip your way through Dracula's castle in this gothic action classic.",
      link: "https://www.retrogames.cc/nes-games/castlevania.html",
      tags: ["retro", "nes", "action"],
    },
    {
      title: "Bomberman",
      description: "Drop bombs strategically to blast enemies and clear the maze.",
      link: "https://www.retrogames.cc/nes-games/bomberman.html",
      tags: ["retro", "nes", "strategy"],
    },
    {
      title: "Excitebike",
      description: "Race motorcycles, time your ramps, and watch your engine temperature.",
      link: "https://www.retrogames.cc/nes-games/excitebike.html",
      tags: ["retro", "nes", "racing"],
    },
    {
      title: "Punch-Out!!",
      description: "Learn each boxer's patterns and punch your way to the championship belt.",
      link: "https://www.retrogames.cc/nes-games/mike-tyson-s-punchout.html",
      tags: ["retro", "nes", "fighting"],
    },
    {
      title: "Street Fighter II",
      description: "Choose your fighter and battle world warriors in this SNES fighting legend.",
      link: "https://www.retrogames.cc/snes-games/street-fighter-ii-snes.html",
      tags: ["retro", "snes", "fighting"],
    },
    {
      title: "Mortal Kombat",
      description: "Finish him! Brutal tournament fighting with iconic special moves.",
      link: "https://www.retrogames.cc/snes-games/mortal-kombat.html",
      tags: ["retro", "snes", "fighting"],
    },
    {
      title: "Duck Hunt",
      description: "Take aim and shoot ducks out of the sky before the dog laughs at you.",
      link: "https://duckhuntjs.com/",
      embedUrl: "https://duckhuntjs.com/",
      tags: ["retro", "nes", "shooter"],
    },
    {
      title: "Defender",
      description: "Protect humanoids from alien abduction across a scrolling planet surface.",
      link: "https://www.retrogames.cc/arcade-games/defender.html",
      tags: ["retro", "arcade", "shooter"],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, music, playground };
