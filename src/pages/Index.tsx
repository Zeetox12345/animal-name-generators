import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

const animals = [
  {
    name: "Ant",
    path: "/ant",
    description: "Generate creative names for your tiny yet mighty friends.",
    image: "/lovable-uploads/3f387938-ac2e-445a-9d46-4a087798fab5.png"
  },
  {
    name: "Alpaca",
    path: "/alpaca",
    description: "Find the perfect name for your fluffy companion.",
    image: "/lovable-uploads/94b2d1ab-0249-4919-a1ea-c88d84c932d9.png"
  },
  {
    name: "Alligator",
    path: "/alligator",
    description: "Create powerful names for these magnificent reptiles.",
    image: "/lovable-uploads/1539181d-4af1-4c00-9ddc-126f8faafc37.png"
  },
  {
    name: "Ape",
    path: "/ape",
    description: "Discover strong and intelligent names for primates.",
    image: "/lovable-uploads/6c466614-66d9-4d77-9d2e-e1eaa2f060ea.png"
  },
  {
    name: "Bat",
    path: "/bat",
    description: "Generate mysterious names for these nocturnal creatures.",
    image: "/lovable-uploads/ba5fb42e-98b2-494c-9e99-3373246970a9.png"
  },
  {
    name: "Bear",
    path: "/bear",
    description: "Create powerful names for these majestic creatures.",
    image: "/lovable-uploads/hoda-name.png"
  },
  {
    name: "Bee",
    path: "/bee",
    description: "Generate buzzing names for these busy pollinators.",
    image: "/lovable-uploads/geazye.png"
  },
  {
    name: "Beetle",
    path: "/beetle",
    description: "Find unique names for these fascinating insects.",
    image: "/lovable-uploads/geopiny.png"
  },
  {
    name: "Bird",
    path: "/bird",
    description: "Discover melodious names for your feathered friends.",
    image: "/lovable-uploads/bird.png"
  },
  {
    name: "Butterfly",
    path: "/butterfly",
    description: "Create beautiful names for these graceful insects.",
    image: "/lovable-uploads/cenpafy.png"
  },
  {
    name: "Capybara",
    path: "/capybara",
    description: "Find friendly names for these gentle giants.",
    image: "/lovable-uploads/capybara.png"
  },
  {
    name: "Cat",
    path: "/cat",
    description: "Generate purr-fect names for your feline friend.",
    image: "/lovable-uploads/cat.png"
  },
  {
    name: "Chicken",
    path: "/chicken",
    description: "Create fun names for your feathered farmyard friends.",
    image: "/lovable-uploads/chicken.png"
  },
  {
    name: "Chameleon",
    path: "/chameleon",
    description: "Discover colorful names for these amazing reptiles.",
    image: "/lovable-uploads/chameleon.png"
  },
  {
    name: "Chipmunk",
    path: "/chipmunk",
    description: "Find cute names for these adorable creatures.",
    image: "/lovable-uploads/chipmunk.png"
  },
  {
    name: "Cheetah",
    path: "/cheetah",
    description: "Find speedy names for the fastest land animal.",
    image: "/lovable-uploads/cheetah.png"
  },
  {
    name: "Cow",
    path: "/cow",
    description: "Create moo-velous names for these gentle farm animals.",
    image: "/lovable-uploads/cow.png"
  },
  {
    name: "Crab",
    path: "/crab",
    description: "Discover snappy names for these fascinating crustaceans.",
    image: "/lovable-uploads/crab.png"
  },
  {
    name: "Cricket",
    path: "/cricket",
    description: "Generate chirpy names for these musical insects.",
    image: "/lovable-uploads/cricket.png"
  },
  {
    name: "Crocodile",
    path: "/crocodile",
    description: "Find powerful names for these ancient reptiles.",
    image: "/lovable-uploads/crocodile.png"
  },
  {
    name: "Deer",
    path: "/deer",
    description: "Generate graceful names for these elegant woodland creatures.",
    image: "/lovable-uploads/deer.png"
  },
  {
    name: "Dog",
    path: "/dog",
    description: "Find the perfect name for your loyal canine companion.",
    image: "/lovable-uploads/dog.png"
  },
  {
    name: "Dolphin",
    path: "/dolphin",
    description: "Create playful names for these intelligent marine mammals.",
    image: "/lovable-uploads/dolphin.png"
  },
  {
    name: "Donkey",
    path: "/donkey",
    description: "Discover charming names for these hardworking farm animals.",
    image: "/lovable-uploads/donkey.png"
  },
  {
    name: "Duck",
    path: "/duck",
    description: "Generate quack-tastic names for these delightful waterfowl.",
    image: "/lovable-uploads/duck.png"
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
