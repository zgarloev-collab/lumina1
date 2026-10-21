import { Reveal } from '@/components/altai/reveal'
import { AltaiIcon } from '@/components/altai/icon'

interface Cert {
  tag: string
  title: string
  authority: string
  regLabel: string
  regNo: string
  keyFact: string
  button: string
}

const certs: Cert[] = [
  {
    tag: 'Food Safety Standard',
    title: 'State Registration Certificate (SGR)',
    authority: 'Federal Service for Surveillance on Consumer Rights Protection and Human Wellbeing (Rospotrebnadzor)',
    regLabel: 'Registration No',
    regNo: 'RU.77.99.88.003.E.007002.06.15',
    keyFact:
      'Officially registered as a safe, biological food supplement and a verified source of natural humic acids. Fully compliant with Customs Union Technical Regulations (TR CU 021/2011, TR CU 022/2011).',
    button: 'View Compliance Details',
  },
  {
    tag: 'Quality Assurance',
    title: 'GOST R Certificate of Conformity',
    authority: 'Federal Agency on Technical Regulating and Metrology',
    regLabel: 'Certificate No',
    regNo: 'POCC RU.AB57.H02731',
    keyFact:
      'Confirms that the purified Altay Shilajit (Mumiyo) meets strict sanitary-epidemiological, hygienic, and state quality standards (GOST R 51074-2003). Tested by accredited testing centers.',
    button: 'View Quality Assurance',
  },
  {
    tag: 'Regulatory Compliance',
    title: 'Eurasian Economic Union Declaration of Conformity',
    authority: 'Accredited Testing Laboratory Network',
    regLabel: 'Registration No',
    regNo: 'EAEU N RU D-RU.HB42.B.11652/20',
    keyFact:
      'Formally declares and verifies food production safety requirements, handling, and ingredient transparency under the strict protocols of the Eurasian Economic Union.',
    button: 'View Declaration Specs',
  },
]

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  return (
    <Reveal
      key={cert.title}
      delay={index * 0.12}
      as="article"
      className="group flex flex-col overflow-hidden rounded-sm border border-[#1E2522]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_-20px_rgba(30,37,34,0.2)]"
    >
      {/* Document placeholder image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1E2522]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'linear-gradient(160deg, rgba(30,37,34,0.9) 0%, rgba(20,24,22,0.95) 100%)',
          }}
        >
          <div className="flex size-16 items-center justify-center rounded-full border border-[#D4AF37]/30">
            <AltaiIcon name="shield" className="size-7 text-[#D4AF37]" />
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/40 bg-[#1E2522]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37] backdrop-blur-sm">
          {cert.tag}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-4 p-7">
        <h3 className="font-serif text-xl font-semibold leading-snug text-[#1E2522]">
          {cert.title}
        </h3>

        <div className="flex flex-col gap-2 text-sm">
          <div>
            <span className="font-medium text-[#1E2522]/60">Authority: </span>
            <span className="text-[#1E2522]/80">{cert.authority}</span>
          </div>
          <div>
            <span className="font-medium text-[#1E2522]/60">{cert.regLabel}: </span>
            <span className="font-mono text-xs text-[#1E2522]/80">{cert.regNo}</span>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-[#1E2522]/70" style={{ textWrap: 'pretty' }}>
          {cert.keyFact}
        </p>

        <button
          type="button"
          className="group/btn mt-auto flex items-center gap-2 self-start border-b border-[#1E2522]/20 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2522] transition-colors hover:border-[#D4AF37] hover:text-[#B08C22]"
        >
          {cert.button}
          <AltaiIcon
            name="arrow"
            className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </Reveal>
  )
}

export function CertGrid() {
  return (
    <section className="bg-[#F4F6F4] py-20 lg:py-28" aria-label="Certificates and Compliance">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
            <span className="h-px w-8 bg-[#B08C22]" />
            Official Documentation
            <span className="h-px w-8 bg-[#B08C22]" />
          </p>
          <h2
            className="font-serif text-[2rem] font-semibold leading-tight text-[#1E2522] sm:text-4xl lg:text-[2.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Verified <span className="italic text-[#B08C22]">Credentials</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
