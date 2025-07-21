/* Grabbing all necessary data from HTML file */
const infoD = document.getElementById("D-info");
const infoT = document.getElementById("T-info");
const infoGH = document.getElementById("GH-info");
const infoFH = document.getElementById("FH-info");
const infoSS = document.getElementById("SS-info");
const infoBI = document.getElementById("BI-info");
const infoBH = document.getElementById("BH-info");
const infoP = document.getElementById("P-info");
const infoC = document.getElementById("C-info");
const infoSDOD = document.getElementById("SDOD-info");
const infoMTD = document.getElementById("MTD-info");
const infoOD = document.getElementById("OD-info");
const infoOMH = document.getElementById("OMH-info");

const bloomFilter = document.getElementById("bloom-filter");
const wiltFilter = document.getElementById("wilt-filter");
const seedsFilter = document.getElementById("seeds-filter");

const tiles = document.getElementById("tiles");

const tile = tiles.getElementsByClassName("tile");
const shown = tiles.getElementsByClassName("show");
  
/* Getting buttons and filters to work */
function showTiles () {
  for (let i = 0; i < tile.length; i++) {
    tile[i].classList.add("show");
  };
  
  bloomFilter.selectedIndex = 0;
  wiltFilter.selectedIndex = 0;
  seedsFilter.selectedIndex = 0;
};

function filterTiles(c) {
  const x = tiles.getElementsByClassName(c);

  for (let i = 0; i < tile.length; i++) {
    tile[i].classList.remove("show");
  };

  for (let i = 0; i < x.length; i++) {
    x[i].classList.add("show");
  };
};

bloomFilter.addEventListener("change", (e) => {
  wiltFilter.selectedIndex = 0;
  seedsFilter.selectedIndex = 0;

  switch (e.target.value) {
    case "spring":
      filterTiles('bloom-spring');
    break;

    case "summer":
      filterTiles('bloom-summer');
    break;

    case "autumn":
      filterTiles('bloom-autumn');
    break;

    case "winter":
      filterTiles('bloom-winter');
    break;

    default:
      filterTiles('tile');
  }
});

wiltFilter.addEventListener("change", (e) => {
  bloomFilter.selectedIndex = 0;
  seedsFilter.selectedIndex = 0;

  switch (e.target.value) {
    case "spring":
      filterTiles('wilt-spring');
    break;

    case "summer":
      filterTiles('wilt-summer');
    break;

    case "autumn":
      filterTiles('wilt-autumn');
    break;

    case "winter":
      filterTiles('wilt-winter');
    break;

    default:
      filterTiles('tile');
  }
});

seedsFilter.addEventListener("change", (e) => {
  bloomFilter.selectedIndex = 0;
  wiltFilter.selectedIndex = 0;

  switch (e.target.value) {
    case "spring":
      filterTiles('seeds-spring');
    break;

    case "summer":
      filterTiles('seeds-summer');
    break;

    case "autumn":
      filterTiles('seeds-autumn');
    break;

    case "winter":
      filterTiles('seeds-winter');
    break;

    default:
      filterTiles('tile');
  }
});

/* Changing shadow colors */
const date = new Date();
const month = (date.getMonth() +1);

if (month >= 2 && month <= 4) {
  season = 'spring';
} else if (month >= 5 && month <= 7) {
  season = 'summer';
} else if (month >= 8 && month <= 10) {
  season = 'autumn';
} else if (month >= 11 && month <= 1) {
  season = 'winter';
};

const bloomSoon = tiles.getElementsByClassName('bloom-' + season);
const seedsSoon = tiles.getElementsByClassName('seeds-' + season);
const attnSoon = tiles.getElementsByClassName('attn-' + season);

for (let i = 0; i < bloomSoon.length; i++) {
  bloomSoon[i].classList.add('bloom-soon');
};

for (let i = 0; i < seedsSoon.length; i++) {
  seedsSoon[i].classList.add('seeds-soon');
};

for (let i = 0; i < attnSoon.length; i++) {
  attnSoon[i].classList.add('attn-soon');
};