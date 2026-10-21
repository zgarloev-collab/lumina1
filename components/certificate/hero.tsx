export function CertHero() {
  return (
    <header className="relative flex min-h-[55vh] items-center overflow-hidden bg-[#1E2522]">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/altai-hero.png"
          alt="Pristine Altay Mountains at dawn"
          width={1920}
          height={1080}
          loading="eager"
          className="altai-hero-zoom size-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(30,37,34,0.55) 0%, rgba(30,37,34,0.65) 40%, rgba(30,37,34,0.92) 100%)',
        }}
      />
      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
        <div className="altai-hero-fade max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Verified &amp; Compliant
          </p>
          <h1
            className="font-serif text-[2.5rem] font-semibold leading-[1.05] text-[#F4F6F4] sm:text-5xl lg:text-[4rem]"
            style={{ textWrap: 'balance' }}
          >
            Government Certified
            <br />
            <span className="italic text-[#D4AF37]">Quality &amp; Purity</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#F4F6F4]/75 sm:text-lg"
            style={{ textWrap: 'pretty' }}
          >
            Absolute transparency you can trust. Our Altay Shilajit complies with strict state
            regulations, biological safety acts, and manufacturing standards. View our official
            compliance documents below.
          </p>
        </div>
      </div>
    </header>
  )
}
