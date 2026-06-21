import React from "react";
import whatsappIcon from "../assets/image 1.webp";

export const ShareReferralActions = ({
  shareLink,
  referralsUrl,
  showViewMore = true,
  onCopyLink,
  onWhatsAppShare,
}: {
  shareLink: string;
  referralsUrl: string;
  showViewMore?: boolean;
  onCopyLink?: () => void;
  onWhatsAppShare?: () => void;
}) => {
  const handleCopyLink = () => {
    onCopyLink?.();
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };

  const handleWhatsAppShare = () => {
    onWhatsAppShare?.();
    const waMessage = `I am Inviting you to join me in\n*21-Days FREE YOGA* 🧘‍♀️😊\n🗓️ Starts *21st JUNE*\n\n🧘 Daily Yoga\n🥗 Simple Diet\n🌿 Lifestyle Habits\n\nWith *JAGAN* 🧘🏻‍♂️\n🌍Internationally Certified Yoga Teacher\n👥 6,00,000+ Students\n\n*Register for FREE Now* 👇🏻👇🏻\n${shareLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      {/* Share this link Label */}
      <span style={{ color: "#FFF", fontFamily: "Outfit", fontSize: "12px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", marginTop: "4px" }}>
        Share this link
      </span>

      {/* Input Box for Link */}
      <div style={{ 
        width: "100%", 
        height: "48px", 
        borderRadius: "8px", 
        border: "1.218px solid #B4B4B4", 
        background: "var(--bg, #FFF)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        padding: "0 12px", 
        boxSizing: "border-box" 
      }}>
        <span style={{ color: "#8E8E8E", fontFamily: "Outfit", fontSize: "15px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {shareLink}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ cursor: "pointer", flexShrink: 0, marginLeft: "8px" }} onClick={handleCopyLink}>
          <path d="M5.84333 16.4475C5.58779 16.3018 5.37523 16.0912 5.22715 15.8371C5.07906 15.5829 5.00071 15.2942 5 15V6.66667C5 5.75 5.75 5 6.66667 5H15C15.625 5 15.965 5.32083 16.25 5.83333M8.33333 10.5558C8.33333 9.96639 8.56749 9.40109 8.98429 8.98429C9.40109 8.56749 9.96639 8.33333 10.5558 8.33333H17.7775C18.0694 8.33333 18.3584 8.39082 18.628 8.50251C18.8977 8.6142 19.1427 8.77791 19.349 8.98429C19.5554 9.19067 19.7191 9.43567 19.8308 9.70532C19.9425 9.97497 20 10.264 20 10.5558V17.7775C20 18.0694 19.9425 18.3584 19.8308 18.628C19.7191 18.8977 19.5554 19.1427 19.349 19.349C19.1427 19.5554 18.8977 19.7191 18.628 19.8308C18.3584 19.9425 18.0694 20 17.7775 20H10.5558C10.264 20 9.97497 19.9425 9.70532 19.8308C9.43567 19.7191 9.19067 19.5554 8.98429 19.349C8.77791 19.1427 8.6142 18.8977 8.50251 18.628C8.39082 18.3584 8.33333 18.0694 8.33333 17.7775V10.5558Z" stroke="#8E8E8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Buttons Block */}
      <div style={{ display: "flex", gap: "6px", width: "100%", marginTop: "2px" }}>
        {/* Copy Link Button */}
        <button 
          onClick={handleCopyLink} 
          style={{ 
            flex: 1, 
            height: "40px", 
            borderRadius: "10px", 
            background: "#FEAB27", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "6px", 
            border: "none", 
            cursor: "pointer" 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <g clipPath="url(#clip0_859_5029)">
              <path d="M6.4972 4.3332C5.58164 4.14913 4.63099 4.27241 3.7925 4.68395C2.954 5.0955 2.27445 5.77233 1.85908 6.60964C1.44372 7.44695 1.31572 8.39801 1.49491 9.31552C1.6741 10.233 2.15048 11.0658 2.85028 11.6848C3.55007 12.3039 4.43422 12.6746 5.3658 12.7397C6.29738 12.8048 7.2244 12.5605 8.00329 12.0448C8.78218 11.5291 9.36948 10.7706 9.67422 9.8869C9.97896 9.0032 9.98414 8.04356 9.68896 7.15662M10.4807 12.6674C11.3972 12.8525 12.3492 12.7294 13.1887 12.3173C14.0282 11.9053 14.7083 11.2273 15.1235 10.3887C15.5387 9.55001 15.6658 8.59759 15.4849 7.67925C15.3041 6.76091 14.8255 5.92803 14.1234 5.30989C13.4213 4.69175 12.535 4.32294 11.6021 4.2607C10.6692 4.19846 9.74184 4.44628 8.96403 4.96569C8.18621 5.4851 7.60144 6.24704 7.30047 7.13324C6.9995 8.01943 6.99919 8.98031 7.29957 9.8667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_859_5029">
                <rect width="16.9812" height="17" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span style={{ color: "#FFF", textAlign: "center", fontFamily: "Outfit", fontSize: "14px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Copy Link</span>
        </button>

        {/* Share on WhatsApp Button */}
        <button 
          onClick={handleWhatsAppShare} 
          style={{ 
            flex: 1.25, 
            height: "40px", 
            borderRadius: "10px", 
            background: "#57D063", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "6px", 
            border: "none", 
            cursor: "pointer" 
          }}
        >
          <img src={whatsappIcon} style={{ display: "block", width: "15px", height: "15px", aspectRatio: "1/1" }} alt="WhatsApp" />
          <span style={{ color: "#FFF", fontFamily: "Outfit", fontSize: "14px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Share on Whatsapp</span>
        </button>
      </div>

      {showViewMore && (
        <div
          style={{
            marginTop: "6px",
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
          onClick={() => window.open(referralsUrl, '_blank')}
        >
          <span style={{ color: "#FFF", textAlign: "center", fontFamily: "Outfit", fontSize: "16px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>View More</span>
          <span style={{ color: "#FFF", fontFamily: "Outfit", fontSize: "18px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", marginTop: "-2px" }}>→</span>
        </div>
      )}
    </div>
  );
};
