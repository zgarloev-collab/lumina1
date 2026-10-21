import { Reveal } from '@/components/altai/reveal'

interface Row {
  criteria: string
  altay: string
  himalayan: string
}

const rows: Row[] = [
  {
    criteria: 'Altitude & Ecosystem',
    altay:
      'Harvested at 2,000\u20133,500m in Siberia\u2019s untouched wilderness, surrounded by dense, rich medicinal flora (Rhodiola, cedars).',
    himalayan:
      'Harvested at 3,000\u20135,000m. Higher altitude, but sparse vegetation due to thin air and rocky terrain.',
  },
  {
    criteria: 'Fulvic Acid Concentration',
    altay:
      'Extremely high (up to 60\u201370%) due to unique fermentation of Siberian endemic plants.',
    himalayan:
      'High (typically 40\u201350%), but heavily fluctuates depending on the region (India, Nepal, Pakistan).',
  },
  {
    criteria: 'Environmental Purity',
    altay:
      'The Altay region is one of the most remote and eco-pristine places on Earth. Zero risk of heavy industrial pollution.',
    himalayan:
      'Bordered by heavily populated and industrialized Asian regions; higher risk of heavy metal precipitation.',
  },
  {
    criteria: 'Price per Gram',
    altay:
      'Fair and affordable. No massive middleman costs or inflated \u201cexotic import\u201d marketing premiums.',
    himalayan:
      'Overpriced. The cost is highly inflated due to complex import logistics and aggressive branding.',
  },
  {
    criteria: 'Taste & Texture',
    altay:
      'Deeper, smoother, resinous flavor with subtle herbal undertones. Purified quickly using low-temp filtration.',
    himalayan:
      'Often carries a harsher, smoky, or tar-like aftertaste depending on traditional open-fire drying methods.',
  },
]

function MobileCards() {
  return (
    <div className="flex flex-col gap-5 lg:hidden">
      {rows.map((row, index) => (
        <Reveal
          key={row.criteria}
          delay={(index % 2) * 0.08}
          as="article"
          className="rounded-sm border border-[#1E2522]/10 bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4 font-serif text-lg font-semibold text-[#1E2522]">{row.criteria}</h3>
          <div className="space-y-4">
            <div className="rounded-sm border-l-2 border-[#D4AF37] bg-[#D4AF37]/[0.04] p-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#B08C22]">
                Altay
              </p>
              <p className="text-sm leading-relaxed text-[#1E2522]/80">{row.altay}</p>
            </div>
            <div className="rounded-sm border-l-2 border-[#1E2522]/20 bg-[#1E2522]/[0.02] p-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2522]/50">
                Himalayan
              </p>
              <p className="text-sm leading-relaxed text-[#1E2522]/70">{row.himalayan}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

function DesktopTable() {
  return (
    <div className="hidden lg:block">
      <div className="overflow-hidden rounded-sm border border-[#1E2522]/10 shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-[22%] bg-[#1E2522] px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#F4F6F4]">
                Comparison Criteria
              </th>
              <th className="w-[39%] bg-[#1E2522] px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Altay Shilajit (Mumiyo)
              </th>
              <th className="w-[39%] bg-[#1E2522] px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#F4F6F4]/60">
                Himalayan Shilajit
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.criteria}
                className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F6F4]'}
              >
                <td className="border-t border-[#1E2522]/10 px-6 py-5 align-top">
                  <span className="font-serif text-base font-semibold text-[#1E2522]">
                    {row.criteria}
                  </span>
                </td>
                <td className="border-t border-[#1E2522]/10 bg-[#D4AF37]/[0.03] px-6 py-5 align-top">
                  <p className="text-sm leading-relaxed text-[#1E2522]/85">{row.altay}</p>
                </td>
                <td className="border-t border-[#1E2522]/10 px-6 py-5 align-top">
                  <p className="text-sm leading-relaxed text-[#1E2522]/70">{row.himalayan}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section className="bg-[#F4F6F4] py-20 lg:py-28" aria-label="Comparison Table">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
            <span className="h-px w-8 bg-[#B08C22]" />
            Side by Side
            <span className="h-px w-8 bg-[#B08C22]" />
          </p>
          <h2
            className="font-serif text-[2rem] font-semibold leading-tight text-[#1E2522] sm:text-4xl lg:text-[2.75rem]"
            style={{ textWrap: 'balance' }}
          >
            The Full <span className="italic text-[#B08C22]">Comparison</span>
          </h2>
        </Reveal>

        <DesktopTable />
        <MobileCards />
      </div>
    </section>
  )
}
