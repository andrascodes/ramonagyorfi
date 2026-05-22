import type { PageContent } from "../types";

const aboutMe: PageContent = {
  slug: "about-me",
  meta: {
    title: "About Me — Ramona Gyorfi | Sport, Performance & Psychology",
    description:
      "Ramona Gyorfi is a sport psychologist with a background in competitive sport and cross-cultural experience.",
  },
  pageBg: "olive",
  sections: [
    {
      kind: "prose",
      heading: "About Me",
      headingSize: "page",
      image: {
        src: "/images/portrait-2.jpg",
        alt: "Ramona Gyorfi with her road bike",
        width: 1200,
        height: 1500,
      },
      imagePosition: "right",
      body: [
        "I grew up in Hungary, but it was during high school at UWC Adriatic in Italy that my worldview began to expand. There, I first experienced the richness and complexity of international living. An experience that sparked a deep interest in how we adapt, perform, and find belonging across cultures.",
        "I later moved to the US., where I earned my Bachelor's degree in Psychology, Sociology, and Anthropology at Lake Forest College in Illinois. Eventually, I relocated to Germany and completed a Master's in Sport and Exercise Psychology at the German Sport University Cologne, a step that brought my passion for people, performance, and well-being into focus.",
        "My connection to sport began with a moment of childhood jealousy. When my older brother came home from a football tournament wearing a medal, I wanted one too. So, I joined the local U7 boys' team as the only girl. I still remember the joy of scoring my first goal. Sport quickly became a core part of my life. But like many athletes, I also faced challenges along the way: injuries, feeling left out, adjusting to new teams and cultures. These experiences taught me that while sport can be incredibly rewarding, it's also emotionally complex, and that mental performance and personal well-being are deeply interconnected.",
      ],
      afterBody: [
        "More recently, I've been exploring road cycling, which has given me a deeper appreciation for the unique mental demands of endurance sports. Experiencing the highs and lows from the saddle has added a fresh and personal perspective to the work I do.",
        "While much of my work is with athletes, my practice extends beyond the field. I help coaches and parents who are navigating the emotional demands of supporting others, as well as high performers outside of sport who are experiencing stress, pressure, or burnout. I also work with those living abroad, who are facing the emotional complexities of starting over, adapting, and finding their place in a new culture.",
        "In my work, I draw on evidence-based approaches such as Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), always tailoring them to the individual's needs. My work is grounded in the belief that human performance doesn't happen in isolation; it's shaped by emotion, identity, culture, and connection.",
        "No matter your role, I'm here to support you in showing up more fully for yourself, your goals, and the people around you.",
      ],
      cta: { label: "Get in Touch", href: "/en/contact", variant: "outlineLight" },
    },
  ],
};

export default aboutMe;
