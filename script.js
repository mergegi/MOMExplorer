const locations = [
  {
    id: 1,
    name: 'Monmouth Battlefield State Park',
    year: 1778,
    description: 'This 1,818-acre park preserves the site of the Battle of Monmouth, a pivotal engagement in the American Revolutionary War on June 28, 1778. It features hiking trails, a museum, and reenactments, offering insights into the strategies of General George Washington and the Continental Army against British forces.',
    lat: 40.3285,
    lon: -74.2692,
    trivia: [
      { q: 'What war was fought at Monmouth Battlefield?', a: 'American Revolutionary War', options: ['Civil War', 'World War I', 'American Revolutionary War', 'War of 1812'] },
      { q: 'In what year did the Battle of Monmouth occur?', a: '1778', options: ['1802', '1778', '1863', '1789'] },
      { q: 'Who led the Continental Army at the Battle of Monmouth?', a: 'George Washington', options: ['George Washington', 'Ulysses S. Grant', 'Dwight D. Eisenhower', 'Abraham Lincoln'] }
    ],
    timeline: [
      { q: 'The battle occurred in which year?', a: '1778', options: ['1778', '1830', '1912', '1865'] },
      { q: 'Monmouth Battlefield State Park opened as a preserved site in which century?', a: '20th century', options: ['18th century', '19th century', '20th century', '21st century'] },
      { q: 'The park was established in which decade?', a: '1930s', options: ['1930s', '1940s', '1950s', '1960s'] }
    ],
    artifacts: [
      { q: 'Which object is most likely found at a Revolutionary War site?', a: 'Musket', options: ['Typewriter', 'Musket', 'Computer', 'Fossil'] },
      { q: 'What document would you expect from this site?', a: 'Battle report', options: ['Space log', 'Battle report', 'Movie script', 'Cookbook'] },
      { q: 'A common relic from the battle is a', a: 'Cannonball', options: ['Cannonball', 'Television', 'Smartphone', 'Airplane'] }
    ],
    sources: [
      { title: 'Original battlefield maps (1778)', description: 'These maps, drawn during the Revolutionary War, show troop positions, terrain features, and strategic points of the Battle of Monmouth. They provide firsthand insight into military tactics and geography.' },
      { title: 'General Washington order transcripts', description: 'Transcripts of orders issued by George Washington during the battle, detailing commands to officers, troop movements, and strategic decisions that shaped the outcome.' },
      { title: 'Revolutionary era musket replicas', description: 'Authentic replicas of muskets used by soldiers in the 1770s, demonstrating the technology and craftsmanship of firearms from the period.' }
    ]
  },
  {
    id: 2,
    name: 'Allaire State Park',
    year: 1965,
    description: 'This 3,000-acre park features the restored Allaire Village, a 19th-century iron-making community with historic buildings, a museum, and demonstrations of iron smelting. It showcases industrial history with guided tours and events.',
    lat: 40.1903,
    lon: -74.2836,
    trivia: [
      { q: 'Allaire Village is known for what industry?', a: 'Iron works', options: ['Shipbuilding', 'Iron works', 'Textile making', 'Railroads'] },
      { q: 'Which century does Allaire Village recreate?', a: '19th century', options: ['18th century', '20th century', '19th century', '17th century'] },
      { q: 'What was the main product of Allaire Iron Works?', a: 'Pig iron', options: ['Pig iron', 'Steel beams', 'Gold coins', 'Cotton fabric'] }
    ],
    timeline: [
      { q: 'Allaire Village was built in which era?', a: '19th century', options: ['20th century', '19th century', '18th century', '17th century'] },
      { q: 'Allaire became a state park in which year?', a: '1965', options: ['1965', '1778', '1840', '2001'] },
      { q: 'The iron works operated until which year?', a: '1848', options: ['1848', '1900', '1950', '2000'] }
    ],
    artifacts: [
      { q: 'Which item is an iron industry artifact?', a: 'Cast iron pot', options: ['Smartphone', 'Cast iron pot', 'Airplane wing', 'Digital clock'] },
      { q: 'An Allaire village worker would likely use?', a: 'Hammer and tongs', options: ['Coffee maker', 'Hammer and tongs', 'Laptop', 'Vinyl record'] },
      { q: 'A furnace relic might be a', a: 'Slag heap', options: ['Slag heap', 'Computer mouse', 'Television set', 'Refrigerator'] }
    ],
    sources: [
      { title: 'Allaire Company ledger scans (1838)', description: 'Scanned pages from the company\'s financial records, showing production figures, employee wages, and business operations of the iron works.' },
      { title: '19th-century worker diary excerpt', description: 'Excerpts from diaries kept by workers at the iron works, describing daily life, working conditions, and personal experiences in the industrial village.' },
      { title: 'Iron smelting tools exhibit photos', description: 'Photographs of historical tools used in iron smelting, including hammers, tongs, and furnaces, illustrating the labor-intensive process of 19th-century industry.' }
    ]
  },
  {
    id: 3,
    name: 'Sandy Hook Lighthouse',
    year: 1764,
    description: 'Located at the northern tip of Sandy Hook, this lighthouse is the oldest working one in the U.S., guiding ships since 1764. It offers tours, exhibits on maritime history, and views of the Atlantic Ocean.',
    lat: 40.4657,
    lon: -74.0106,
    trivia: [
      { q: 'Sandy Hook Lighthouse holds what distinction in the USA?', a: 'Oldest active lighthouse', options: ['Tallest lighthouse', 'Oldest active lighthouse', 'First electric lighthouse', 'Shortest lighthouse'] },
      { q: 'Which coast is Sandy Hook located on?', a: 'Atlantic coast', options: ['Pacific coast', 'Gulf coast', 'Atlantic coast', 'Great Lakes'] },
      { q: 'The lighthouse was built by which country initially?', a: 'Britain', options: ['Britain', 'France', 'Spain', 'Netherlands'] }
    ],
    timeline: [
      { q: 'Sandy Hook Lighthouse was built in which year?', a: '1764', options: ['1764', '1864', '1964', '1664'] },
      { q: 'It still operates in which century?', a: '21st century', options: ['18th century', '19th century', '20th century', '21st century'] },
      { q: 'The lighthouse was automated in which year?', a: '1960', options: ['1960', '1900', '1950', '1970'] }
    ],
    artifacts: [
      { q: 'An artifact from a lighthouse would be?', a: 'Lens', options: ['Lens', 'Piano', 'Spacesuit', 'Fiddle'] },
      { q: 'A historic log entry from the lighthouse keeper would involve?', a: 'Weather reports', options: ['Weather reports', 'Recipe cards', 'Movie ratings', 'Stock quotes'] },
      { q: 'A keeper\'s tool might include a', a: 'Oil lamp', options: ['Oil lamp', 'Flashlight', 'Laser pointer', 'Candle'] }
    ],
    sources: [
      { title: 'Sandy Hook lighthouse keeper log book images', description: 'Images of log books maintained by lighthouse keepers, recording weather conditions, ship sightings, and maintenance activities over centuries.' },
      { title: 'Land grant documents of 1763', description: 'Original documents granting land for the lighthouse construction, including surveys and legal descriptions from the colonial period.' },
      { title: '19th century Fresnel lens diagram', description: 'Diagrams and illustrations of the Fresnel lens installed in the lighthouse, explaining its optical design for enhanced light projection.' }
    ]
  },
  {
    id: 4,
    name: 'Asbury Park Convention Hall',
    year: 1929,
    description: 'This Art Deco venue, built in 1929, has hosted legendary music acts and events. It features a grand ballroom, murals, and is a symbol of Asbury Park\'s cultural heritage with ongoing concerts and tours.',
    lat: 40.2221,
    lon: -74.0119,
    trivia: [
      { q: 'What type of venue is Convention Hall?', a: 'Music and events venue', options: ['Museum', 'Library', 'Music and events venue', 'Sports arena'] },
      { q: 'Asbury Park is famous for which music genre history?', a: 'Rock and roll', options: ['Jazz', 'Hip-hop', 'Classical', 'Rock and roll'] },
      { q: 'Which famous musician performed early shows here?', a: 'Bruce Springsteen', options: ['Bruce Springsteen', 'Elvis Presley', 'The Beatles', 'Michael Jackson'] }
    ],
    timeline: [
      { q: 'Convention Hall opened in which year?', a: '1929', options: ['1929', '1955', '1888', '2002'] },
      { q: 'Asbury Park gained major music fame in which decade?', a: '1960s', options: ['1930s', '1960s', '1890s', '2010s'] },
      { q: 'The hall was renovated in which decade?', a: '2000s', options: ['2000s', '1990s', '1980s', '2010s'] }
    ],
    artifacts: [
      { q: 'Which item is likely found in the hall museum?', a: 'Vintage concert poster', options: ['Vintage concert poster', 'Rocket engine', 'DNA model', 'Mining helmet'] },
      { q: 'A music artifact would likely include?', a: 'Old vinyl record', options: ['Old vinyl record', 'Steering wheel', 'Computer chip', 'Bicycle'] },
      { q: 'A stage prop might be a', a: 'Microphone stand', options: ['Microphone stand', 'Cooking pot', 'Hammer', 'Paintbrush'] }
    ],
    sources: [
      { title: 'Convention Hall 1929 ribbon cutting photograph', description: 'Photograph from the opening ceremony of Convention Hall, capturing the architecture and crowd during the Art Deco era.' },
      { title: 'Bruce Springsteen early flyer scans', description: 'Scanned promotional flyers from Bruce Springsteen\'s early performances at the venue, highlighting its role in rock music history.' },
      { title: 'Boardwalk historic postcard collection', description: 'Collection of postcards depicting the boardwalk and Convention Hall over decades, showing changes in Asbury Park\'s landscape.' }
    ]
  },
  {
    id: 5,
    name: 'Historic Longstreet Farm',
    year: 1867,
    description: 'This 200-acre living history farm depicts 19th-century rural life with original buildings, animals, and demonstrations. Visitors can experience farming techniques, schoolhouse lessons, and seasonal events.',
    lat: 40.2535,
    lon: -74.0941,
    trivia: [
      { q: 'Longstreet Farm demonstrates life from which era?', a: '19th century', options: ['18th century', '21st century', '17th century', '19th century'] },
      { q: 'This site is a type of what museum?', a: 'Living history farm', options: ['Art museum', 'Aquarium', 'Living history farm', 'Science center'] },
      { q: 'What crop was commonly grown here?', a: 'Corn', options: ['Corn', 'Rice', 'Wheat', 'Cotton'] }
    ],
    timeline: [
      { q: 'Longstreet Farm was founded in which year?', a: '1867', options: ['1867', '1767', '1967', '2007'] },
      { q: 'Living history events are held in what century?', a: '21st century', options: ['18th century', '19th century', '20th century', '21st century'] },
      { q: 'The farm was acquired by the state in which year?', a: '1972', options: ['1972', '1960', '1980', '1990'] }
    ],
    artifacts: [
      { q: 'Which artifact fits a 19th-century farm?', a: 'Cowbell', options: ['Cowbell', 'Smartphone', 'Jet engine part', 'Virtual reality headset'] },
      { q: 'A classic farm implement is?', a: 'Horse-drawn plow', options: ['Horse-drawn plow', 'Electric car', 'LED lamp', '3D printer'] },
      { q: 'A household item from the era is a', a: 'Butter churn', options: ['Butter churn', 'Microwave', 'Dishwasher', 'Toaster'] }
    ],
    sources: [
      { title: 'Longstreet Farm diary from 1872', description: 'A diary written by a member of the Longstreet family, detailing daily farm operations, weather, and family life in the 19th century.' },
      { title: 'Victorian era farm equipment catalog', description: 'A catalog from the Victorian period showcasing tools and machinery used on farms, including plows, harvesters, and household items.' },
      { title: 'Agricultural census data from 1870s', description: 'Census records from the 1870s documenting farm sizes, crops, livestock, and labor in Monmouth County.' }
    ]
  },
  {
    id: 6,
    name: 'Monmouth Battleground at Tennent Church',
    year: 1778,
    description: 'This site marks part of the Battle of Monmouth, with the historic Tennent Memorial Church nearby. It includes a cemetery and monuments commemorating the Revolutionary War clash.',
    lat: 40.3369,
    lon: -74.2821,
    trivia: [
      { q: 'The Battle of Monmouth was fought during which war?', a: 'American Revolutionary War', options: ['American Revolutionary War', 'Civil War', 'War of 1812', 'French and Indian War'] },
      { q: 'What is the name of the church associated with this site?', a: 'Tennent Memorial Church', options: ['Tennent Memorial Church', 'St. Mary\'s Church', 'First Presbyterian', 'Methodist Chapel'] },
      { q: 'The battle involved forces led by?', a: 'George Washington', options: ['George Washington', 'Benedict Arnold', 'Nathanael Greene', 'Marquis de Lafayette'] }
    ],
    timeline: [
      { q: 'Battle of Monmouth took place in', a: '1778', options: ['1778', '1830', '1864', '1914'] },
      { q: 'The church was built in which year?', a: '1750', options: ['1750', '1800', '1850', '1900'] },
      { q: 'Monuments were added in the', a: '20th century', options: ['19th century', '20th century', '21st century', '18th century'] }
    ],
    artifacts: [
      { q: 'A period artifact found would be a', a: 'Musket ball', options: ['Musket ball', 'Steam engine', 'Telephone', 'Dinosaur bone'] },
      { q: 'A memorial item might be a', a: 'Plaque', options: ['Plaque', 'Statue of Liberty', 'Eiffel Tower', 'Pyramid'] },
      { q: 'Church records could include', a: 'Baptism certificates', options: ['Baptism certificates', 'Movie tickets', 'Concert passes', 'Flight logs'] }
    ],
    sources: [
      { title: 'Battle correspondence', description: 'Letters and reports from officers involved in the Battle of Monmouth, providing eyewitness accounts of the fighting and strategies.' },
      { title: 'Tennent Church archives', description: 'Historical records from Tennent Memorial Church, including baptismal records, sermons, and documents related to the Revolutionary War period.' }
    ]
  },
  {
    id: 7,
    name: 'Sandy Hook Proving Ground (historic)',
    year: 1874,
    description: 'Established in 1874, this site tested artillery and munitions for the U.S. Army until 1919. It features historic structures, trails, and exhibits on military history within the Gateway National Recreation Area.',
    lat: 40.4575,
    lon: -74.0231,
    trivia: [
      { q: 'Sandy Hook Proving Ground was used for testing what?', a: 'Artillery shells', options: ['Artillery shells', 'Aircraft', 'Submarines', 'Railroad bots'] },
      { q: 'It was operated by which branch?', a: 'U.S. Army', options: ['U.S. Army', 'U.S. Navy', 'U.S. Air Force', 'Marines'] },
      { q: 'The site closed in which year?', a: '1919', options: ['1919', '1920', '1930', '1940'] }
    ],
    timeline: [
      { q: 'Sandy Hook Proving Ground began operations in', a: '1874', options: ['1874', '1900', '1941', '1950'] },
      { q: 'It operated during which war?', a: 'World War I', options: ['Civil War', 'World War I', 'World War II', 'Korean War'] },
      { q: 'Became part of Gateway NRA in', a: '1974', options: ['1974', '1960', '1980', '1990'] }
    ],
    artifacts: [
      { q: 'A likely artifact type is', a: 'Shell fragment', options: ['Shell fragment', 'Computers', 'Electric cars', 'Radios'] },
      { q: 'A testing device might be a', a: 'Range finder', options: ['Range finder', 'Calculator', 'Camera', 'Radio'] },
      { q: 'Military records include', a: 'Test reports', options: ['Test reports', 'Recipes', 'Poems', 'Novels'] }
    ],
    sources: [
      { title: 'US Army historical data', description: 'Official records from the U.S. Army detailing the operations, tests, and history of the Sandy Hook Proving Ground.' },
      { title: 'NJ Coastal records', description: 'State records documenting coastal defenses, artillery testing, and environmental impacts in New Jersey\'s coastal areas.' }
    ]
  },
  {
    id: 8,
    name: 'Seven Presidents Oceanfront Park',
    year: 1874,
    description: 'This park in Long Branch features ocean views, a carousel, and monuments to seven U.S. presidents who visited. It includes gardens, a boardwalk, and events celebrating presidential history.',
    lat: 40.3023,
    lon: -73.9840,
    trivia: [
      { q: 'How many presidents visited this park?', a: 'Seven', options: ['Five', 'Six', 'Seven', 'Eight'] },
      { q: 'What is a key feature of the park?', a: 'Carousel', options: ['Carousel', 'Zoo', 'Amusement park', 'Museum'] },
      { q: 'The park is located in which town?', a: 'Long Branch', options: ['Long Branch', 'Asbury Park', 'Red Bank', 'Freehold'] }
    ],
    timeline: [
      { q: 'The park opened in which year?', a: '1874', options: ['1874', '1880', '1900', '1920'] },
      { q: 'Presidential visits began in the', a: '19th century', options: ['18th century', '19th century', '20th century', '21st century'] },
      { q: 'The carousel was added in', a: '1990', options: ['1990', '1980', '2000', '2010'] }
    ],
    artifacts: [
      { q: 'A park artifact might be a', a: 'Bench plaque', options: ['Bench plaque', 'Car engine', 'Computer', 'Rocket'] },
      { q: 'Presidential memorabilia includes', a: 'Photographs', options: ['Photographs', 'Coins', 'Stamps', 'Paintings'] },
      { q: 'A ride-related item is', a: 'Carousel horse', options: ['Carousel horse', 'Ferris wheel', 'Roller coaster', 'Swing'] }
    ],
    sources: [
      { title: 'Long Branch historical society records', description: 'Archives from the Long Branch Historical Society containing photographs, documents, and artifacts related to the park and presidential visits.' },
      { title: 'Presidential visit logs', description: 'Logs and records of presidential visits to the park, including dates, activities, and historical context for each president.' }
    ]
  },
  {
    id: 9,
    name: 'Wickatunk Village',
    year: 1700,
    description: 'A preserved 18th-century Quaker village with original homes, a meetinghouse, and gardens. It offers tours and events showcasing colonial life and Quaker history.',
    lat: 40.2531,
    lon: -74.2525,
    trivia: [
      { q: 'Wickatunk is associated with which religious group?', a: 'Quakers', options: ['Quakers', 'Puritans', 'Catholics', 'Methodists'] },
      { q: 'The village dates back to which century?', a: '18th century', options: ['17th century', '18th century', '19th century', '20th century'] },
      { q: 'A key building is the', a: 'Meetinghouse', options: ['Meetinghouse', 'Church', 'School', 'Store'] }
    ],
    timeline: [
      { q: 'Wickatunk was settled in', a: '1700', options: ['1700', '1600', '1800', '1900'] },
      { q: 'The meetinghouse was built in', a: '1756', options: ['1756', '1656', '1856', '1956'] },
      { q: 'Restoration began in the', a: '20th century', options: ['19th century', '20th century', '21st century', '18th century'] }
    ],
    artifacts: [
      { q: 'A Quaker artifact is a', a: 'Simple chair', options: ['Simple chair', 'Ornate throne', 'Modern sofa', 'Recliner'] },
      { q: 'Household items include', a: 'Spinning wheel', options: ['Spinning wheel', 'Washing machine', 'Dishwasher', 'Microwave'] },
      { q: 'A garden tool might be', a: 'Hoe', options: ['Hoe', 'Tractor', 'Lawnmower', 'Chainsaw'] }
    ],
    sources: [
      { title: 'Quaker meeting records', description: 'Records from the Quaker meetinghouse, including minutes, membership lists, and historical notes from the 18th and 19th centuries.' },
      { title: 'Colonial deed archives', description: 'Deeds and land records from the colonial period, documenting property ownership and transactions in the Wickatunk area.' }
    ]
  },
  {
    id: 10,
    name: 'Marconi Wireless Station Site',
    year: 1912,
    description: 'Site of Guglielmo Marconi\'s wireless telegraph station, where the first transatlantic radio message was sent in 1901. It features a museum and exhibits on early radio technology.',
    lat: 40.3978,
    lon: -74.0289,
    trivia: [
      { q: 'Who operated this wireless station?', a: 'Guglielmo Marconi', options: ['Guglielmo Marconi', 'Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla'] },
      { q: 'What was sent here first?', a: 'Transatlantic radio message', options: ['Transatlantic radio message', 'Television signal', 'Internet data', 'Satellite broadcast'] },
      { q: 'The station was built in', a: '1901', options: ['1901', '1912', '1920', '1930'] }
    ],
    timeline: [
      { q: 'First transatlantic message in', a: '1901', options: ['1901', '1912', '1920', '1930'] },
      { q: 'The site became a museum in', a: '1975', options: ['1975', '1960', '1980', '1990'] },
      { q: 'Marconi won Nobel Prize in', a: '1909', options: ['1909', '1910', '1920', '1930'] }
    ],
    artifacts: [
      { q: 'A wireless artifact is', a: 'Antenna', options: ['Antenna', 'Telephone', 'Television', 'Computer'] },
      { q: 'Early radio equipment includes', a: 'Spark transmitter', options: ['Spark transmitter', 'Microphone', 'Speaker', 'Headphones'] },
      { q: 'A Morse code key is a', a: 'Telegraph key', options: ['Telegraph key', 'Keyboard', 'Mouse', 'Joystick'] }
    ],
    sources: [
      { title: 'Marconi patent documents', description: 'Patents and technical documents filed by Guglielmo Marconi for wireless telegraphy inventions.' },
      { title: 'Wireless station logs', description: 'Operational logs from the Marconi station, recording transmissions, experiments, and technical data from early 20th-century wireless communication.' }
    ]
  }
];

