
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 animate-fade-in overflow-hidden">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="flex items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary text-center break-words">
            AnimalNameGenerators.com
          </h1>
        </Link>
      </div>
    </header>
  );
};
