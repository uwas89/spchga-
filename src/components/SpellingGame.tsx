import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Volume2, Star, Trophy, Brain, Keyboard } from "lucide-react";

const wordsByLevel = {
  easy: [
    "apple",
    "banana",
    "cat",
    "dog",
    "egg",
  ],
  medium: [
    "chocolate",
    "dinosaur",
    "elephant",
    "flamingo",
    "giraffe",
  ],
  hard: [
    "hamburger",
    "igloo",
    "jellyfish",
    "knowledge",
    "language",
  ],
};

type Level = "easy" | "medium" | "hard";

const SpellingGame = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const { toast } = useToast();

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

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && level) {
        handleSubmit(e as unknown as React.FormEvent);
      } else if (e.key === ' ' && level) {
        e.preventDefault(); // Prevent space from scrolling
        speakWord();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [level, userInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userInput.toLowerCase() === currentWord.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
      setProgress((prev) => Math.min(prev + 10, 100));
      toast({
        title: "Correct! 🎉",
        description: "Great job! Keep going!",
        className: "bg-success text-white",
      });
      setTimeout(getRandomWord, 1500);
    } else {
      toast({
        title: "Not quite right 😅",
        description: `The correct spelling is: ${currentWord}`,
        className: "bg-error text-white",
      });
      setTimeout(() => setUserInput(""), 1500);
    }
  };

  const handleLevelSelect = (selectedLevel: Level) => {
    setLevel(selectedLevel);
    setScore(0);
    setProgress(0);
  };

  if (!level) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-8">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Spelling Game</h1>
            <p className="text-xl text-gray-600">Choose your difficulty level</p>
          </div>

          <div className="text-center text-sm text-gray-500 mb-4">
            <p className="flex items-center justify-center gap-2">
              <Keyboard className="h-4 w-4" />
              Use number keys (1-3) to select level
            </p>
          </div>

          <div className="grid gap-4">
            <Button
              onClick={() => handleLevelSelect("easy")}
              className="h-32 bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-2">
                <Star className="h-8 w-8" />
                <span className="text-xl font-bold">Easy (1)</span>
                <span className="text-sm opacity-90">Simple, common words</span>
              </div>
            </Button>

            <Button
              onClick={() => handleLevelSelect("medium")}
              className="h-32 bg-yellow-500 hover:bg-yellow-600 transition-all transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-2">
                <Trophy className="h-8 w-8" />
                <span className="text-xl font-bold">Medium (2)</span>
                <span className="text-sm opacity-90">More challenging words</span>
              </div>
            </Button>

            <Button
              onClick={() => handleLevelSelect("hard")}
              className="h-32 bg-red-500 hover:bg-red-600 transition-all transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-2">
                <Brain className="h-8 w-8" />
                <span className="text-xl font-bold">Hard (3)</span>
                <span className="text-sm opacity-90">Complex vocabulary</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
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
        </div>
      </div>
    </div>
  );
};

export default SpellingGame;
