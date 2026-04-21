export type SectionId = "hero" | "skills" | "experience" | "certifications" | "contact"

export type NavItem = {
  label: string
  id: SectionId
  href: string
}

export type SkillItem = {
  name: string
}

export type SkillGroup = {
  category: string
  color: string
  items: SkillItem[]
}

export type Experience = {
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  bullets: string[]
}

export type Training = {
  name: string
  type: "certification" | "training"
  color: string
}

export type Education = {
  institution: string
  campus: string
  degree: string
  field: string
  startYear: number
  endYear: number
  activity: string
}
