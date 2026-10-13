import { useEffect, useState } from "react";

export function QrCode({ path, title }: { path: string; title: string }) {
  const [svg, setSvg] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const next = `${window.location.origin}${path}`;
    setUrl(next);
    let cancel = false;
    import("qrcode").then((mod) => {
      const qr = mod.default ?? mod;
      return qr.toString(next, {
        type: "svg",
        margin: 1,
        errorCorrectionLevel: "M",
        color: { dark: "#1c1915", light: "#00000000" },
      });
    }).then((markup) => {
      if (!cancel) setSvg(markup);
    });
    return () => {
      cancel = true;
    };
  }, [path]);

  return (
    <figure className="border border-line bg-paper p-5">
      <div
        className="mx-auto size-52 [&_svg]:h-full [&_svg]:w-full"
        role="img"
        aria-label={title}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <figcaption className="mt-4">
        <p className="font-medium">{title}</p>
        <p className="mt-1 break-all text-xs text-muted">{url}</p>
      </figcaption>
    </figure>
  );
}
