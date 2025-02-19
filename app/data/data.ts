import {Event, Filter} from '../types';

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'All flights',
  },
  {
    id: 2,
    name: 'Economy',
  },
  {
    id: 3,
    name: 'Standard',
  },
  {
    id: 4,
    name: 'Business',
  },
];

export const eventData: Event[] = [
  {
    id: 1,
    title:
      "Traveler's checklist: how to pack a suitcase and not forget anything",
    date: 'Saturday, April 20, 2024',
    time: '7:00 PM - 10:00 PM',
    desc:
      "Packing is usually stressful: you have to finish work, remember to print out reservations, download maps and apps, and charge your gadgets. At the same time, don't forget to put the essentials in your suitcase.\n" +
      '\n' +
      "We've compiled a universal list of everything you need to check before traveling. Of course, the checklist may vary depending on whether you're traveling to the sea or the mountains, winter or summer, for two days or two months, alone or with kids and a dog. Nevertheless, we have tried to give some general advice. The list is divided into categories so that preparing for your trip is no longer tedious and stressful.\n" +
      '\n' +
      'Most important\n' +
      "Passport - you can't fly or travel anywhere without it. Do not forget your passport if you are traveling abroad. At the same time, always take a Russian document with you. If your passport is suddenly lost, you will have to present your internal passport, documents confirming the loss of your passport and a certificate of permission to leave the country to return home.\n" +
      '\n' +
      'Hotel or apartment reservation - so that check-in is hassle-free. Be sure to print out the booking details and keep them with you. This way you will be able to compare the list of services with what the hotel provides. If there are any problems or discrepancies, contact the support service of the site where you booked the room.\n' +
      '\n' +
      'Printed reservations can be useful when going through customs. When crossing the border, you may be asked where you are staying.\n' +
      '\n' +
      'MHI policy - if you need help when traveling in Russia. With an OMS policy, you can get medical care in any region of the country, regardless of where you live. Check in advance that the policy is valid. If it is not valid, contact any insurance company and get a temporary certificate.\n' +
      '\n' +
      'Medical insurance - if you need help outside Russia. To go abroad, you must be sure to take out travel insurance. You will need it to get timely and quality medical, legal, administrative assistance outside Russia and not to spend a large amount of money.\n' +
      '\n' +
      'Wallet - with cash and bank cards. Always keep some cash with you in case there are problems with the bank. If traveling abroad, check in advance what currency is used in the country, whether your cards work at your destination.\n' +
      '\n' +
      "Phone and its charger - you can't go anywhere without them. On any vacation, we often plot routes and take photos, so you can't go out without a charged smartphone. If you're traveling abroad, check what kind of outlets are in the country. In case of non-standard ones, it is better to buy an adapter. If you're traveling in a large group, bring an extension cord. Sometimes hotels have few outlets, and you need to charge several gadgets at once.\n",
    image: require('../assets/event1.png'),
  },
  {
    id: 2,
    title: 'The Ultimate Packing Checklist for Air Travel',
    date: 'Friday, May 5, 2024',
    time: '6:30 PM - 9:30 PM',
    desc:
      'Packing for air travel can be daunting, especially when trying to balance essentials with weight restrictions. A well-thought-out packing checklist can save you from unnecessary stress and expenses during your journey. This article covers essential items, tips for organizing your luggage, and strategies to ensure nothing is left behind.\n' +
      '\n' +
      "Packing smart starts with understanding the airline's baggage policies. Check weight limits and dimensions for carry-ons and checked luggage to avoid surprises at the airport. \n" +
      'Essential documents like passports, boarding passes, and travel insurance should always be within reach in your carry-on. Consider keeping digital copies of these documents on your phone or email for emergencies.\n' +
      '\n' +
      'When it comes to clothing, versatility is key. Choose items that can be mixed and matched for multiple outfits. Opt for lightweight and wrinkle-resistant fabrics that save space and require less maintenance. Packing cubes can be a game-changer, helping you organize and maximize space in your suitcase. Roll your clothes instead of folding to further optimize space.\n' +
      '\n' +
      'Toiletries are another area where you can save space and weight. Use travel-sized containers or solid toiletries like shampoo bars and toothpaste tablets. Don’t forget essential medications and a small first-aid kit for emergencies. For tech gadgets, bring a universal adapter and a power bank to keep your devices charged during long layovers or delays.\n' +
      '\n' +
      'Lastly, prepare for the unexpected. Pack a small set of clothes and toiletries in your carry-on in case your checked luggage is delayed or lost. With these strategies, you’ll feel confident and prepared for your next adventure.',
    image: require('../assets/event2.png'),
  },
  {
    id: 3,
    title: 'Top 10 Travel Gadgets to Make Your Flight Comfortable',
    date: 'Sunday, June 9, 2024',
    time: '12:00 PM - 4:00 PM',
    desc:
      'Travel gadgets can turn a tedious flight into an enjoyable part of your journey. The right tools not only enhance comfort but also improve your efficiency and safety. From noise-canceling headphones to portable chargers, this article explores ten must-have gadgets for every air traveler.\n' +
      '\n' +
      'Comfort during a flight is paramount, and gadgets like neck pillows and noise-canceling headphones can make all the difference. Neck pillows provide support and prevent neck strain during long-haul flights. Noise-canceling headphones block out the hum of the plane’s engine, allowing you to relax or focus on entertainment.\n' +
      '\n' +
      'Staying entertained is another priority. Tablets and e-readers are perfect for watching movies or catching up on reading. Consider downloading content before your flight to avoid relying on in-flight Wi-Fi. If you prefer a tactile experience, a lightweight puzzle book or journal can also be a great companion.\n' +
      '\n' +
      'Safety is crucial during travel. TSA-approved locks keep your belongings secure, while RFID-blocking wallets protect your credit cards from unauthorized scans. A GPS tracker for your luggage ensures you know its location in case it gets misplaced.\n' +
      '\n' +
      'Practical accessories like collapsible water bottles and universal adapters can make your trip smoother. Collapsible bottles save space and help you stay hydrated, while adapters ensure your devices stay powered wherever you travel. These gadgets are investments in your comfort and peace of mind.',
    image: require('../assets/event3.png'),
  },
  {
    id: 4,
    title: 'How to Travel Light: Minimalist Packing Tips',
    date: 'Sunday, June 9, 2024',
    time: '12:00 PM - 4:00 PM',
    desc:
      'Traveling light has its perks—no waiting at baggage claims, no risk of lost luggage, and the freedom to move easily through airports. This article shares practical tips and strategies for minimalist packing.\n' +
      '\n' +
      'Start by prioritizing essential items. For clothing, focus on versatile pieces that can be dressed up or down. Neutral colors and lightweight fabrics work best for creating a variety of outfits with fewer items. The "3-3-3 Rule" is a great guideline: three tops, three bottoms, and three pairs of shoes. This ensures you have enough variety without overpacking.\n' +
      'Packing cubes are invaluable for organizing your luggage. Use them to separate different types of clothing or items, making it easier to find what you need. Vacuum-sealed bags are another option for compressing bulkier items like jackets or sweaters.\n' +
      '\n' +
      'Minimize toiletries by opting for travel-sized products or solid alternatives. Multipurpose items, like a tinted moisturizer with SPF, can replace multiple products in your bag. Remember to pack all liquids in a clear, resealable bag to comply with airline regulations.\n' +
      '\n' +
      'Tech-savvy travelers can save space by digitizing documents and entertainment. Keep digital backups of your passport, travel itinerary, and tickets. Load your e-reader or tablet with books, movies, and music to avoid carrying extra weight.\n' +
      'By adopting these minimalist packing strategies, you’ll enjoy the freedom and ease of traveling light.',
    image: require('../assets/event4.png'),
  },
  {
    id: 5,
    title: 'Flight Survival Guide: Tips for Long-Haul Flights',
    date: 'Sunday, June 9, 2024',
    time: '12:00 PM - 4:00 PM',
    desc:
      'Long-haul flights can be exhausting, but with the right preparation, they can become manageable and even enjoyable. This article provides comprehensive tips to help you survive and thrive during extended air travel.\n' +
      'Preparation begins before you board. Staying hydrated is essential, so drink plenty of water in the days leading up to your flight. Avoid heavy meals and alcohol, as they can disrupt your digestion and sleep patterns. Get plenty of rest before your journey to ensure you start your trip refreshed.\n' +
      '\n' +
      'During the flight, focus on comfort. Wear loose, breathable clothing and bring layers, as cabin temperatures can fluctuate. A good neck pillow, eye mask, and noise-canceling headphones can make a significant difference in your ability to relax. Pack a travel blanket or shawl for added warmth.\n' +
      '\n' +
      'Combatting jet lag requires strategic planning. Adjust your schedule to your destination’s time zone a few days before your trip. During the flight, try to sleep if it’s nighttime at your destination. Use light exposure to reset your internal clock: seek sunlight upon arrival and avoid screens before sleeping.\n' +
      'Staying active on the plane is crucial for circulation. Perform simple stretches and take short walks around the cabin every few hours. Compression socks can also help prevent swelling and reduce the risk of deep vein thrombosis.\n' +
      '\n' +
      'Entertainment is a must for long flights. Bring a mix of activities, such as movies, books, and games, to keep yourself engaged. Snacks are another essential—choose healthy, energy-boosting options like nuts, dried fruit, or protein bars.\n' +
      'With these tips, you’ll arrive at your destination ready to explore and enjoy your trip.',
    image: require('../assets/event5.png'),
  },
];