const mapElement = document.getElementById('map');
const infoCardHeader = document.querySelector('#info-card h2');
const locationDetails = document.getElementById('location-details');
const nameEl = document.getElementById('location-name');
const descEl = document.getElementById('location-desc');
const yearEl = document.getElementById('location-year');
const sourceList = document.getElementById('source-list');
const openTriviaBtn = document.getElementById('open-trivia-btn');
const openTimelineBtn = document.getElementById('open-timeline-btn');
const openArtifactBtn = document.getElementById('open-artifact-btn');
const searchInput = document.getElementById('search-input');
const visitedCountEl = document.getElementById('visited-count');
const gamesPlayedEl = document.getElementById('games-played');
const bestScoreEl = document.getElementById('best-score');

const sourceModal = document.getElementById('source-modal');
const sourceTitle = document.getElementById('source-title');
const sourceBody = document.getElementById('source-body');
const closeSourceModal = document.getElementById('close-source-modal');
const closeSource = document.getElementById('close-source');

let map;
let mapProvider = 'google';
let allMarkers = [];
let activeLocation = null;
let gameState = { mode: null, questions: [], index: 0, score: 0, attempts: 0 };
let progress = { visited: new Set(), gamesPlayed: 0, bestScore: 0 };
let playerMarker;
const playerStep = 0.003; // approx degrees movement for keyboard controls (smaller for smoother behavior)
const nearbyDistance = 800; // meters

