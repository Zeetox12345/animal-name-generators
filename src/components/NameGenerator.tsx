import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Layout } from "./Layout";
import { getRandomNames } from "@/data/nameGenerators";
import { useToast } from "@/components/ui/use-toast";

interface NameGeneratorProps {
  animal: string;
  facts: string[];
  bestNames: {
    descriptive: string[];
    funny: string[];
    cute: string[];
    male: string[];
    female: string[];
  };
  otherGenerators: Array<{
    name: string;
    path: string;
  }>;
}

export const NameGenerator = ({
  animal,
  facts,
  bestNames,
  otherGenerators,
}: NameGeneratorProps) => {
  const [isMale, setIsMale] = useState(true);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateNames = () => {
    if (isLoading) return; // Prevent multiple clicks while loading
    setIsLoading(true);
    try {
      const names = getRandomNames(animal, isMale ? 'male' : 'female', 10);
      setGeneratedNames(names);
    } catch (error) {
      console.error('Error generating names:', error);
      toast({
        title: "Error",
        description: "Failed to generate names. Using fallback name list.",
        variant: "destructive",
      });
      
      // Fallback to local data from bestNames
      const nameList = isMale ? bestNames.male : bestNames.female;
      const selectedNames = nameList.slice(0, 10);
      setGeneratedNames(selectedNames);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
        {/* Header */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            {animal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Name Generator
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Generate the perfect name for your {animal.toLowerCase()}.
          </p>
        </section>

        {/* Generator Section */}
        <section className="mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className={`text-base sm:text-lg ${!isMale ? "text-gray-600" : ""}`}>
                Male
              </span>
              <Switch
                checked={!isMale}
                onCheckedChange={(checked) => setIsMale(!checked)}
              />
              <span className={`text-base sm:text-lg ${isMale ? "text-gray-600" : ""}`}>
                Female
              </span>
            </div>

            <div className="text-center space-y-4 sm:space-y-6">
              <Button
                onClick={generateNames}
                size="lg"
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate Names"}
              </Button>
              
              <div className="overflow-hidden">
                {generatedNames.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-fade-in">
                    {generatedNames.map((name, index) => (
                      <div 
                        key={index}
                        className="text-lg sm:text-xl font-semibold text-primary p-2 rounded-md hover:bg-gray-50"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </section>

        {/* Table of Contents */}
        <section className="mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contents</h2>
            <nav className="space-y-2">
              <a href="#how-it-works" className="block text-brand hover:text-brand-dark">
                How the Generator Works
              </a>
              <a href="#animal-info" className="block text-brand hover:text-brand-dark">
                {animal} Information
              </a>
              <a href="#best-names" className="block text-brand hover:text-brand-dark">
                Best Names Table
              </a>
              <a href="#other-generators" className="block text-brand hover:text-brand-dark">
                Other Generators
              </a>
            </nav>
          </Card>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">How it Works</h2>
          <Card className="p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-600">
              Our {animal} name generator uses a carefully curated
              list of names that are perfect for your pet. Simply choose between
              male and female names, click the generate button, and discover the
              perfect name!
            </p>
          </Card>
        </section>

        {/* Animal Information */}
        <section id="animal-info" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            {animal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Information
          </h2>
          <Card className="p-4 sm:p-6">
            <ul className="space-y-2">
              {facts.map((fact, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-600">
                  • {fact}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* SEO Content Section - Only show for specific animals */}
        {['ant', 'alpaca', 'alligator', 'ape', 'bat', 'bear', 'bee', 'beetle', 'bird', 'butterfly'].includes(animal.toLowerCase()) && (
          <section id="seo-content" className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              All About {animal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}s
            </h2>
            <Card className="p-4 sm:p-6">
              {animal.toLowerCase() === 'ant' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Ants are fascinating insects that play crucial roles in ecosystems worldwide. These remarkable creatures are known for their complex social structures and incredible work ethic. With over 12,000 species identified globally, ants have adapted to nearly every terrestrial environment.</p>
                  <p>When choosing a name for your pet ant or ant character, consider their distinctive characteristics. Many ant enthusiasts select names that reflect their industrious nature, strength, or social roles within the colony. Popular ant names often highlight their tiny size yet mighty capabilities.</p>
                  <p>Caring for ants requires understanding their specific needs, including proper habitat setup, diet, and temperature preferences. Most ant keepers maintain formicarium setups that mimic natural underground tunnels and chambers. Whether you're naming a single pet ant or an entire colony, our ant name generator provides creative inspiration tailored to these remarkable insects.</p>
                </div>
              )}
              {animal.toLowerCase() === 'alpaca' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Alpacas are gentle, curious camelids prized for their luxurious fiber and friendly temperament. Originally from the Andean highlands of Peru, Bolivia, and Chile, these domesticated animals have gained worldwide popularity as both livestock and beloved pets.</p>
                  <p>When naming your alpaca, consider their distinctive personalities, appearance, or heritage. Alpacas often display unique character traits, from playful and inquisitive to calm and dignified. Many alpaca owners choose names reflecting their animal's cultural origins, fiber color, or endearing behaviors.</p>
                  <p>Alpaca husbandry involves proper pasture management, regular health checks, and annual shearing. These social animals thrive in herds and form strong bonds with their human caretakers. Our alpaca name generator offers inspiration for the perfect name that captures your alpaca's special qualities and helps strengthen your connection with these wonderful animals.</p>
                </div>
              )}
              {animal.toLowerCase() === 'alligator' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Alligators are powerful reptiles that have inhabited our planet for millions of years, evolving into perfect predators with remarkable adaptations. Native to the southeastern United States and China, these ancient creatures play vital roles in wetland ecosystems as apex predators.</p>
                  <p>Finding the right name for an alligator, whether for a character, zoo resident, or educational program ambassador, often involves considering their prehistoric appearance, impressive strength, or individual markings. Popular alligator names frequently reference their fearsome reputation or specific physical characteristics.</p>
                  <p>Professional alligator care requires specialized knowledge of their habitat needs, temperature requirements, and dietary preferences. For wildlife educators and zoos, a memorable name helps the public connect with these often misunderstood reptiles and learn about conservation efforts. Our alligator name generator provides inspiration drawn from their unique characteristics and powerful presence.</p>
                </div>
              )}
              {animal.toLowerCase() === 'ape' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Apes represent our closest relatives in the animal kingdom, sharing remarkable similarities with humans in intelligence, social behavior, and emotional complexity. This group includes gorillas, chimpanzees, orangutans, and bonobos—all displaying sophisticated problem-solving abilities and rich social lives.</p>
                  <p>Naming an ape often reflects respect for their intelligence and distinct personalities. Whether for a sanctuary resident, zoo inhabitant, or fictional character, ape names frequently highlight their thoughtful nature, impressive strength, or individual character traits that emerge through observation.</p>
                  <p>Conservation efforts for endangered ape species focus on habitat preservation, anti-poaching measures, and public education. For those working with captive apes in research or sanctuary settings, appropriate names help acknowledge their individuality and personhood. Our ape name generator provides thoughtful inspiration that honors these remarkable primates and their close connection to humanity.</p>
                </div>
              )}
              {animal.toLowerCase() === 'bat' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Bats are extraordinary mammals and the only ones capable of sustained flight. With over 1,400 species worldwide, they range from tiny bumblebee bats weighing less than a penny to flying foxes with wingspans exceeding six feet. These remarkable creatures play crucial ecological roles as pollinators, seed dispersers, and insect controllers.</p>
                  <p>When naming a bat, whether for wildlife rehabilitation, educational programs, or as fictional characters, consider their nocturnal lifestyle, echo-location abilities, or unique physical features. Popular bat names often reference their mysterious nature, nighttime activity, or the important ecological services they provide.</p>
                  <p>Bat conservation has become increasingly important as populations face threats from habitat loss, disease, and climate change. For wildlife rehabilitators and educators, giving rehabilitated bats memorable names helps engage the public and dispel common misconceptions about these beneficial animals. Our bat name generator offers creative inspiration tailored to these fascinating flying mammals.</p>
                </div>
              )}
              {animal.toLowerCase() === 'bear' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Bears are powerful mammals known for their strength, intelligence, and adaptability. From the massive polar bear of the Arctic to the bamboo-eating giant panda of China, the eight bear species worldwide occupy diverse habitats and play important roles as apex predators and ecosystem engineers.</p>
                  <p>Choosing a name for a bear, whether in wildlife management, zoo settings, or creative works, often reflects their impressive size, strength, or individual behavior patterns. Many bear names draw inspiration from their natural habitats, distinctive features, or the cultural significance they hold in various societies.</p>
                  <p>Bear conservation efforts focus on habitat preservation, reducing human-bear conflicts, and protecting vulnerable populations. For wildlife researchers tracking individual bears, distinctive names help monitor their movements and behaviors over time. Our bear name generator provides meaningful inspiration that captures the majesty and power of these iconic animals.</p>
                </div>
              )}
              {animal.toLowerCase() === 'bee' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Bees are vital pollinators responsible for the reproduction of flowering plants and the production of many of our favorite foods. With over 20,000 species worldwide, these industrious insects range from the familiar honeybee living in large colonies to solitary bees with specialized pollination relationships with specific plants.</p>
                  <p>When naming a bee character, educational hive queen, or bee-keeping operation, consider their industrious nature, important ecological role, or specific bee behaviors. Many bee names celebrate their honey-making abilities, pollination skills, or the structured social organization of their colonies.</p>
                  <p>Beekeeping has grown in popularity as awareness of pollinator decline has increased. For beekeepers naming their queens or hives, choosing meaningful names creates connection and helps track lineage and colony histories. Our bee name generator offers sweet inspiration for naming these buzzing beneficial insects that sustain our ecosystems and food systems.</p>
                </div>
              )}
              {animal.toLowerCase() === 'beetle' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Beetles represent the largest order of insects on Earth, with over 400,000 known species comprising about 40% of all insect species. These remarkably diverse creatures have adapted to nearly every ecological niche, from desert dung beetles to aquatic diving beetles, displaying an astonishing array of shapes, sizes, and colors.</p>
                  <p>Finding the perfect name for a beetle, whether for a pet, entomology collection, or character, often highlights their distinctive appearance, fascinating behaviors, or ecological importance. Popular beetle names frequently reference their armor-like exoskeletons, impressive strength relative to their size, or specific adaptations.</p>
                  <p>For entomologists and beetle enthusiasts, naming specimens helps organize collections and track observations. Pet beetles, particularly larger species like rhinoceros or stag beetles, develop distinct personalities that can inspire personalized names. Our beetle name generator provides creative inspiration drawn from the incredible diversity and fascinating characteristics of these successful invertebrates.</p>
                </div>
              )}
              {animal.toLowerCase() === 'bird' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Birds represent one of the most visible and beloved wildlife groups, with over 10,000 species displaying remarkable diversity in size, color, behavior, and habitat preferences. From tiny hummingbirds to massive ostriches, birds have adapted to environments worldwide and capture human imagination with their flight, songs, and beauty.</p>
                  <p>Naming a pet bird requires considering their species characteristics, individual personality, and the bond you share. Many bird owners select names inspired by their feather colors, vocalizations, or spirited nature. For species that can learn to speak, names with clear, repeatable sounds often work best.</p>
                  <p>Proper bird care varies greatly by species, with considerations for appropriate diet, housing, social needs, and enrichment. Whether you're naming a chatty parrot, melodious canary, or intelligent corvid, our bird name generator offers inspiration that celebrates the unique qualities of these feathered companions who bring joy, song, and companionship to our lives.</p>
                </div>
              )}
              {animal.toLowerCase() === 'butterfly' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Butterflies are among nature's most exquisite creations, with approximately 20,000 species worldwide showcasing an incredible diversity of patterns, colors, and life histories. These delicate insects undergo complete metamorphosis, transforming from caterpillars to winged adults that serve as important pollinators and indicators of ecosystem health.</p>
                  <p>When naming a butterfly, whether for identification in garden observations, butterfly house displays, or creative purposes, consider their spectacular wing patterns, graceful flight, or transformation symbolism. Popular butterfly names often reference their ephemeral beauty, specific markings, or the flowers they frequent.</p>
                  <p>Butterfly conservation has gained importance as habitat loss and climate change threaten many species. For butterfly gardeners and conservationists, naming memorable butterfly visitors creates personal connection and awareness of their ecological importance. Our butterfly name generator provides inspiration that captures the delicate beauty and transformative nature of these beloved insects.</p>
                </div>
              )}
            </Card>
          </section>
        )}

        {/* Best Names Table */}
        <section id="best-names" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Best Names</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {Object.entries(bestNames).map(([category, names]) => (
              <Card key={category} className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 capitalize">
                  {category === 'male' ? 'Best Male Names' :
                   category === 'female' ? 'Best Female Names' :
                   category.replace(/([A-Z])/g, " $1").trim() + ' Names'}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {names.map((name, index) => (
                    <li key={index} className="text-sm sm:text-base text-gray-600">
                      • {name}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Generators */}
        <section id="other-generators" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Other Generators</h2>
          <Card className="p-4 sm:p-6">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {otherGenerators.map((generator) => (
                <Button
                  key={generator.name}
                  variant="outline"
                  size="sm"
                  className="flex-grow sm:flex-grow-0"
                  asChild
                >
                  <a href={generator.path}>{generator.name} Names</a>
                </Button>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};
