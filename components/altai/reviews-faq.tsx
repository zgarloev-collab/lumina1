import type { CSSProperties } from 'react'
import { getSection, html } from '@/lib/altai-template'
import { AltaiIcon } from './icon'

function Stars({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <AltaiIcon key={i} name="star" />
      ))}
    </>
  )
}

export function AltaiReviewsFaq() {
  const { settings: s, blocks } = getSection('reviews_faq')
  const reviews = blocks.filter((b) => b.type === 'review')
  const faqs = blocks.filter((b) => b.type === 'faq')

  return (
    <section className="altai-section altai-section--dark altai-pad" aria-labelledby="altai-reviews-title">
      <div className="altai-container">
        <header className="altai-section-head" data-altai-reveal>
          <p className="altai-eyebrow">{s.eyebrow}</p>
          <h2 className="altai-heading altai-h2" id="altai-reviews-title" dangerouslySetInnerHTML={html(s.heading)} />
          <p className="altai-rating">
            <span className="altai-stars" aria-hidden="true">
              <Stars count={5} />
            </span>
            {s.rating_text}
          </p>
        </header>

        <div className="altai-reviews">
          {reviews.map((review, index) => {
            const rating = Number(review.settings.rating)
            return (
              <figure
                key={review.id}
                className="altai-review"
                data-altai-reveal
                style={{ '--altai-delay': `${(index % 3) * 0.1}s` } as CSSProperties}
              >
                <span className="altai-stars" role="img" aria-label={`Rated ${rating} out of 5`}>
                  <Stars count={rating} />
                </span>
                <blockquote dangerouslySetInnerHTML={html(review.settings.quote)} />
                <figcaption>
                  <strong>{review.settings.author}</strong>
                  <span>{review.settings.detail}</span>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <div className="altai-faq-wrap">
          <div data-altai-reveal>
            <p className="altai-eyebrow">{s.faq_eyebrow}</p>
            <h2 className="altai-heading altai-h2" dangerouslySetInnerHTML={html(s.faq_heading)} />
            <p className="altai-lede" dangerouslySetInnerHTML={html(s.faq_text)} />
          </div>

          <div className="altai-faq" data-altai-faq data-altai-reveal>
            {faqs.map((faq, index) => (
              <details key={faq.id} open={index === 0}>
                <summary>
                  {faq.settings.question}
                  <span className="altai-faq__icon" aria-hidden="true" />
                </summary>
                <div className="altai-faq__answer" dangerouslySetInnerHTML={html(faq.settings.answer)} />
              </details>
            ))}
          </div>
        </div>

        <div className="altai-closing" id="altai-shop" data-altai-reveal>
          <h2 className="altai-heading altai-h2" dangerouslySetInnerHTML={html(s.closing_heading)} />
          <p className="altai-lede" dangerouslySetInnerHTML={html(s.closing_text)} />
          <a className="altai-btn" href="#altai-shop">
            {s.button_label}
            <AltaiIcon name="arrow" />
          </a>
          <small>{s.disclaimer}</small>
        </div>
      </div>
    </section>
  )
}
