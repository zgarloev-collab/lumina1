import Link from 'next/link'
import { getSection, html } from '@/lib/altai-template'
import { AltaiIcon } from './icon'

export function AltaiHero() {
  const { settings: s } = getSection('hero')
  const usps = [s.usp_1, s.usp_2, s.usp_3].filter(Boolean)
  const stats = [1, 2, 3]
    .map((i) => ({ value: s[`stat_${i}_value`], label: s[`stat_${i}_label`] }))
    .filter((stat) => stat.value)

  return (
    <section className="altai-section altai-hero" aria-labelledby="altai-hero-title">
      <div className="altai-hero__media">
        <img
          src="/images/altai-hero.png"
          alt="Snow-capped Altai mountain peaks above a turquoise glacial river in morning mist"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      <div className="altai-container altai-hero__inner">
        <div className="altai-hero__content" data-altai-reveal>
          <p className="altai-eyebrow">{s.eyebrow}</p>
          <h1 className="altai-heading altai-h1" id="altai-hero-title" dangerouslySetInnerHTML={html(s.heading)} />
          <p className="altai-lede" dangerouslySetInnerHTML={html(s.subheading)} />

          <ul className="altai-hero__usps" aria-label="Key benefits">
            {usps.map((usp) => (
              <li key={usp}>{usp}</li>
            ))}
          </ul>

          <div className="altai-hero__actions">
            <Link className="altai-btn" href="/shop">
              {s.button_label}
              <AltaiIcon name="arrow" />
            </Link>
            <a className="altai-link" href={s.secondary_link}>
              {s.secondary_label}
            </a>
          </div>

          <ul className="altai-hero__trust" role="list">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
