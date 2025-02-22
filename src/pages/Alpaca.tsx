
import { NameGenerator } from "@/components/NameGenerator";

const facts = [
  "Alpacas are members of the camelid family, related to llamas and camels",
  "Their soft, luxurious fiber comes in 22 natural colors",
  "Alpacas communicate through gentle humming sounds and body language",
  "They have excellent memory and can recognize individual humans",
  "Alpacas are environmentally friendly, with padded feet that don't damage terrain",
  "Their fiber is hypoallergenic and water-resistant",
  "Alpacas live 15-20 years on average"
];

const bestNames = {
  descriptive: ["Cloud the Fluffy", "Storm the Graceful", "Mist the Gentle", "Shadow the Wise", "Luna the Soft"],
  funny: ["Sir Spits-a-lot", "Wooliam", "Alpacacino", "Fluff Master", "Llamazing"],
  cute: ["Fluffy", "Marshmallow", "Cotton", "Cupcake", "Bubble"],
  male: ["Apollo", "Atlas", "Andes", "Astro", "Alpine", "Aspen", "August", "Aztec", "Avalon", "Aurora"],
  female: ["Aurora", "Aria", "Autumn", "Angel", "Alba", "Aspen", "Athena", "Amara", "Astra", "Azalea"]
};

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AlpacaGenerator = () => {
  return (
    <NameGenerator
      animal="Alpaca"
      facts={facts}
      bestNames={bestNames}
      otherGenerators={otherGenerators}
    />
  );
};

export default AlpacaGenerator;