function init() {
  loadProgress();
  initMap();
  wireEvents();
  refreshProgress();
  showMessage('Search a site or click a pin.');
}

function initMap() {
  if (window.google && window.google.maps) {
    mapProvider = 'google';
    initGoogleMap();
  } else {
    mapProvider = 'leaflet';
    initLeafletMap();
  }
  // Invalidate or resize map after render for a stable centered view
  setTimeout(() => refreshMapSize(), 250);
}

function refreshMapSize() {
  if (mapProvider === 'google' && window.google && window.google.maps && map) {
    google.maps.event.trigger(map, 'resize');
    map.setCenter({ lat: 40.25, lng: -74.07 });
  }
  if (mapProvider === 'leaflet' && map && map.invalidateSize) {
    map.invalidateSize();
  }
}

function initGoogleMap() {
  map = new google.maps.Map(mapElement, {
    center: { lat: 40.25, lng: -74.07 },
    zoom: 10,
    mapTypeId: 'roadmap',
    tilt: 45,
    gestureHandling: 'greedy',
    scrollwheel: false,
    disableDoubleClickZoom: true,
    keyboardShortcuts: true
  });

  locations.forEach((loc) => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lon },
      map,
      title: loc.name,
    });

    marker.addListener('click', () => selectLocation(loc.id));
    allMarkers.push({ loc, marker });
  });

  initPlayer();
}

