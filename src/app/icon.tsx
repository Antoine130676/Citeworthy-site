import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 9,
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
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
    ),
    { ...size }
  );
}
