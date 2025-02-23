import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Bee", path: "/bee" },
  { name: "Beetle", path: "/beetle" },
  { name: "Bird", path: "/bird" },
  { name: "Butterfly", path: "/butterfly" }
];

const BearGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bear Name Generator - 10,000+ Unique Bear Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect bear name with our Bear Name Generator! Browse through 10,000+ unique and creative names inspired by these magnificent creatures. Perfect for pet bears, characters, or creative projects!" 
        />
        <meta property="og:title" content="Bear Name Generator - Find The Perfect Bear Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for bears from our collection of 10,000+ creative bear names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Bear"
        facts={animalData.bear.facts}
        bestNames={animalData.bear.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default BearGenerator; 