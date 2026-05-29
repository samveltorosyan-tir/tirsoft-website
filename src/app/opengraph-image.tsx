import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(29,161,244,0.12), transparent 55%), radial-gradient(circle at 10% 90%, rgba(139,51,255,0.10), transparent 55%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#5a554d",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {`tirsoft · est. ${SITE.founded}`}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#1b1815",
          }}
        >
          <div
            style={{
              fontSize: 132,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              fontSize: 56,
              marginTop: 36,
              color: "#2a2620",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {`${SITE.tagline}.`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5a554d",
            fontSize: 28,
          }}
        >
          <div>Glendale · Yerevan</div>
          <div>{SITE.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
