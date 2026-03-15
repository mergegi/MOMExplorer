const locations = [
  {
    id: 1,
    name: 'Monmouth Battlefield State Park',
    year: 1778,
    description: 'Battleground of the 1778 Revolutionary War Battle of Monmouth.',
    lat: 40.3285,
    lon: -74.2692,
    trivia: [
      { q: 'What war was fought at Monmouth Battlefield?', a: 'American Revolutionary War', options: ['Civil War', 'World War I', 'American Revolutionary War', 'War of 1812'] },
      { q: 'In what year did the Battle of Monmouth occur?', a: '1778', options: ['1802', '1778', '1863', '1789'] }
    ],
    timeline: [
      { q: 'The battle occurred in which year?', a: '1778', options: ['1778', '1830', '1912', '1865'] },
      { q: 'Monmouth Battlefield State Park opened as a preserved site in which century?', a: '20th century', options: ['18th century', '19th century', '20th century', '21st century'] }
    ],
    artifacts: [
      { q: 'Which object is most likely found at a Revolutionary War site?', a: 'Musket', options: ['Typewriter', 'Musket', 'Computer', 'Fossil'] },
      { q: 'What document would you expect from this site?', a: 'Battle report', options: ['Space log', 'Battle report', 'Movie script', 'Cookbook'] }
    ],
    sources: [
      'Original battlefield maps (1778)',
      'General Washington order transcripts',
      'Revolutionary era musket replicas'
    ]
  },
  {
    id: 2,
    name: 'Allaire State Park',
    year: 1965,
    description: 'A restored 19th-century iron-making village in Howell Township.',
    lat: 40.1903,
    lon: -74.2836,
    trivia: [
      { q: 'Allaire Village is known for what industry?', a: 'Iron works', options: ['Shipbuilding', 'Iron works', 'Textile making', 'Railroads'] },
      { q: 'Which century does Allaire Village recreate?', a: '19th century', options: ['18th century', '20th century', '19th century', '17th century'] }
    ],
    timeline: [
      { q: 'Allaire Village was built in which era?', a: '19th century', options: ['20th century', '19th century', '18th century', '17th century'] },
      { q: 'Allaire became a state park in which year?', a: '1965', options: ['1965', '1778', '1840', '2001'] }
    ],
    artifacts: [
      { q: 'Which item is an iron industry artifact?', a: 'Cast iron pot', options: ['Smartphone', 'Cast iron pot', 'Airplane wing', 'Digital clock'] },
      { q: 'An Allaire village worker would likely use?', a: 'Hammer and tongs', options: ['Coffee maker', 'Hammer and tongs', 'Laptop', 'Vinyl record'] }
    ],
    sources: [
      'Allaire Company ledger scans (1838)',
      '19th-century worker diary excerpt',
      'Iron smelting tools exhibit photos'
    ]
  },
  {
    id: 3,
    name: 'Sandy Hook Lighthouse',
    year: 1764,
    description: 'The oldest active lighthouse in the United States.',
    lat: 40.4657,
    lon: -74.0106,
    trivia: [
      { q: 'Sandy Hook Lighthouse holds what distinction in the USA?', a: 'Oldest active lighthouse', options: ['Tallest lighthouse', 'Oldest active lighthouse', 'First electric lighthouse', 'Shortest lighthouse'] },
      { q: 'Which coast is Sandy Hook located on?', a: 'Atlantic coast', options: ['Pacific coast', 'Gulf coast', 'Atlantic coast', 'Great Lakes'] }
    ],
    timeline: [
      { q: 'Sandy Hook Lighthouse was built in which year?', a: '1764', options: ['1764', '1864', '1964', '1664'] },
      { q: 'It still operates in which century?', a: '21st century', options: ['18th century', '19th century', '20th century', '21st century'] }
    ],
    artifacts: [
      { q: 'An artifact from a lighthouse would be?', a: 'Lens', options: ['Lens', 'Piano', 'Spacesuit', 'Fiddle'] },
      { q: 'A historic log entry from the lighthouse keeper would involve?', a: 'Weather reports', options: ['Weather reports', 'Recipe cards', 'Movie ratings', 'Stock quotes'] }
    ],
    sources: [
      'Sandy Hook lighthouse keeper log book images',
      'Land grant documents of 1763',
      '19th century Fresnel lens diagram'
    ]
  },
  {
    id: 4,
    name: 'Asbury Park Convention Hall',
    year: 1929,
    description: 'Iconic historic music venue and beachfront boardwalk landmark.',
    lat: 40.2221,
    lon: -74.0119,
    trivia: [
      { q: 'What type of venue is Convention Hall?', a: 'Music and events venue', options: ['Museum', 'Library', 'Music and events venue', 'Sports arena'] },
      { q: 'Asbury Park is famous for which music genre history?', a: 'Rock and roll', options: ['Jazz', 'Hip-hop', 'Classical', 'Rock and roll'] }
    ],
    timeline: [
      { q: 'Convention Hall opened in which year?', a: '1929', options: ['1929', '1955', '1888', '2002'] },
      { q: 'Asbury Park gained major music fame in which decade?', a: '1960s', options: ['1930s', '1960s', '1890s', '2010s'] }
    ],
    artifacts: [
      { q: 'Which item is likely found in the hall museum?', a: 'Vintage concert poster', options: ['Vintage concert poster', 'Rocket engine', 'DNA model', 'Mining helmet'] },
      { q: 'A music artifact would likely include?', a: 'Old vinyl record', options: ['Old vinyl record', 'Steering wheel', 'Computer chip', 'Bicycle'] }
    ],
    sources: [
      'Convention Hall 1929 ribbon cutting photograph',
      'Bruce Springsteen early flyer scans',
      'Boardwalk historic postcard collection'
    ]
  },
  {
    id: 5,
    name: 'Historic Longstreet Farm',
    year: 1867,
    description: 'A living history farm showing 19th-century agricultural life.',
    lat: 40.2535,
    lon: -74.0941,
    trivia: [
      { q: 'Longstreet Farm demonstrates life from which era?', a: '19th century', options: ['18th century', '21st century', '17th century', '19th century'] },
      { q: 'This site is a type of what museum?', a: 'Living history farm', options: ['Art museum', 'Aquarium', 'Living history farm', 'Science center'] }
    ],
    timeline: [
      { q: 'Longstreet Farm was founded in which year?', a: '1867', options: ['1867', '1767', '1967', '2007'] },
      { q: 'Living history events are held in what century?', a: '21st century', options: ['18th century', '19th century', '20th century', '21st century'] }
    ],
    artifacts: [
      { q: 'Which artifact fits a 19th-century farm?', a: 'Cowbell', options: ['Cowbell', 'Smartphone', 'Jet engine part', 'Virtual reality headset'] },
      { q: 'A classic farm implement is?', a: 'Horse-drawn plow', options: ['Horse-drawn plow', 'Electric car', 'LED lamp', '3D printer'] }
    ],
    sources: [
      'Longstreet Farm diary from 1872',
      'Victorian era farm equipment catalog',
      'Agricultural census data from 1870s'
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

const gameModal = document.getElementById('game-modal');
const gameTitle = document.getElementById('game-title');
const gameBody = document.getElementById('game-body');
const gameFeedback = document.getElementById('game-feedback');
const closeModal = document.getElementById('close-modal');
const closeGame = document.getElementById('close-game');
const nextQuestion = document.getElementById('next-question');

let map;
let allMarkers = [];
let activeLocation = null;
let gameState = { mode: null, questions: [], index: 0, score: 0 };
let progress = { visited: new Set(), gamesPlayed: 0, bestScore: 0 };

function init() {
  loadProgress();
  initMap();
  wireEvents();
  refreshProgress();
  showMessage('Search a site or click a pin.');
}

function initMap() {
  map = L.map('map').setView([40.25, -74.07], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 17
  }).addTo(map);

  locations.forEach((loc) => {
    const marker = L.marker([loc.lat, loc.lon]).addTo(map).bindTooltip(loc.name);
    marker.on('click', () => selectLocation(loc.id));
    allMarkers.push({ loc, marker });
  });
}

function wireEvents() {
  searchInput.addEventListener('input', (e) => filterLocations(e.target.value));
  openTriviaBtn.addEventListener('click', () => startGame('trivia'));
  openTimelineBtn.addEventListener('click', () => startGame('timeline'));
  openArtifactBtn.addEventListener('click', () => startGame('artifact'));
  nextQuestion.addEventListener('click', nextQuestionInGame);
  closeModal.addEventListener('click', () => showModal(false));
  closeGame.addEventListener('click', () => showModal(false));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') showModal(false); });
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
    li.textContent = source;
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

  gameBody.innerHTML = `<p>${q.q}</p>`;
  const answerArea = document.createElement('div');
  q.options = shuffle([...q.options]);

  q.options.forEach((option) => {
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
  if (right) gameState.score += 1;

  gameFeedback.textContent = right ? 'Great job—correct! 🎉' : `Nice try! Correct answer: ${correct}`;
  nextQuestion.style.display = 'inline-block';
  gameState.index += 1;

  if (gameState.index >= gameState.questions.length) {
    nextQuestion.textContent = 'Finish';
  } else {
    nextQuestion.textContent = 'Next';
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

function showModal(show) {
  gameModal.classList.toggle('show', show);
  gameModal.setAttribute('aria-hidden', String(!show));
  document.body.style.overflow = show ? 'hidden' : '';
  if (!show) {
    gameFeedback.textContent = '';
    gameBody.innerHTML = '';
  }
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
