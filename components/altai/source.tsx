import type { CSSProperties } from 'react'
import { getSection, html } from '@/lib/altai-template'

export function AltaiSource() {
  const { settings: s } = getSection('source')
  const stats = [1, 2, 3]
    .map((i) => ({ value: s[`stat_${i}_value`], label: s[`stat_${i}_label`] }))
    .filter((stat) => stat.value)

  return (
    <section className="altai-section altai-section--dark altai-pad" aria-labelledby="altai-source-title">
      <div className="altai-container">
        <div className="altai-split">
          <div className="altai-split__media" data-altai-reveal>
            <img
              src="/images/altai-source.png"
              alt="Dark glossy shilajit resin seeping from an ancient mountain rock crevice surrounded by wild Siberian herbs"
              width={1200}
              height={1500}
              loading="lazy"
            />
            <p className="altai-split__badge">
              <strong>{s.badge_value}</strong>
              {s.badge_label}
            </p>
          </div>

          <div className="altai-split__body" data-altai-reveal style={{ '--altai-delay': '0.15s' } as CSSProperties}>
            <p className="altai-eyebrow">{s.eyebrow}</p>
            <h2 className="altai-heading altai-h2" id="altai-source-title" dangerouslySetInnerHTML={html(s.heading)} />
            <div className="altai-rte" dangerouslySetInnerHTML={html(s.text)} />

            <ul className="altai-split__stats" role="list" style={{ listStyle: 'none' }}>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>

            <a className="altai-btn altai-btn--outline" href="#">
              {s.button_label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
