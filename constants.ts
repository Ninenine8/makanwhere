import { LocationMap } from './types';

export const COLORS = [
    '#FF9AA2', // Soft Red/Pink
    '#FFB7B2', // Salmon
    '#FFDAC1', // Peach
    '#E2F0CB', // Pale Green
    '#B5EAD7', // Mint
    '#C7CEEA', // Periwinkle
    '#F49AC2', // Pastel Magenta
    '#FDFD96'  // Pastel Yellow
];

export const LOCATIONS: LocationMap = {
    bedok: {
        name: "Bedok / 85 Market",
        lat: 1.3240,
        lng: 103.9302,
        eateries: [
            "Bedok 85 Bak Chor Mee",
            "Bedok Chwee Kueh (Interchange)",
            "Inspirasi Mee Rebus (Interchange)",
            "Song Zhou Carrot Cake",
            "Xing Ji Rou Cuo Mian",
            "Seng Hiang Bak Chor Mee",
            "Chai Chee Pork Porridge",
            "Sin Bedok North BBQ Chicken Wings",
            "Shi Wei Da Satay Bee Hoon",
            "Percolate (Cafe)"
        ]
    },
    bukit_timah: {
        name: "Bukit Timah / Beauty World",
        lat: 1.3411,
        lng: 103.7759,
        eateries: [
            "Al-Azhar Eating Restaurant",
            "Boon Tong Kee (Chicken Rice)",
            "Five Star Kampung Chicken Rice",
            "Top 1 Homemade Noodle",
            "Big Boys Western",
            "He Zhong Carrot Cake",
            "Bukit Timah Market Food Centre",
            "Ajiya Okonomiyaki",
            "Carpenter and Cook",
            "Revelry"
        ]
    },
    tai_seng: {
        name: "Tai Seng / MacPherson",
        lat: 1.3353,
        lng: 103.8884,
        eateries: [
            "Tim Ho Wan (18 Tai Seng)",
            "Hawker Chan (18 Tai Seng)",
            "The Boiler (Seafood)",
            "Kay Lee Roast Meat",
            "Julaiha Muslim Restaurant",
            "Circuit Road Hawker Centre",
            "Alfero Gelato",
            "Knots Cafe & Living",
            "233 Banh Mi (Joo Chiat nearby)",
            "L32 Handmade Noodles"
        ]
    },
    city_hall: {
        name: "City Hall / Raffles City",
        lat: 1.2931,
        lng: 103.8522,
        eateries: [
            "Chin Chin Eating House",
            "Hoshino Coffee (Capitol)",
            "Prive (CHIJMES)",
            "Dough (CHIJMES)",
            "Godmama (Funan)",
            "Afuri Ramen (Funan)",
            "Mensho Tokyo",
            "The Providore (Raffles City)",
            "PS.Cafe (Raffles City)",
            "Swee Choon Express"
        ]
    },
    tampines: {
        name: "Tampines",
        lat: 1.3521,
        lng: 103.9499,
        eateries: [
            "Lawa Bintang (Nasi Lemak)",
            "Soi Thai Kitchen",
            "Al Mahboob Indian Rojak",
            "Xing Ji Wanton Mee",
            "Keng Eng Kee Seafood (SAFRA)",
            "TANYU (Tampines 1)",
            "Three's A Crowd (Cafe)",
            "Mutton Soup (Round Market)",
            "Sarawak Kolo Mee (Round Market)"
        ]
    },
    boon_keng: {
        name: "Boon Keng / Bendemeer",
        lat: 1.3193, 
        lng: 103.8618,
        eateries: [
            "Legacy Ban Mian",
            "Eat 3 Bowls (Taiwanese)",
            "Hock Heng Fish Soup",
            "Soup Kambing Haji M. Abdul Rajak",
            "Mohd Ariffin Combo House",
            "Tucela Gelato",
            "Bendemeer Prawn Noodle",
            "Yong Xiang Carrot Cake",
            "88 Hong Kong Roast Meat"
        ]
    },
    maxwell: {
        name: "Maxwell / Chinatown",
        lat: 1.2803,
        lng: 103.8447,
        eateries: [
            "Tian Tian Chicken Rice",
            "Zhen Zhen Porridge",
            "Jin Hua Fish Soup",
            "Maxwell Fuzhou Oyster Cake",
            "Ah Tai Hainanese Chicken Rice",
            "Popo & Nana's Delights",
            "Tong Xin Ju Special Dumpling",
            "Lian He Ben Ji Claypot Rice"
        ]
    },
    tiong_bahru: {
        name: "Tiong Bahru",
        lat: 1.2850, 
        lng: 103.8324,
        eateries: [
            "Loo's Hainanese Curry Rice",
            "Jian Bo Shui Kueh",
            "Tiong Bahru Pau",
            "Min Nan Prawn Noodles",
            "Zhong Yu Yuan Wei Wanton Mee",
            "Lor Mee 178",
            "Hui Ji Fishball Noodles"
        ]
    },
    woodlands: {
        name: "Woodlands / Causeway Pt",
        lat: 1.4369,
        lng: 103.7864,
        eateries: [
            "Citrus By The Pool",
            "Hong Ji Bak Kut Teh",
            "Rasa Istimewa Waterfront",
            "Fu Shi Traditional Roasted",
            "Takagi Ramen (Woods Square)",
            "Al-Ameen Eating Corner",
            "Shabu Sai (Causeway Pt)",
            "Tipsy Panda",
            "Ivan's Carbina",
            "Marsiling Teochew Fish Soup"
        ]
    },
    yishun: {
        name: "Yishun / Chong Pang",
        lat: 1.4299,
        lng: 103.8350,
        eateries: [
            "928 Yishun Laksa",
            "Yishun 925 Chicken Rice",
            "Chong Pang Nasi Lemak",
            "Coba Coba (Nasi Ambeng)",
            "618 Sim Carrot Cake",
            "Ah Tan Wings",
            "Heng Hua Restaurant",
            "Holy Cow Creamery",
            "Arnold's Fried Chicken",
            "Sembawang Traditional Claypot Rice"
        ]
    },
    farrer_park: {
        name: "Farrer Park / Pek Kio",
        lat: 1.3120,
        lng: 103.8543,
        eateries: [
            "Wah Kee Big Prawn Noodle",
            "Legendary Bak Kut Teh",
            "Smile Thai Kitchen",
            "Swee Choon Dim Sum",
            "Beach Road Scissor-Cut Curry Rice",
            "Pin Wei Chee Cheong Fun",
            "Cheng Mun Chee Kee Pig's Organ Soup",
            "Old Hen Coffee Bar",
            "Ng Ah Sio Bak Kut Teh"
        ]
    },
    clementi: {
        name: "Clementi",
        lat: 1.3162,
        lng: 103.7649,
        eateries: [
            "Clementi 448 Fried Carrot Cake",
            "Song Fish Soup",
            "Kee Hock Hor Fun",
            "Chai Ho Satay",
            "Boon Kee Wanton Noodle",
            "Whampoa Soya Bean",
            "Nam Kee Fried Prawn Noodle",
            "Evertop Hainanese Boneless Chicken Rice",
            "Brothers Rojak"
        ]
    },
    jurong_east: {
        name: "Jurong East / JEM",
        lat: 1.3332,
        lng: 103.7423,
        eateries: [
            "Zai Shun Curry Fish Head",
            "Joo Siah Bak Koot Teh",
            "Enaq The Prata Shop",
            "Lai Heng Handmade Teochew Kueh",
            "Xing Yun Kampung Chicken Rice",
            "Feng Zhen Lor Mee",
            "Brio (Halal European)",
            "Haidilao (IMM/Westgate)",
            "Beng Hiang Restaurant"
        ]
    },
    paya_lebar: {
        name: "Paya Lebar / PLQ",
        lat: 1.3182,
        lng: 103.8931,
        eateries: [
            "Poon Nah City Macpherson Wanton Mee",
            "Qin Ji Rougamo",
            "Ramen Keisuke Tonkotsu King",
            "Lotus Thai Restaurant",
            "Greendot",
            "5 Little Bears (Taiwanese)",
            "Kucina Italian Restaurant",
            "Yakiniku Like (PLQ)",
            "Old Airport Road Food Centre (Nearby)"
        ]
    },
    bugis: {
        name: "Bugis / Haji Lane",
        lat: 1.3005,
        lng: 103.8557,
        eateries: [
            "Zam Zam (Murtabak)",
            "Victory Restaurant",
            "Blanco Court Prawn Mee",
            "YY Kafei Dian",
            "Hjh Maimunah (Nasi Padang)",
            "Albert Centre Hawker",
            "Eleven Strands",
            "Symmetry",
            "Artichoke"
        ]
    },
    serangoon: {
        name: "Serangoon / NEX",
        lat: 1.3508,
        lng: 103.8723,
        eateries: [
            "Chindamani Indian (Prata)",
            "Go-Ang Pratunam Chicken Rice",
            "Soon Soon Teochew Porridge",
            "Eleven Fingers (Curry Rice)",
            "Song Kee Fishball Noodle",
            "Ah Seng Braised Duck",
            "Din Tai Fung (NEX)",
            "Beauty in The Pot (NEX)",
            "Soi 47 Thai Food"
        ]
    },
    harbourfront: {
        name: "HarbourFront / VivoCity",
        lat: 1.2654,
        lng: 103.8215,
        eateries: [
            "Dancing Crab (VivoCity)",
            "Beauty in The Pot (VivoCity)",
            "Mr Onigiri (VivoCity)",
            "Dian Xiao Er (VivoCity)",
            "Harry's (HarbourFront)",
            "Jia Xiang Sarawak Kolo Mee",
            "Earle Swensen's",
            "Seah Im Food Centre (Nearby)",
            "Brotzeit (VivoCity)",
            "Tajimaya Yakiniku"
        ]
    },
    suntec: {
        name: "Suntec / Esplanade",
        lat: 1.2935,
        lng: 103.8572,
        eateries: [
            "Kiwami Ramen & Gyoza Bar",
            "Penang Place (Buffet)",
            "Chopstix & Rice (Nasi Padang)",
            "Poke Theory",
            "Dookki (Korean Buffet)",
            "Aburi-EN",
            "Kebabchi Charcoal BBQ",
            "HarriAnns Nonya Table",
            "Maccha House",
            "Ichiban Boshi"
        ]
    },
    raffles_place: {
        name: "Raffles Place / CBD",
        lat: 1.2830,
        lng: 103.8513,
        eateries: [
            "88 Hong Kong Roast Meat",
            "Market Street Nasi Lemak",
            "Ayam Penyet (Arcade)",
            "Seng Kee Local Delights",
            "Song Kee Fishball Noodles",
            "The Basement (Hong Leong)",
            "Gourmet Corner",
            "Qiu Lian Ban Mian (Lau Pa Sat)",
            "Ah Heng Curry Chicken Mee",
            "Grain Traders"
        ]
    },
    orchard: {
        name: "Orchard / Far East",
        lat: 1.3040,
        lng: 103.8314,
        eateries: [
            "New Station Snack Bar",
            "Jtown Cafe (Bakmie)",
            "Hainanese Delicacy (Chicken Rice)",
            "Ah Yen Traditional Fried Pork",
            "Fiie's Cafe (Lucky Plaza)",
            "My Favourite Cafe (Yong Tau Foo)",
            "Riverside Indonesian BBQ",
            "Kim Dae Mun (Concorde)",
            "PeraMakan (Tangs)",
            "Tsuru-koshi Udon"
        ]
    },
    jewel: {
        name: "Jewel Changi Airport",
        lat: 1.3644,
        lng: 103.9915,
        eateries: [
            "Shake Shack (Jewel)",
            "A&W Restaurant",
            "Beauty in The Pot",
            "Kam's Roast",
            "Birds of Paradise (Gelato)",
            "Tsuta Japanese Soba",
            "Burger & Lobster",
            "Song Fa Bak Kut Teh",
            "Yun Nans",
            "Din Tai Fung (Jewel)"
        ]
    },
    mbs: {
        name: "Marina Bay Sands",
        lat: 1.2834,
        lng: 103.8607,
        eateries: [
            "Black Tap Burgers & Beer",
            "Ippudo Ramen",
            "Rasapura Masters (Food Court)",
            "Din Tai Fung (MBS)",
            "Yardbird Southern Table",
            "Bread Street Kitchen",
            "Da Paolo Gastronomia",
            "Canton Paradise",
            "Toast Box (MBS)",
            "Spago Bar & Lounge"
        ]
    },
    sentosa: {
        name: "Sentosa / RWS",
        lat: 1.2494,
        lng: 103.8303,
        eateries: [
            "Coastes (Siloso Beach)",
            "Trapizza (Siloso Beach)",
            "Malaysian Food Street (RWS)",
            "Din Tai Fung (RWS)",
            "Ocean Restaurant",
            "Hard Rock Cafe",
            "Good Old Days",
            "Ola Beach Club",
            "FOC Sentosa",
            "Mel's Drive-In (USS)"
        ]
    },
    general: {
        name: "General Singapore",
        lat: 0,
        lng: 0,
        eateries: [
            "McDonald's",
            "KFC",
            "Yakun Kaya Toast",
            "Toast Box",
            "Subway",
            "Old Chang Kee",
            "Saizeriya",
            "Encik Tan",
            "Stuff'd",
            "Mos Burger"
        ]
    }
};