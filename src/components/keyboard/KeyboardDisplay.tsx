import React from 'react';
import { Button } from "@/components/ui/button";

interface KeyboardDisplayProps {
  pressedKey: string;
  onKeyPress: (key: string) => void;
}

const KeyboardDisplay = ({ pressedKey, onKeyPress }: KeyboardDisplayProps) => {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((key) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              className={`w-8 h-8 text-sm ${
                pressedKey.toLowerCase() === key ? 'bg-primary text-primary-foreground' : ''
              }`}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyboardDisplay;