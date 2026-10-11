import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "38px",
          border: "4px solid #D96846",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: "96px",
            letterSpacing: "-7px",
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
