import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-primary/20 to-primary/10 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="https://spell-check-game.online" 
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Spell Check Game
        </a>
        <nav className="space-x-4">
          <a 
            href="https://spell-check-game.online" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </a>
          <a 
            href="https://aitohumantextconverterfree.net" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Ai to human text converter free
          </a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
