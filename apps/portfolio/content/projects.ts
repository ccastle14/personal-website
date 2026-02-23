export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  image?: string;
  overview?: string;
  problem?: string;
  architecture?: string;
  implementationDetails?: string;
  challenges?: string;
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "raspberry-pi-birthday-display",
    title: "Raspberry Pi E-Ink Birthday Display",
    description:
      "An e-ink display that syncs with Google Calendar to show upcoming birthdays.",
    tags: ["Raspberry Pi", "Python", "Google API", "Hardware"],
    featured: true,
    image: "/projects/bday.jpg",
    overview:
      "A Raspberry Pi powered e-ink display that automatically fetches upcoming birthdays from Google Calendar and displays them in a minimal, always-on interface. The display updates nightly and uses very little power, making it perfect for desk or shelf placement.",
    problem:
      "Wanted a physical reminder of upcoming birthdays, and e-ink displays are nice and low-power.",
    architecture: "Raspberry Pi Zero → Python script (cron) → Google Calendar API → Waveshare e-ink display",
    implementationDetails:
      "Uses the Google Calendar API to fetch events, filters for birthdays, and renders them with Pillow before pushing to the display. Custom cron job handles nightly refreshes.",
    challenges:
      "Ensuring auth would consistently work for months without manual intervention was tricky. I had to implement token refreshing and robust error handling to avoid the display breaking when tokens expired.",
    links: {
      github: "https://github.com/ccastle14/birthday-pi/",
      // video: "https://youtube.com/...",
    },
  },
  {
    slug: "taco-bell-fm-synthesis",
    title: "Taco Bell Chime via FM Synthesis",
    description:
      "Recreating the iconic Taco Bell chime using raw electronics and FM synthesis techniques.",
    tags: ["Electronics", "Audio"],
    featured: true,
    image: "/projects/tacobellv1.jpg",
    overview:
      "An exploration in audio synthesis—specifically recreating the famous Taco Bell bell sound from scratch using FM synthesis principles. The goal was to understand how simple oscillators can combine to create recognizable complex tones.",
    problem:
      "Wanted to perform synthesis on a breadboard and build something can produce a recognizable sound.",
    implementationDetails:
      "Two 555 timer oscillators with frequency modulation, carefully tuned carrier and modulator frequencies. Envelope shaping for realistic note behavior.",
    challenges:
      "This project is what finally got me to break down and buy a multimeter for real electronic debugging.",
    // links: {
      // demo: "https://youtube.com/...",
    // },
  },
];
