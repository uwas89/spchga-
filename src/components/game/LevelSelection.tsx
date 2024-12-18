import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, Trophy, Brain, Keyboard } from "lucide-react";
import { Level } from './types';

interface LevelSelectionProps {
  onLevelSelect: (level: Level) => void;
}

const LevelSelection = ({ onLevelSelect }: LevelSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <img 
            src="/lovable-uploads/db9c92ba-e244-4500-8803-48f96e54afe1.png"
            alt="Spell Check Game Logo"
            className="w-48 h-48 mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold text-primary">Spell Check Game</h1>
          <div className="prose prose-sm max-w-none text-gray-600 px-6">
            <p className="text-2xl leading-relaxed">
              Welcome to Spellcheck Game the most exciting word game. Try & test your vocabulary knowledge, a free online spell word game ! This is a fun and interactive way to improve your spelling skills. 
              Whether you're just starting to learn or want to become a spelling champion, this game will help you learn new words 
              and become better at spelling. You can listen to words, type them correctly, and track your progress as you play!
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mb-8">
          <h3 className="flex items-center justify-center gap-6 text-3xl font-medium">
            <Keyboard className="h-16 w-16" />
            Ready to start your spelling adventure?
          </h3>
        </div>

        <div className="grid gap-8 px-4">
          <Button
            onClick={() => onLevelSelect("easy")}
            className="h-48 bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-6">
              <Star className="h-24 w-24" />
              <span className="text-3xl font-bold">Easy</span>
              <span className="text-xl opacity-90">Simple, common words</span>
            </div>
          </Button>

          <Button
            onClick={() => onLevelSelect("medium")}
            className="h-48 bg-yellow-500 hover:bg-yellow-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-6">
              <Trophy className="h-24 w-24" />
              <span className="text-3xl font-bold">Medium</span>
              <span className="text-xl opacity-90">More challenging words</span>
            </div>
          </Button>

          <Button
            onClick={() => onLevelSelect("hard")}
            className="h-48 bg-red-500 hover:bg-red-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-6">
              <Brain className="h-24 w-24" />
              <span className="text-3xl font-bold">Hard</span>
              <span className="text-xl opacity-90">Complex vocabulary</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LevelSelection;
