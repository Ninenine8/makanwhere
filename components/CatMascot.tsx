export const CatMascot = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle / Glow */}
      <circle cx="100" cy="100" r="90" fill="#FFF5E6" />
      
      {/* Ears */}
      <path d="M50 70 L30 30 L80 50 Z" fill="#EFA472" stroke="#4A3B32" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M150 70 L170 30 L120 50 Z" fill="#EFA472" stroke="#4A3B32" strokeWidth="3" strokeLinejoin="round"/>
      
      {/* Face Base */}
      <ellipse cx="100" cy="110" rx="75" ry="60" fill="#FFC9A9" stroke="#4A3B32" strokeWidth="3" />
      
      {/* White Snout Area */}
      <ellipse cx="100" cy="125" rx="35" ry="25" fill="#FFFFFF" />

      {/* Eyes */}
      <circle cx="75" cy="100" r="5" fill="#4A3B32" />
      <circle cx="125" cy="100" r="5" fill="#4A3B32" />
      {/* Eye shine */}
      <circle cx="77" cy="98" r="2" fill="white" />
      <circle cx="127" cy="98" r="2" fill="white" />

      {/* Nose */}
      <path d="M96 118 Q100 122 104 118" fill="none" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="116" r="3" fill="#FF8080" />

      {/* Mouth */}
      <path d="M100 121 Q90 135 80 125" fill="none" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 121 Q110 135 120 125" fill="none" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="55" cy="115" r="8" fill="#FFB7B2" opacity="0.6" />
      <circle cx="145" cy="115" r="8" fill="#FFB7B2" opacity="0.6" />

      {/* Headband / Sushi Chef Bandana */}
      <path d="M35 85 Q100 65 165 85" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
      <path d="M35 85 Q100 65 165 85" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
      
      {/* Whiskers */}
      <line x1="40" y1="110" x2="20" y2="105" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="120" x2="20" y2="125" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
      
      <line x1="160" y1="110" x2="180" y2="105" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="120" x2="180" y2="125" stroke="#4A3B32" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};