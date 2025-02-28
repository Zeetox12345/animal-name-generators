import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Fox", path: "/fox" },
  { name: "Frog", path: "/frog" },
  { name: "Giraffe", path: "/giraffe" },
  { name: "Goat", path: "/goat" }
];

const FlyGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fly Name Generator - 10,000+ Unique Fly Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect fly name with our Fly Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating insects. Perfect for characters, creative projects, or just for fun!" 
        />
        <meta property="og:title" content="Fly Name Generator - Find The Perfect Fly Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for flies from our collection of 10,000+ creative fly names. Perfect for characters or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Fly"
        facts={animalData.fly.facts}
        bestNames={animalData.fly.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default FlyGenerator; 