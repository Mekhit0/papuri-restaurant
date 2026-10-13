import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { ADDRESS, GOOGLE_REVIEWS, PHONE_LABEL, RATING, RATING_COUNT } from "@/data/place";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "შეაფასეთ პაპური Google-ზე" },
      {
        name: "description",
        content: "პაპურის შეფასება Google-ზე. რუსთავის იპოდრომი.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-5 py-16">
      <p className="text-sm text-muted">
        პაპური · {ADDRESS}
      </p>
      <h1 className="mt-3 text-4xl font-medium leading-tight">შეაფასეთ</h1>
      <p className="mt-4 text-lg leading-relaxed">
        თუ პაპურში იყავით, მოკლე შეფასება Google-ზე სხვა სტუმრებს ეხმარება.
      </p>
      <p className="mt-8 text-5xl font-medium tabular-nums">{RATING}</p>
      <div className="mt-3 flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={"size-4 " + (i < 4 ? "fill-ink text-ink" : "fill-ink/30 text-ink")} />
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">{RATING_COUNT} შეფასება Google-ზე</p>
      <a href={GOOGLE_REVIEWS} className="mt-8 bg-wine px-5 py-4 text-center text-sm text-paper">
        შეაფასეთ Google-ზე
      </a>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        იხსნება Google-ის გვერდი. შეფასების დასაწერად ანგარიშში უნდა იყოთ შესული.
      </p>
      <p className="mt-10 text-sm">
        <Link to="/menu" className="underline underline-offset-4">
          მენიუ
        </Link>
        <span className="text-muted"> · {PHONE_LABEL}</span>
      </p>
    </main>
  );
}
