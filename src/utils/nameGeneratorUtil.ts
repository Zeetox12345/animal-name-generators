// Name generation patterns for each animal
const patterns = {
  alpaca: {
    prefixes: ['Pa', 'An', 'Cu', 'Lla', 'Hua', 'Qui', 'In', 'Tu', 'Si', 'Ma', 'Ca', 'Mi', 'Chu', 'Con', 'Sum', 'Ru', 'Tam', 
               'Qos', 'Way', 'Kun', 'Apu', 'Qha', 'Tak', 'Qor', 'Sam', 'Wak', 'Pac', 'Qoc', 'Was', 'Qol', 'Rim', 'Tar', 'Qat',
               'Aya', 'Pun', 'Qoy', 'Wil', 'Kus', 'Yac', 'Pur', 'Qun', 'Wam', 'Kil', 'Phu', 'Qan', 'Sac', 'Wak', 'Pum', 'Qul',
               'Yur', 'Qos', 'Wan', 'Kuy', 'Paq', 'Qun', 'Saq', 'War', 'Puk', 'Quy', 'Yak'],
    suffixes: ['co', 'des', 'sco', 'mo', 'raz', 'to', 'ka', 'pac', 'rra', 'chu', 'mu', 'ro', 'sti', 'llo', 'cha', 'dor', 'ti',
               'maq', 'mi', 'bo', 'qo', 'ra', 'tur', 'pu', 'paq', 'ki', 'ri', 'mi', 'ku', 'way', 'cha', 'qa', 'si', 'qa', 'na',
               'ri', 'ta', 'pa', 'yu', 'ma', 'sa', 'wa', 'qu', 'pi', 'tu', 'ka', 'ru', 'wi', 'ya', 'po', 'lu', 'nu', 'chi', 'qo',
               'ra', 'su', 'ta', 'pa', 'yu', 'ma', 'sa'],
    femininePrefixes: ['Lu', 'Nu', 'Ki', 'Si', 'Qo', 'Way', 'Ku', 'Ti', 'Mu', 'Illa', 'Qan', 'Pha', 'Ur', 'Way', 'Qoy', 'Phu',
                       'Ill', 'Qan', 'Pha', 'Sac', 'War', 'Kus', 'Tik', 'Mun', 'Qha', 'Ill', 'Qan', 'Pha', 'Qor', 'Sam', 'Way',
                       'Kus', 'Tik', 'Qor', 'Sam', 'Mun', 'Qha', 'Ill', 'Qan', 'Pha', 'Sac', 'War', 'Kus', 'Tik', 'Mun', 'Qha',
                       'Ill', 'Qan', 'Pha', 'Qor', 'Sam', 'Way', 'Kus', 'Tik', 'Qor', 'Sam'],
    feminineSuffixes: ['na', 'sta', 'lla', 'sa', 'ya', 'ra', 'si', 'ka', 'ra', 'mi', 'nay', 'ri', 'tu', 'cha', 'pi', 'lla',
                       'qo', 'ra', 'tur', 'pu', 'paq', 'ki', 'ri', 'mi', 'ku', 'way', 'cha', 'qa', 'si', 'qa', 'na', 'ri', 'ta',
                       'pa', 'yu', 'ma', 'sa', 'wa', 'qu', 'pi', 'tu', 'ka', 'ru', 'wi', 'ya', 'po', 'lu', 'nu', 'chi', 'qo',
                       'ra', 'su', 'ta', 'pa', 'yu', 'ma', 'sa']
  },
  bat: {
    prefixes: ['Noc', 'Dra', 'Ech', 'Fan', 'Win', 'Sha', 'Mid', 'Glo', 'Tal', 'Scre', 'Phan', 'Sto', 'Nig', 'Twi', 'Rav', 'On',
               'Son', 'Dark', 'Ves', 'Umb', 'Noc', 'Ecl', 'Mys', 'Shr', 'Sil', 'Whi', 'Ste', 'Mis', 'Vap', 'Zep', 'Nim',
               'Sha', 'Dus', 'Twi', 'Daw', 'Neb', 'Cel', 'Ast', 'Lyr', 'Veg', 'Ste', 'Ast', 'Lun', 'Ecl', 'Dus', 'Twi',
               'Sha', 'Mys', 'Star', 'Nov', 'Aur', 'Nig', 'Sto', 'Sha', 'Daw', 'Ves', 'Noc', 'Sel', 'Umb', 'Nyx', 'Mis'],
    suffixes: ['tis', 'co', 'ho', 'ng', 'de', 'ght', 'om', 'on', 'ech', 'dow', 'sk', 'tom', 'rm', 'ht', 'en', 'yx',
               'ar', 'ken', 'per', 'ra', 'urn', 'pse', 'tic', 'oud', 'tte', 'per', 'th', 'tom', 'st', 'or', 'yr', 'us',
               'de', 'sk', 'ght', 'wn', 'ula', 'ste', 'ral', 'ra', 'ga', 'lla', 'tra', 'na', 'pse', 'sk', 'ght', 'dow',
               'tic', 'ght', 'va', 'ra', 'ht', 'rm', 'de', 'wn', 'per', 'ne', 'ne', 'ra', 'st', 'ty'],
    femininePrefixes: ['Lu', 'Ech', 'Sha', 'Twi', 'Mys', 'Star', 'No', 'Au', 'Du', 'Nig', 'Sto', 'Sha', 'Daw', 'Ves',
                       'Noc', 'Sel', 'Umb', 'Nyx', 'Mis', 'Neb', 'Cel', 'Ast', 'Lyr', 'Veg', 'Ste', 'Ast', 'Lun', 'Ecl',
                       'Dus', 'Twi', 'Sha', 'Mys', 'Star', 'Nov', 'Aur', 'Nig', 'Sto', 'Sha', 'Daw', 'Ves', 'Noc', 'Sel',
                       'Umb', 'Nyx', 'Mis', 'Neb', 'Cel', 'Ast', 'Lyr', 'Veg', 'Ste', 'Ast', 'Lun', 'Ecl', 'Dus', 'Twi'],
    feminineSuffixes: ['na', 'ho', 'dow', 'light', 'tic', 'va', 'ra', 'sk', 'ht', 'rm', 'de', 'wn', 'per', 'ne',
                       'ula', 'ste', 'ral', 'ra', 'ga', 'lla', 'tra', 'na', 'pse', 'sk', 'ght', 'dow', 'tic', 'ght',
                       'va', 'ra', 'ht', 'rm', 'de', 'wn', 'per', 'ne', 'ne', 'ra', 'st', 'ty', 'la', 'te', 'al',
                       'a', 'ga', 'la', 'ra', 'na', 'se', 'sk', 'ht', 'ow', 'ic', 'ht']
  },
  ant: {
    prefixes: ['For', 'Man', 'Chi', 'Pin', 'Tho', 'Ant', 'Col', 'Sca', 'Dig', 'Wor', 'Bur', 'Tun', 'Hex', 'Car',
               'Sol', 'Sco', 'Har', 'War', 'Tra', 'Sen', 'Gua', 'Pat', 'Def', 'Hun', 'Rai', 'Mar', 'Car', 'Bui',
               'For', 'Exp', 'Pio', 'Ran', 'Sta', 'Pro', 'See', 'Wan', 'Nom', 'Rov', 'Str', 'Run', 'Cra', 'Cli',
               'Lea', 'Min', 'Nes', 'Que', 'Dro', 'Lar', 'Pup', 'Egg', 'Spi', 'Sti', 'Bit', 'Gna', 'Mou', 'Hil'],
    suffixes: ['mi', 'cer', 'tin', 'cer', 'rax', 'en', 'ony', 'le', 'ger', 'ker', 'row', 'nel', 'pod', 'ace',
               'der', 'ut', 'ter', 'or', 'ker', 'try', 'rd', 'rol', 'der', 'ter', 'der', 'er', 'er', 'der',
               'er', 'er', 'er', 'er', 'er', 'er', 'er', 'er', 'ad', 'er', 'er', 'er', 'er', 'er', 'er',
               'er', 'er', 'en', 'ne', 'va', 'ae', 'er', 'ng', 'er', 'er', 'nd', 'er', 'er', 'er', 'er'],
    femininePrefixes: ['Nec', 'Sil', 'Cry', 'Dew', 'Ros', 'Phe', 'Iri', 'Jas', 'Lil', 'Myr', 'Flo', 'Pea',
                       'Amb', 'Rub', 'Opa', 'Cor', 'Jad', 'Ivy', 'Wil', 'Fer', 'Pet', 'Blo', 'Dai', 'Lot',
                       'Orc', 'Vio', 'Ros', 'Pop', 'Iri', 'Dah', 'Aza', 'Mag', 'Zin', 'Tul', 'Lil', 'Jas',
                       'Mar', 'Peo', 'Pri', 'Lav', 'Cam', 'Daf', 'Hya', 'Iri', 'Lil', 'Myr', 'Nar', 'Orc'],
    feminineSuffixes: ['tar', 'ka', 'stal', 'drop', 'sa', 'ra', 'des', 'mine', 'ly', 'mex', 'ra', 'rl',
                       'er', 'by', 'al', 'al', 'de', 'vy', 'low', 'rn', 'al', 'om', 'sy', 'us',
                       'id', 'let', 'se', 'py', 'is', 'lia', 'lea', 'lia', 'nia', 'ip', 'ly', 'ne',
                       'old', 'ny', 'se', 'der', 'lia', 'dil', 'nth', 'is', 'ly', 'tle', 'sus', 'id']
  },
  alligator: {
    prefixes: ['Cro', 'Sna', 'Rip', 'Jaw', 'Sca', 'Fang', 'Swam', 'Bay', 'Del', 'Mar', 'Raz', 'Bit', 'Cho', 'Gat',
               'Tit', 'Rex', 'Thu', 'Sto', 'Riv', 'Lak', 'Sur', 'Wav', 'Cur', 'Tid', 'Rap', 'Tor', 'Flo', 'Str',
               'Bro', 'Cre', 'Bas', 'Cha', 'Flo', 'Dri', 'Edd', 'Rip', 'Spl', 'Spr', 'Mis', 'Foa', 'Sal', 'Moc',
               'Cai', 'Dra', 'Ser', 'Ven', 'Vip', 'Boa', 'Pyt', 'Ana', 'Asp', 'Kra', 'Hyd', 'Lev', 'Dra', 'Wyr'],
    suffixes: ['co', 'pper', 'ple', 'ws', 'le', 'ger', 'per', 'ou', 'ta', 'sh', 'or', 'te', 'mp', 'or',
               'an', 'ex', 'der', 'rm', 'er', 'ke', 'ge', 've', 'ent', 'de', 'ids', 'ent', 'od', 'eam',
               'ok', 'ek', 'in', 'nel', 'w', 'ft', 'y', 'le', 'ash', 'ay', 't', 'm', 't', 'sin',
               'man', 'gon', 'ent', 'om', 'er', 'a', 'on', 'da', 'id', 'en', 'ra', 'than', 'ke', 'm'],
    femininePrefixes: ['Lil', 'Sap', 'Cry', 'Pea', 'Jas', 'Ivy', 'Flo', 'Del', 'Bel', 'Mer', 'Riv', 'Str',
                       'Bro', 'Cre', 'Lak', 'Pon', 'Mar', 'Swa', 'Bay', 'Lag', 'Oas', 'Spr', 'Poo', 'Bas',
                       'Cha', 'Flo', 'Dri', 'Edd', 'Rip', 'Spl', 'Spr', 'Mis', 'Foa', 'Wav', 'Tid', 'Cur',
                       'Sur', 'Flo', 'Str', 'Bro', 'Lun', 'Sol', 'Ste', 'Aur', 'Cel', 'Neb', 'Lyr', 'Ves'],
    feminineSuffixes: ['ly', 'ire', 'stal', 'rl', 'mine', 'ra', 'ra', 'ta', 'la', 'sa', 'er', 'eam',
                       'ok', 'ek', 'ke', 'nd', 'sh', 'mp', 'ou', 'oon', 'is', 'ing', 'l', 'in',
                       'nel', 'w', 'ft', 'y', 'ple', 'ash', 'ay', 't', 'm', 've', 'de', 'ent',
                       'ge', 'od', 'eam', 'ok', 'a', 'ar', 'lla', 'ora', 'este', 'ula', 'ra', 'per']
  },
  ape: {
    prefixes: ['Kon', 'Gor', 'Sil', 'Migh', 'Jun', 'Ban', 'Vin', 'Zan', 'Tar', 'Pri', 'Atl', 'Tit', 'Gia', 'Col',
               'Mou', 'For', 'Can', 'Bra', 'Tre', 'Lea', 'Roc', 'Sto', 'Bou', 'Hil', 'Pea', 'Sum', 'Cre', 'Rid',
               'Val', 'Gle', 'Gro', 'Woo', 'Tim', 'Tru', 'Roo', 'Ste', 'Sta', 'Sho', 'Spr', 'Bud', 'Chi', 'Ora',
               'Bon', 'Lem', 'Mac', 'Bab', 'Gib', 'Man', 'Sak', 'Tam', 'Mar', 'How', 'Lan', 'Sia', 'Ver', 'Wol'],
    suffixes: ['go', 'illa', 'ver', 'ty', 'gle', 'ana', 'es', 'zi', 'zan', 'mate', 'as', 'an', 'nt', 'sal',
               'ain', 'est', 'py', 'nch', 'e', 'f', 'k', 'ne', 'der', 'l', 'k', 'mit', 'st', 'ge',
               'ley', 'n', 've', 'ds', 'ber', 'nk', 't', 'm', 'lk', 'ot', 'ut', 'd', 'mp', 'ng',
               'go', 'ur', 'que', 'oon', 'bon', 'dril', 'i', 'rin', 'set', 'ler', 'gur', 'mang', 'vet', 'f'],
    femininePrefixes: ['Flo', 'Lil', 'Jas', 'Lun', 'Stel', 'Ivy', 'Wil', 'Rai', 'Daw', 'Eve', 'Ros', 'Vio',
                       'Dai', 'Iri', 'Pop', 'Lot', 'Orc', 'Tul', 'Lil', 'Fer', 'Vin', 'Lea', 'Pet', 'Blo',
                       'Flo', 'Gar', 'Mea', 'Fie', 'Pra', 'Val', 'Gle', 'Gro', 'Woo', 'For', 'Jun', 'Rai',
                       'Can', 'Bra', 'Tre', 'Lea', 'Sel', 'Lun', 'Cel', 'Aur', 'Ste', 'Nov', 'Ast', 'Lyr'],
    feminineSuffixes: ['ra', 'ly', 'mine', 'na', 'la', 'vy', 'low', 'na', 'wn', 'ning', 'se', 'let',
                       'sy', 'is', 'py', 'us', 'id', 'ip', 'y', 'n', 'e', 'f', 'al', 'om',
                       'er', 'den', 'dow', 'ld', 'rie', 'ley', 'n', 've', 'ds', 'est', 'gle', 'n',
                       'py', 'nch', 'e', 'f', 'ne', 'a', 'ste', 'ora', 'lla', 'va', 'ral', 'ra']
  }
};

function generateNames(animalType: keyof typeof patterns, gender: 'male' | 'female', count: number): string[] {
  const pattern = patterns[animalType];
  const names = new Set<string>();
  const prefixes = gender === 'male' ? pattern.prefixes : pattern.femininePrefixes;
  const suffixes = gender === 'male' ? pattern.suffixes : pattern.feminineSuffixes;

  // Add some variation by sometimes combining two prefixes or two suffixes
  while (names.size < count) {
    let name: string;
    const rand = Math.random();
    
    if (rand < 0.7) {
      // Standard prefix + suffix
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      name = prefix + suffix;
    } else if (rand < 0.85) {
      // Two prefixes + suffix
      const prefix1 = prefixes[Math.floor(Math.random() * prefixes.length)];
      const prefix2 = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      name = prefix1 + prefix2.toLowerCase() + suffix;
    } else {
      // Prefix + two suffixes
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix1 = suffixes[Math.floor(Math.random() * suffixes.length)];
      const suffix2 = suffixes[Math.floor(Math.random() * suffixes.length)];
      name = prefix + suffix1 + suffix2;
    }
    
    // Only add if it's a unique name and meets minimum length
    if (!names.has(name) && name.length >= 3) {
      names.add(name);
    }
  }

  return Array.from(names);
}

module.exports = {
  generateAnimalNames: function(animal: keyof typeof patterns) {
    return {
      male: generateNames(animal, 'male', 5000),
      female: generateNames(animal, 'female', 5000)
    };
  }
}; 