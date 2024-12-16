import React from 'react';
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";

interface KeyboardDisplayProps {
  pressedKey: string;
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
}

const KeyboardDisplay = ({ pressedKey, onKeyPress, onBackspace }: KeyboardDisplayProps) => {
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
          {rowIndex === 2 && (
            <Button
              variant="outline"
              size="sm"
              className="w-16 h-8 text-sm ml-1"
              onClick={onBackspace}
            >
              <Delete className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default KeyboardDisplay;