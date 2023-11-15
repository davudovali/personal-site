import {
    ArticleEnum,
    LevelEnum,
    NounWordType,
    WordGrammarType,
    WordInfo,
} from '../RepitorTypes'

type WordListType = NounWordType[]

// https://germanwithlaura.com/noun-gender/
export const A1GenderRules: WordListType = [
    {
        text: 'Currencies',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'Currencies, except: die Mark (former German currency), das Pfund (British pound), die Krone (Danish currency)',
    },
    {
        text: 'Tage, Jahreszeiten, Monate',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: 'Days, Seasons, Months are always masculine',
    },
    {
        text: 'Gin, Schnaps, Wein, Kakao, Saft',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: 'Drinks except Das Bier',
    },
    {
        text: 'Mountains and Mountain Ranges',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'die Eifel, die Haardt, die Rhön, die Sierra Nevada, and mountains / mountain ranges that are actually compound nouns (compound nouns take the gender of the final noun): das Erzgebirge, das Matterhorn, die Zugspitze',
    },
    {
        text: 'Non-german Rivers',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'Exceptions: non-German rivers ending in -a or -e, e.g.: die Seine, die Themse (Thames), die Wolga',
    },
    {
        text: 'Outer Space(Moon, Pluto...)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: 'die Sonne (sun), die Venus, die Erde (Earth)',
    },
    {
        text: 'Rocks and Minerals',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'Exceptions: das Erz (ore), die Kohle (coal), die Kreide (chalk), das Mineral (mineral)',
    },
    {
        text: 'Weather',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'Exceptions: die Sonne (sun), die Wolke (cloud), die Brise (breeze), das Eis (ice), das Gewitter (thunderstorm), die Graupel (hail), das Wetter (weather), die Witterung (atmospheric conditions)',
    },
    {
        text: '-ung',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: 'feminine',
    },
    {
        text: 'Airplane, motorcycle, & ship makes/models/names',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Boeing, die Cessna, die BMW, die Honda, die “Bismarck”, die “Bremen”\n' +
            '\n' +
            'Common exceptions:\n' +
            'Means of transportation that maintain the gender of the base word, e.g.: der Airbus, der Storch, der “Albatros”, das “Möwchen”\n' +
            '\n' +
            'Also general means of transportation: der Zug (train) [but die Bahn (railway/train)!], der Wagen / das Auto (car), das Schiff/Boot (ship/boot), das Fahrrad (bike), das Motorrad (motorcycle)',
    },
    {
        text: 'Animals',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Gans (goose), die Kuh (cow), die Sau (sow), die Henne (hen)',
    },
    {
        text: 'Numerals used as nouns',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Eins (1), die Zwei (2), die Sechzehn (16), die Million, die Milliarde (billion)\n' +
            '\n' +
            'Common exceptions:\n' +
            'Quantity expressions such as das Dutzend, das Hundert, das Tausend',
    },
    {
        text: 'Rivers within Germany, Austria, Switzerland',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Donau, die Elbe, die Havel, die Mosel, die Oder, die Weser\n' +
            '\n' +
            'Some exceptions:\n' +
            'der Inn, der Lech, der Main, der Neckar, der Rhein',
    },
    {
        text: 'Trees, Fruits, and Flowers',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Eiche (oak), die Pflaume (plum), die Tulpe (tulip),\n' +
            '\n' +
            'Exceptions:\n' +
            'der Ahorn (maple), der Apfel (apple), der Löwenzahn (dandelion)',
    },
    {
        text: 'Alphabet letters and music notes',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: 'das “A”, das “B”, das “Fis” (F-sharp), das “Des” (D-flat)',
    },
    {
        text: 'Continents, cities, provinces, and most countries',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Afrika, das London, das Frankreich (France), das Bayern (Bavaria)\n' +
            '\n' +
            'Common exceptions:\n' +
            'die Arktis (Artic), die Antarktis (Antarctica), die Schweiz (Switzerland) and other provinces or countries, including those that end in -a, -e, -ei, and -ie (e.g. die Türkei) that are gendered feminine with the exception of Afrika and China, which are still neuter; some countries are masculine: der Iran, der Jemen, der Kongo, der Libanon, der Sudan.',
    },
    {
        text: 'Gerunds, colors, languages, English -ing forms and other parts of speech used as nouns',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Singen (singing), das Blau (blue), das Spanisch, das Meeting, das Nein (no)',
    },
    {
        text: 'Hotels, cafes, restaurants, and movie theaters',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: 'das Marriott, das “Hard-Rock”, das Hilton, das “Grand Rex”',
    },
    {
        text: 'Metals and chemical elements',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: 'Scientific units',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Atom, das Elektron, das Volt, das Watt\n' +
            '\n' +
            'Common exceptions:\n' +
            'Liter and Meter having varying gender. (Read more in the Noun Outliers section.)',
    },
    {
        text: 'Young persons and baby animals',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Baby, das Kind (child), das Ferkel (piglet), das Fohlen (foal), das Lamm (lamb)',
    },
    {
        text: '-ant',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-ast',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-ich',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-ig',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-ling',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-or',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: '-us',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate: '',
    },
    {
        text: 'nouns formed from strong verbs',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'der Betrieb (operation, company, plant), der Biss (bite, from bissen), der Fall (case, instance; drop, from fallen), der Gang (gear; aisle)\n' +
            '\n' +
            'Common exceptions:\n' +
            'das Grab (grave), das Leid (harm, sorrow), das Maß (measurement), das Schloss (castle), das Verbot (ban, prohibition)',
    },
    {
        text: '~60% of nouns ending in -en, -el, -er',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        translate:
            'der Hafen (harbor), der Flügel (wing), der Schatten (shade), der Fehler (mistake) and all nouns referring to people (most are from verbs), e.g. der Bäcker (baker, from backen), der Fahrer (driver, from fahren), but also der Onkel (uncle), der Vater (father), etc.\n' +
            '\n' +
            'Some common exceptions:\n' +
            'all gerunds such as das Essen (the food, eating) or das Fahren (driving); die Butter (butter), die Regel (rule), die Wurzel (root), die Geisel (hostage), das Fieber (fever), das Segel (sail), das Zeichen (sign, symbol)\n' +
            '\n' +
            'NOTE: there are no -en nouns that are feminine!',
    },
    {
        text: '-a',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-anz',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-enz',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-ei',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-ie',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-heit',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-keit',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-ik',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-sion',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-tion',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-sis',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-tät',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate: '',
    },
    {
        text: '-ung',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'Common exceptions:' +
            'das Sofa, das Genie (genius) ,der Atlantik, der Katholik, das Mosaik, der Pazifik, das Abitur (university-entrance diploma), das Purpur (purple)',
    },
    {
        text: '90% of nouns ending in -e',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Blume (flower), die Lampe (lamp), die Katze (cat), die Decke (blanket; ceiling) die Collage, die Marionette\n' +
            '\n' +
            'Some common exceptions:\n' +
            'der Käse (cheese), das Auge (eye), das Ende (end), das Interesse (interest), most nouns that end with -e but begin with Ge- (e.g. das Genie)',
    },
    {
        text: 'most nouns (coming from verbs) ending in -t',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        translate:
            'die Ankunft (arrival), die Fahrt (drive), die Macht (power), die Aussicht (view)\n' +
            '\n' +
            'Some common exceptions:\n' +
            'der Dienst (service), der Durst (thirst), das Gift (poison)',
    },
    {
        text: '-chen',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-lein',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-icht',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-il',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-it',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-ma',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-ment',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-tel',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-tum',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: '-um',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate: '',
    },
    {
        text: 'most nouns that start with the prefix Ge-',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Gesetz (law), das Gespräch (conversation), das Gebäude (building)\n' +
            '\n' +
            'Common exceptions:\n' +
            'der Gedanke (thought), der Geschmack (taste), and approx. 20 other masculine and feminine nouns that start with Ge- not counting any Ge- nouns referring to male or female persons (e.g. der Genosse / die Genossin — comrade)',
    },
    {
        text: '~70% of nouns ending with -nis and -sal',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'das Bedürfnis (need), das Ereignis (event), das Schicksal (fate)\n' +
            '\n' +
            'Note: The remaining 30% of -nis and -sal nouns are feminine and many originate from adjectives or indicate states of mind: die Bitternis (bitterness), die Finsternis (darkness), die Besorgnis (anxiety), die Betrübnis (sadness). Other: die Erkenntnis (perception), die Erlaubnis (permission), die Kenntnis (knowledge, cognition, skills), die Mühsal (hardship)',
    },
    {
        text: '-al (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-an (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-ar/-är (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-at (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-ent (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-ett (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-ier (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: '-iv (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
    {
        text: ' -o/-on (foreign loan words for objects)',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        translate:
            'IF the suffixes -al, -an, -ar, -är, -at, -ent, -ett, -ier, -iv-, -o, -on are used to refer to male persons, they take the masculine: der Student, der Militär (military man), der Kanadier (male Canadian).\n' +
            '\n' +
            'Otherwise, these suffixes are generally neuter: das Lineal (ruler), das Organ, das Formular, das Militär (military), das Sekretariat (secretary), das Talent, das Etikett (label, tag), das Papier (paper), das Adjecktiv (adjective), das Büro (office), das Mikrophon',
    },
]
