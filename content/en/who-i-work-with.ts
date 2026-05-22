import type { PageContent } from "../types";

const whoIWorkWith: PageContent = {
  slug: "who-i-work-with",
  meta: {
    title: "Clients — Ramona Gyorfi | Sport, Performance & Psychology",
    description:
      "Mental performance and psychological support for athletes, high performers, internationals, coaches, parents, and teams.",
  },
  pageBg: "cream",
  sections: [
    {
      kind: "expandableList",
      heading: "Support for…",
      items: [
        {
          id: "athletes",
          title: "Athletes",
          body: [
            "Preparing for competition and feeling pressure or anxiety",
            "Returning from injury and struggling to reconnect",
            "Losing motivation or questioning your identity as an athlete",
            "Performing well physically, but mentally feeling stuck or overwhelmed",
            "Facing burnout, fear of failure, or negative self-talk",
            "Wanting to improve focus, routines, or emotional control",
            "Playing or training internationally and navigating the added emotional challenges of living and performing away from home",
          ],
        },
        {
          id: "high-performers",
          title: "High Performers",
          body: [
            "Feeling burned out or stressed",
            "Struggling with perfectionism, or self-doubt",
            "Finding it hard to disconnect or maintain balance",
            "Wanting to clarify your goals, values, or motivation",
            "Facing a transition or needing support through change",
            "Seeking tools to improve confidence, clarity, and decision-making",
          ],
        },
        {
          id: "internationals",
          title: "International Students & Expats",
          body: [
            "Experiencing culture shock, loneliness, or homesickness",
            "Feeling disconnected from your environment or yourself",
            "Under pressure to succeed while adjusting to a new culture",
            "Struggling to balance old and new identities",
            "Missing emotional support while building a life away from home",
            "Needing tools to feel resilient in transition",
          ],
        },
        {
          id: "coaches",
          title: "Coaches",
          body: [
            "Navigating the stress and pressure of leading a team",
            "Wanting to support your athletes' mental health more effectively",
            "Struggling with motivation, team dynamics, or communication",
            "Feeling emotionally drained or at risk of burnout",
            "Seeking a confidential space to reflect on challenges in your role",
            "Looking to integrate mental skills into your coaching style",
          ],
        },
        {
          id: "parents",
          title: "Parents of Athletes or Internationals",
          body: [
            "Struggling to support your child's mental well-being from a distance",
            "Feeling anxious, helpless, or uncertain as they face challenges",
            "Navigating emotional ups and downs as a sports or international parent",
            "Dealing with communication difficulties or cultural misunderstandings",
            "Wanting tools to better support their independence and resilience",
            "Looking for a space to reflect, process, and strengthen your role as a parent",
          ],
        },
        {
          id: "teams",
          title: "Teams, Clubs and Organizations",
          body: [
            "Preparing for a high-pressure season or tournament",
            "Wanting to improve team dynamics, cohesion, or trust",
            "Navigating performance slumps, tension, or mental fatigue",
            "Looking to integrate mental skills training into your regular program",
            "Supporting athletes' well-being as a key part of performance",
            "Seeking external, professional support for emotional or cultural challenges within the team",
          ],
        },
      ],
    },
    { kind: "cta", label: "Contact Ramona", href: "/en/contact", variant: "outline" },
  ],
};

export default whoIWorkWith;
