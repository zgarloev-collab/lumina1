import type { CSSProperties } from 'react'
import { getSection, html } from '@/lib/altai-template'
import { AltaiIcon } from './icon'

export function AltaiFeatures() {
  const { settings: s, blocks } = getSection('features')

  return (
    <section className="altai-section altai-pad" aria-labelledby="altai-features-title">
      <div className="altai-container">
        <header className="altai-section-head" data-altai-reveal>
          <p className="altai-eyebrow">{s.eyebrow}</p>
          <h2 className="altai-heading altai-h2" id="altai-features-title" dangerouslySetInnerHTML={html(s.heading)} />
          <p className="altai-lede" dangerouslySetInnerHTML={html(s.subheading)} />
        </header>

        <div className="altai-features">
          {blocks.map((block, index) => (
            <article
              key={block.id}
              className="altai-feature"
              data-altai-reveal
              style={{ '--altai-delay': `${index * 0.12}s` } as CSSProperties}
            >
              <div className="altai-feature__top">
                <span className="altai-feature__icon">
                  <AltaiIcon name={String(block.settings.icon)} />
                </span>
                <span className="altai-feature__num" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3 className="altai-heading altai-h3">{block.settings.title}</h3>
              <p dangerouslySetInnerHTML={html(block.settings.text)} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
