export default function EVOLogo() {
  return (
    <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" className="w-24 h-10">
      {/* EVO Text */}
      <text
        x="0"
        y="38"
        fontSize="42"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#FF8C00"
        letterSpacing="2"
      >
        EVO
      </text>

      {/* Film Reel in O */}
      <g>
        {/* Outer circle */}
        <circle cx="75" cy="20" r="14" fill="none" stroke="#FF8C00" strokeWidth="2.5" />

        {/* Inner circles (film reel holes) */}
        <circle cx="70" cy="16" r="2.5" fill="#FF8C00" />
        <circle cx="75" cy="16" r="2.5" fill="#FF8C00" />
        <circle cx="80" cy="16" r="2.5" fill="#FF8C00" />

        <circle cx="70" cy="24" r="2.5" fill="#FF8C00" />
        <circle cx="75" cy="24" r="2.5" fill="#FF8C00" />
        <circle cx="80" cy="24" r="2.5" fill="#FF8C00" />
      </g>

      {/* Decorative line */}
      <line x1="8" y1="42" x2="65" y2="42" stroke="#FF8C00" strokeWidth="1.5" />

      {/* Small registered trademark */}
      <text
        x="86"
        y="10"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#666"
        stroke="#666"
        strokeWidth="0.3"
      >
        ®
      </text>
    </svg>
  )
}
