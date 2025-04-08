// Function to Open Sidebar
function openMenu() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

// Function to Close Sidebar
function closeMenu() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}



const games = {

  "astro-boy-the-video-game-psp": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Goku%20Makaimura%20%282006%29%28Capcom%29%28JP%29%5BULJM-05147%5D.zip"
  },
  "assassins-creed-bloodlines": {
    file: "https://downloads.romspedia.com/roms/Assassins%20Creed%20-%20Bloodlines%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip"
  },
  "fifa-13": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/FIFA%20Street%202%20%282006%29%28Electronic%20Arts%29%28JP%29%5BULJM-05141%5D.zip"
  },
  "ben-10-alien-force-vilgax-attacks": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Cars%20%282006%29%28THQ%29%28DE%29%5BULES-00323%5D.zip"
  },
 "spider-man-3": {
    file: "https://downloads.romspedia.com/roms/Spider-Man%203%20%28USA%29%20%28v1.02%29.zip"
  },
  "need-for-speed-most-wanted-5-1-0": {
    file: "https://myrient.erista.me/files/TOSEC-ISO/Sony/PlayStation%20Portable/Games/%5BISO%5D/Need%20for%20Speed%20-%20Most%20Wanted%20-%205-1-0%20%282005%29%28Electronic%20Arts%29%28KR%29%5BULKS-46044%5D.zip"
  }, 

 "asphalt-urban-gt-2-psp": {
  file: ""
},

"armored-core-3-psp": {
  file: " "
},


"bakugan-battle-brawlers-defenders-of-the-core-psp": {
  file: " "
},


"ace-comat-x-skies-of-deception-psp": {
  file: " "
},


"avatar-the-last-airbender-psp": {
  file: " "
},

"ben-10-protector-of-earth": {
  file: " "
},

"ben-10-ultimate-alien-cosmic-destruction": {
  file: " "
},

"bleach-heat-the-soul-7": {
  file: " "
},

"bomberman-psp": {
  file: " "
},

"brothers-in-arms-d-day-psp": {
  file: " "
},

"burnout-dominator-psp": {
  file: " "
},

"burnout-legends-psp": {
  file: " "
},

"call-of-duty-roads-to-victory-psp": {
  file: " "
},

"colin-mcrae-rally-2005-plus-psp": {
  file: " "
},

"crash-of-the-titans-psp": {
  file: " "
},

"crash-tag-team-racing-psp": {
  file: " "
},

"crazy-taxi-fare-wars-psp": {
  file: " "
},

"dantes-inferno": {
  file: " "
},

"daxter-psp": {
  file: " "
},

"dead-or-alive-paradise-psp": {
  file: " "
},

"def-jam-fight-for-ny-the-takeover-psp": {
  file: " "
},

"digimon-adventure-psp": {
  file: " "
},

"dragon-ball-evolution-psp": {
  file: " "
},

"dragon-ball-z-shin-budokai-2": {
  file: " "
},

"dragon-ball-z-shin-budokai-another-road": {
  file: " "
},

"dragon-ball-z-shin-budokai-psp": {
  file: " "
},

"dragon-ball-z-tenkaichi-tag-team": {
  file: " "
},

"driver-76-psp": {
  file: " "
},

"dynasty-warriors-psp": {
  file: " "
},

"fifa-06-soccer-psp-cover": {
  file: " "
},

"fifa-13": {
  file: " "
},

"fifa-14-world-class-soccer": {
  file: " "
},

"fifa-street-2": {
  file: " "
},

"fight-night-round-3-psp": {
  file: " "
},

"g-force-psp": {
  file: " "
},

"ghost-ride": {
  file: " "
},

"gladiator-begins-psp": {
  file: " "
},

"god-of-war-chains-of-olympus-psp": {
  file: " "
},

"god-of-war-ghost-of-sparta-psp": {
  file: " "
},

"godfather-the-mob-wars-psp": {
  file: " "
},

"hellboy-the-science-of-evil-psp": {
  file: " "
},

"gran-turismo": {
  file: " "
},

"grand-theft-auto-chinatown-wars-psp": {
  file: " "
},


"grand-theft-auto-liberty-city-stories-psp": {
  file: " "
},


"grand-theft-auto-vice-city-stories-psp": {
  file: " "
},


"harry-potter-and-the-goblet-of-fire-psp": {
  file: " "
},


"": {
  file: " "
},


};

// Get ?game= from URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

window.onload = function () {
  const gameKey = getQueryParam('game');

  if (gameKey && games[gameKey]) {
    const title = gameKey.replace(/-/g, ' ').toUpperCase(); // Auto title
    const image = `game_images/${gameKey}-cover.webp`;             // Auto image path

    const file = games[gameKey].file;

    document.getElementById('game-title').textContent = title;
    document.getElementById('game-image').src = image;
    document.getElementById('download-button').href = file;
  } else {
    document.getElementById('game-title').textContent = "Game not found.";
    document.getElementById('download-button').style.display = 'none';
    document.getElementById('game-image').style.display = 'none';
  }
};



const searchIcon = document.getElementById('search-toggle');


searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('show');
  if (!searchInput.classList.contains('show')) {
    searchInput.value = '';
    removeHighlights();
  } else {
    searchInput.focus();
  }
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    const title = card.querySelector('h3');
    const text = title.textContent.toLowerCase();

    // Reset previous highlight
    title.innerHTML = title.textContent;

    if (query && text.includes(query)) {
      const regex = new RegExp(`(${query})`, 'gi');
      const highlighted = title.textContent.replace(regex, '<span class="highlight">$1</span>');
      title.innerHTML = highlighted;
      card.style.display = '';
    } else if (query) {
      card.style.display = 'none';
    } else {
      card.style.display = ''; // Show all if search is empty
    }
  });
});


