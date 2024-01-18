/*   STEP 1   */
export const leagueID = "1048322366444601344"; // your league ID
export const leagueName = "SFO Dynasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>In the tapestry of fantasy football, where legends are forged and destinies written, emerges the saga of SFO Dynasty. A league not bound by the ordinary but defined by a fervor that echoes through the annals of football fandom. Our odyssey began on a momentous Sunday, August 13th, 2023 – an inaugural draft that transcended mere player selections, heralding the birth of a dynasty.</p>

  <p>SFO Dynasty stands as a colossus of innovation, embracing the dynamic essence of the game with a superflex PPR format. Kicking aside the mundane, here, every position becomes a formidable player in the unfolding epic. It's a high-stakes battleground where strategic brilliance reigns supreme, and the clash of titans becomes the heartbeat of our narrative.</p>

  <p><a href="https://www.cameo.com/recipient/64cc581387699c787c83b08e?_branch_match_id=1216888964715026176&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL9NLTsxNzddLzs%2FVz7OwKLPwLyg1dkoCAC60qQofAAAA">Scott Hansen</a>, the maestro of RedZone, unfurled the draft order for SFO Dynasty. A moment of grandeur that echoed through the hallowed halls of our league, heralding the commencement of a journey into the heart of fantasy football greatness.</p>

  <p>Within the first hour post-draft, a trade thundered through the league, setting the stage for a season characterized by over 300 transactions. More than 50 of these were seismic trades, each sending shockwaves through the league, a relentless pursuit of glory that marked our journey. The rest is history...</p>

  <p>"Anything for SFO Dynasty" – a battle cry that resonates beyond the gridiron. It's a commitment etched in the very soul of our league, a spirit that fuels every trade, every waiver wire move, and every strategic decision. Victory and glory aren't aspirations; they are the very air we breathe.</p>

  <p>Yet, SFO Dynasty isn't confined to the virtual realm alone. We transcend dimensions with our annual summit in the vibrant city of Las Vegas – a convergence of strategists, a celebration of camaraderie, and a testament to the community that defines our league.</p>

  <p>Commissioner W., the enigmatic helm of SFO Dynasty, navigates the league's narrative with a blend of authority and charisma. Alongside him is Vice Commissioner "Vice," infusing the league with a rebellious flair, ensuring it runs like a well-orchestrated symphony.</p>

  <p>Seabass McTango, the league's oracle and beat reporter, hailing from the legendary McTango football dynasty. His tales of breaking news add a layer of mystique, keeping our community on the edge of their seats, eager for the next revelation.</p>

  <p>SFO Dynasty is not a mere fantasy football league; it is a living, breathing epic fueled by the unbridled passion of its members. Each touchdown, each trade, and each victory script another chapter in the unfolding saga – an odyssey where the pursuit of triumph becomes the very essence of our existence. Follow our league, where the thrill of victory is surpassed only by the symphony of camaraderie, and the spirit of competition knows no bounds. In the vast expanse of fantasy football leagues worldwide, SFO Dynasty reigns supreme.</p>

  <h5>Future Features</h5>
  <ul>
    <li>Twitter feed integration</li>
    <li>Picked Off Magazine integration</li>
  </ul>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "managerID": "729470132878942208",
    "name": "SmilesD",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "sf",
    "mode": "Rebuild",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 9758,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "729512510209757184",
    "name": "JanC",
    "location": "Cardiff, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "kc",
    "mode": "Dynasty",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 6797,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "730197235672956928",
    "name": "obviouslygreen",
    "location": "Carlsbad, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "chi",
    "mode": "Rebuild",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 4984,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "730559555540480000",
    "name": "Eastwood123",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "sf",
    "mode": "Dynasty",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 4046,
    "valuePosition": "QB",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "867830050538598400",
    "name": "jonbonjourvi",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "phi",
    "mode": "Win Now",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 6904,
    "valuePosition": "QB",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "867866820202364928",
    "name": "lofman",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "was",
    "mode": "Dynasty",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 8183,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "991918637940379648",
    "name": "ksculls",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "cle",
    "mode": "Rebuild",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 6794,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "991919481007980544",
    "name": "icecreamboiii",
    "location": "Los Angeles, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "nyg",
    "mode": "Win Now",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 7523,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "991952812890300416",
    "name": "nhamill4",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "atl",
    "mode": "Rebuild",
    "rival": {
      "name": "TheRealSugarDaddy247",
      "link": 9,
      "image": "/managers/question.jpg"
    },
    "favoritePlayer": 6994,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "991973505858150400",
    "name": "TheRealSugarDaddy247",
    "location": "San Diego, CA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "was",
    "mode": "Win Now",
    "rival": {
      "name": "nhamill4",
      "link": 8,
      "image": "/managers/question.jpg"
    },
    "favoritePlayer": 7564,
    "valuePosition": "WR",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "992163204270854144",
    "name": "chardeemacdixon",
    "location": "USA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "det",
    "mode": "Dynasty",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 9509,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  },
  {
    "managerID": "992237583453184000",
    "name": "kysol",
    "location": "USA",
    "bio": "Lorem ipsum...",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2023,
    "favoriteTeam": "lar",
    "mode": "Win Now",
    "rival": {
      "name": "Everyone",
      "link": null,
      "image": "/managers/everyone.png"
    },
    "favoritePlayer": 6786,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper"
  }
];


  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */

    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },

