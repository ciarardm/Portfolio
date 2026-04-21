import type { SkillGroup } from "@/types"

export const skillGroups: SkillGroup[] = [
  {
    category: "Manual Testing",
    color: "#FFBE0B",
    items: [
      { name: "Functional" },
      { name: "Regression" },
      { name: "Smoke" },
      { name: "UAT" },
    ],
  },
  {
    category: "Automation Testing",
    color: "#FB5607",
    items: [
      { name: "Cypress" },
      { name: "WebdriverIO (JavaScript)" },
      { name: "Selenium (Java)" },
    ],
  },
  {
    category: "API Testing",
    color: "#FF006E",
    items: [{ name: "Postman" }],
  },
  {
    category: "Bug & Test Management",
    color: "#8338EC",
    items: [{ name: "Azure DevOps" }],
  },
  {
    category: "Accessibility Testing",
    color: "#3A86FF",
    items: [{ name: "WCAG" }, { name: "NVDA" }, { name: "axe DevTools" }],
  },
  {
    category: "Database Validation",
    color: "#FFBE0B",
    items: [{ name: "Basic SQL" }],
  },
  {
    category: "Scripting Languages",
    color: "#FB5607",
    items: [{ name: "JavaScript" }, { name: "Java" }],
  },
  {
    category: "AI-assisted Development",
    color: "#FF006E",
    items: [{ name: "GitHub Copilot" }],
  },
]
