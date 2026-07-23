import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const C = {
  bg: "#faf9f5",
  ink: "#33302a",
  muted: "#6b6559",
  accent: "#c96442",
};

/**
 * Shared Open Graph card. Text on the left, a real image on the right, so the
 * card shows either the work or the subject rather than a decorative mark.
 * Rendered at build time, which keeps the wording and colours exact.
 */
export async function renderOgCard({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  /** Path under /public, e.g. "shots/bhagavad-gita.webp". */
  image: string;
}) {
  const [regular, semibold, art] = await Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/Inter-Regular.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/Inter-SemiBold.ttf")),
    readFile(path.join(process.cwd(), "public", image)),
  ]);

  const ext = image.endsWith(".jpg") ? "jpeg" : "png";
  const src = `data:image/${ext};base64,${art.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: C.bg,
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 640,
          padding: "64px 24px 64px 64px",
        }}
      >
        <div
          style={{
            fontSize: 21,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: C.accent,
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: C.ink,
            marginTop: 20,
            lineHeight: 1.12,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 25,
            color: C.muted,
            marginTop: 22,
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={560}
        height={630}
        style={{ width: 560, height: 630, objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          backgroundColor: C.accent,
        }}
      />
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "Inter",
          data: regular,
          weight: 400 as const,
          style: "normal" as const,
        },
        {
          name: "Inter",
          data: semibold,
          weight: 600 as const,
          style: "normal" as const,
        },
      ],
    },
  );
}
