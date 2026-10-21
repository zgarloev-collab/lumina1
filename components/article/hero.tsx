export function ArticleHero() {
  return (
    <header className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#1E2522]">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/altai-hero.png"
          alt="Misty snow-capped Altay Mountains at dawn"
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
            'linear-gradient(180deg, rgba(30,37,34,0.5) 0%, rgba(30,37,34,0.6) 40%, rgba(30,37,34,0.95) 100%)',
        }}
      />
      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="altai-hero-fade max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Science-Backed Comparison
          </p>
          <h1
            className="font-serif text-[2.5rem] font-semibold leading-[1.05] text-[#F4F6F4] sm:text-5xl lg:text-[4rem]"
            style={{ textWrap: 'balance' }}
          >
            Altay vs. Himalayan Shilajit:
            <br />
            <span className="italic text-[#D4AF37]">Why Siberia Beats Tibet</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#F4F6F4]/75 sm:text-lg"
            style={{ textWrap: 'pretty' }}
          >
            An honest comparison of nutrient profiles, purity standards, harvest environments, and
            value between the world&rsquo;s top two shilajit sources.
          </p>
        </div>
      </div>
    </header>
  )
}
