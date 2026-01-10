export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="relative overflow-hidden">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <header className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
              <span className="text-sm font-semibold tracking-wide text-zinc-100">
                growvex
              </span>
            </div>

            <div className="hidden text-sm text-zinc-300 sm:block">
              Ads • Brand • Sales
            </div>
          </header>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                Scaling brands with a revenue-first system
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                <span className="block">Scale your brand.</span>
                <span className="block bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 bg-clip-text text-transparent">
                  Get seen. Sell more.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
                We help businesses grow by running ads that work, shaping a
                strong public image, and turning attention into sales.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:growvexbrands@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/10 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Get a free growth plan
                </a>

                <p className="text-sm text-zinc-400">
                  Or email us: <a href="mailto:growvexbrands@gmail.com" className="text-zinc-200 hover:text-white transition">growvexbrands@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-100">
                    What you get
                  </p>
                  <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs text-zinc-300">
                    Free plan
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>Ad angles + targeting ideas that fit your market</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                    <span>Brand message tune-up for clarity and trust</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>Quick funnel fixes to turn clicks into customers</span>
                  </li>
                </ul>

                <div
                  id="free-growth-plan"
                  className="mt-6 rounded-xl border border-white/10 bg-zinc-950/60 p-4"
                >
                  <p className="text-xs font-medium tracking-wide text-zinc-200">
                    Starts with a fast audit
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    You'll know what to fix, what to test, and where the money
                    is leaking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 text-xs text-zinc-400">
            Built for founders who care about measurable growth.
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-zinc-300">
              WHAT WE DO
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              We focus on three things that actually move revenue.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Advertising
                </h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                We create and manage ads across platforms that bring in buyers,
                not empty clicks. Clear targeting, constant testing, real data.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Targeting
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Testing
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Performance
                </span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Brand Image
                </h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Your business needs a look and message people remember. We build
                visuals and copy that make your brand feel confident and
                serious.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Visuals
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Positioning
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Copy
                </span>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/[0.07] sm:col-span-2 lg:col-span-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Sales Growth
                </h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                More traffic means nothing without conversion. We fix landing
                pages, offers, and funnels so visitors become customers.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Landing pages
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Offers
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                  Funnels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-zinc-300">
                WHY IT WORKS
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Most brands fail because they are invisible or forgettable.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-zinc-300">
                We fix that by aligning ads, brand, and sales into one system.
                Every part supports the next. No random posting. No wasted
                spend.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-zinc-50">Ads</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Get attention from the right buyers.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-zinc-50">Brand</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Build trust fast with a clear message.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-zinc-50">Sales</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Convert the attention into revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-zinc-300">
                WHO THIS IS FOR
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Built for businesses ready to grow.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>Local businesses that want more customers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                    <span>Online brands that want to scale fast</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>Founders who care about results, not hype</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm text-zinc-300">
                    If you already have a product or service people want, we
                    help you grow it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-zinc-300">
                OUR PROCESS
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Simple. Measurable. Focused on revenue.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-4">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-sm font-semibold text-zinc-100">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-50">
                        Audit your brand, ads, and funnel
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        Find what's working, what's leaking, and what's missing.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-sm font-semibold text-zinc-100">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-50">
                        Build a clear growth plan
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        Define offers, angles, and a test roadmap with targets.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-sm font-semibold text-zinc-100">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-50">
                        Launch ads and brand updates
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        Ship improvements fast so the whole system gets stronger.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-sm font-semibold text-zinc-100">
                      4
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-50">
                        Track sales and adjust weekly
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        We iterate with real numbers, not opinions.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Results Over Promises + CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 sm:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 right-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
              <div className="absolute -bottom-28 left-10 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-wider text-zinc-300">
                  RESULTS OVER PROMISES
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  We do not sell hope. We sell systems that drive attention and
                  convert it into sales.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                  If growth matters to you, this will work.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-6">
                  <p className="text-sm font-semibold text-zinc-50">
                    Ready to scale your brand?
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Choose the next step. We’ll keep it simple and measurable.
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="mailto:growvexbrands@gmail.com"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/10 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      Book a call
                    </a>

                    <a
                      href="mailto:growvexbrands@gmail.com"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-zinc-100 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
                    >
                      Email us directly
                    </a>

                    <div className="mt-1 flex items-center justify-between text-xs text-zinc-400">
                      <span id="book-a-call">Fast response</span>
                      <span id="how-it-works">growvexbrands@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-6 text-xs text-zinc-400 flex flex-col sm:flex-row sm:justify-between gap-4">
              <span>growvex — ads, brand, and sales working as one.</span>
              <a href="mailto:growvexbrands@gmail.com" className="hover:text-zinc-200 transition">growvexbrands@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
