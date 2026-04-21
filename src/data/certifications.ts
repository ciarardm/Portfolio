import type { Training, Education } from "@/types"

export const trainings: Training[] = [
  {
    name: "Web Content Accessibility Guidelines (WCAG)",
    type: "training",
    color: "#3A86FF",
  },
  {
    name: "Tricentis TOSCA",
    type: "training",
    color: "#8338EC",
  },
  {
    name: "Selenium",
    type: "training",
    color: "#FB5607",
  },
  {
    name: "Accessibility Champion",
    type: "certification",
    color: "#FF006E",
  },
  {
    name: "Cypress",
    type: "training",
    color: "#FFBE0B",
  },
]

export const education: Education = {
  institution: "Cavite State University",
  campus: "Silang Campus",
  degree: "Bachelor of Science",
  field: "Information Technology",
  startYear: 2017,
  endYear: 2022,
  activity: "Secretary, Information Technology Student Society",
}
