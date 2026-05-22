import type { PageContent } from "../types";

const home: PageContent = {
  slug: "home",
  meta: {
    title: "Ramona Gyorfi | Sport, Performance & Psychology",
    description:
      "Psychological and performance support for those navigating pressure, high expectations, or major life transitions.",
  },
  pageBg: "cream",
  sections: [
    {
      kind: "hero",
      tagline:
        "Psychological and performance support for those navigating pressure, high expectations, or major life transitions",
      bgVideo: {
        src: "/video/hero.mp4",
        poster: "/images/hero-still.jpg",
      },
    },
    {
      kind: "prose",
      heading: "Welcome!",
      headingSize: "inline",
      image: {
        src: "/images/portrait-1.jpg",
        alt: "Ramona Gyorfi with a football",
        width: 1200,
        height: 1500,
      },
      imagePosition: "left",
      body: [
        "**I'm Ramona, a sport psychologist with a background in competitive sport and cross-cultural experience.**",
        "I help individuals and teams strengthen their mental game, manage stress, and navigate personal and professional transitions. My approach is holistic and evidence-based, grounded in the belief that **performance and well-being are deeply connected**.",
        "Whether you're feeling stuck, overwhelmed, or disconnected from yourself or your performance, I offer a compassionate and structured space to process what you're experiencing and move forward.",
        "Together, we will clarify what matters to you, define meaningful goals, and build the skills you need to thrive in your sport and your life.",
      ],
      cta: { label: "More about Ramona", href: "/en/about-me", variant: "outline" },
    },
    {
      kind: "serviceCarousel",
      heading: "Support for…",
      cards: [
        {
          title: "High Performers",
          body: "Professionals or anyone navigating pressure, burnout, and expectations in fast-paced, high-pressure environments.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=high-performers",
            variant: "outlineLight",
          },
        },
        {
          title: "Internationals",
          body: "Individuals living, studying, or performing abroad who are experiencing cultural challenges, stress, and transition difficulties.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=internationals",
            variant: "outlineLight",
          },
        },
        {
          title: "Athletes",
          body: "Athletes working on focus, confidence, or setbacks.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=athletes",
            variant: "outlineLight",
          },
        },
        {
          title: "Parents",
          body: "Parents of athletes or internationals managing stress, expectations, and uncertainty.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=parents",
            variant: "outlineLight",
          },
        },
        {
          title: "Teams",
          body: "Teams aiming to strengthen culture, cohesion, and communication.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=teams",
            variant: "outlineLight",
          },
        },
        {
          title: "Coaches",
          body: "Coaches balancing leadership, athlete development, and the mental load of their role.",
          cta: {
            label: "Learn More",
            href: "/en/who-i-work-with?open=coaches",
            variant: "outlineLight",
          },
        },
      ],
    },
    {
      kind: "blockquote",
      quote:
        "At first, meeting with Ramóna virtually felt a bit unusual, but I quickly got used to it. Over time, it felt completely natural, and I realized I could speak honestly even in this format. Our conversations were always friendly and supportive, which really helped me open up. Now, I overthink things much less and can more easily let go of what used to weigh heavily on me. I don't dwell on everything like I used to. I've noticed real progress in myself. I've become much more open, I no longer get stuck in my thoughts as often, and I'm better able to talk about my emotions.",
      attribution: "Hungarian First Division Women's Football Player",
    },
    {
      kind: "imageWithFeatures",
      tone: "soft",
      heading: "How I Work",
      intro: [
        "I currently work online, offering sessions through a secure video platform. Online sessions provide flexibility and comfort, making it easier to access psychological support no matter where you are. Whether you're living abroad, traveling for sport, or managing a busy schedule, this format allows us to connect consistently without compromising depth or quality. Many clients find it easier to stay committed through this format.",
      ],
      image: {
        src: "/images/portrait-3.jpg",
        alt: "Ramona Gyorfi at work",
        width: 1200,
        height: 1500,
      },
      imagePosition: "left",
      features: [
        {
          title: "Individual Sessions",
          body: "Personalized 1:1 support tailored to your goals and needs.",
        },
        {
          title: "Workshops and Group Sessions",
          body: "Interactive sessions designed to build mental skills, strengthen group communication, and create space for reflection.",
        },
        {
          title: "Team Support and Consulting",
          body: "Ongoing support for teams, clubs, or organizations looking to integrate mental performance and well-being into their culture.",
        },
      ],
      cta: {
        label: "Learn More About Fees",
        href: "/en/fees",
        variant: "outline",
      },
    },
  ],
};

export default home;
