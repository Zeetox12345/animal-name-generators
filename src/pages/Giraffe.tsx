import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Fly", path: "/fly" },
  { name: "Fox", path: "/fox" },
  { name: "Frog", path: "/frog" },
  { name: "Goat", path: "/goat" }
];

const GiraffeGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Giraffe Name Generator - 10,000+ Unique Giraffe Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect giraffe name with our Giraffe Name Generator! Browse through 10,000+ unique and creative names inspired by these majestic animals. Perfect for pet giraffes, characters, or creative projects!" 
        />
        <meta property="og:title" content="Giraffe Name Generator - Find The Perfect Giraffe Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for giraffes from our collection of 10,000+ creative giraffe names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Giraffe"
        facts={animalData.giraffe.facts}
        bestNames={animalData.giraffe.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default GiraffeGenerator; 