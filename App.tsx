import React, { useState, useEffect, useCallback } from 'react';
import { Wheel } from './components/Wheel';
import { ResultModal } from './components/ResultModal';
import { CatMascot } from './components/CatMascot';
import { LOCATIONS } from './constants';

const deg2rad = (deg: number) => deg * (Math.PI / 180);

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function App() {
  const [options, setOptions] = useState<string[]>(LOCATIONS.general.eateries);
  const [locationKey, setLocationKey] = useState<string>('detect');
  const [detectedAreaKey, setDetectedAreaKey] = useState<string | null>(null);
  const [locationStatus, setLocationStatus] = useState<string>('Detecting Location...');
  
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [customInputValue, setCustomInputValue] = useState('');

  // Geolocation Effect
  useEffect(() => {
    if (locationKey === 'detect') {
      setLocationStatus("Locating...");
      if (!navigator.geolocation) {
        setLocationStatus("Geolocation not supported");
        setOptions(LOCATIONS.general.eateries);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          let closest = null;
          let minDistance = 2.0; // 2km radius threshold

          for (const key in LOCATIONS) {
            if (key === 'general') continue;
            const dist = getDistance(lat, lng, LOCATIONS[key].lat, LOCATIONS[key].lng);
            if (dist < minDistance) {
              minDistance = dist;
              closest = key;
            }
          }

          if (closest) {
            setDetectedAreaKey(closest);
            setLocationStatus(`Near ${LOCATIONS[closest].name}`);
            setOptions(LOCATIONS[closest].eateries);
          } else {
            setDetectedAreaKey(null);
            setLocationStatus("No specific hub found");
            setOptions(LOCATIONS.general.eateries);
          }
        },
        (error) => {
          console.warn("Geolocation failed.", error.message);
          setLocationStatus("Location unavailable");
          setOptions(LOCATIONS.general.eateries);
        }
      );
    } else {
      // Manual Selection
      setLocationStatus("Manual Selection");
      const selectedLoc = LOCATIONS[locationKey] || LOCATIONS.general;
      setOptions(selectedLoc.eateries);
    }
  }, [locationKey]);

  const spinWheel = () => {
    if (isSpinning) return;

    // 1. Enable the CSS transition first
    setIsSpinning(true);

    // Calculate Rotation
    const extraSpins = 360 * (5 + Math.random() * 5);
    const randomOffset = Math.random() * 360;
    const newRotation = rotation + extraSpins + randomOffset;
    
    // 2. Delay setting the rotation slightly to ensure the browser 
    // has applied the 'transition' class from step 1.
    setTimeout(() => {
        setRotation(newRotation);
    }, 50);

    // 3. Wait for animation to finish (4000ms transition + 50ms delay)
    setTimeout(() => {
      setIsSpinning(false);
      determineWinner(newRotation);
    }, 4050);
  };

  const determineWinner = (finalRotation: number) => {
    const numOptions = options.length;
    const arcSizeDeg = 360 / numOptions;
    const actualRotation = finalRotation % 360;
    
    let winningIndex = Math.floor( (actualRotation - arcSizeDeg/2) / arcSizeDeg );
    winningIndex = (winningIndex + numOptions) % numOptions; 
    
    const winner = options[winningIndex];
    setWinnerName(winner);
    setModalOpen(true);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setLocationKey(val);
    setRotation(0); // Reset rotation when changing lists
  };

  const addCustomOption = () => {
    const val = customInputValue.trim();
    if (!val) return;
    
    setOptions(prev => [...prev, val]);
    setCustomInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addCustomOption();
  };

  const getMapQuery = useCallback((winner: string, locKey: string, detKey: string | null) => {
    let query = `${winner} Singapore`;
    const currentKey = locKey === 'detect' ? detKey : locKey;
    
    if (currentKey && currentKey !== 'general' && LOCATIONS[currentKey]) {
      query = `${winner} ${LOCATIONS[currentKey].name} Singapore`;
    }
    return query;
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-gray-800 relative overflow-x-hidden pt-8 pb-10">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Main Content */}
      <div className="z-10 w-full max-w-md px-6 flex flex-col items-center space-y-6">
        
        {/* Header Section with Mascot */}
        <div className="flex flex-col items-center space-y-2">
            <CatMascot className="w-32 h-32 drop-shadow-md" />
            <h1 className="text-4xl font-display font-bold text-gray-800 mt-2 tracking-wide">Makan Where?</h1>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-orange-100 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{locationStatus}</span>
            </div>
        </div>

        {/* Wheel */}
        <div className="py-2">
            <Wheel options={options} rotation={rotation} isSpinning={isSpinning} />
        </div>

        {/* Action Button */}
        <button 
          onClick={spinWheel} 
          disabled={isSpinning}
          className={`w-full py-5 bg-[#2D2D2D] text-white text-lg font-bold rounded-[2rem] shadow-xl btn-press flex items-center justify-between px-8 relative overflow-hidden group ${isSpinning ? 'cursor-not-allowed opacity-90' : 'hover:scale-[1.02]'}`}
        >
          {/* Subtle shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
          
          <span className="z-10">{isSpinning ? 'Choosing...' : 'Find Lunch!'}</span>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center z-10">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>
        </button>

        {/* Controls Container */}
        <div className="w-full bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white space-y-4">
          
          {/* Manual Location Select */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 pl-2">Current Location</label>
            <div className="relative">
                <select 
                value={locationKey} 
                onChange={handleLocationChange}
                className="appearance-none block w-full bg-white border-0 text-gray-700 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 shadow-sm font-semibold text-sm cursor-pointer"
                >
                <option value="detect">📍 Detect My Location</option>
                {Object.entries(LOCATIONS).map(([key, data]) => (
                    <option key={key} value={key}>{key === 'general' ? '🇸🇬 ' : ''}{data.name}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
          </div>

          {/* Add Custom Input */}
          <div>
             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 pl-2">Add Option</label>
             <div className="flex space-x-2">
                 <input 
                    type="text" 
                    value={customInputValue}
                    onChange={(e) => setCustomInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter restaurant name..." 
                    className="flex-1 bg-white border-0 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 shadow-sm text-sm"
                 />
                 <button 
                    onClick={addCustomOption}
                    className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-3 px-5 rounded-xl shadow-sm btn-press transition-colors"
                 >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                 </button>
             </div>
          </div>
        </div>
      </div>

      <ResultModal 
        isOpen={modalOpen}
        winnerName={winnerName}
        locationKey={locationKey}
        detectedAreaName={detectedAreaKey}
        onClose={() => setModalOpen(false)}
        getMapQuery={getMapQuery}
      />
    </main>
  );
}