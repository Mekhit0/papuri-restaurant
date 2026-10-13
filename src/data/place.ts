import { sections } from "@/data/menu";

export const PHONE = "+995557023322";
export const PHONE_LABEL = "557 02 33 22";
export const ADDRESS = "რუსთავის იპოდრომი";
export const CITY = "რუსთავი";
export const HOURS = "ყოველდღე, 12:00–23:30";
export const LAT = 41.5472436;
export const LNG = 44.9985154;
export const RATING = "4.5";
export const RATING_COUNT = "35";

export const MAPS =
  "https://www.google.com/maps/place/%E1%83%9E%E1%83%90%E1%83%9E%E1%83%A3%E1%83%A0%E1%83%98%2FPAPURI/@41.5472436,44.9985154,17z/data=!4m8!3m7!1s0x404401001ff4eca3:0xe9eb5edd7e06be2d!8m2!3d41.5472436!4d44.9985154!16s%2Fg%2F11ltfx92px";

export const GOOGLE_REVIEWS = `${MAPS}!9m1!1b1`;

export const faqs = [
  {
    q: "სად მდებარეობს პაპური?",
    a: "რუსთავის იპოდრომზე, ბაღში.",
  },
  {
    q: "რა საათამდე მუშაობს?",
    a: "ყოველდღე, შუადღის 12 საათიდან საღამოს 11:30-მდე.",
  },
  {
    q: "შეიძლება მაგიდის დაჯავშნა?",
    a: "დიახ. დარეკეთ 557 02 33 22-ზე ან შეავსეთ ფორმა საიტზე. დაგირეკავთ და ჯავშანს დავადასტურებთ.",
  },
  {
    q: "სახლში მიტანა არის?",
    a: "დიახ. Wolt, Glovo და პაპურის კურიერი.",
  },
] as const;

function gel(price: string) {
  return price.replace(",", ".");
}

export function restaurantJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "პაპური",
    alternateName: ["PAPURI", "პაპური იპოდრომი"],
    servesCuisine: "Georgian",
    priceRange: "₾₾",
    telephone: PHONE,
    image: `${origin}/photos/mtsvadi.jpg`,
    url: origin,
    hasMenu: `${origin}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: CITY,
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LAT,
      longitude: LNG,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "23:30",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      reviewCount: RATING_COUNT,
      bestRating: "5",
    },
    sameAs: [MAPS],
  };
}

export function menuJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "პაპურის მენიუ",
    inLanguage: "ka",
    url: `${origin}/menu`,
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.image ? { image: `${origin}${item.image}` } : {}),
        offers: {
          "@type": "Offer",
          price: gel(item.price),
          priceCurrency: "GEL",
        },
      })),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
