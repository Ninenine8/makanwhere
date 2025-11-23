import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants';

interface WheelProps {
  options: string[];
  rotation: number;
  isSpinning: boolean;
}

export const Wheel: React.FC<WheelProps> = ({ options, rotation, isSpinning }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || options.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2;
    const arcSize = (2 * Math.PI) / options.length;

    ctx.clearRect(0, 0, width, height);

    options.forEach((option, index) => {
      const angle = index * arcSize;

      // Draw Wedge
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
      ctx.fillStyle = COLORS[index % COLORS.length];
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 4; // Thicker soft white borders
      ctx.stroke();

      // Draw Text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + arcSize / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#4A3B32"; // Dark brown text for contrast on pastel
      ctx.font = "700 16px Nunito";
      ctx.shadowColor = "rgba(255,255,255,0.8)"; // White glow for readability
      ctx.shadowBlur = 2;

      let text = option.length > 14 ? option.substring(0, 12) + '..' : option;
      ctx.fillText(text, radius - 25, 6);
      ctx.restore();
    });
  }, [options]);

  return (
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 shrink-0 z-10">
      <div className="pointer-triangle"></div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className={`w-full h-full rounded-full shadow-2xl border-8 border-white bg-white ${isSpinning ? 'transition-transform duration-[4000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]' : ''}`}
        style={{ transform: `rotate(-${rotation}deg)` }}
      ></canvas>
      
      {/* Decorative Center Cap */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-md z-10 flex items-center justify-center">
        <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
      </div>
    </div>
  );
};