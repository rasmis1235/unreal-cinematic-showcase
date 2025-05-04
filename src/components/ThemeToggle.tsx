
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDragging, handleDragStart, handleDragEnd } = useTheme();
  const [position, setPosition] = useState(0);

  const handleDrag = (e: React.MouseEvent) => {
    if (isDragging) {
      const newPosition = Math.min(100, Math.max(0, e.clientY - e.currentTarget.getBoundingClientRect().top));
      setPosition(newPosition);
    }
  };

  return (
    <div 
      className="fixed right-6 top-16 z-50 flex flex-col items-center"
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={isDragging ? handleDragEnd : undefined}
    >
      <div className="text-ue-teal mb-1">
        <Sun size={16} className={`${theme === 'light' ? 'opacity-100' : 'opacity-40'}`} />
      </div>
      
      <div className="h-20 w-1 bg-muted relative rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-ue-teal to-ue-blue"
          style={{ height: `${position}%`, opacity: isDragging ? 1 : 0.6 }}
        />
      </div>
      
      <div 
        className={`w-5 h-5 rounded-full bg-gradient-to-r from-ue-blue to-ue-teal cursor-grab active:cursor-grabbing -mt-2 relative
                   ${isDragging ? 'scale-110 shadow-[0_0_10px_rgba(3,218,198,0.6)]' : ''}`}
        style={{ transform: `translateY(${position}px)` }}
        onMouseDown={handleDragStart}
      />
      
      <div className="text-ue-blue mt-1">
        <Moon size={16} className={`${theme === 'dark' ? 'opacity-100' : 'opacity-40'}`} />
      </div>
    </div>
  );
};

export default ThemeToggle;