function initLeafletMap() {
  map = L.map('map', {
    center: [40.25, -74.07],
    zoom: 9,
    minZoom: 5,
    maxZoom: 17,
    zoomControl: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    touchZoom: true,
    keyboard: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 4,
    tileSize: 256,
    zoomOffset: 0
  }).addTo(map);

  locations.forEach((loc) => {
    const marker = L.marker([loc.lat, loc.lon]).addTo(map).bindTooltip(loc.name);
    marker.on('click', () => selectLocation(loc.id));
    allMarkers.push({ loc, marker });
  });

  const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lon]));
  map.fitBounds(bounds.pad(0.2));
  map.setMaxBounds(bounds.pad(0.4));

  initPlayer();
  updateTracker(L.latLng(40.25, -74.07));
}

function initPlayer() {
  if (mapProvider === 'google') {
    const start = { lat: 40.25, lng: -74.07 };

    playerMarker = new google.maps.Marker({
      position: start,
      map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#ffde00',
        fillOpacity: 1,
        strokeColor: '#1857b5',
        strokeWeight: 2,
      },
      title: 'Explorer',
      zIndex: 999
    });

    const info = new google.maps.InfoWindow({ content: 'Explorer avatar: arrow keys / WASD to move.' });
    info.open(map, playerMarker);

    setTimeout(() => info.close(), 3000);
  } else {
    const start = L.latLng(40.25, -74.07);

    playerMarker = L.marker(start, {
      icon: L.divIcon({
        className: 'player-icon',
        html: '<span class="player-avatar">🐒</span><span class="player-label">Sun Wukong</span>',
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      })
    }).addTo(map);

    playerMarker.bindPopup('Sun Wukong is exploring the map! Use arrow keys / WASD to move.').openPopup();
  }
}

