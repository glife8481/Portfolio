import { ImageResponse } from "next/og";

export const alt =
  "Pranav Kulkarni — Software Engineer, Full Stack, Applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 68,
        background: "#101311",
        color: "#f0f1eb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            width: 54,
            height: 54,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #c7f36b",
            color: "#c7f36b",
            fontSize: 17,
          }}
        >
          PK
        </div>
        <span style={{ color: "#a1a79e", fontSize: 20 }}>PORTFOLIO · 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          style={{
            color: "#c7f36b",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -5,
          }}
        >
          Pranav Kulkarni
        </span>
        <span style={{ color: "#f0f1eb", fontSize: 34, letterSpacing: -1 }}>
          Software Engineer · Full Stack · Applied AI
        </span>
        <span style={{ color: "#a1a79e", fontSize: 22 }}>
          Passwordless login, face and voice biometrics, secure APIs.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#a1a79e",
          fontSize: 18,
        }}
      >
        <span>GitHub · glife8481</span>
        <span>BioAuth · Face + voice login</span>
      </div>
    </div>,
    size,
  );
}
