import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Volume2 } from "lucide-react";

const words = [
  "apple",
  "banana",
  "chocolate",
  "dinosaur",
  "elephant",
  "flamingo",
  "giraffe",
  "hamburger",
  "igloo",
  "jellyfish",
];

const SpellingGame = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { toast } = useToast();

  const getRandomWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setUserInput("");
    setIsCorrect(null);
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord);
    window.speechSynthesis.speak(utterance);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Spelling Game</h1>
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
              Click to hear the word
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type the word here..."
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
              Check Spelling
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpellingGame;