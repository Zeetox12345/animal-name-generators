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
        {['ant', 'alpaca', 'alligator', 'ape', 'bat', 'bear', 'bee', 'beetle', 'bird', 'butterfly', 'capybara', 'cat', 'chicken', 'chameleon', 'chipmunk', 'cheetah', 'cow', 'crab', 'cricket', 'crocodile', 'deer', 'dog', 'dolphin', 'donkey', 'duck', 'eagle', 'elephant', 'ferret', 'fish', 'flamingo', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goose', 'guinea pig', 'hamster', 'hedgehog', 'hermit crab', 'hippo', 'horse', 'hyena', 'iguana', 'jellyfish'].includes(animal.toLowerCase()) && (
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
              {animal.toLowerCase() === 'capybara' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Capybaras are the world's largest rodents, known for their friendly demeanor and semi-aquatic lifestyle. Native to South America, these social animals live in groups near water bodies and have become increasingly popular in wildlife parks, educational facilities, and as exotic pets where legally permitted.</p>
                  <p>Choosing a name for a capybara often reflects their gentle nature, water-loving habits, or South American heritage. Many capybara enthusiasts select names that highlight their distinctive appearance with barrel-shaped bodies, blunt snouts, and webbed feet. Popular capybara names often incorporate references to their calm temperament or their status as "nature's couch potatoes."</p>
                  <p>Proper capybara care requires spacious environments with access to water for swimming, appropriate plant-based diets, and social companionship as they thrive in groups. For wildlife educators and facilities with ambassador capybaras, distinctive names help visitors connect with these charismatic rodents and learn about wetland conservation. Our capybara name generator provides creative inspiration that captures the unique charm of these peaceful, social creatures.</p>
                </div>
              )}
              {animal.toLowerCase() === 'cat' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Cats are among the world's most beloved companion animals, having shared our homes for thousands of years. With diverse breeds ranging from the tiny Singapura to the majestic Maine Coon, domestic cats combine independence with affection, making them ideal pets for various lifestyles and living situations.</p>
                  <p>Finding the perfect name for your cat should reflect their unique personality, appearance, or the special bond you share. Many cat owners choose names based on their pet's distinctive coat patterns, eye color, vocal tendencies, or behavioral quirks. The best cat names often capture that special blend of elegance and playfulness that makes these animals so captivating.</p>
                  <p>Responsible cat ownership involves proper nutrition, regular veterinary care, environmental enrichment, and consideration of whether an indoor or supervised outdoor lifestyle is appropriate. Whether you're naming a regal Persian, energetic Bengal, or charming mixed-breed rescue, our cat name generator offers inspiration to find that special name that suits your feline companion's unique character and strengthens your bond for years to come.</p>
                </div>
              )}
              {animal.toLowerCase() === 'chicken' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Chickens have become increasingly popular as both productive livestock and engaging pets with distinct personalities. These descendants of jungle fowl come in hundreds of breeds, from tiny bantams to large meat breeds, with incredible diversity in appearance, egg color, and temperament. Beyond egg production, many chicken keepers appreciate their contributions to pest control and composting.</p>
                  <p>Naming your chickens adds to the joy of keeping these feathered friends and helps identify individual birds in your flock. Many chicken enthusiasts choose names reflecting a bird's appearance, comb style, feather pattern, or behavioral characteristics. Themed names for flocks are particularly popular, whether based on celebrities, book characters, food items, or historical figures.</p>
                  <p>Proper chicken care includes secure housing to protect from predators, appropriate feed supplemented with foraging opportunities, regular health checks, and social interaction as they are highly social birds. Whether you're naming a friendly backyard hen, a protective rooster, or an entire flock of diverse personalities, our chicken name generator provides creative inspiration tailored to these productive and entertaining backyard companions.</p>
                </div>
              )}
              {animal.toLowerCase() === 'chameleon' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Chameleons are fascinating reptiles renowned for their remarkable color-changing abilities, independently movable eyes, and specialized projectile tongues. With approximately 160 species native primarily to Africa, Madagascar, and parts of Asia, these distinctive lizards have adapted to life in trees with their prehensile tails and specialized feet for gripping branches.</p>
                  <p>When naming a pet chameleon, many owners draw inspiration from their color-changing abilities, unique physical features, or the specific species' native habitat. Popular chameleon names often reference their seemingly magical transformations, prehistoric appearance, or the vibrant color displays of males during breeding season. Creative names may also highlight their slow, deliberate movements or their extraordinary hunting techniques.</p>
                  <p>Specialized chameleon care requires attention to their specific environmental needs, including appropriate temperature gradients, humidity levels, UVB lighting, and vertical space for climbing. These generally solitary reptiles thrive in naturalistic terrariums with live plants and adequate ventilation. Whether you're naming a colorful panther chameleon, hooded Meller's chameleon, or tiny pygmy species, our chameleon name generator provides inspiration that captures the magical essence of these color-changing marvels.</p>
                </div>
              )}
              {animal.toLowerCase() === 'chipmunk' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Chipmunks are small, striped members of the squirrel family known for their characteristic cheek pouches used for transporting food. With 25 species found primarily in North America, these energetic little mammals have captured human imagination with their busy foraging behavior, distinctive appearance, and role in forest ecosystems as seed dispersers.</p>
                  <p>Whether naming a wild chipmunk visitor to your yard, a rehabilitation case, or a character in a story, consider their lively nature, distinctive striped pattern, or the charming way they gather and store food. Popular chipmunk names often highlight their small size, quick movements, adorable appearance, or their impressive ability to gather and remember the locations of thousands of stored seeds.</p>
                  <p>For wildlife enthusiasts creating chipmunk-friendly habitats, understanding their natural behaviors and needs helps foster biodiversity in backyard spaces. Though rarely kept as pets due to their wild nature and specialized needs, many people develop connections with regular chipmunk visitors to their gardens. Our chipmunk name generator offers whimsical and appropriate inspiration for naming these charismatic woodland creatures that bring joy with their busy antics and expressive personalities.</p>
                </div>
              )}
              {animal.toLowerCase() === 'cheetah' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Cheetahs are the world's fastest land mammals, capable of reaching speeds up to 70 mph in short bursts. Native to Africa and parts of Iran, these sleek cats are distinguished by their slender bodies, distinctive tear marks, and specialized adaptations for high-speed hunting. With their non-retractable claws and flexible spines, cheetahs represent evolutionary perfection for speed.</p>
                  <p>Naming cheetahs in conservation programs, zoos, or wildlife documentaries often highlights their incredible speed, graceful movements, or spotted coat patterns. Many cheetah names draw inspiration from their African heritage, using words from Swahili, Zulu, or other regional languages. Thoughtful cheetah names may also reference their unique vocalizations, which include chirps and purrs rather than typical big cat roars.</p>
                  <p>Cheetah conservation has become increasingly crucial as wild populations face threats from habitat loss, human conflict, and genetic bottlenecks. Conservation centers often use ambassador cheetahs with memorable names to educate the public about their endangered status and conservation needs. Our cheetah name generator provides meaningful inspiration drawn from their remarkable speed, hunting prowess, and the urgent need to protect these magnificent sprinters for future generations.</p>
                </div>
              )}
              {animal.toLowerCase() === 'cow' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Cows are remarkable animals that have been domesticated for thousands of years, providing milk, meat, labor, and companionship across diverse cultures worldwide. With hundreds of breeds developed for different purposes and environments, from the high-producing Holstein to the heat-tolerant Brahman, these gentle ruminants display surprising intelligence and form strong social bonds within their herds.</p>
                  <p>Choosing the perfect name for a cow often reflects their individual personality, coat color or pattern, breed characteristics, or their role on a farm or sanctuary. Many farmers and cow enthusiasts select names that highlight their gentle nature, maternal instincts, or the distinctive markings that make each animal unique. Family dairy cows often receive especially endearing names as they become beloved members of the household.</p>
                  <p>Proper cow care involves appropriate pasture management, nutrition tailored to their production stage, regular veterinary attention, and consideration of their social needs as herd animals. For hobby farmers, dairy operations, and sanctuaries, meaningful names help establish connections and recognize the individual personalities of these perceptive animals. Our cow name generator provides creative inspiration for naming these gentle giants who have supported human civilization throughout history.</p>
                </div>
              )}
              {animal.toLowerCase() === 'crab' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Crabs are fascinating crustaceans with over 4,500 species inhabiting oceans, freshwater systems, and even land environments worldwide. From the massive Japanese spider crab with its 12-foot leg span to tiny pea crabs measuring just a few millimeters, these ancient arthropods are known for their sideways walk, powerful claws, and important ecological roles as scavengers and predators.</p>
                  <p>When naming a pet crab, aquarium specimen, or character, consider their distinctive sideways movement, defensive posture, shell pattern, or habitat preferences. Many crab enthusiasts choose names that reference their claws, hard exoskeletons, or the way they bubble when communicating. Popular crab names often incorporate wordplay about their unique locomotion or their sometimes grumpy-looking expressions.</p>
                  <p>Keeping pet crabs, particularly hermit crabs and certain freshwater species, requires creating appropriate habitats with correct temperature, humidity, and substrate for molting. For educational displays or home aquariums, distinctive names help observers connect with these remarkable creatures and learn about their ecological importance. Our crab name generator provides sideways-thinking inspiration perfect for these armored invertebrates with their fascinating adaptations and behaviors.</p>
                </div>
              )}
              {animal.toLowerCase() === 'cricket' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Crickets are musical insects found on every continent except Antarctica, recognized worldwide for the males' distinctive chirping produced by rubbing their wings together. With over 900 species ranging from common house crickets to colorful field varieties, these insects play important ecological roles as decomposers and as a food source for many animals. Their cultural significance spans from being considered lucky in many Asian cultures to serving as timekeepers through their temperature-dependent chirping rates.</p>
                  <p>Naming pet crickets, classroom specimens, or cricket characters often draws inspiration from their melodious nature, jumping abilities, or nocturnal activities. Many cricket enthusiasts choose names that reference their distinctive singing, their role as "nature's violinists," or their cultural symbolism of good fortune. Creative cricket names might play on their antenna, distinctive hind legs, or the way they bring natural soundscapes to gardens and wild spaces.</p>
                  <p>For those keeping crickets as pets or feeders, proper care includes appropriate temperature, ventilation, hiding places, and a diet supplemented with fruits and vegetables beyond basic cricket food. Cricket farming has grown in popularity as these insects represent a sustainable protein source gaining acceptance in many countries. Our cricket name generator provides musical inspiration perfect for these chirping companions that have been nature's nighttime orchestra for millions of years.</p>
                </div>
              )}
              {animal.toLowerCase() === 'crocodile' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Crocodiles are ancient predators that have remained largely unchanged for over 200 million years, outlasting the dinosaurs with their perfectly adapted anatomy and behavior. With 13 species found across tropical regions worldwide, these powerful reptiles combine incredible bite force with surprising maternal care, complex communication, and remarkable longevity that can exceed 70 years in some species.</p>
                  <p>Finding an appropriate name for a crocodile, whether in wildlife management, zoological collections, or creative works, often emphasizes their prehistoric appearance, powerful jaws, or specific physical features. Many crocodile names draw inspiration from their ancient lineage, predatory nature, or the specific waterways they inhabit. Notable crocodiles in conservation programs often receive names that highlight their role as ambassadors for wetland preservation.</p>
                  <p>Professional crocodile care requires specialized knowledge of their behavior, habitat requirements, and safety protocols. For wildlife educators and conservation facilities, distinctive names help the public connect with individual crocodiles and learn about their ecological importance as apex predators that maintain healthy aquatic ecosystems. Our crocodile name generator provides powerful inspiration drawn from their ancient heritage, impressive adaptations, and commanding presence in our collective imagination.</p>
                </div>
              )}
              {animal.toLowerCase() === 'deer' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Deer are graceful hoofed mammals found across most continents, known for their elegant appearance and remarkable adaptability to various habitats. With approximately 60 species ranging from tiny pudú weighing just 20 pounds to massive moose exceeding 1,500 pounds, these herbivores are recognized by their antlers (typically in males), large eyes, and acute senses that help them detect predators in dense forests and open meadows alike.</p>
                  <p>Choosing a name for a deer, whether for wildlife management, rehabilitation programs, or creative projects, often reflects their graceful movements, woodland habitat, or distinctive features like antlers or coat patterns. Many deer names draw inspiration from their silent forest presence, seasonal behaviors like rutting and migration, or cultural symbolism as creatures of beauty and wilderness. Names for fawns often highlight their spotted coats and delicate appearance.</p>
                  <p>Deer conservation varies widely depending on region, with some populations requiring protection from overhunting and habitat loss while others need management to prevent overpopulation in areas lacking natural predators. For wildlife rehabilitators working with orphaned fawns, appropriate names help track individuals while maintaining sufficient distance to allow successful release. Our deer name generator provides nature-inspired options perfect for these woodland creatures that symbolize grace and wilderness in our collective imagination.</p>
                </div>
              )}
              {animal.toLowerCase() === 'dog' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Dogs have been humanity's most loyal companions for over 15,000 years, evolving from wolves into the most diverse mammal species on Earth. With over 340 breeds recognized worldwide, from tiny Chihuahuas to massive Great Danes, dogs have been selectively bred for countless purposes including hunting, herding, protection, therapy, and above all, companionship. Their remarkable ability to understand human emotions and communication makes them truly unique in the animal kingdom.</p>
                  <p>Finding the perfect name for your dog is an important decision that will be used thousands of times throughout your life together. The best dog names often reflect your pet's personality, appearance, breed heritage, or the special connection you share. Many dog owners choose names based on their pup's size, energy level, coat color, or distinctive behaviors, while others select names that showcase their own interests or cultural background. A good dog name should be easily recognizable to your pet and comfortable for you to call out in public.</p>
                  <p>Responsible dog ownership involves more than just choosing the right name—it requires commitment to proper nutrition, regular veterinary care, training, exercise, and socialization tailored to your specific breed's needs. Different breeds and individual dogs have widely varying requirements for physical activity, mental stimulation, and social interaction. Whether you're naming a loyal family companion, an energetic working dog, or a specialized service animal, our dog name generator provides inspiration for the perfect name to start your journey together on the right paw.</p>
                </div>
              )}
              {animal.toLowerCase() === 'dolphin' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Dolphins are among the most intelligent and social creatures in our oceans, with approximately 40 species displaying remarkable cognitive abilities, complex communication systems, and strong family bonds. These marine mammals are known for their playful behavior, acrobatic leaps, and sophisticated hunting strategies that sometimes include cooperative techniques and tool use. Their streamlined bodies, powerful tails, and permanent "smiles" have made them beloved ocean ambassadors worldwide.</p>
                  <p>Naming dolphins, whether in marine research programs, rehabilitation facilities, or creative contexts, often highlights their intelligence, social nature, or oceanic habitat. Many dolphin names reflect their graceful swimming, whistling vocalizations, or specific physical features like coloration patterns that help researchers identify individuals in the wild. Names might also draw inspiration from maritime terminology, ocean mythology, or the specific coastal areas where certain populations reside.</p>
                  <p>Dolphin conservation has become increasingly important as these sentient beings face threats from pollution, fishing gear entanglement, habitat degradation, and climate change. For marine biologists tracking wild populations, distinctive names help monitor individuals throughout their lives and understand social structures. Our dolphin name generator provides inspiration drawn from their remarkable intelligence, social complexity, and the mysterious ocean depths they call home—perfect for these charismatic ambassadors of marine ecosystems.</p>
                </div>
              )}
              {animal.toLowerCase() === 'donkey' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Donkeys are remarkable equines that have supported human civilization for over 5,000 years with their strength, endurance, and adaptability to harsh environments. More intelligent and independent-minded than horses, these hardy animals are known for their distinctive long ears, loud brays, and cautious nature that has often been misinterpreted as stubbornness. From tiny Miniature Mediterranean donkeys to massive Mammoth jacks, these working animals continue to serve as transportation, pack animals, and companions worldwide.</p>
                  <p>Choosing a name for a donkey often reflects their strong personality, hardworking nature, or distinctive physical characteristics. Many donkey owners select names that highlight their animal's intelligence, thoughtful decision-making, or the special bond that forms with these perceptive creatures. Popular donkey names may reference their vocalizations, long ears, or historical importance as working animals that have helped build civilizations across desert regions and mountainous terrain.</p>
                  <p>Proper donkey care recognizes their specific needs that differ from horses, including specialized nutrition, hoof care, dental attention, and social requirements as they form strong bonds with companions. For sanctuaries rehabilitating abused or neglected donkeys, thoughtful names help these resilient animals transition to new lives while educating the public about their true nature. Our donkey name generator provides inspiration perfect for these intelligent, loyal animals who deserve recognition for their centuries of service and their endearing, contemplative personalities.</p>
                </div>
              )}
              {animal.toLowerCase() === 'duck' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Ducks are charismatic waterfowl found on every continent except Antarctica, with over 120 species displaying remarkable diversity in appearance, behavior, and habitat preferences. From colorful wood ducks to diving mergansers, these adaptable birds are known for their waterproof feathers, specialized bills for different feeding strategies, and the distinctive waddling walk that has endeared them to people worldwide. Their ability to thrive in wetlands, ponds, streams, and even urban parks makes them among the most visible and beloved wild birds.</p>
                  <p>When naming a pet duck, backyard flock member, or duck character, consider their waterfowl traits, distinctive vocalizations, or specific breed characteristics. Many duck enthusiasts choose names inspired by their swimming abilities, water-shedding feathers, or comical personalities. Popular duck names often reference their quacking calls, waddling gait, or specific features like colorful plumage, crests, or distinctive bill shapes that vary significantly between breeds.</p>
                  <p>Duck keeping has grown in popularity for both egg production and natural pest control in gardens. Proper care includes providing clean water for swimming and preening, appropriate shelter, protection from predators, and a diet supplemented with natural foraging opportunities. Whether you're naming a helpful backyard Khaki Campbell, an ornamental Mandarin duck, or a friendly pet Pekin, our duck name generator provides splashy inspiration for these practical, personable waterfowl that bring life and movement to water features and rural homesteads.</p>
                </div>
              )}
              {animal.toLowerCase() === 'eagle' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Eagles represent the pinnacle of avian predators, with approximately 60 species worldwide renowned for their exceptional vision, powerful talons, and majestic soaring flight. From the massive Steller's sea eagle with its 8-foot wingspan to the compact booted eagle, these apex hunters have inspired human cultures for millennia as symbols of power, freedom, and transcendence. Their ability to spot prey from great distances—with vision up to eight times sharper than humans—and their impressive hunting prowess have earned them reverence across civilizations.</p>
                  <p>Naming an eagle, whether for wildlife tracking, rehabilitation programs, or symbolic representations, often embodies their regal nature, hunting abilities, or role as national emblems. Many eagle names draw inspiration from their commanding presence, incredible flight capabilities, or the specific habitats they patrol from mountain peaks to coastal shores. Names for these birds of prey frequently reference their piercing gaze, powerful grip, or cultural significance as spiritual messengers in numerous traditions worldwide.</p>
                  <p>Eagle conservation represents a remarkable success story in many regions, with species like the bald eagle recovering from near-extinction through dedicated protection efforts. For wildlife researchers monitoring populations, thoughtful names help track individual birds throughout their long lives—eagles can live 20-30 years in the wild and form lifelong pair bonds. Our eagle name generator provides inspiration worthy of these magnificent birds that continue to symbolize the highest aspirations of strength, vision, and freedom in human consciousness.</p>
                </div>
              )}
              {animal.toLowerCase() === 'elephant' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Elephants stand as the largest land mammals on Earth, with their remarkable intelligence, complex social structures, and extraordinary memory fascinating scientists and animal lovers alike. These gentle giants feature highly dexterous trunks containing over 40,000 muscles, allowing for feats ranging from uprooting trees to picking up a single blade of grass. With their recognized self-awareness, elaborate communication systems, and documented grief rituals, elephants share remarkable cognitive and emotional parallels with humans.</p>
                  <p>Choosing an appropriate name for an elephant, whether in conservation programs, sanctuaries, or zoological settings, often reflects their immense dignity, wisdom, or individual personality traits that emerge through observation. Many elephant names draw inspiration from their ancestral homelands in Africa or Asia, their matriarchal family structures, or physical characteristics like distinctive ear shapes or tusk patterns. Thoughtful naming recognizes their status as individuals with rich emotional lives and complex family histories.</p>
                  <p>Elephant conservation has become increasingly critical as both African and Asian species face serious threats from habitat loss, poaching, and human-wildlife conflict. For conservation organizations working to protect wild populations and care for rescued individuals, meaningful names help raise awareness and create personal connections between these magnificent animals and their human supporters. Our elephant name generator provides inspiration worthy of these majestic creatures whose protection represents one of the most important conservation priorities of our time.</p>
                </div>
              )}
              {animal.toLowerCase() === 'ferret' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Ferrets are playful mustelids that have delighted humans as both working animals and companions for over 2,000 years. Domesticated from European polecats, these small carnivores combine boundless energy with natural curiosity, creating distinctive personalities that ferret enthusiasts find irresistible. Their long, slender bodies allow them to navigate tight spaces, originally making them invaluable for hunting rabbits in burrows, while today their agility and enthusiasm make them engaging pets for those prepared for their active lifestyle.</p>
                  <p>Finding the perfect name for your ferret often celebrates their mischievous nature, distinctive movements, or playful "war dance" that combines hopping, sideways movements, and excited vocalizations. Many ferret owners choose names inspired by their animal's mask-like facial markings, sleek fur patterns, or the comical way they stash treasured items. Popular ferret names frequently play on their famous curiosity, thieving tendencies, or their surprising combination of fierce independence and social bonding with their human families.</p>
                  <p>Proper ferret care requires understanding their specialized needs, including appropriate protein-rich nutrition, safe housing that prevents escapes, veterinary care from exotic specialists, and ample interaction as these highly social animals thrive on companionship. For the growing community of ferret enthusiasts, distinctive names help express the unique personalities that emerge in these intelligent, energetic companions. Our ferret name generator provides playful inspiration tailored to these curious, clever pets who bring endless entertainment and affection to the homes lucky enough to have them.</p>
                </div>
              )}
              {animal.toLowerCase() === 'fish' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Fish represent the most diverse vertebrates on Earth, with over 34,000 species displaying incredible variation in size, appearance, behavior, and habitat preferences. From tiny gobies measuring less than a centimeter to massive whale sharks exceeding 40 feet, these aquatic creatures have adapted to virtually every water environment from tropical coral reefs to frigid polar seas. Their remarkable adaptations include specialized breathing systems, unique camouflage techniques, complex mating rituals, and surprising intelligence in many species.</p>
                  <p>Naming pet fish adds personality and connection to your aquatic companions, with options reflecting their coloration, swimming style, or species characteristics. Many fish keepers choose names inspired by their fish's distinctive patterns, fin shapes, or behaviors like schooling or territorial displays. For more personable species like bettas, oscars, or goldfish that recognize their owners, names often acknowledge the surprising bonds that can form between people and their aquatic pets.</p>
                  <p>Successful fish keeping begins with understanding the specific needs of your chosen species, including water parameters, tank size, compatible tank mates, and appropriate nutrition. Different species require vastly different care, from the relatively straightforward needs of hardy community fish to the specialized requirements of delicate marine species. Whether you're naming a colorful betta, an interactive goldfish, or an entire community tank population, our fish name generator provides aquatic inspiration perfect for these fascinating underwater companions.</p>
                </div>
              )}
              {animal.toLowerCase() === 'flamingo' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Flamingos are instantly recognizable wading birds known for their vibrant pink plumage, distinctive curved bills, and iconic stance balancing on one slender leg. With six species found across the Americas, Caribbean, Africa, and parts of Asia and Europe, these social birds gather in massive flocks sometimes numbering thousands of individuals. Their unique feeding method—filtering tiny organisms through specialized bills held upside down—and their elaborate courtship dances make them among the most fascinating birds to observe in their natural habitats.</p>
                  <p>Naming a flamingo, whether for zoological collections, wildlife tracking, or creative purposes, often highlights their spectacular coloration, graceful movements, or social nature. Many flamingo names draw inspiration from their pink hues (derived from carotenoid pigments in their diet), their elegant wading in shallow waters, or their impressive synchronized group behaviors. Names might reference their tropical habitats, distinctive upside-down feeding style, or their cultural significance as symbols of flamboyance and tropical paradise.</p>
                  <p>Flamingo conservation focuses on protecting the shallow lagoons, salt pans, and alkaline lakes these specialized birds require for feeding and breeding. For zoological institutions with flamingo flocks, individual names help educators tell stories about flamingo biology and social structures to fascinated visitors. Our flamingo name generator provides colorful inspiration worthy of these spectacular birds that stand as living symbols of tropical beauty and the specialized adaptations that allow wildlife to thrive in challenging habitats.</p>
                </div>
              )}
              {animal.toLowerCase() === 'fly' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Flies represent one of the most diverse insect orders with over 120,000 species worldwide playing crucial roles in ecosystems as decomposers, pollinators, and food sources for countless animals. From common house flies to colorful flower flies that mimic bees, these remarkable insects feature compound eyes providing nearly 360-degree vision, specialized mouthparts adapted for various feeding strategies, and incredible flight capabilities allowing some species to hover perfectly still or execute lightning-fast evasive maneuvers.</p>
                  <p>When naming a fly character for creative projects, educational purposes, or even the occasional pet fly, consider their distinctive characteristics like rapid movement, compound eyes, or specific species traits. Many fly names playfully reference their buzzing sounds, aerial acrobatics, or the persistent nature that has made them fixtures in human environments worldwide. Creative naming might highlight their remarkable adaptations like the house fly's ability to walk upside down or the fruit fly's importance in genetic research.</p>
                  <p>Though rarely kept as intentional pets, flies are increasingly appreciated for their ecological importance in breaking down organic matter, controlling pest insect populations (in the case of predatory species), and even pollinating plants. For scientists studying flies, distinctive names help track subjects in behavioral experiments that have revealed surprising intelligence and learning capabilities in these often-underappreciated insects. Our fly name generator provides buzzworthy inspiration for these ubiquitous insects whose adaptability and diversity have made them among the most successful creatures on Earth.</p>
                </div>
              )}
              {animal.toLowerCase() === 'fox' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Foxes are cunning canids found on every continent except Antarctica, with 37 species showcasing remarkable adaptability to environments ranging from arctic tundra to arid deserts. Known for their intelligence, bushy tails, and distinctive pointed ears, these mesmerizing mammals combine the familiar traits of dogs with the independent nature of cats. Their legendary cleverness isn't just folklore—foxes demonstrate problem-solving abilities, excellent memory, and sophisticated hunting techniques that have earned them prominence in cultures worldwide as symbols of wisdom and adaptability.</p>
                  <p>Choosing a name for a fox, whether for wildlife research, rehabilitation, or fictional characters, often celebrates their legendary intelligence, striking appearance, or the folklore surrounding them across cultures. Many fox names draw inspiration from their rusty-red coloration (in red foxes), their silent movement through forests, or their reputation for cunning. Names might reference their bushy tails, their distinctive vocalizations ranging from barks to almost supernatural-sounding screams, or their remarkable ability to adapt to diverse environments including urban areas.</p>
                  <p>Fox conservation status varies widely by species, with some like the red fox thriving even in human-modified landscapes while others like the Darwin's fox face serious endangerment. For wildlife rehabilitators working with injured foxes or researchers tracking wild populations, thoughtful names help monitor individuals while maintaining appropriate distance for eventual release or natural behavior. Our fox name generator provides clever inspiration perfect for these enchanting mammals whose intelligence and adaptability continue to captivate human imagination in both wildlife and storytelling contexts.</p>
                </div>
              )}
              {animal.toLowerCase() === 'frog' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Frogs are remarkable amphibians that have thrived on Earth for over 200 million years, with approximately 7,400 species displaying extraordinary diversity in size, color, and behavior. From tiny poison dart frogs measuring less than an inch to the massive Goliath frog exceeding a foot in length, these fascinating creatures feature specialized adaptations including sticky tongues for capturing prey, permeable skin that can absorb oxygen, and powerful legs capable of jumps exceeding 20 times their body length. As indicators of environmental health, frogs serve as crucial ecological sentinels while controlling insect populations.</p>
                  <p>Finding the perfect name for a pet frog, educational ambassador, or frog character often references their jumping abilities, distinctive calls, or specific species characteristics. Many frog enthusiasts select names inspired by their amphibian's vibrant coloration, bulging eyes, or the distinctive way they inflate their vocal sacs when calling. Popular frog names might playfully acknowledge their semi-aquatic lifestyle, their remarkable metamorphosis from tadpole to adult, or their role in folklore and fairy tales across world cultures.</p>
                  <p>Proper frog care depends significantly on the species, with requirements ranging from simple terrestrial setups for toads to elaborate rainforest terrariums with precise humidity and temperature gradients for tropical species. As amphibians with permeable skin, frogs are particularly sensitive to environmental contaminants, making them important subjects in conservation biology. Whether you're naming a colorful poison dart frog, a robust bullfrog, or a delicate tree frog, our frog name generator provides hoppy inspiration perfect for these fascinating amphibians that connect aquatic and terrestrial ecosystems.</p>
                </div>
              )}
              {animal.toLowerCase() === 'giraffe' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Giraffes stand as the tallest land animals on Earth, their extraordinary height allowing them to browse vegetation inaccessible to other herbivores. With their distinctive spotted coat patterns (as unique as human fingerprints), these gentle giants feature specialized cardiovascular systems that manage blood pressure over their remarkable 6-foot necks, specialized tongues that can extend 21 inches to wrap around thorny acacia branches, and a unique gait that moves both legs on one side simultaneously. Despite their impressive size, giraffes move with surprising grace across the African savanna.</p>
                  <p>Naming a giraffe, whether for zoological collections, conservation programs, or creative works, often celebrates their towering height, distinctive spotted patterns, or gentle nature. Many giraffe names draw inspiration from their African heritage, their impressive stature, or the unique pattern of spots that allows researchers to identify individuals in the wild. Names might reference their graceful movements, their remarkable adaptations for reaching high foliage, or their surprisingly delicate features like long eyelashes that protect against thorns and debris.</p>
                  <p>Giraffe conservation has become increasingly urgent as wild populations have declined by nearly 30% in recent decades, earning them vulnerable status on the IUCN Red List. For conservation organizations and zoos participating in breeding programs, thoughtful names help engage the public with these magnificent animals and raise awareness about their declining numbers. Our giraffe name generator provides elevated inspiration perfect for these gentle giants whose unique appearance and quiet dignity make them among the most beloved and instantly recognizable animals in the world.</p>
                </div>
              )}
              {animal.toLowerCase() === 'goat' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Goats are among humanity's oldest domesticated animals, providing milk, meat, fiber, and companionship for over 10,000 years. With more than 300 distinct breeds ranging from tiny Nigerian Dwarfs to large Boer goats, these adaptable ruminants are known for their remarkable climbing abilities, rectangular pupils offering 340-degree vision, and highly social nature. Their inquisitive intelligence—they can recognize human facial expressions and remember complex tasks for years—has made them increasingly popular as both productive livestock and engaging pets.</p>
                  <p>Choosing the perfect name for your goat often reflects their playful personality, distinctive appearance, or the special bond you share. Many goat owners select names inspired by their animal's horns, beard, vocalizations, or the comical way they interact with their environment. Popular goat names might reference their legendary climbing abilities, their remarkable dietary flexibility (they're browsers, not grazers like sheep), or their stubborn yet endearing determination that has given rise to the term "stubborn as a goat."</p>
                  <p>Proper goat care involves appropriate fencing (they're notorious escape artists), shelter from extreme weather, companionship as they're highly social animals, and dietary management to prevent nutritional issues. For homesteaders keeping dairy goats, fiber producers raising Angoras or Cashmeres, or families enjoying goats as pets, meaningful names help establish connections with these intelligent animals. Our goat name generator provides playful inspiration perfect for these versatile, spirited animals whose adaptability and usefulness have supported human communities from mountainous regions to urban homesteads.</p>
                </div>
              )}
              {animal.toLowerCase() === 'goose' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Geese are remarkable waterfowl known for their strong family bonds, impressive navigation abilities, and distinctive honking calls that announce their V-shaped migrations. With approximately 30 species found worldwide, these intelligent birds demonstrate surprising complexity in their social structures, forming lifelong pair bonds and maintaining extended family groups that cooperatively raise young. Their excellent memory allows them to recognize human faces, remember migration routes spanning thousands of miles, and navigate using stars, landmarks, and even Earth's magnetic field.</p>
                  <p>Finding an appropriate name for a goose, whether domestic, wild, or fictional, often celebrates their dignified appearance, distinctive vocalizations, or their legendary loyalty to family groups. Many goose enthusiasts select names inspired by their graceful flight, their protective nature toward their goslings, or their confident waddling gait. Popular goose names might reference their important role in folklore across cultures, their impressive migrations that span continents, or their surprisingly complex communication systems that include over a dozen distinct calls.</p>
                  <p>Domestic goose keeping has seen renewed interest for both sustainable egg production and natural lawn maintenance. Proper care includes access to swimming water, appropriate shelter, protection from predators, and recognition of their highly social nature. For wildlife managers tracking wild populations, distinctive names help monitor migration patterns and breeding success. Our goose name generator provides honking good inspiration perfect for these intelligent waterfowl whose remarkable navigation abilities, family devotion, and adaptability have earned them prominent places in both rural homesteads and human cultural traditions.</p>
                </div>
              )}
              {animal.toLowerCase() === 'guinea pig' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Guinea pigs (or cavies) are charming rodents native to South America that have become beloved pets worldwide for their gentle nature, entertaining vocalizations, and expressive personalities. Despite their name, these social animals are neither pigs nor from Guinea, but rather domesticated members of the cavy family first kept by Andean cultures over 7,000 years ago. With their compact bodies, variety of coat types (from smooth to long and curly), and remarkable repertoire of sounds including purrs, whistles, and "popcorning" jumps of joy, guinea pigs offer delightful companionship in relatively small spaces.</p>
                  <p>Selecting the perfect name for your guinea pig often highlights their distinctive appearance, vocalizations, or personality quirks that emerge as you bond. Many guinea pig enthusiasts choose names inspired by their pet's coat color and pattern, their endearing rumbling purrs when content, or their enthusiasm at mealtime. Popular guinea pig names might playfully reference their round shape, their curious nature as they explore their environment, or their sociable tendencies that make them happiest when kept with compatible companions.</p>
                  <p>Proper guinea pig care includes appropriate housing with ample space, proper nutrition centered on high-quality hay supplemented with vegetables and limited pellets, and social companionship as these herd animals naturally live in groups. Their inability to manufacture vitamin C makes dietary management particularly important. Whether you're naming a short-haired American, a rosette-coated Abyssinian, or a luxuriously-maned Peruvian guinea pig, our name generator provides wheek-worthy inspiration perfect for these affectionate, chatty pets whose combination of hardiness, friendly nature, and expressiveness makes them ideal companions for families.</p>
                </div>
              )}
              {animal.toLowerCase() === 'hamster' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Hamsters are compact, charismatic rodents that have become popular pets worldwide due to their manageable size, relatively simple care requirements, and entertaining behaviors. With 19 species ranging from the common Syrian (golden) hamster to smaller dwarf varieties, these primarily nocturnal animals are known for their expandable cheek pouches that can carry surprising amounts of food, their fastidious grooming habits, and their natural inclination to create elaborate burrow systems. Despite their small size, hamsters display distinctive personalities and remarkable adaptations for their original desert habitats.</p>
                  <p>Choosing the perfect name for your hamster often celebrates their adorable appearance, nighttime activity patterns, or the unique personality that emerges as you observe them. Many hamster owners select names inspired by their pet's fur coloration, tiny paws, or the entertaining way they stuff their cheek pouches with food. Popular hamster names might playfully reference their burrowing behaviors, their impressive climbing abilities despite their roundness, or their independent nature that makes them suitable for pet owners who appreciate an animal that doesn't require constant interaction.</p>
                  <p>Proper hamster care includes appropriate housing with sufficient burrowing substrate, proper nutrition, exercise opportunities through wheels and play spaces, and consideration of their primarily nocturnal activity patterns. Most hamster species (particularly Syrians) are solitary and should be housed individually to prevent stress and fighting. Whether you're naming a golden Syrian, a tiny Roborovski, or a Russian dwarf hamster, our hamster name generator provides pocket-sized inspiration perfect for these endearing little companions whose industrious nature and cute antics have made them beloved pets for generations.</p>
                </div>
              )}
              {animal.toLowerCase() === 'hedgehog' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Hedgehogs are enchanting mammals with approximately 17 species distributed across parts of Europe, Asia, Africa, and New Zealand, known primarily for their distinctive coat of spines providing natural defense against predators. These primarily nocturnal insectivores combine adorable facial features with remarkable adaptations including the ability to roll into a nearly impenetrable ball when threatened, specialized muscles that control their spines individually, and impressive olfactory abilities that compensate for their relatively poor eyesight. Despite their prickly exterior, pet African pygmy hedgehogs often develop sweet, inquisitive personalities with proper socialization.</p>
                  <p>Finding the perfect name for your hedgehog often references their spiny covering, adorable snouts, or the unique personality that develops as they become comfortable with handling. Many hedgehog enthusiasts choose names inspired by their pet's defensive rolling behavior, their characteristic snuffling sounds as they explore, or their surprising speed when running on their short legs. Popular hedgehog names might playfully acknowledge their spines, their button-like eyes, or their natural behaviors like self-anointing—a curious process where they spread novel scents on their spines for reasons still debated by scientists.</p>
                  <p>Appropriate hedgehog care requires understanding their specialized needs, including proper temperature maintenance (they're susceptible to hibernation attempts in captivity), appropriate housing with solid-surface wheels for exercise, and insectivore-focused nutrition supplemented with limited fruits and vegetables. For owners of African pygmy hedgehogs—the only species commonly kept as pets—regular handling helps develop trusting relationships despite their naturally cautious nature. Our hedgehog name generator provides spiny inspiration perfect for these enchanting little mammals whose combination of defensiveness and curiosity makes them fascinatingly unique companions.</p>
                </div>
              )}
              {animal.toLowerCase() === 'hermit crab' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Hermit crabs are fascinating crustaceans known for their distinctive habit of adopting abandoned mollusk shells as portable homes, which they upgrade throughout their lives as they grow. With approximately 800 species found primarily in tropical and subtropical regions, these remarkable invertebrates feature specialized adaptations including asymmetrical bodies perfectly suited to spiral shells, powerful claws that serve both as tools and defensive weapons, and complex social behaviors including shell exchange chains where groups coordinate to find everyone a better home.</p>
                  <p>Selecting a name for your hermit crab often celebrates their shell-borrowing lifestyle, their surprising climbing abilities, or their individual appearance and behavior patterns. Many hermit crab enthusiasts choose names inspired by their pet's preferred shell style, distinctive coloration patterns, or the comical way they investigate their surroundings with their long eyestalks. Popular hermit crab names might playfully reference their habit of carrying their homes wherever they go, their surprising speed when motivated, or their social nature that makes them happiest when kept in appropriately-sized groups.</p>
                  <p>Proper hermit crab care requires recreating tropical conditions with controlled temperature and humidity, providing multiple shell options in different sizes and styles, offering appropriate substrate for molting, and maintaining the right balance of fresh and salt water. Despite common misconceptions about their simplicity as pets, hermit crabs can live 10+ years with proper care and require significant habitat considerations. Our hermit crab name generator provides shell-shocking inspiration perfect for these fascinating invertebrates whose complex behaviors and surprising longevity make them intriguing additions to carefully maintained tropical terrariums.</p>
                </div>
              )}
              {animal.toLowerCase() === 'hippo' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Hippopotamuses stand as the third-largest land mammals, their massive bulk concealing surprising agility both in water and on land. Despite their placid appearance while wallowing in rivers, these semi-aquatic giants can reach speeds of 19mph on land and are considered among Africa's most dangerous animals due to their territorial nature and impressive canine teeth that can exceed 20 inches. With specialized adaptations including eyes, ears, and nostrils positioned on top of their heads for surface breathing while mostly submerged, secreting red oily "blood sweat" that serves as natural sunscreen, and the ability to hold their breath underwater for up to five minutes, hippos represent evolutionary perfection for their ecological niche.</p>
                  <p>Naming a hippopotamus, whether in zoological collections, conservation programs, or creative contexts, often highlights their impressive size, semi-aquatic lifestyle, or distinctive features like their barrel-shaped bodies and enormous mouths. Many hippo names draw inspiration from their African heritage, their powerful presence in rivers and lakes, or their surprising vocalizations that include loud grunts and bellows that can be heard over significant distances. Names might reference their important ecological role in creating channels in waterways that benefit other species or their surprising speed despite weighing up to 4,500 pounds.</p>
                  <p>Hippo conservation has grown increasingly important as populations face threats from habitat loss, poaching for their ivory tusks, and human conflict as agricultural expansion encroaches on their territory. For zoological facilities participating in conservation breeding, thoughtful names help engage the public with the challenges these impressive animals face in the wild. Our hippo name generator provides weighty inspiration worthy of these massive mammals whose combination of aquatic grace and terrestrial power makes them among Africa's most distinctive and ecologically significant megafauna.</p>
                </div>
              )}
              {animal.toLowerCase() === 'horse' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Horses stand among humanity's most influential animal companions, their domestication approximately 6,000 years ago fundamentally transforming transportation, warfare, agriculture, and human society itself. With over 300 breeds developed for diverse purposes from the massive Clydesdale to the diminutive Falabella miniature, these majestic animals combine remarkable physical capabilities—reaching speeds over 40mph and possessing extraordinary endurance—with emotional intelligence that has created profound human-animal partnerships throughout history. Their complex social structures, acute senses, and remarkable memory make them not just useful working animals but deeply perceptive companions.</p>
                  <p>Choosing the perfect name for a horse involves considering their breed heritage, individual personality, appearance, and often the special connection between horse and human. Many equestrians select names that reflect their horse's color, markings, movement quality, or temperament. Traditional horse naming often follows familial lines for registered breeds, with elements of the sire or dam's name incorporated into offspring names. The best horse names balance distinctiveness with clarity, as horses must recognize their names for both practical handling and to strengthen the human-equine bond.</p>
                  <p>Responsible horse ownership requires significant commitment to proper nutrition, regular veterinary and farrier care, appropriate exercise, socialization with other horses, and training methods that respect their intelligence and sensitivity. Different disciplines—from dressage to trail riding to therapeutic programs—may influence naming traditions within specific equestrian communities. Whether you're naming a powerful sport horse, a gentle therapy mount, or a beloved trail companion, our horse name generator provides inspiration worthy of these magnificent animals whose partnership with humans has shaped civilization and continues to offer unparalleled connections between species.</p>
                </div>
              )}
              {animal.toLowerCase() === 'hyena' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Hyenas are sophisticated social predators often mischaracterized as mere scavengers, when in reality they are skilled hunters with up to 95% of their diet coming from their own kills in some regions. With four distinct species—spotted, brown, striped, and aardwolf—these remarkable mammals feature some of the strongest jaws in proportion to size in the animal kingdom, capable of crushing bones to extract nutritious marrow. Most fascinating is their complex social structure, particularly in spotted hyenas where females dominate and even the lowest-ranking female outranks the highest male, creating one of the most distinctive mammalian social systems in nature.</p>
                  <p>Naming a hyena, whether for wildlife research, educational programs, or zoological collections, often acknowledges their intelligence, complex vocalizations, or the distinctive features of their species. Many hyena names draw inspiration from their remarkable "laughing" calls, their powerful build, or their important ecological role as both predators and efficient cleanup crews in African ecosystems. Names might reference their surprising intelligence—comparable to primates in problem-solving abilities—or their unique social structures where clan dynamics and maternal lineages determine status.</p>
                  <p>Hyena conservation faces challenges from habitat loss, human-wildlife conflict, and persistent misconceptions about their nature and ecological importance. For researchers studying wild populations, individual names help track complex social relationships and territorial patterns. Our hyena name generator provides inspiration that looks beyond common stereotypes to honor these sophisticated carnivores whose intelligence, resilience, and essential ecological roles deserve greater appreciation as keystone species in the ecosystems they inhabit.</p>
                </div>
              )}
              {animal.toLowerCase() === 'iguana' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Iguanas are impressive reptiles native to tropical areas of Mexico, Central America, South America, and the Caribbean, with the green iguana and desert iguana among the most recognized species. These prehistoric-looking lizards feature remarkable adaptations including a third eye (parietal eye) on top of their head that detects predators from above, specialized teeth designed for shearing plant material, and powerful tails that serve as both balance organs and defensive weapons. Perhaps most impressive is their swimming ability—iguanas are excellent swimmers who can remain underwater for up to 30 minutes and have been spotted far offshore between islands.</p>
                  <p>Choosing a name for a pet iguana often celebrates their dinosaur-like appearance, their impressive size potential (some reaching over 6 feet including tail), or their distinctive behavioral traits. Many iguana owners select names inspired by their pet's impressive spines, dewlap (throat fan), or the way they bask majestically in the sun. Popular iguana names might reference their prehistoric appearance, their tropical origins, or the distinctive head-bobbing displays used for territorial and social communication among these surprisingly complex reptiles.</p>
                  <p>Proper iguana care requires significant commitment to specialized habitat requirements including large enclosures with appropriate temperature gradients, UVB lighting, humidity control, and predominantly plant-based nutrition tailored to their species. With potential lifespans exceeding 20 years, these are long-term companions requiring educated care. Whether you're naming a common green iguana, a desert iguana, or one of the more specialized species, our iguana name generator provides scale-tipping inspiration perfect for these magnificent reptiles whose combination of prehistoric appearance and complex behaviors makes them fascinating subjects for dedicated herpetoculturists.</p>
                </div>
              )}
              {animal.toLowerCase() === 'jellyfish' && (
                <div className="text-sm sm:text-base text-gray-600 space-y-4">
                  <p>Jellyfish are ancient marine invertebrates that have been pulsing through Earth's oceans for over 650 million years—predating dinosaurs by more than 400 million years. With approximately 2,000 known species ranging from nearly microscopic to giants with tentacles exceeding 100 feet, these gelatinous creatures lack brains, blood, and even central nervous systems, yet have evolved remarkable adaptations including specialized stinging cells, bioluminescent displays, and efficient propulsion systems. Most fascinating is their biological immortality—certain species like Turritopsis dohrnii can revert to earlier life stages when stressed, potentially living indefinitely under ideal conditions.</p>
                  <p>Naming a jellyfish, whether for aquarium displays, research specimens, or creative projects, often references their translucent beauty, pulsing movements, or specific species characteristics. Many enthusiasts choose names inspired by their jellyfish's ethereal appearance, the hypnotic rhythm of their swimming contractions, or the colorful internal structures visible through their transparent bells. Creative jellyfish names might acknowledge their ancient lineage, their otherworldly appearance that seems almost alien in design, or the bioluminescent glow that some species produce in the ocean's depths.</p>
                  <p>While challenging to maintain, specialized jellyfish aquariums have become increasingly popular, requiring circular tanks with gentle water flow that mimics ocean currents. For public aquariums featuring these mesmerizing creatures, evocative names help engage visitors with educational content about marine conservation and ocean ecosystems. Our jellyfish name generator provides floating inspiration perfect for these ancient, otherworldly animals whose simple yet successful biological design has allowed them to thrive through multiple mass extinctions and continue fascinating humans with their hypnotic beauty and surprising adaptations.</p>
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
