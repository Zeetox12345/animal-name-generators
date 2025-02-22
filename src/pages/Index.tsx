
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

const animals = [
  {
    name: "Ant",
    path: "/ant",
    description: "Generate creative names for your tiny yet mighty friends.",
    image: "/placeholder.svg"
  },
  {
    name: "Alpaca",
    path: "/alpaca",
    description: "Find the perfect name for your fluffy companion.",
    image: "/placeholder.svg"
  },
  {
    name: "Alligator",
    path: "/alligator",
    description: "Create powerful names for these magnificent reptiles.",
    image: "/placeholder.svg"
  },
  {
    name: "Ape",
    path: "/ape",
    description: "Discover strong and intelligent names for primates.",
    image: "/placeholder.svg"
  },
  {
    name: "Bat",
    path: "/bat",
    description: "Generate mysterious names for these nocturnal creatures.",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Find the Perfect Animal Name
          </h1>
          <p className="text-xl text-gray-600">
            Discover unique and creative names for various animals with our
            collection of name generators.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <Link
              key={animal.name}
              to={animal.path}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-fade-in"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {animal.name} Names
                </h2>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
