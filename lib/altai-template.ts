import template from '@/shopify-theme/templates/page.altai-shilajit.json'

type Settings = Record<string, string | number | boolean | undefined>

export interface Block {
  id: string
  type: string
  settings: Settings
}

interface RawSection {
  type: string
  settings: Settings
  blocks?: Record<string, { type: string; settings: Settings }>
  block_order?: string[]
}

export interface Section {
  settings: Record<string, string>
  blocks: Block[]
}

const sections = template.sections as unknown as Record<string, RawSection>

export function getSection(key: keyof typeof template.sections): Section {
  const raw = sections[key]
  const blocks = (raw.block_order ?? []).map((id) => ({
    id,
    type: raw.blocks![id].type,
    settings: raw.blocks![id].settings,
  }))
  return { settings: raw.settings as Record<string, string>, blocks }
}

/** Mirrors Liquid's `inline_richtext` / `richtext` output (trusted, theme-authored HTML). */
export const html = (value: unknown) => ({ __html: String(value ?? '') })
