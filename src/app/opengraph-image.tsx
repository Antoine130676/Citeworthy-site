import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(124,110,242,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(242,181,68,0.25), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <path
                d="M12.4 11.2c-2.42 0-4.2 1.86-4.2 4.6 0 2.72 1.76 4.56 4.16 4.56.98 0 1.86-.3 2.52-.84l-.86-1.3c-.44.34-.98.54-1.56.54-1.28 0-2.2-1-2.2-2.96 0-1.98.92-3 2.2-3 .56 0 1.06.18 1.5.5l.84-1.32a3.9 3.9 0 0 0-2.4-.78Z"
                fill="#f2b544"
              />
              <path
                d="M20.6 11.2c-2.42 0-4.2 1.86-4.2 4.6 0 2.72 1.76 4.56 4.16 4.56.98 0 1.86-.3 2.52-.84l-.86-1.3c-.44.34-.98.54-1.56.54-1.28 0-2.2-1-2.2-2.96 0-1.98.92-3 2.2-3 .56 0 1.06.18 1.5.5l.84-1.32a3.9 3.9 0 0 0-2.4-.78Z"
                fill="#f2b544"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <span style={{ color: "#f3f2ee", fontSize: 26, fontWeight: 600 }}>Citeworthy</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span style={{ color: "#f3f2ee", fontSize: 68, fontWeight: 600, lineHeight: 1.05 }}>
            Get cited. Not just ranked.
          </span>
          <span style={{ color: "rgba(243,242,238,0.6)", fontSize: 26, marginTop: 24 }}>
            Full-service Generative Engine Optimization for AI search visibility.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
