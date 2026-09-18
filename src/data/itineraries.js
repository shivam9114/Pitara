import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.avif";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.avif";

const itineraries = [
  {
    slug: "royal-rajasthan",
    number: "01",

    image: img1,

    location: "Rajasthan, India",

    title: "Royal Rajasthan Tour",

    duration: "10 Days / 9 Nights",

    description:
      "Discover the royal heart of Rajasthan through Jaipur, Jodhpur, Pushkar and Udaipur, experiencing magnificent forts, palaces, sacred lakes and the colourful culture of India's desert state.",

    highlights: [
      "Jaipur",
      "Jodhpur",
      "Pushkar",
      "Udaipur",
      "Royal Forts & Palaces",
      "Rajasthani Culture",
    ],

    days: [
      {
        day: "01",
        title: "Arrival in Jaipur",
        description:
          "Welcome to India! Upon arrival at Jaipur Airport, our local representative greets you and then escorts you to the hotel. Check-in at the hotel and relax after your journey.",
      },

      {
        day: "02",
        title: "Jaipur – Full-Day Sightseeing",
        description:
          "After breakfast at the hotel, proceed for a full-day guided tour of Jaipur's royal heritage. Begin with a visit to the magnificent Amber Fort, a hilltop fortress known for its artistic Hindu architecture. Ascend the fort by elephant ride, subject to availability, or 4x4 jeep. En route, stop for photographs at the scenic Jal Mahal. Visit the elegant City Palace, a royal residence with museums showcasing royal costumes, weapons and artefacts.",
      },

      {
        day: "03",
        title: "Jaipur – Jodhpur",
        description:
          "After breakfast, drive from Jaipur to Jodhpur, the vibrant Blue City of Rajasthan, known for its majestic forts and rich cultural heritage. Upon arrival, check in at the hotel and relax. The rest of the day is free for leisure or to explore the local markets at your own pace.",
      },

      {
        day: "04",
        title: "Jodhpur – Full-Day City Tour",
        description:
          "Enjoy a full-day city tour of Jodhpur, exploring the major highlights of the Blue City, including the majestic Mehrangarh Fort and the elegant marble cenotaph Jaswant Thada, set amidst serene gardens.",
      },

      {
        day: "05",
        title: "Jodhpur – Pushkar",
        description:
          "After breakfast, drive to Pushkar. Upon arrival, visit the sacred Pushkar Lake and the famous Brahma Temple, one of the few temples in the world dedicated to Lord Brahma. Later, check in at the hotel and enjoy a comfortable overnight stay.",
      },

      {
        day: "06",
        title: "Pushkar",
        description:
          "Full day at leisure in Pushkar. Enjoy the town at your own pace and experience its spiritual atmosphere and local surroundings.",
      },

      {
        day: "07",
        title: "Pushkar – Udaipur",
        description:
          "After breakfast, embark on a scenic drive to Udaipur, the City of Lakes. Enjoy picturesque views of the Aravalli hills and countryside along the way. Upon arrival, check in at your hotel and relax. The evening is free to unwind or explore the local markets.",
      },

      {
        day: "08",
        title: "Udaipur – City Tour",
        description:
          "After breakfast, continue your Udaipur city tour. Visit the magnificent City Palace, Jagmandir, Fateh Sagar Lake, Lake Pichola and Sahelion Ki Bari before returning to your hotel.",
      },

      {
        day: "09",
        title: "Udaipur – Leisure",
        description:
          "Full day at leisure with car and driver. Overnight stay at the hotel.",
      },

      {
        day: "10",
        title: "Delhi – Departure",
        description:
          "After breakfast, spend some time at the hotel before proceeding to Delhi Airport for your onward flight.",
      },
    ],
  },

  {
    slug: "golden-triangle-himachal-amritsar",
    number: "02",

    image: img2,

    location: "Delhi • Rajasthan • Himachal • Punjab",

    title: "Golden Triangle with Himachal & Amritsar",

    duration: "12 Nights / 13 Days",

    description:
      "Experience India's iconic Golden Triangle before travelling into the Himalayas and onward to Amritsar, combining historic cities, mountain landscapes and spiritual experiences.",

    highlights: [
      "Delhi",
      "Agra",
      "Jaipur",
      "Shimla",
      "Manali",
      "Amritsar",
    ],

    days: [
      {
        day: "01",
        title: "Arrival in Delhi – Welcome to India",
        description:
          "Welcome to Delhi, the vibrant capital of India. Upon arrival at Delhi International Airport, you will receive a warm welcome from our company representative, who will assist with your transfer to the hotel. Check in and relax after your journey. The rest of the day is free at leisure.",
      },

      {
        day: "02",
        title: "Delhi – Full-Day Tour",
        description:
          "Enjoy a full-day guided sightseeing tour covering Old and New Delhi. Visit Raj Ghat, Jama Masjid, Red Fort, Humayun's Tomb, India Gate, the government buildings and Qutub Minar.",
      },

      {
        day: "03",
        title: "Delhi – Agra",
        description:
          "Travel from Delhi to Agra. En route, make a short stop at Sikandra to admire the Tomb of Emperor Akbar. Upon arrival in Agra, visit the Taj Mahal and Agra Fort before enjoying the evening at leisure.",
      },

      {
        day: "04",
        title: "Agra – Jaipur via Fatehpur Sikri",
        description:
          "Depart for Jaipur and visit Fatehpur Sikri en route. Explore the former Mughal capital and its historic monuments including Buland Darwaza, Jama Masjid and the palaces and courtyards.",
      },

      {
        day: "05",
        title: "Jaipur – Full-Day Guided Tour",
        description:
          "Explore Jaipur with visits to Hawa Mahal, Amber Fort, City Palace and Jantar Mantar. The evening is free for relaxation or shopping in Jaipur's colourful markets.",
      },

      {
        day: "06",
        title: "Jaipur – Delhi",
        description:
          "Drive back to Delhi after breakfast. Upon arrival, check in at your hotel and relax. Evening at leisure.",
      },

      {
        day: "07",
        title: "Delhi – Kalka by Shatabdi Express – Shimla",
        description:
          "Transfer to the railway station to board the Shatabdi Express to Kalka. Upon arrival, continue by road towards Shimla through the scenic Himalayan foothills.",
      },

      {
        day: "08",
        title: "Shimla – Naldehra & Kufri",
        description:
          "Enjoy an excursion to Naldehra and Kufri, known for scenic landscapes, pine forests and panoramic Himalayan views. Later visit Mall Road and Jakhu Temple.",
      },

      {
        day: "09",
        title: "Shimla – Manali",
        description:
          "Begin your scenic journey towards Manali through Himalayan landscapes, picturesque valleys, villages, forests and mountain scenery.",
      },

      {
        day: "10",
        title: "Manali – Full-Day Sightseeing",
        description:
          "Explore Hadimba Devi Temple, Manu Temple, Vashisht Village and Hot Water Springs, Club House, local markets and Mall Road.",
      },

      {
        day: "11",
        title: "Manali – Amritsar",
        description:
          "Travel from Manali towards Amritsar through the Himalayan landscapes and Punjab countryside. Upon arrival, check in and relax.",
      },

      {
        day: "12",
        title: "Amritsar City Tour – Train to Delhi",
        description:
          "Visit the Golden Temple, Jallianwala Bagh and Durgiana Temple. Later visit the Wagah Border to witness the Beating Retreat Ceremony before travelling by train to Delhi.",
      },

      {
        day: "13",
        title: "Delhi – Departure",
        description:
          "Enjoy breakfast and some leisure time before transferring to Delhi International Airport for your onward journey.",
      },
    ],
  },

  {
    slug: "golden-triangle-varanasi",
    number: "03",

    image: img3,

    location: "Delhi • Agra • Jaipur • Varanasi",

    title: "Golden Triangle with Varanasi",

    duration: "10 Days / 9 Nights",

    description:
      "Journey through India's historic Golden Triangle before discovering the spiritual soul of Varanasi, from ancient temples and sacred ghats to the mesmerizing Ganga Aarti.",

    highlights: [
      "Delhi",
      "Jaipur",
      "Agra",
      "Varanasi",
      "Sarnath",
      "Ganga Aarti",
    ],

    days: [
      {
        day: "01",
        title: "Arrival in Delhi",
        description:
          "Upon arrival at Indira Gandhi International Airport, Delhi, you will be received by our representative and assisted with your transfer to the hotel. Check in and unwind after your journey. Evening at leisure.",
      },

      {
        day: "02",
        title: "Delhi – Full-Day City Tour",
        description:
          "Enjoy a full-day guided tour of Old and New Delhi, including Jama Masjid, a traditional rickshaw ride through Chandni Chowk, Qutub Minar, Lotus Temple, India Gate and the government buildings.",
      },

      {
        day: "03",
        title: "Delhi – Jaipur",
        description:
          "After breakfast, visit the imposing Red Fort before departing by private vehicle for Jaipur, the vibrant Pink City. Upon arrival, check in at the hotel and enjoy the rest of the day at leisure.",
      },

      {
        day: "04",
        title: "Jaipur – Full-Day Sightseeing",
        description:
          "Explore Jaipur's royal heritage with visits to Amber Fort, Jal Mahal and City Palace. An optional Rajasthani folk dance with music and dinner may also be arranged.",
      },

      {
        day: "05",
        title: "Jaipur – Agra via Fatehpur Sikri",
        description:
          "Depart for Agra and stop at Fatehpur Sikri, the former Mughal capital. Explore Buland Darwaza, Panch Mahal and the tomb of Sufi saint Salim Chishti before continuing to Agra.",
      },

      {
        day: "06",
        title: "Agra – Sightseeing",
        description:
          "Explore Agra Fort and Itmad-us-Daulah's Tomb, also known as the Baby Taj. Later enjoy leisure time for shopping at local marble inlay workshops and handicraft boutiques.",
      },

      {
        day: "07",
        title: "Agra – Varanasi by Train",
        description:
          "Travel to Varanasi by Vande Bharat Express. Upon arrival, transfer to your hotel. Visit Sarnath and later experience the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat.",
      },

      {
        day: "08",
        title: "Varanasi – Spiritual & Cultural Exploration",
        description:
          "Start the day with a sunrise boat ride on the River Ganges. Later visit Kashi Vishwanath Temple and Sarnath before experiencing the Ganga Aarti at Dashashwamedh Ghat.",
      },

      {
        day: "09",
        title: "Varanasi – Delhi",
        description:
          "After breakfast, transfer to Varanasi Airport for your flight to Delhi. Upon arrival, transfer to your hotel and relax.",
      },

      {
        day: "10",
        title: "Delhi – Departure",
        description:
          "After breakfast, check out and transfer to Delhi Airport or Railway Station for your onward journey.",
      },
    ],
  },

  {
    slug: "grand-kerala",
    number: "04",

    image: img4,

    location: "Kerala, India",

    title: "The Grand Kerala Experience",

    duration: "6 Days / 5 Nights",

    description:
      "Explore Kerala from the historic streets of Cochin to Munnar's tea plantations, Thekkady's wildlife and the tranquil backwaters of Alleppey.",

    highlights: [
      "Cochin",
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Houseboat",
      "Boat Race Experience",
    ],

    days: [
      {
        day: "01",
        title: "Arrival in Cochin",
        description:
          "Upon arrival at Cochin Airport, you will be welcomed by our representative and transferred to the hotel. Later, explore Cochin including the Chinese Fishing Nets, Jew Town & Synagogue, Santa Cruz Basilica and Bolgatty Palace. In the evening, enjoy a traditional Kathakali Dance Performance.",
      },

      {
        day: "02",
        title: "Cochin – Munnar",
        description:
          "Drive to Munnar, surrounded by lush tea plantations and misty mountains. Visit the tea plantations and tea factory with a tea-tasting experience, followed by Mattupetty Dam, Kundala Lake, Echo Point, Top Station and Rose Garden.",
      },

      {
        day: "03",
        title: "Munnar – Thekkady",
        description:
          "Drive to Thekkady, known for wildlife, spice plantations and natural beauty. Upon arrival, check in and enjoy leisure time exploring the local markets and surroundings.",
      },

      {
        day: "04",
        title: "Thekkady Sightseeing",
        description:
          "Visit Periyar Wildlife Sanctuary and enjoy a scenic boat ride on Periyar Lake, subject to availability. Later visit a spice plantation to learn about Kerala's famous spices.",
      },

      {
        day: "05",
        title: "Thekkady – Alleppey",
        description:
          "Drive to Alleppey, the famous Backwater Capital of Kerala. Board a traditional houseboat and enjoy a relaxing cruise through canals, coconut groves, paddy fields and villages, with meals onboard and an overnight stay on the houseboat.",
      },

      {
        day: "06",
        title: "Alleppey – Cochin",
        description:
          "After breakfast, check out from the hotel or houseboat and drive to Cochin. Depending on time, enjoy local sightseeing before transferring to Cochin Airport or Railway Station for your onward journey.",
      },
    ],
  },
];

export default itineraries;