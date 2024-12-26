// LoadingBar.tsx
import React from 'react';

interface LoadingBarProps {
  progress: number; 
}

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
    console.log('Current Progress:', progress);
  return (
    <div className="loading-bar-container" style={{ width: '100%', backgroundColor: '#f0f0f0', height: '5px', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <div
        className="loading-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: 'yellow',
          height: '100%',
          transition: 'width 0.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default LoadingBar;
