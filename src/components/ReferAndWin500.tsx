import React from "react";
import whiteArrow from "../assets/whiteArrow.svg";
import bgPattern from "../assets/11621406ee6eb5f29bb80937e33d2195815c78d8.webp";
import elementImg from "../assets/element@2x.webp";
import elementImg1x from "../assets/element@1x.webp";

interface ReferAndWin500Props {
  onClick?: () => void;
}

const ReferAndWin500: React.FC<ReferAndWin500Props> = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      width: "100%",
      borderRadius: "16px",
      border: "1px solid #A8C8E8",
      background: "linear-gradient(135deg, #E8F4FF 0%, #F0F8FF 40%, #EAF3FF 100%)",
      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      boxSizing: "border-box",
    }}
  >
    {/* Header row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px 8px",
        background: "linear-gradient(90deg, #0A386F 0%, #0F52A2 50%, #115FBB 75%, #136BD5 100%)",
      }}
    >
      <span style={{ color: "#fff", fontFamily: "Outfit", fontSize: "18px", fontWeight: 700, lineHeight: "normal" }}>
        Refer &amp; Win
      </span>
      <span style={{ color: "#fff", fontFamily: "Outfit", fontSize: "14px", fontWeight: 600, lineHeight: "normal", display: "flex", alignItems: "center", gap: "4px" }}>
        View more <img src={whiteArrow} alt="" style={{ width: "16px", height: "16px", marginTop: "2px" }} />
      </span>
    </div>

    {/* Body */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text side */}
      <div style={{ padding: "0 0 16px 16px", display: "flex", flexDirection: "column", gap: "2px", zIndex: 1 }}>
        <span style={{ color: "#0D468B", fontFamily: "Outfit", fontSize: "28px", fontWeight: 900, lineHeight: "1", whiteSpace: "nowrap" }}>
          TOP 500
        </span>
        <span style={{ color: "#FF9D00", fontFamily: "Outfit", fontSize: "20px", fontWeight: 900, lineHeight: "1", whiteSpace: "nowrap" }}>
          WINNERS
        </span>
        <span style={{ color: "#202020", fontFamily: "Outfit", fontSize: "15px", fontWeight: 700, lineHeight: "normal", marginTop: "4px" }}>
          Get Yoga Kit
        </span>
        <span style={{ color: "#505050", fontFamily: "Outfit", fontSize: "9px", fontWeight: 500, lineHeight: "normal", maxWidth: "160px" }}>
          (Yoga Mat + T-Shirt + Water Bottle)
        </span>
      </div>
      {/* Illustration */}
      <img
        src={elementImg}
        srcSet={`${elementImg1x} 300w, ${elementImg} 600w`}
        sizes="330px"
        alt="Yoga Kit"
        style={{
          width: "10.3125rem",
          height: "7.6875rem",
          display: "block",
          objectFit: "cover",
          margin: "10px 10px 0 0",
          bottom: 10,
        }}
      />
    </div>
  </div>
);

export default ReferAndWin500;
