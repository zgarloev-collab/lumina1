import type { CSSProperties } from 'react'
import { getSection, html } from '@/lib/altai-template'
import { AltaiIcon } from './icon'

export function AltaiRitual() {
  const { settings: s, blocks } = getSection('ritual')

  return (
    <section className="altai-section altai-pad" id="altai-ritual" aria-labelledby="altai-ritual-title">
      <div className="altai-container">
        <header className="altai-section-head" data-altai-reveal>
          <p className="altai-eyebrow">{s.eyebrow}</p>
          <h2 className="altai-heading altai-h2" id="altai-ritual-title" dangerouslySetInnerHTML={html(s.heading)} />
          <p className="altai-lede" dangerouslySetInnerHTML={html(s.subheading)} />
        </header>

        <ol className="altai-steps">
          {blocks.map((block, index) => (
            <li
              key={block.id}
              className="altai-step"
              data-altai-reveal
              style={{ '--altai-delay': `${index * 0.12}s` } as CSSProperties}
            >
              <span className="altai-step__num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="altai-heading altai-h3">{block.settings.title}</h3>
              <p dangerouslySetInnerHTML={html(block.settings.text)} />
              <span className="altai-step__meta">{block.settings.meta}</span>
            </li>
          ))}
        </ol>

        <div className="altai-ritual__note" data-altai-reveal>
          <p dangerouslySetInnerHTML={html(s.note)} />
          <a className="altai-btn" href="#altai-shop">
            {s.button_label}
            <AltaiIcon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
