import type { PageContent } from "../types";

const fees: PageContent = {
  slug: "fees",
  meta: {
    title: "Fees — Ramona Gyorfi | Sport, Performance & Psychology",
    description:
      "Session pricing for individuals and teams. Reduced-rate and pro bono options are available.",
  },
  pageBg: "olive",
  sections: [
    {
      kind: "pricingGrid",
      heading: "Fees",
      cards: [
        {
          title: "Individuals",
          bullets: [
            "Including athletes, high performers, internationals, parents, and coaches",
            "16.000 HUF/40 EUR/45 USD per session",
            "Sessions last for 50 minutes",
            "Sessions are held online (unless otherwise agreed) and available in English or Hungarian",
            "Payment is accepted via bank transfer",
          ],
        },
        {
          title: "Teams",
          bullets: [
            "Including sport teams, businesses, organizations, or any group of people who need support",
            "Please contact me directly for a custom quote tailored to your team's needs",
            "Sessions/workshops are held online or in person, and available in English or Hungarian",
            "Payment is accepted via bank transfer",
          ],
        },
      ],
      cta: { label: "Contact", href: "/en/contact", variant: "solid" },
      note: "If you or your team has limited resources, don't hesitate to reach out. I offer a small number of reduced-rate or pro bono sessions each season, depending on availability. To show your interest, [fill out this form](/en/accessibility).",
    },
  ],
};

export default fees;