function wireEvents() {
  searchInput.addEventListener('input', (e) => filterLocations(e.target.value));
  openTriviaBtn.addEventListener('click', () => startGame('trivia'));
  openTimelineBtn.addEventListener('click', () => startGame('timeline'));
  openArtifactBtn.addEventListener('click', () => startGame('artifact'));
  nextQuestion.addEventListener('click', nextQuestionInGame);
  closeModal.addEventListener('click', () => showModal(false));
  closeGame.addEventListener('click', () => showModal(false));

  closeSourceModal.addEventListener('click', () => showSourceModal(false));
  closeSource.addEventListener('click', () => showSourceModal(false));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      showModal(false);
      return;
    }
    movePlayerByKey(event.key);
  });

  window.addEventListener('resize', () => {
    refreshMapSize();
  });
}

function movePlayerByKey(key) {
  if (!playerMarker || gameModal.classList.contains('show')) return;

  let dLat = 0;
  let dLng = 0;

  if (key === 'ArrowLeft' || key.toLowerCase() === 'a') dLng = -playerStep;
  if (key === 'ArrowRight' || key.toLowerCase() === 'd') dLng = playerStep;
  if (key === 'ArrowUp' || key.toLowerCase() === 'w') dLat = playerStep;
  if (key === 'ArrowDown' || key.toLowerCase() === 's') dLat = -playerStep;

  if (!dLat && !dLng) return;

  if (mapProvider === 'google') {
    const current = playerMarker.getPosition();
    const next = new google.maps.LatLng(current.lat() + dLat, current.lng() + dLng);
    playerMarker.setPosition(next);
    map.panTo(next);
    checkNearbyLocation(next);
  } else {
    const current = playerMarker.getLatLng();
    const next = L.latLng(current.lat + dLat, current.lng + dLng);
    playerMarker.setLatLng(next);
    map.panTo(next);
    updateTracker(next);
    checkNearbyLocation(next);
  }
}

