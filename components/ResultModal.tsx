import React, { useEffect, useState } from 'react';
import { CatMascot } from './CatMascot';

interface ResultModalProps {
  isOpen: boolean;
  winnerName: string;
  locationKey: string;
  detectedAreaName: string | null;
  onClose: () => void;
  getMapQuery: (winner: string, locationKey: string, detectedAreaName: string | null) => string;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  winnerName,
  locationKey,
  detectedAreaName,
  onClose,
  getMapQuery
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const query = getMapQuery(winnerName, locationKey, detectedAreaName);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div 
        className={`bg-[#FFFBF5] rounded-[2rem] p-8 w-full max-w-sm text-center shadow-2xl border-4 border-white transform transition-all duration-300 ease-out flex flex-col items-center ${
          visible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'
        }`}
      >
        <div className="w-24 h-24 -mt-16 mb-2">
             <CatMascot className="w-full h-full drop-shadow-md transform -rotate-6" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-wide">It's decided!</h3>
        <h2 className="text-2xl font-display font-bold text-gray-800 mb-8 leading-tight">{winnerName}</h2>
        
        <div className="w-full space-y-3">
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noreferrer"
            className="w-full py-4 bg-[#2D2D2D] hover:bg-black text-white rounded-2xl font-bold shadow-lg btn-press flex items-center justify-center space-x-2"
          >
            <span>Open in Maps</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-2xl font-bold btn-press"
          >
            Spin Again
          </button>
        </div>
      </div>
    </div>
  );
};