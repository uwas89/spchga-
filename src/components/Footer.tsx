import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-primary/20 to-primary/10 py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a 
              href="https://spell-check-game.online" 
              className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Spell Check Game
            </a>
            <p className="text-gray-600">
              Improve your spelling skills with our interactive learning platform
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <p className="text-gray-600">
              Questions? Reach out to us at support@spellcheckgame.online
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Spell Check Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;