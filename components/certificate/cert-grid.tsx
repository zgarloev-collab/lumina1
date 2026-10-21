import { Reveal } from '@/components/altai/reveal'
import { AltaiIcon } from '@/components/altai/icon'

interface Cert {
  tag: string
  title: string
  authority: string
  regLabel: string
  regNo: string
  keyFact: string
  imagePath: string
  imageAlt: string
  downloadName: string
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
    imagePath: '/assets/certificates/S00001.jpg',
    imageAlt: 'Official State Registration Certificate for Altay Shilajit',
    downloadName: 'sgr-cert.jpg',
  },
  {
    tag: 'Quality Assurance',
    title: 'GOST R Certificate of Conformity',
    authority: 'Federal Agency on Technical Regulating and Metrology',
    regLabel: 'Certificate No',
    regNo: 'POCC RU.AB57.H02731',
    keyFact:
      'Confirms that the purified Altay Shilajit (Mumiyo) meets strict sanitary-epidemiological, hygienic, and state quality standards (GOST R 51074-2003). Tested by accredited testing centers.',
    imagePath: '/assets/certificates/979_original.jpg',
    imageAlt: 'Official GOST R Certificate of Conformity for Altay Shilajit',
    downloadName: 'gost-cert.jpg',
  },
  {
    tag: 'Regulatory Compliance',
    title: 'Eurasian Economic Union Declaration of Conformity',
    authority: 'Accredited Testing Laboratory Network',
    regLabel: 'Registration No',
    regNo: 'EAEU N RU D-RU.HB42.B.11652/20',
    keyFact:
      'Formally declares and verifies food production safety requirements, handling, and ingredient transparency under the strict protocols of the Eurasian Economic Union.',
    imagePath: '/assets/certificates/88.970.jpg',
    imageAlt: 'Official EAEU Declaration of Conformity for Altay Shilajit',
    downloadName: 'eaeu-decl.jpg',
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
      <a
        href={cert.imagePath}
        download={cert.downloadName}
        className="relative block aspect-[16/10] overflow-hidden bg-[#1E2522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
        aria-label={`Download ${cert.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cert.imagePath}
          alt={cert.imageAlt}
          width={900}
          height={1200}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-[#1E2522]/0 transition-colors duration-300 group-hover:bg-[#1E2522]/10" />
        <span className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/40 bg-[#1E2522]/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37] backdrop-blur-sm">
          {cert.tag}
        </span>
      </a>

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

        <a
          href={cert.imagePath}
          download={cert.downloadName}
          className="group/btn mt-auto flex items-center gap-2 self-start border-b border-[#1E2522]/20 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E2522] transition-colors hover:border-[#D4AF37] hover:text-[#B08C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4"
        >
          Download Original File
          <AltaiIcon
            name="arrow"
            className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
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
