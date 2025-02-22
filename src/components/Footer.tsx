
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/ant" className="block text-gray-600 hover:text-primary">Ant Names</Link>
              <Link to="/alpaca" className="block text-gray-600 hover:text-primary">Alpaca Names</Link>
              <Link to="/alligator" className="block text-gray-600 hover:text-primary">Alligator Names</Link>
              <Link to="/ape" className="block text-gray-600 hover:text-primary">Ape Names</Link>
              <Link to="/bat" className="block text-gray-600 hover:text-primary">Bat Names</Link>
            </nav>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Discover the perfect name for your animal companion with our
              collection of creative name generators.
            </p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Have suggestions? We'd love to hear from you!
            </p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © {new Date().getFullYear()} AnimalNameGenerators.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