function updateTracker(latlng) {
  const latEl = document.getElementById('pos-lat');
  const lonEl = document.getElementById('pos-lon');
  if (!latEl || !lonEl || !latlng) return;
  latEl.textContent = latlng.lat.toFixed(5);
  lonEl.textContent = latlng.lng.toFixed(5);
}

function checkNearbyLocation(latlng) {
  const nearest = locations.find((loc) => {
    let dist;
    if (mapProvider === 'google') {
      dist = google.maps.geometry.spherical.computeDistanceBetween(latlng, new google.maps.LatLng(loc.lat, loc.lon));
    } else {
      dist = latlng.distanceTo(L.latLng(loc.lat, loc.lon));
    }
    return dist <= nearbyDistance;
  });

  if (nearest) {
    selectLocation(nearest.id);
    showMessage(`You found ${nearest.name}!`);
  }
}

function filterLocations(term) {
  const normalized = term.trim().toLowerCase();
  allMarkers.forEach(({ loc, marker }) => {
    const match = !normalized || loc.name.toLowerCase().includes(normalized) || loc.description.toLowerCase().includes(normalized);
    if (match) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });
}

function selectLocation(id) {
  const location = locations.find((loc) => loc.id === id);
  if (!location) return;

  activeLocation = location;
  infoCardHeader.textContent = 'Location info';
  locationDetails.style.display = 'block';
  nameEl.textContent = location.name;
  descEl.textContent = location.description;
  yearEl.textContent = location.year;

  sourceList.innerHTML = '';
  location.sources.forEach((source) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = source.title;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showSourceModal(true, source.title, source.description);
    });
    li.appendChild(link);
    sourceList.appendChild(li);
  });

  if (!progress.visited.has(location.id)) {
    progress.visited.add(location.id);
    saveProgress();
    refreshProgress();
  }

  showMessage(`Selected ${location.name}. Choose a game or explore sources.`);
}

