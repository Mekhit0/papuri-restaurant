import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { sections } from "@/data/menu";
import { HOURS, menuJsonLd, PHONE, PHONE_LABEL, restaurantJsonLd } from "@/data/place";
import { getOrigin } from "@/lib/origin";

export const Route = createFileRoute("/menu")({
  loader: () => getOrigin(),
  head: ({ loaderData }) => {
    const origin = loaderData ?? "";
    return {
      meta: [
        { title: "მენიუ | პაპური, რუსთავის იპოდრომი" },
        {
          name: "description",
          content:
            "პაპურის სრული მენიუ: მწვადი, ხაჭაპური, ხინკალი, ცხელი კერძები, ღვინო და ლუდი. რუსთავის იპოდრომი. ფასი ლარში. ყოველდღე 12:00–23:30.",
        },
        {
          name: "keywords",
          content: "პაპური მენიუ, მწვადი რუსთავი, ხაჭაპური, ხინკალი, ღვინო, იპოდრომი",
        },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: `${origin}/menu` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(menuJsonLd(origin)) },
        { type: "application/ld+json", children: JSON.stringify(restaurantJsonLd(origin)) },
      ],
    };
  },
  component: MenuPage,
});

const covers: Record<string, { src: string; alt: string }> = {
  fire: { src: "/photos/mtsvadi.jpg", alt: "მწვადი მაყალზე, პაპური" },
  dough: { src: "/photos/khachapuri.jpg", alt: "ხაჭაპური, პაპური" },
  light: { src: "/photos/salad.jpg", alt: "სალათი, პაპური" },
};

function MenuPage() {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node != null);
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );
    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-svh bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="text-2xl font-semibold text-wine">
            პაპური
          </Link>
          <a href={`tel:${PHONE}`} className="text-sm text-ink">
            {PHONE_LABEL}
          </a>
        </div>
        <nav aria-label="მენიუს ნაწილები" className="mx-auto flex max-w-5xl gap-5 overflow-x-auto px-5 pb-3 sm:px-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActive(section.id)}
              className={
                "shrink-0 border-b-2 pb-1 text-sm " +
                (active === section.id ? "border-wine text-wine" : "border-transparent text-muted")
              }
            >
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      <div className="relative h-48 sm:h-64">
        <img src="/photos/mtsvadi.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute bottom-4 left-4 bg-paper px-5 py-4 text-ink sm:bottom-6 sm:left-8">
          <p className="text-xs text-muted">რუსთავის იპოდრომი</p>
          <h1 className="text-4xl font-semibold leading-none text-wine">მენიუ</h1>
          <p className="mt-2 text-sm">{HOURS} · ფასი ლარშია</p>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 py-4 sm:px-8 sm:py-8">
        {sections.map((section) => {
          const cover = covers[section.id];
          return (
            <section key={section.id} id={section.id} className="scroll-mt-32 border-b border-line py-10 last:border-0">
              <h2 className="text-2xl font-medium text-wine">{section.title}</h2>
              {cover ? (
                <img src={cover.src} alt={cover.alt} className="mt-5 aspect-[2/1] w-full object-cover sm:aspect-[5/2]" />
              ) : null}
              <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-14">
                {section.items.map((item) => (
                  <li key={item.id} className="flex items-baseline gap-3 border-b border-line/80 py-3.5">
                    <span className="leading-snug">{item.name}</span>
                    <span aria-hidden className="mb-1 min-w-4 flex-1 border-b border-dotted border-[#c9bfb2]" />
                    <span className="shrink-0 tabular-nums font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <div className="mt-4 flex flex-col gap-3 border border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            მაგიდა გინდათ?{" "}
            <a href={`tel:${PHONE}`} className="text-wine">
              {PHONE_LABEL}
            </a>
          </p>
          <Link to="/review" className="text-sm text-ink underline underline-offset-4">
            შეაფასეთ Google-ზე
          </Link>
        </div>
      </main>
    </div>
  );
}
