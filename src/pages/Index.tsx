import SpellingGame from "@/components/SpellingGame";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD Schema for Spell Check Game
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Spell Check Game - Free Online Interactive Spelling Challenge",
      "description": "Spell Check Game is an interactive spelling challenge designed to test and improve your vocabulary. Enjoy multiple difficulty levels, audio pronunciation, and instant feedback. Perfect for students, ESL learners, and anyone looking to enhance their spelling skills.",
      "url": "https://spell-check-game.online",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "keywords": "spell check game, interactive spell check game, online spell check game, spelling practice, vocabulary builder, spelling challenge, ESL spelling game, educational game",
      "educationalUse": ["Practice", "Assessment"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "featureList": [
        "Multiple difficulty levels",
        "Audio pronunciation",
        "Instant feedback",
        "Progress tracking",
        "Interactive keyboard",
        "Beginner-friendly interface",
        "Advanced word challenges",
        "Educational scoring system"
      ],
      "creator": {
        "@type": "Organization",
        "name": "Spell Check Game"
      },
      "inLanguage": "en",
      "interactionCount": "UserPlays",
      "educationalLevel": ["Beginner", "Intermediate", "Advanced"]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
        <SpellingGame />
        <ScrollArea className="h-full w-full px-4 py-8">
          <Card className="max-w-4xl mx-auto my-8">
            <CardContent className="p-6 prose prose-purple max-w-none">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">
                Ultimate Spell Check Game Guide – Test & Enhance Your Vocabulary
              </h2>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                1. Welcome to the Spell Check Game Adventure!
              </h2>
              <p className="text-lg">
                Hello young spelling explorer! Welcome to the ultimate <strong>spell check game</strong> adventure.
                Our interactive spell check game is designed to test and improve your vocabulary while making learning fun.
                Whether you’re a beginner or aiming to become a spelling champion, this game offers something special for everyone. Join our reddit community https://www.reddit.com/r/spellcheckgame
              </p>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                2. Spell Check Game: Choose Your Level
              </h2>
              <p className="text-lg">
                Just like in video games, our <strong>spell check game</strong> offers multiple levels to challenge your skills as you progress:
              </p>
              <h3 className="text-2xl font-medium text-secondary mt-4">
                Easy Level Spell Check Game
              </h3>
              <p className="text-lg">
                Begin your journey at the Easy Level, featuring common words like "cat", "dog", "sun", and "book". This level builds confidence and introduces you to the game mechanics.
              </p>
              <h4 className="text-xl font-medium text-secondary/80 mt-3">
                Easy Level Word Examples:
              </h4>
              <ul className="list-disc pl-6 text-lg">
                <li>Three-letter words: cat, dog, run</li>
                <li>Four-letter words: book, jump, play</li>
                <li>Simple five-letter words: happy, smile</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                3. How to Play the Spell Check Game
              </h2>
              <p className="text-lg mb-6">
                Follow these simple steps to master our <strong>spell check game</strong>:
              </p>

              <div className="space-y-12 my-8">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/c1b4c3d3-dfd4-4830-8c8c-20a577cb660f.png" 
                    alt="Spell Check Game Level Selection - Choose Your Level" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-xl text-gray-600 italic text-center">
                    Choose your level: Easy (green), Medium (yellow), or Hard (red). Each level offers a unique challenge in the spell check game.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/f655d047-da23-4b0a-b7e2-843e2be3de2d.png" 
                    alt="Spell Check Game Main Interface - Listen and Type" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-xl text-gray-600 italic text-center">
                    The main interface of the spell check game where you listen to the word and type your answer using the interactive keyboard.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/1b312009-607b-413f-9e51-2ab3cb9915a1.png" 
                    alt="Spell Check Game Correct Answer - Celebrate Success" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-xl text-gray-600 italic text-center">
                    When you spell correctly in the spell check game, you see a green confirmation message and your score increases.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/96f4252d-f53a-4a9f-94e4-f9e294c81da9.png" 
                    alt="Spell Check Game Incorrect Answer - Learn and Try Again" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-xl text-gray-600 italic text-center">
                    If you make an error, the spell check game shows the correct spelling so you can learn and try again.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-medium text-secondary mt-6">
                Let's Play the Spell Check Game Step by Step
              </h3>
              <ol className="list-decimal pl-6 text-lg space-y-2">
                <li>Select your level (as shown in Image 1)</li>
                <li>Click the speaker button or press Space to hear the word (see Image 2)</li>
                <li>Type your answer using your keyboard or the on-screen keys</li>
                <li>Press Enter or click "Check Spelling" to submit your answer</li>
                <li>Celebrate success (Image 3) or learn from mistakes (Image 4)</li>
              </ol>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                4. Spell Check Game Progress System
              </h2>
              <p className="text-lg">
                In the spell check game, every correct word propels you forward:
              </p>
              <h4 className="text-xl font-medium text-secondary/80 mt-3">
                Progress Rewards:
              </h4>
              <ul className="list-disc pl-6 text-lg">
                <li>Your score increases</li>
                <li>The progress bar advances</li>
                <li>You unlock higher levels</li>
                <li>Motivating celebration sounds play</li>
              </ul>

              <h3 className="text-2xl font-medium text-secondary mt-6">
                Spell Check Game: Learning Through Practice
              </h3>
              <p className="text-lg">
                The more you engage with our <strong>spell check game</strong>, the better your spelling and vocabulary become. The game adapts to your progress, reinforcing your learning with every challenge.
              </p>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                5. Tips for Spell Check Game Success
              </h2>
              <p className="text-lg">
                Become a spelling champion with these expert tips for the spell check game:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>Listen carefully to the word before typing</li>
                <li>Break longer words into manageable parts</li>
                <li>Take your time to ensure accuracy</li>
                <li>Practice consistently for steady improvement</li>
                <li>Start with easier words and progress to more challenging ones</li>
                <li>Learn from mistakes to build mastery</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                6. Making Spell Check Game Practice Fun
              </h2>
              <p className="text-lg">
                Our <strong>spell check game</strong> transforms learning into fun by:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>Using vibrant and friendly colors</li>
                <li>Playing motivating and encouraging sounds</li>
                <li>Displaying clear progress indicators</li>
                <li>Offering various challenging levels</li>
                <li>Celebrating every spelling success</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                7. Benefits of Playing the Spell Check Game
              </h2>
              <p className="text-lg">
                Enjoy numerous advantages when you play our <strong>spell check game</strong>:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>Enhances your spelling skills</li>
                <li>Builds confidence</li>
                <li>Expands your vocabulary</li>
                <li>Makes learning enjoyable</li>
                <li>Prepares you for academic success</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                8. Spell Check Game Keyboard Shortcuts
              </h2>
              <p className="text-lg">
                Improve your gameplay with these handy keyboard shortcuts in the spell check game:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>Space bar: Replay the word</li>
                <li>Enter key: Check your spelling</li>
                <li>Escape key: Return to level selection</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                9. Practice Makes Perfect in the Spell Check Game
              </h2>
              <p className="text-lg">
                Just like learning to ride a bike, mastering the <strong>spell check game</strong> takes time and practice. Every champion began as a beginner!
              </p>

              <h2 className="text-3xl font-semibold text-primary mt-8">
                10. Join the Spell Check Game Adventure Today!
              </h2>
              <p className="text-lg mb-8">
                Ready to embark on your <strong>spell check game</strong> adventure? Choose your level, embrace the challenge, and begin your journey towards spelling mastery!
              </p>
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
      <Footer />
    </>
  );
};

export default Index;
