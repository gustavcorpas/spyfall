
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}


var startGameTime = new Date();
let currentTime = new Date();
var gameLength = 10;
let gamePaused = true;

window.addEventListener('load', e => {
  let players = new Vue({
    el: '#players',
    data: {
      players: [
      ]
    },
    methods: {
      showhide: function (event) {
        let elem = event.target;
        if(!event.target.classList.contains('player')){
          elem = elem.parentElement;
        }
        elem.classList.add("hasshown");
        if(elem.querySelector('.p-loc-var').style.visibility != "visible"){
          elem.querySelector('.p-loc-var').style.visibility = "visible";
          elem.querySelector('.p-role-var').style.visibility = "visible";
        }else{
          elem.querySelector('.p-loc-var').style.visibility = "hidden";
          elem.querySelector('.p-role-var').style.visibility = "hidden";
        }

      },
    }
  });

  let timer = new Vue({
    el: '#clock',
    data: {
      minutes: gameLength,
      seconds: 0
    },
  });
  updateTimer();

  function updateTimer(){
    if(!gamePaused){
      currentTime = new Date();
    }

    timer.minutes = parseInt((startGameTime.getTime() + (gameLength*60*1000) - currentTime.getTime())/(1000*60));
    timer.seconds = parseInt((startGameTime.getTime() + (gameLength*60*1000) - currentTime.getTime())/1000)%60;
    setTimeout(updateTimer, 1000);
  }

  let locations = new Vue({
    el: '#locations',
    data: {
      locations: [
        {
     location: "Airplane",
     roles: [
         "First Class Passenger",
         "Air Marshall",
         "Mechanic",
         "Air Hostess",
         "Co-Pilot",
         "Captain",
         "Economy Class Passenger"
     ]
 }, {
     location: "Bank",
     roles: [
         "Armored Car Driver",
         "Manager",
         "Consultant",
         "Robber",
         "Security Guard",
         "Teller",
         "Customer"
     ]
 }, {
     location: "Beach",
     roles: [
         "Beach Waitress",
         "Kite Surfer",
         "Lifeguard",
         "Thief",
         "Beach Photographer",
         "Ice Cream Truck Driver",
         "Beach Goer"
     ]
 }, {
     location: "Cathedral",
     roles: [
         "Priest",
         "Beggar",
         "Sinner",
         "Tourist",
         "Sponsor",
         "Chorister",
         "Parishioner"
     ]
 }, {
     location: "Circus Tent",
     roles: [
         "Acrobat",
         "Animal Trainer",
         "Magician",
         "Fire Eater",
         "Clown",
         "Juggler",
         "Visitor"
     ]
 }, {
     location: "Corporate Party",
     roles: [
         "Entertainer",
         "Manager",
         "Unwanted Guest",
         "Owner",
         "Secretary",
         "Delivery Boy",
         "Accountant"
     ]
 }, {
     location: "Crusader Army",
     roles: [
         "Monk",
         "Imprisoned Saracen",
         "Servant",
         "Bishop",
         "Squire",
         "Archer",
         "Knight"
     ]
 }, {
     location: "Casino",
     roles: [
         "Bartender",
         "Head Security Guard",
         "Bouncer",
         "Manager",
         "Hustler",
         "Dealer",
         "Gambler"
     ]
 }, {
     location: "Day Spa",
     roles: [
         "Stylist",
         "Masseuse",
         "Manicurist",
         "Makeup Artist",
         "Dermatologist",
         "Beautician",
         "Customer"
     ]
 }, {
     location: "Dublin Anime Meetup",
     roles: [
         "Organizer",
         "Attendee",
         "Attendee",
         "Bartender",
         "Musician",
         "Clueless Customer",
         "Clueless Customer"
     ]
 }, {
     location: "Embassy",
     roles: [
         "Security Guard",
         "Secretary",
         "Ambassador",
         "Tourist",
         "Refugee",
         "Diplomat",
         "Government Official"
     ]
 }, {
     location: "Hospital",
     roles: [
         "Nurse",
         "Doctor",
         "Anesthesiologist",
         "Intern",
         "Therapist",
         "Surgeon",
         "Patient"
     ]
 }, {
     location: "Hotel",
     roles: [
         "Doorman",
         "Security Guard",
         "Manager",
         "Housekeeper",
         "Bartender",
         "Bellman",
         "Customer"
     ]
 }, {
     location: "Military Base",
     roles: [
         "Deserter",
         "Colonel",
         "Medic",
         "Sniper",
         "Officer",
         "Tank Engineer",
         "Soldier"
     ]
 }, {
     location: "Movie Studio",
     roles: [
         "Stunt Man",
         "Sound Engineer",
         "Camera Man",
         "Director",
         "Costume Artist",
         "Producer",
         "Actor"
     ]
 }, {
     location: "Ocean Liner",
     roles: [
         "Cook",
         "Captain",
         "Bartender",
         "Musician",
         "Waiter",
         "Mechanic",
         "Rich Passenger"
     ]
 }, {
     location: "Passenger Train",
     roles: [
         "Mechanic",
         "Border Patrol",
         "Train Attendant",
         "Restaurant Chef",
         "Train Driver",
         "Stroker",
         "Passenger"
     ]
 }, {
     location: "Pirate Ship",
     roles: [
         "Cook",
         "Slave",
         "Cannoneer",
         "Tied Up Prisoner",
         "Cabin Boy",
         "Brave Captain",
         "Sailor"
     ]
 }, {
     location: "Polar Station",
     roles: [
         "Medic",
         "Expedition Leader",
         "Biologist",
         "Radioman",
         "Hydrologist",
         "Meteorologist",
         "Geologist"
     ]
 }, {
     location: "Police Station",
     roles: [
         "Detective",
         "Lawyer",
         "Journalist",
         "Criminalist",
         "Archivist",
         "Criminal",
         "Patrol Officer"
     ]
 }, {
     location: "Restaurant",
     roles: [
         "Musician",
         "Bouncer",
         "Hostess",
         "Head Chef",
         "Food Critic",
         "Waiter",
         "Customer"
     ]
 }, {
     location: "School",
     roles: [
         "Gym Teacher",
         "Principal",
         "Security Guard",
         "Janitor",
         "Cafeteria Lady",
         "Maintainence Man",
         "Student"
     ]
 }, {
     location: "Service Station",
     roles: [
         "Manager",
         "Tire Specialist",
         "Biker",
         "Car Owner",
         "Car Wash Operator",
         "Electrician",
         "Auto Mechanic"
     ]
 }, {
     location: "Space Station",
     roles: [
         "Engineer",
         "Alien",
         "Pilot",
         "Commander",
         "Scientist",
         "Doctor",
         "Space Tourist"
     ]
 }, {
     location: "Submarine",
     roles: [
         "Cook",
         "Commander",
         "Sonar Technician",
         "Electronics Technician",
         "Radioman",
         "Navigator",
         "Sailor"
     ]
 }, {
     location: "Supermarket",
     roles: [
         "Cashier",
         "Butcher",
         "Janitor",
         "Security Guard",
         "Food Sample Demonstrator",
         "Shelf Stocker",
         "Customer"
     ]
 }, {
     location: "Theater",
     roles: [
         "Coat Check Lady",
         "Prompter",
         "Cashier",
         "Director",
         "Actor",
         "Crew Man",
         "Audience Member"
     ]
 }, {
     location: "University",
     roles: [
         "Graduate Student",
         "Professor",
         "Dean",
         "Psychologist",
         "Maintenance Man",
         "Janitor",
         "Student"
     ]
 }, {
     location: "World War II Squad",
     roles: [
         "Resistance Fighter",
         "Radioman",
         "Scout",
         "Medic",
         "Cook",
         "Imprisoned Nazi",
         "Soldier"
     ]
 }
      ]
    }
  });

  //ADDING PLAYERS
  let newPlayerButton = document.querySelector('#new-player');
  let newPlayerName = document.querySelector('#nameinput');
  newPlayerButton.addEventListener('click', e => {
    if(newPlayerName.value.length < 1)
      return;
    players.players.unshift({name: newPlayerName.value, location: 'set at game start', role: 'set at game start'});
    newPlayerName.value = '';
  });

  //STARTING GAME
  let startGameButton = document.querySelector('#start-game');

  startGameButton.addEventListener('click', e => {
    //SETTING LOCATIONS AND ROLES
    let random = Math.floor(Math.random() * locations.locations.length);
    let currentLocation = locations.locations[random];
    let scrambledRoles = shuffle([...currentLocation.roles]);

    for(let i = 0; i < players.players.length; i++){
      players.players[i].location = currentLocation.location;
      players.players[i].role = scrambledRoles[i % (scrambledRoles.length)];
    }
    //ASSIG SPY
    let spy = Math.floor(Math.random() * players.players.length);
    players.players[spy].location = '???';
    players.players[spy].role = 'Spy';
    //SET START GAME time
    startGameTime = new Date();
    gamePaused = false;
    let hasshowns = document.querySelectorAll(".hasshown");
    for(let i = 0; i < hasshowns.length; i++){
      hasshowns[i].classList.remove('hasshown');
    }
    let hiders = [];
    hiders.push(...Array.from(document.querySelectorAll('.p-loc-var')));
    hiders.push(...Array.from(document.querySelectorAll('.p-role-var')));
    for(let i = 0; i < hiders.length; i++){
      hiders[i].style.visibility = "hidden";
    }
  });

  function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

});
