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

            <div className="grid grid-cols-2 gap-4 my-8">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Easy Level Spell Check Game Screenshot" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Medium Level Spell Check Game Screenshot" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Hard Level Spell Check Game Screenshot" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Spell Check Game Success Screenshot" 
                className="rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-medium text-secondary mt-6">Medium Level Spell Check Game</h3>
            <p className="text-lg">
              Ready for bigger words? The medium level is like climbing to the next floor of a fun building! Here you'll find longer 
              words that might make you think a bit harder. Words like "elephant," "rainbow," and "butterfly" are some examples.
            </p>
            <h4 className="text-xl font-medium text-secondary/80 mt-3">Medium Level Challenges:</h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Compound words: sunshine, baseball</li>
              <li>Two-syllable words: monkey, turtle</li>
              <li>Common sight words: because, through</li>
            </ul>

            <h3 className="text-2xl font-medium text-secondary mt-6">Hard Level Spell Check Game</h3>
            <p className="text-lg">
              This is where spelling champions shine! The hard level has the kind of words that might appear in spelling bees. 
              Words like "necessary," "beautiful," and "knowledge" will test your spelling skills to the max!
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8">3. How to Play the Spell Check Game</h2>
            <p className="text-lg">
              Playing our spell check game is as easy as 1-2-3! Here's what you need to do:
            </p>
            <ol className="list-decimal pl-6 text-lg space-y-2">
              <li>Pick your level (Easy, Medium, or Hard)</li>
              <li>Click the speaker button or press Space to hear the word</li>
              <li>Type the word carefully in the box</li>
              <li>Press Enter or click "Check" to see if you got it right</li>
              <li>Celebrate when you get it right or try again if you need to!</li>
            </ol>

            <h3 className="text-2xl font-medium text-secondary mt-6">Special Game Features</h3>
            <p className="text-lg">
              Our game has lots of cool features to make spelling fun:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Fun sounds when you get words right</li>
              <li>A progress bar that fills up as you succeed</li>
              <li>Keyboard shortcuts to make playing easier</li>
              <li>Different colored buttons for each level</li>
              <li>Encouraging messages to keep you motivated</li>
            </ul>

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
