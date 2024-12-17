import SpellingGame from "@/components/SpellingGame";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <SpellingGame />
      
      <ScrollArea className="h-full w-full px-4 py-8">
        <Card className="max-w-4xl mx-auto my-8">
          <CardContent className="p-6 prose prose-purple max-w-none">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">Ultimate Spell Check Game Guide</h1>

            <h2 className="text-3xl font-semibold text-primary mt-8">1. Welcome to Your Spell Check Game Adventure!</h2>
            <p className="text-lg">
              Hello young spelling explorer! Welcome to the most exciting spelling game that will help you become a spelling champion. 
              This game is like having a friendly teacher who helps you learn new words in a fun way. Whether you're just starting 
              to learn spelling or you're already good at it, this game has something special for everyone!
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8">2. Spell Check Game: Choose Your Level</h2>
            <p className="text-lg">
              Just like in video games where you start at level 1 and move up, our spell check game has three amazing levels:
            </p>
            <h3 className="text-2xl font-medium text-secondary mt-4">Easy Level Spell Check Game</h3>
            <p className="text-lg">
              This is where everyone starts! You'll find friendly, everyday words that you might already know. Words like "cat," 
              "dog," "sun," and "book" are waiting for you. It's perfect for building your confidence and getting used to how 
              the game works.
            </p>
            <h4 className="text-xl font-medium text-secondary/80 mt-3">Easy Level Word Examples:</h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Three-letter words: cat, dog, run</li>
              <li>Four-letter words: book, jump, play</li>
              <li>Simple five-letter words: happy, smile</li>
            </ul>

            <h2 className="text-3xl font-semibold text-primary mt-8">3. How to Play the Spell Check Game</h2>
            <p className="text-lg mb-6">
              Let's look at how to play our spell check game with these helpful screenshots:
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/c1b4c3d3-dfd4-4830-8c8c-20a577cb660f.png" 
                  alt="Spell Check Game Level Selection" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 italic">
                  Image 1: Choose your level - Easy (green), Medium (yellow), or Hard (red). Each level has different word difficulties!
                </p>
              </div>
              
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/f655d047-da23-4b0a-b7e2-843e2be3de2d.png" 
                  alt="Spell Check Game Main Interface" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 italic">
                  Image 2: The main game screen where you can hear the word, type your answer, and use the helpful keyboard!
                </p>
              </div>
              
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/1b312009-607b-413f-9e51-2ab3cb9915a1.png" 
                  alt="Spell Check Game Correct Answer" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 italic">
                  Image 3: When you spell correctly, you'll see a happy green message and your score goes up! Keep going! 🎉
                </p>
              </div>
              
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/96f4252d-f53a-4a9f-94e4-f9e294c81da9.png" 
                  alt="Spell Check Game Incorrect Answer" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 italic">
                  Image 4: Don't worry if you make a mistake! The game shows you the correct spelling so you can learn and try again! 📚
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-secondary mt-6">Playing Step by Step</h3>
            <ol className="list-decimal pl-6 text-lg space-y-2">
              <li>Start by picking your level (as shown in Image 1)</li>
              <li>Click the speaker button or press Space to hear the word (see Image 2)</li>
              <li>Type your answer using your keyboard or click the on-screen keys</li>
              <li>Press Enter or click "Check Spelling" to submit your answer</li>
              <li>Celebrate your success (Image 3) or learn from mistakes (Image 4)</li>
            </ol>

            <h2 className="text-3xl font-semibold text-primary mt-8">4. Spell Check Game Progress System</h2>
            <p className="text-lg">
              Every time you spell a word correctly, something exciting happens:
            </p>
            <h4 className="text-xl font-medium text-secondary/80 mt-3">Progress Rewards:</h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Your score goes up</li>
              <li>The progress bar fills up a little more</li>
              <li>You get closer to the next level</li>
              <li>Special celebration sounds play</li>
            </ul>

            <h3 className="text-2xl font-medium text-secondary mt-6">Spell Check Game Learning Through Practice</h3>
            <p className="text-lg">
              The more you play, the better you get! Our game remembers which words you've seen before and gives you new ones 
              to learn. This way, you're always learning something new while practicing what you already know.
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8">5. Tips for Spell Check Game Success</h2>
            <p className="text-lg">
              Want to become a spelling champion? Here are some super helpful tips:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Listen to the word carefully before typing</li>
              <li>Break long words into smaller parts in your mind</li>
              <li>Don't rush - take your time to spell correctly</li>
              <li>Practice a little bit every day</li>
              <li>Start with easy words and slowly move to harder ones</li>
              <li>Don't worry about making mistakes - they help you learn!</li>
            </ul>

            <h2 className="text-3xl font-semibold text-primary mt-8">6. Making Spell Check Game Practice Fun</h2>
            <p className="text-lg">
              Spell check doesn't have to be boring! Our game makes it fun by:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Using bright, friendly colors</li>
              <li>Playing encouraging sounds</li>
              <li>Showing your progress clearly</li>
              <li>Giving you different levels to try</li>
              <li>Celebrating your successes</li>
            </ul>

            <h2 className="text-3xl font-semibold text-primary mt-8">7. Benefits of Playing the Spell Check Game</h2>
            <p className="text-lg">
              Playing our spell check game helps you in many ways:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Improves your spelling skills</li>
              <li>Builds your confidence</li>
              <li>Helps you learn new words</li>
              <li>Makes learning fun and enjoyable</li>
              <li>Prepares you for school work</li>
            </ul>

            <h2 className="text-3xl font-semibold text-primary mt-8">8. Spell Check Game Keyboard Shortcuts</h2>
            <p className="text-lg">
              Make playing even more fun with these special keyboard tricks:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Space bar: Hear the word again</li>
              <li>Enter key: Check your spelling</li>
              <li>Escape key: Go back to level selection</li>
            </ul>

            <h2 className="text-3xl font-semibold text-primary mt-8">9. Practice Makes Perfect in Spell Check Game</h2>
            <p className="text-lg">
              Remember, becoming good at spelling is like learning to ride a bike - it takes practice! The more you play, 
              the better you'll get. Don't give up if you make mistakes. Every champion started as a beginner!
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8">10. Join the Spell Check Game Adventure</h2>
            <p className="text-lg mb-8">
              Are you ready to start your spell check game adventure? Pick a level, put on your thinking cap, and let's begin! 
              Remember, every great speller started with simple words and worked their way up. You can do it too!
            </p>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default Index;