function startGame(mode) {
  if (!activeLocation) {
    alert('Please select a location first.');
    return;
  }

  gameState.mode = mode;
  gameState.index = 0;
  gameState.score = 0;

  if (mode === 'trivia') {
    gameState.questions = shuffle([...activeLocation.trivia]);
    gameTitle.textContent = `${activeLocation.name}: Trivia Quest`;
  } else if (mode === 'timeline') {
    gameState.questions = shuffle([...activeLocation.timeline]);
    gameTitle.textContent = `${activeLocation.name}: Timeline Challenge`;
  } else if (mode === 'artifact') {
    gameState.questions = shuffle([...activeLocation.artifacts]);
    gameTitle.textContent = `${activeLocation.name}: Artifact Hunt`;
  }

  showModal(true);
  displayCurrentQuestion();
}

function displayCurrentQuestion() {
  const q = gameState.questions[gameState.index];
  if (!q) {
    finishGame();
    return;
  }
  gameState.attempts = 0; // Reset attempts for new question
  gameBody.innerHTML = `<p>${q.q}</p>`;
  const answerArea = document.createElement('div');
  const options = shuffle([...q.options]);

  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.style.margin = '0.25rem';
    btn.textContent = option;
    btn.addEventListener('click', () => checkAnswer(option, q.a));
    answerArea.appendChild(btn);
  });

  gameBody.appendChild(answerArea);
  gameFeedback.textContent = '';
  nextQuestion.style.display = 'none';
}

