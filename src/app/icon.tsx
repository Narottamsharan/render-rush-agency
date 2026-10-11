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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D10",
          borderRadius: "6px",
          border: "1.5px solid #2B2B38",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: "17px",
            letterSpacing: "-1.5px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#F5F2ED" }}>R</span>
          <span style={{ color: "#D96846" }}>R</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
