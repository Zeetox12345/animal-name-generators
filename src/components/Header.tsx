
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary text-center">
            AnimalNameGenerators.com
          </h1>
        </Link>
      </div>
    </header>
  );
};
