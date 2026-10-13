import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, Phone, Star, X } from "lucide-react";
import { QrCode } from "@/components/qr-code";
import { dishes, featured } from "@/data/menu";
import {
  ADDRESS,
  faqs,
  faqJsonLd,
  GOOGLE_REVIEWS,
  HOURS,
  MAPS,
  PHONE,
  PHONE_LABEL,
  RATING,
  RATING_COUNT,
  restaurantJsonLd,
} from "@/data/place";
import { getOrigin } from "@/lib/origin";

const HOME_TITLE = "პაპური | ქართული რესტორანი რუსთავის იპოდრომზე";
const HOME_DESCRIPTION =
  "პაპური — ქართული რესტორანი რუსთავში, იპოდრომის ბაღში. მწვადი მაყალზე, ხაჭაპური, ლობიანი და სალათი. ყოველდღე 12:00–23:30. ჯავშანი: 557 02 33 22.";

export const Route = createFileRoute("/")({
  loader: () => getOrigin(),
  head: ({ loaderData }) => {
    const origin = loaderData ?? "";
    return {
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      {
        name: "keywords",
        content:
          "პაპური, რესტორანი რუსთავი, რუსთავის იპოდრომი, მწვადი, ხაჭაპური, ლობიანი, ქართული სამზარეულო, ჯავშანი",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GE" },
      { name: "geo.placename", content: "რუსთავი" },
      { name: "geo.position", content: "41.5472436;44.9985154" },
      { name: "ICBM", content: "41.5472436, 44.9985154" },
    ],
    links: [{ rel: "canonical", href: `${origin}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantJsonLd(origin)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd()) },
    ],
  };
  },
  component: Home,
});

const gallery = [
  { src: "/photos/mtsvadi.jpg", alt: "მწვადი ხახვით, პაპური" },
  { src: "/photos/khachapuri.jpg", alt: "იმერული ხაჭაპური" },
  { src: "/photos/ribs.jpg", alt: "ნეკნის მწვადი" },
  { src: "/photos/salad.jpg", alt: "კიტრი და პომიდორი ნიგვზით" },
  { src: "/photos/cutlet.jpg", alt: "კატლეტი პიურეთი და საფირმო სოუსით" },
  { src: "/photos/lobiani.jpg", alt: "იმერული ლობიანი" },
  { src: "/photos/kebab.jpg", alt: "ქაბაბი ლულა" },
  { src: "/photos/turnovers.jpg", alt: "ფენოვანი ლობიანი" },
];

const nav = [
  { label: "მენიუ", to: "/menu" as const },
  { label: "ჯავშანი", href: "#reserve" },
  { label: "ფოტოები", href: "#gallery" },
  { label: "შეფასება", href: "#reviews" },
  { label: "კოდები", href: "#codes" },
];

function Home() {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:p-3">
        შინაარსზე გადასვლა
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Welcome />
        <Gallery />
        <Signatures />
        <Reserve />
        <Reviews />
        <Codes />
        <Faq />
        <Visit />
      </main>
      <footer className="border-t border-line px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-lg font-medium">პაპური</p>
          <p className="text-sm text-muted">
            {ADDRESS} · {PHONE_LABEL}
          </p>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper text-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" className="text-2xl font-semibold text-wine">
          პაპური
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="მთავარი">
          {nav.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} className="text-sm text-ink hover:text-wine">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="text-sm text-ink hover:text-wine">
                {item.label}
              </a>
            ),
          )}
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center text-ink md:hidden"
          aria-label={open ? "დახურვა" : "ნავიგაცია"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-line bg-paper px-5 pb-3 text-ink md:hidden" aria-label="მობილური">
          {nav.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-ink">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-ink">
                {item.label}
              </a>
            ),
          )}
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[88svh] bg-ink">
      <img
        src="/photos/mtsvadi.jpg"
        alt="მწვადი პაპურში, რუსთავის იპოდრომი"
        className="hero-photo absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex min-h-[88svh] items-end px-5 pb-6 pt-24 sm:px-8 sm:pb-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl bg-paper px-6 py-7 text-ink sm:px-8 sm:py-8">
            <p className="text-sm text-ink">რუსთავის იპოდრომი · {HOURS}</p>
            <h1 className="mt-2 text-5xl font-semibold leading-none text-wine sm:text-7xl">პაპური</h1>
            <p className="mt-4 text-lg leading-snug text-ink">მწვადი მაყალზე, ხაჭაპური, ხინკალი და ღვინო.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/menu" className="bg-wine px-5 py-3 text-sm text-paper">
                მენიუ
              </Link>
              <a href="#reserve" className="border border-ink px-5 py-3 text-sm text-ink">
                ჯავშანი
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="story" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-6 border-b border-line px-5 py-8 sm:grid-cols-4 sm:px-8">
        <p>
          <span className="block text-xs text-muted">მისამართი</span>
          <span className="mt-1 block text-sm">{ADDRESS}</span>
        </p>
        <p>
          <span className="block text-xs text-muted">საათები</span>
          <span className="mt-1 block text-sm">{HOURS}</span>
        </p>
        <p>
          <span className="block text-xs text-muted">ტელეფონი</span>
          <a href={`tel:${PHONE}`} className="mt-1 block text-sm">
            {PHONE_LABEL}
          </a>
        </p>
        <p>
          <span className="block text-xs text-muted">მიტანა</span>
          <span className="mt-1 block text-sm">Wolt, Glovo, კურიერი</span>
        </p>
      </div>
      <Reveal className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium text-wine">პაპურის შესახებ</h2>
          <p className="mt-4 leading-relaxed">
            პაპური რუსთავის იპოდრომზეა, ბაღში. მწვადი მაყალზე იწვება, ხაჭაპური და ხინკალი ღუმელში ცხვება.
            ღვინო და ლუდიც მაგიდაზეა. სრული მენიუ ერთ გვერდზეა.
          </p>
        </div>
        <p className="leading-relaxed text-muted lg:pt-9">
          მაგიდის დასაჯავშნად დაგვირეკეთ ან დატოვეთ ნომერი. დაგირეკავთ და ჯავშანს დავადასტურებთ.
          სახლში მიტანა Wolt-ით, Glovo-თი და ჩვენი კურიერითაც შეიძლება.
        </p>
      </Reveal>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
      <h2 className="sr-only">ფოტოები</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {gallery.map((photo, index) => (
          <Reveal key={photo.src} delay={index * 40} className="photo-frame">
            <img src={photo.src} alt={photo.alt} className="aspect-3/4 w-full object-cover" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Signatures() {
  const picks = featured.map((id) => dishes.find((dish) => dish.id === id)).filter((dish) => dish != null);

  return (
    <section id="menu" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-medium sm:text-4xl">მენიუდან</h2>
          <Link to="/menu" className="text-sm underline underline-offset-4">
            სრული მენიუ
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3">
          {picks.map((dish) => (
            <li key={dish.id}>
              <Link to="/menu" className="group block">
                <span className="photo-frame block">
                  <img src={dish.image} alt={dish.name} className="aspect-square w-full object-cover" />
                </span>
                <span className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-medium">{dish.name}</span>
                  <span className="text-sm tabular-nums text-muted">{dish.price}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reserve() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setName(String(data.get("name") ?? "").trim());
    setSent(true);
  }

  return (
    <section id="reserve" className="border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-medium sm:text-4xl">მაგიდის დაჯავშნა</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            დაწერეთ სახელი, ნომერი და დრო. დაგირეკავთ და ჯავშანს დავადასტურებთ. თუ დღეს გსურთ მოსვლა, დარეკეთ პირდაპირ.
          </p>
          <a href={`tel:${PHONE}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">
            <Phone className="size-4" />
            {PHONE_LABEL}
          </a>
        </div>
        <div className="lg:col-span-8">
          {sent ? (
            <div>
              <h3 className="text-2xl font-medium">{name ? `${name}, ` : ""}მადლობა. მალე დაგირეკავთ.</h3>
              <button type="button" onClick={() => setSent(false)} className="mt-6 border border-line px-5 py-3 text-sm">
                კიდევ ერთი ჯავშანი
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="სახელი" name="name" required autoComplete="name" />
              <Field label="ტელეფონი" name="phone" type="tel" required placeholder="5XX XX XX XX" autoComplete="tel" />
              <Field label="თარიღი" name="date" type="date" required />
              <Field label="დრო" name="time" type="time" required />
              <label className="block text-sm sm:col-span-2">
                <span className="text-muted">სტუმრების რაოდენობა</span>
                <select name="guests" defaultValue="2" suppressHydrationWarning className="mt-2 h-12 w-full border border-line bg-paper px-3">
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="text-muted">შენიშვნა, თუ გაქვთ</span>
                <textarea name="note" rows={3} suppressHydrationWarning className="mt-2 w-full border border-line bg-paper px-3 py-3" />
              </label>
              <button type="submit" className="h-12 bg-wine text-sm text-paper sm:col-span-2">
                გაგზავნა
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        suppressHydrationWarning
        className="mt-2 h-12 w-full border border-line bg-paper px-3 outline-none transition-colors duration-200 focus:border-ink"
      />
    </label>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-medium sm:text-4xl">შეფასება</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Google-ზე. თუ პაპურში იყავით, მოკლე შეფასება სხვა სტუმრებს ეხმარება.
          </p>
        </div>
        <div className="lg:col-span-8">
          <p className="text-5xl font-medium tabular-nums">{RATING}</p>
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className={"size-4 " + (i < 4 ? "fill-ink text-ink" : "fill-ink/30 text-ink")} />
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">{RATING_COUNT} შეფასება Google-ზე</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="bg-wine px-5 py-3 text-sm text-paper">
              შეაფასეთ Google-ზე
            </a>
            <Link to="/review" className="border border-line px-5 py-3 text-sm">
              შეფასების გვერდი
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Codes() {
  return (
    <section id="codes" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium sm:text-4xl">კოდები მაგიდისთვის</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              ერთი კოდი მენიუს ხსნის, მეორე — შეფასების გვერდს. დაბეჭდეთ მაშინ, როცა საიტი უკვე საბოლოო მისამართზეა. კოდი იმ მისამართს იღებს, რომელზეც ახლა ხართ.
            </p>
          </div>
          <button type="button" onClick={() => window.print()} className="border border-line px-5 py-3 text-sm print:hidden">
            დაბეჭდვა
          </button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <QrCode path="/menu" title="მენიუ" />
          <QrCode path="/review" title="შეფასება" />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-medium sm:text-4xl">ხშირი კითხვები</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="grid gap-2 py-5 sm:grid-cols-12">
              <dt className="font-medium sm:col-span-5">{item.q}</dt>
              <dd className="text-sm leading-relaxed text-muted sm:col-span-7">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-3xl font-medium sm:text-4xl">სად ვართ</h2>
          <address className="mt-8 space-y-5 text-sm not-italic">
            <p>
              <span className="block text-muted">მისამართი</span>
              <span className="mt-1 block text-base">
                {ADDRESS}, რუსთავი
              </span>
            </p>
            <p>
              <span className="block text-muted">საათები</span>
              <span className="mt-1 block text-base">{HOURS}</span>
            </p>
            <p>
              <span className="block text-muted">ტელეფონი</span>
              <a href={`tel:${PHONE}`} className="mt-1 block text-base">
                {PHONE_LABEL}
              </a>
            </p>
          </address>
          <a href={MAPS} target="_blank" rel="noreferrer" className="mt-8 inline-block border border-line px-5 py-3 text-sm">
            რუკა Google-ზე
          </a>
        </div>
        <div className="min-h-80 overflow-hidden border border-line">
          <iframe
            title="პაპური რუკაზე, რუსთავის იპოდრომი"
            src="https://www.google.com/maps?q=41.5472436,44.9985154&z=16&output=embed"
            className="h-80 w-full border-0 lg:h-full lg:min-h-96"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={shown ? "in" : "out"} style={{ transitionDelay: `${delay}ms` }} className={className}>
      {children}
    </div>
  );
}
