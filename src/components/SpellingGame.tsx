import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Volume2 } from "lucide-react";
import KeyboardDisplay from "./keyboard/KeyboardDisplay";
import LevelSelection from "./game/LevelSelection";
import { Level, wordsByLevel } from "./game/types";

const SpellingGame = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [pressedKey, setPressedKey] = useState("");
  const { toast } = useToast();

  const correctSound = new Audio("/correct.mp3");
  const wrongSound = new Audio("/wrong.mp3");
  const applauseSound = new Audio("/applause.mp3");
  const buzzerSound = new Audio("/buzzer.mp3");

  const getRandomWord = () => {
    if (!level) return;
    const words = wordsByLevel[level];
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setUserInput("");
    setIsCorrect(null);
  };

  useEffect(() => {
    if (level) {
      getRandomWord();
    }
  }, [level]);

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord);
    window.speechSynthesis.speak(utterance);
  };

  const handleKeyPress = (key: string) => {
    setPressedKey(key);
    setUserInput((prev) => prev + key);
  };

  const handleBackspace = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && level) {
        handleSubmit(e as unknown as React.FormEvent);
      } else if (e.key === ' ' && level) {
        e.preventDefault();
        speakWord();
      } else if (e.key === 'Escape' && level) {
        setLevel(null);
      } else if (e.key === 'Backspace' && level) {
        handleBackspace();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [level, userInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userInput.toLowerCase() === currentWord.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      correctSound.play();
      applauseSound.play();
      setScore(score + 1);
      setProgress((prev) => Math.min(prev + 10, 100));
      toast({
        title: "Correct! 🎉",
        description: "Great job! Keep going!",
        className: "bg-success text-white",
      });
      setTimeout(getRandomWord, 1500);
    } else {
      wrongSound.play();
      buzzerSound.play();
      toast({
        title: "Not quite right 😅",
        description: `The correct spelling is: ${currentWord}`,
        className: "bg-error text-white",
      });
      setTimeout(() => setUserInput(""), 1500);
    }
  };

  if (!level) {
    return <LevelSelection onLevelSelect={setLevel} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => setLevel(null)}
              className="text-gray-600"
            >
              Change Level (Esc)
            </Button>
            <h1 className="text-4xl font-bold text-primary">
              {level.charAt(0).toUpperCase() + level.slice(1)} Mode
            </h1>
          </div>
          <p className="text-xl">Score: {score}</p>
          <Progress value={progress} className="w-full" />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="flex justify-center items-center gap-4">
            <Button
              onClick={speakWord}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10"
            >
              <Volume2 className="h-6 w-6" />
            </Button>
            <span className="text-2xl font-semibold">
              Click to hear the word (Space)
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type the word here... (Enter to submit)"
              className={`text-center text-xl ${
                isCorrect === true
                  ? "animate-bounce border-success"
                  : isCorrect === false
                  ? "animate-shake border-error"
                  : ""
              }`}
              autoFocus
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              Check Spelling (Enter)
            </Button>
          </form>

          <KeyboardDisplay 
            pressedKey={pressedKey} 
            onKeyPress={handleKeyPress}
            onBackspace={handleBackspace}
          />
        </div>
      </div>
    </div>
  );
};

export default SpellingGame;