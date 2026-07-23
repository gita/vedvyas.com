import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ved Vyas Foundation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Rendered at build time rather than drawn by an image model, so the wording
 * and the brand colours are exact every time.
 */
export default async function OpengraphImage() {
  // Read the art and the fonts from disk so this render never touches the network.
  const [art, regular, semibold] = await Promise.all([
    readFile(path.join(process.cwd(), "public/art/hero.png")),
    readFile(path.join(process.cwd(), "public/fonts/Inter-Regular.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/Inter-SemiBold.ttf")),
  ]);
  const artSrc = `data:image/png;base64,${art.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf9f5",
          fontFamily: "Inter",
        padding: "60px 80px",
        position: "relative",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={artSrc} width={400} height={248} alt="" />

      <div
        style={{
          fontSize: 26,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#c96442",
          marginTop: 4,
        }}
      >
        Ved Vyas Foundation
      </div>

      <div
        style={{
          fontSize: 62,
          fontWeight: 600,
          color: "#33302a",
          marginTop: 24,
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        Ancient wisdom, made for life today
      </div>

      <div
        style={{
          fontSize: 30,
          color: "#6b6559",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        Free, ad-free apps for the Bhagavad Gita and Sanatan Dharma scriptures
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          backgroundColor: "#c96442",
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
        { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
      ],
    },
  );
}