function checkAnswer(answer, correct) {
  const right = answer === correct;
  if (right) {
    gameState.score += 1;
    gameFeedback.textContent = 'Great job—correct! 🎉';
    nextQuestion.style.display = 'inline-block';
    gameState.index += 1;
    if (gameState.index >= gameState.questions.length) {
      nextQuestion.textContent = 'Finish';
    } else {
      nextQuestion.textContent = 'Next';
    }
  } else {
    gameState.attempts += 1;
    if (gameState.attempts < 3) {
      gameFeedback.textContent = `Try again! Attempts left: ${3 - gameState.attempts}`;
    } else {
      gameFeedback.textContent = `Nice try! Correct answer: ${correct}`;
      nextQuestion.style.display = 'inline-block';
      gameState.index += 1;
      if (gameState.index >= gameState.questions.length) {
        nextQuestion.textContent = 'Finish';
      } else {
        nextQuestion.textContent = 'Next';
      }
    }
  }
}

function nextQuestionInGame() {
  if (gameState.index >= gameState.questions.length) {
    finishGame();
  } else {
    displayCurrentQuestion();
  }
}

function finishGame() {
  const total = gameState.questions.length;
  gameBody.innerHTML = `<p>Game complete for ${activeLocation.name}! Score: ${gameState.score}/${total}.</p>`;
  gameFeedback.textContent = `You played ${gameState.mode}.`; 
  nextQuestion.style.display = 'none';

  progress.gamesPlayed += 1;
  if (gameState.score > progress.bestScore) {
    progress.bestScore = gameState.score;
  }
  saveProgress();
  refreshProgress();
}

function showSourceModal(show, title = '', body = '') {
  if (show) {
    sourceTitle.textContent = title;
    sourceBody.textContent = body;
  }
  sourceModal.classList.toggle('show', show);
  sourceModal.setAttribute('aria-hidden', String(!show));
  document.body.style.overflow = show ? 'hidden' : '';
}

function refreshProgress() {
  visitedCountEl.textContent = progress.visited.size;
  gamesPlayedEl.textContent = progress.gamesPlayed;
  bestScoreEl.textContent = progress.bestScore;
}

function saveProgress() {
  localStorage.setItem('monmountexplorer-progress', JSON.stringify({
    visited: Array.from(progress.visited),
    gamesPlayed: progress.gamesPlayed,
    bestScore: progress.bestScore
  }));
}

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem('monmountexplorer-progress') || '{}');
    if (data.visited) progress.visited = new Set(data.visited);
    if (typeof data.gamesPlayed === 'number') progress.gamesPlayed = data.gamesPlayed;
    if (typeof data.bestScore === 'number') progress.bestScore = data.bestScore;
  } catch (err) {
    console.warn('Failed to load progress', err);
  }
}

function showMessage(text) {
  const short = `🌍 ${text}`;
  gameFeedback.textContent = short;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

init();
