var moodRage =["My Own Worst Enemy by Lit", "All Downhill From Here by New Found Glory", "I Woke Up In A Car by Something Corporate", "666 by World Divided", "Born to be Epic by Equilibrium", "My Curse by Killswitch Engine", "Uppercuts by Terror Reid", 
"Pemex by Shakwell", "Nike Ticks by YNG Martyr", "Whats Poppin by DaBaby", "Audi by Smokepurpp", "Hot n*gga by Bobby Shmurda", "Onna Come Up by Lil Eazzyy", "How You Feel? by DJ Scheme", "Fox 5 by Lil Keed", "S.L.U.T. by Bea Miller", "Nightmares by Ellise", 
"You & Jennifer", "Paralyzer by Finger Eleven","You're Gonna Go Far, Kid by The offspring", "Headstrong by Trapt"];

var moodCalm = ["John Paul Jones by Paul Chambers, Lazy Afternoon bby Pete La Roca", "Bye Bye Blackbird by Ron Carter", "Beutiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", "Shoreditch by Clint Is Quinn",
"deep cracks by fogdream", "cayenne by vibe academy", "Willow Whip by Vanilla Beach", "Gust of Feels by Reggie Lume", "hanging on by middlesway", "Here Comes the Sun by Nylonwings", "Time after Time by Edy Hafler", "Kesho Kutwa by Ethan Muziki", 
"Kipi Sijasikia by Professor Jay", "Mungu Halali by Blinky Bill", "Aby by Jupi/ter", "Level Line by Gallery Six", "Oper Your Chakras by Davidji", "Whispering by Bumblebee", "Morning Coffee by Wist", "Always With Me by Sleepy Tom"]

var moodDestress = ["Joy to the World by Three Dog Night", "Just What I needed by The Cars", "Addicted to Love by Robert Palmer", "Sleep Apnea by Beach Fossils", "Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "John Paul Jones by John Coltrane", 
"Lazy AFternoon by Pete La Roca", "Bye Bye Blackbird by Ron Carter"," Beautiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", "Superposition by Young the Giant" , "Wish I Knew You by The Revivalists",
"Over My Head by Judah & the Lion", "Stranglehold by Ted Nugent", "The Boys Are Back In Town by Thin Lizzy", "One Bourbon, One Scotch, One Beer by George Thorogood & The Destoryers", "Whispering by Bumblebee", "Morning Coffee by Wist",
"Always With Me by Sleepy Tom"]

var moodCozy = ["John Paul Jones by John Coltrane", "Lazy AFternoon by Pete La Roca", "Bye Bye Blackbird by Ron Carter"," Beautiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", "Kesho Kutwa by Ethan Muziki",
"Kipi Sijasikia by Professor Jay", "Mungu Halali by Blinky Bill", "13 Pieces for Piano by Jean Sibelius", "4 Romantic Pieces by Kian Soltani", " Clair de Lune by Claude Debussy", "Rememberance by Matteo Myderwyk", "Trois Gnoissiennes by Erik Satie", 
"Elixer by I TRAVEL LIGHT", "Superposition by Young the Giant", "Wish I knew you by The Revivalists", "Over my Head by Judah & The Lion", "Whispering by Bumblebee", "Morning Coffee by Wist", "Always With me by SLeepy Tom", "cellophane by FKA twigs",
"A Soulmate Who Wasn't Meant To Be by Jess Benko", "I Love You So by The Walters" ]

var  moodHappy = ["Joy to the World by Three Dog Night", "Just What I needed by The Cars", "Addicted to Love by Robert Palmer", "Sleep Apnea by Beach Fossils", "Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "Oath by Cher Lloyd", "Pretty Girl Rock by Keri Hilson",
"Wrap Me In Plastic by MOMOLAND", "Monster by Red Velvet", "BOOMERANG by Wanna One", "One, Two Step by Ciara", "Always on Time by Ja Rule", "Back That Azz Up by JUVENILE", "Mary Jane Rick James", "You Dropped A Bomb On Me  by The Gap Band", "I'll Be Good Rene & Angela",
"Rub by Kaiser Chiefs", "Common People by Pulp", "Young Blood by The Naked and Famous", "Stranglehold by Ted Nugent", "The Boys Are Back In Town by Thin Lizzy", "One Bourbon, One Scotch, One Beer by George Thorogood", "Million Voices by Radio Edit",
"Impossible by Shontelle", "BED by Joel Corry", "How Does It Feel by M-22", "We Are Family by Sister Sledge", "Your Love Keeps Lifting Me by Jackie Wilson", "Mamma Mia by Meryl Streep", "California Dreamin' by Ian Storm", "Uptown Funk by Mark Ronson",
"Classic by MKTO", "Hone, I'm Good. by Andy Grammer", "Bright by Echosmith"]

var moodSad = ["John Paul Jones by John Coltrane", "Lazy AFternoon by Pete La Roca", "Bye Bye Blackbird by Ron Carter"," Beautiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", "Kesho Kutwa by Ethan Muziki",
"Kipi Sijasikia by Professor Jay", "Mungu Halali by Blinky Bill", "Like You by Bow Wow", "Let Me Love You by Mario", "I Wanna Know by Joe", "This is How We Do It by Montell Jordan", "Buy U a Drank by T-Pain", "Right Thurr by Chingy", "Lonesome Blues by Johnny Moore",
"Givin'' Up On Love by Byther Smith", "Empty Arms by Eddie Boyd", "I GUESS I'M IN LOVE by Clinton Kane", "The Enemy by Andrew Belle", "A Soulmate Who Wasn't Meant to Be by Jess Benko", "Nightmares by Yung Pinch", "Fine Apple by Nic D", "No Games by Arz", "Play by Derek King",
"Post to Be by Omarion", "Wishing by DJ Drama", "Dicked Down in Dallas by Trey Lewis", "Just Drive by Erin Kinsey", "Right Girl Wrong Time by Jon Langston"]

var moodLove = ["Like You by Bow WoW", "Let Me Love You by Mario", "I Wanna Know by Joe", "This Is How We Do It by Montell Jordan", "Buy U a Drank by T-Pain", "Right Thurr by Chingy", "Where the Party At by Jagged Edge", "How You Gonna Act Like That by Tyrese",
"So Sick by Ne-Yo", "Jessie by Joshua Kadison", "When a Man Loves a Woman by Percy Sledge", "Angel Eyes by Wet Wet Wet", "Save the Best For Last by Vanessa Williams", "Every Time I Close My Eyes by Babyface", "Wild Beneath My Wings by Bette Midler",
"I Do It For You by Bryan Adams", "Love is All Around by Wet Wet Wet", "We're All Alone by Rita Coolidge"]

var moodCooking = ["Joy to the World by Three Dog Night", "Just What I needed by The Cars", "Addicted to Love by Robert Palmer", "Sleep Apnea by Beach Fossils", "Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "John Paul Jones by John Coltrane", 
"Lazy AFternoon by Pete La Roca", "Bye Bye Blackbird by Ron Carter"," Beautiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", "Shoreditch by Clint is Quinn", "Deep Cracks by fogdream", "cayenne by vibe academy", 
"Willow Whip by Vanilla Beach", "Gust of Feels by Reggie Lume", "Hanging On by middlesway", "Here Comes the Sun by Nylonwings", "Time after Time by Edy Hafler", "13 Pieces for Piano by Jean Sibelius", "4 Romantic Pieces by Kian Soltani", "Clair de Lune by Claude Debussy"]

var moodGaming = ["Inside Out by Eve 6", "Paralyzer by Finger Eleven", "All My Friends are Nobodies by zebrahead", "666 by World Divided", "Born to be Epic by Equilibrium", "My Curse by Killswitch Engage", "Joy to the World by Three Dog Night", 
"Just What I needed by The Cars", "Addicted to Love by Robert Palmer", "Sleep Apnea by Beach Fossils", "Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "Oath by Cher Lloyd", "Pretty Girl Rock by Keri Hilson",
 "All About Tonight by Pixie Lott", "Crank That by Soulja Boy", "Dynamite by Taio Cruz", "Wrap Me In Plastic by MOMOLAND", "Monster by Red Velvet", "BOOMERANG by Wanna One", "One, Two Step by Ciara", "Always on Time by Ja Rule, Back That Azz Up by JUVENILE",
"Mary Jabe by Rick James", "You Dropped a Bomb On Me by The Gap Band", "I'll Be Good by Rene & Angela", "Heroes by Poylow", "Round & Round by SP3CTRUM", "Somewhere in LA by DVRKO", "Bang Bang by Jessie J", "Heatwave by Wiley", "Ain't Your Mama by Jennifer Lopez",
"BED by Joel Corry", "How Does It Feel by M-22", "Million Voices by Otto Knows", "Rather Do by Txngxr1", "911 By Ellise", "The Thrill by Wiz Khalifa", "Afterlife by Gidexen", "Galaxy by Ericovich", "Barking by RushLow"]

var moodWorking = ["Inside Out by Eve 6", "Paralyzer by Finger Eleven", "All My Friends are Nobodies by zebrahead", "Joy to the World by Three Dog Night", "Just What I Needed by The Cars", "Addicted to love by Robert Palmer", "Sleep Apnea by Beach Fossils",
"Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "Mary Jane by Rick James", "You Dropped a Bomb on Me by The Gap Band", "I'll Be Good by Rene & Angela", "Dust on the Bottle by David Lee Murphy", "Dicked Down in Dallas by Trey Lewis", 
"Diamonds by Morgan Evans", "Fancy Like by Walker Hayes", "Stuck Like Glue by Sugarland", "Fuck You Bitch by Wheeler Walker Jr.", "Superpostion by Young The Giant", "Wish i Knew You by The Revivalists", "Over My Head by Judah & the Lion", "Heroes by Poylow", 
"Round & Round by SP3CTRUM", "Somewhere in LA by DVRKO", "Stranglehold by Ted Nugent", "The Boys Are Back in Town by Thin Lizzy", "One Bourbon, One Scotch, One beer by George Thorogood"]

var moodParty = ["Sleep Apnea by Beach Fossils", "Moonlight Baby by The Dig", "Lucky Girl by Fazerdaze", "Uppercuts by Terror Raid", "Pemex by shakewell", "Nike Ticks by YNG Martyr", "Whats Poppin by Jack Harlow", "Audi. by Smokepurpp", "Hot N*gga by Bobby Shmurda",
"Onna Come Up by Lil Eazzyy", "How You Feel by DJ Scheme", "Fox 5 by Lil Keed", "Oath by Cher Lloyd", "Pretty Girl Rock by Keri Hilson", "All About Tonight by pixie Lott", "Crank That by Soulja Boy",  "Dynamite by Taio Cruz", "Wrap Me In Plastic by MOMOLAND", "Monster by Red Velvet", "BOOMERANG by Wanna One", "One, Two Step by Ciara", "Always on Time by Ja Rule, Back That Azz Up by JUVENILE",
"Mary Jabe by Rick James", "You Dropped a Bomb On Me by The Gap Band", "I'll Be Good by Rene & Angela", "Si tu no estas by Rosana", "No podras by Cristian", "Tu de que vas by Franco De Vita", "Brazil Nao Seremos Jamais Ou Seremos by Samba", "I Wanna Dance With Somebody by The Cube Guys",
"Aguas de Marco by Tempo Rei", "Heroes by Poylow", "Round & Round by SP3CTRUM", "Somewhere In LA by DVRKO", "Million Voices by Otto Knows", "Impossible by Shontelle", "Bed by joel Corry", "How Does It Feel by M-22"]

var moodReading = ["John Paul Jones by John Coltrane", "Lazy AFternoon by Pete La Roca", "Bye Bye Blackbird by Ron Carter"," Beautiful Love by Kenny Barron Trio", "Billie's Bounce by Sonny Knight", "Burning Bright by Ben Wendel", 
"Shoreditch by Clint is Quinn", "Deep Cracks by fogdream", "cayenne by vibe academy", 
"Willow Whip by Vanilla Beach", "Gust of Feels by Reggie Lume", "Hanging On by middlesway", "My Turn by Florence Ada", "Vanilla Sky by Trell Daniels", "Here Comes the Sun by Nylonwings", "Time after Time by Edy Hafler", 
"Like You by Bow WoW", "Let Me Love You by Mario", "I Wanna Know by Joe", "This Is How We Do It by Montell Jordan", "Buy U a Drank by T-Pain", "Right Thurr by Chingy", "Deathless Audio by Frenic", "Tribute to Nujabes by Kondor", "Sjpptomg Stars by DJ Sorama", 
"Superpostion by Young The Giant", "Wish i Knew You by The Revivalists", "Over My Head by Judah & the Lion", "Grainy White & Brown Noise by Astral Noise", "Noise by the Ocean by The Noise Nannies", "Brown Sleeping Nopise by Aelozzz", "Whispering by Bumblebee",
"Morning Coffe by Wist","Always With Me by Sleepy Tom", "cellophane by FKA twigs", "A Soulmate Who Wasn't Meant to Be by Jess Benko", "I Love You So by The Walters"]

var moodExercise = ["Inside Out by Eve 6", "Paralyzer by Finger Eleven", "All My Friends are Nobodies by zebrahead", "666 by World Divided", "Born to be Epic by Equilibrium", "My Curse by Killswitch Engage", 
"Uppercuts by Terror Raid", "Pemex by shakewell", "Nike Ticks by YNG Martyr", "Whats Poppin by Jack Harlow", "Audi. by Smokepurpp", "Hot N*gga by Bobby Shmurda",
"Onna Come Up by Lil Eazzyy", "How You Feel by DJ Scheme", "Fox 5 by Lil Keed", "One, Two Step by Ciara", "Always on Time by Ja Rule, Back That Azz Up by JUVENILE", "Mary Jabe by Rick James", "You Dropped a Bomb On Me by The Gap Band", 
"I'll Be Good by Rene & Angela", "Heroes by Poylow", "Round & Round by SP3CTRUM", "Somewhere in LA by DVRKO", "Bang Bang by Jessie J", "Heatwave by Wiley", "Ain't Your Mama by Jennifer Lopez", "Stranglehold by Ted Nugent", "The Boys Are Back In Town by Thin Lizzy", 
"One Bourbon, One Scotch, One Beer by George Thorogood & The Destoryers", "Don't You Worry About Me by Bad Boy Chiller Crew", "Let Me Love You John Gibbons", "Do Me No Good by Shift K3Y"]

var moodRoadtrip = ["Hurts So Good bvy John Mellencamp", "Some Kind of Wonderful by Grand Funk Railroad", "Caught Up In You by 38 Special", "Uppercuts by Terror Raid", "Pemex by shakewell", "Nike Ticks by YNG Martyr", "Whats Poppin by Jack Harlow", "Audi. by Smokepurpp", "Hot N*gga by Bobby Shmurda",
"One, Two Step by Ciara", "Always on Time by Ja Rule", "Back That Azz Up by JUVENILE", "Mary Jane Rick James", "You Dropped A Bomb On Me  by The Gap Band", "I'll Be Good Rene & Angela", "Dust on the Bottle by David Lee Murphy", "Dicked Down in Dallas by Trey Lewis", 
"Diamonds by Morgan Evans", "Fancy Like by Walker Hayes", "Stuck Like Glue by Sugarland", "Fuck You Bitch by Wheeler Walker Jr.", "Ruby by Kaiser Chiefs", "Common People by Pulp", "Young Blood by The Naked and Famous", "Centerfold by The J. Geils Band", 
"Jessie's Girl by Rick Springfield", "Love Shack by The B-52's"]




// for (var i = 0; i < moodRage.length; i++) {
//   song = moodRage[i];
//   link = linkRage[i];
//   buttonGen(song,link);
// }


// function buttonGen(song, link){
//   document.addEventListener('DOMContentLoaded', function() {
//     var na = ''+moodRage[i];
//     var button = document.createElement('button');
//     button.type = 'button';
//     button.innerHTML = 'Click Me';
//     button.className = 'btn-styled';
  
//     button.onclick = function() {
//       window.location.href = "http://youtube.com";
//     };
  
//     var container = document.getElementById('container');
//     container.appendChild(button);
//   }, false);
// }
// document.addEventListener('DOMContentLoaded', function() {
//   var na = ''+moodRage[i];
//   var button = document.createElement('button');
//   button.type = 'button';
//   button.innerHTML = 'Click Me';
//   button.className = 'btn-styled';

//   button.onclick = function() {
//     window.location.href = "http://youtube.com";
//   };

//   var container = document.getElementById('container');
//   container.appendChild(button);
// }, false);


//------------------------------------------------Love-----------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'John Paul Jones by John Coltrane';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=0oevmhtYLxc";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Lazy AFternoon by Pete La Roca';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=KFFs9XsZKvw";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Bye Bye Blackbird by Ron Carter';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=DNL2nSH7530";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Beautiful Love by Kenny Barron Trio';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=tJ9mdJjoWj8";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Billies Bounce by Sonny Knight';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=RN1i4qU-q6Q";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Burning Bright by Ben Wendel';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=-LCcephMQWI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Clint Eastwood by Gorillaz';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=-u0TOPB3nrI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'deep cracks by fogdream';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'cayenne by vibe academy';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Willow Whip by Vanilla Beach';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Gust of Feels by Reggie Lume';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=IkE-jU9QBVE";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'hanging on by middlesway';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=HSyjSIVDRqw";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'My Turn by Florence Ada';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=IY3JhA64Y5E";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Vanilla Sky by Trell Daniels';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=ntquu4KNpws";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Here Comes the Sun by Nylonwings';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "youtube.com/watch?v=ryYz7o3ptAo";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Time after Time by Edy Hafler';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=C4xq9uu2dzY";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Like You by Bow Wow';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=b-EqP0BLy1Q";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Let Me Love You by Mario';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=H64QG4UsrGI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'I Wanna Know by Joe';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=dJ8VjyPw0qY";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'This is How We Do It by Montell Jordan';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=0hiUuL5uTKc";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Buy U a Drank by T-Pain';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=dBrRBZy8OTs";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);


document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Right Thurr by Chingy';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=iO476kD-k0g";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Deathless Audio by Frenic';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=xCXGD-liQfE";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Tribute to Nujabes by Kondor';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=X_d_caNZ09I";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Sjpptomg Stars by DJ Sorama';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=kUlcVw4KjQI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Superposition by Young the Giant';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=QxJhrwyn0M4";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Wish I Knew You by The Revivalists';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=o0Pt7M0weUI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Over My Head by Judah & the Lion';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=CG1HId-yGu0";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Grainy White & Brown Noise by Astral Noise';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Noise by the Ocean by The Noise Nannies';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Brown Sleeping Nopise by Aelozzz';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Whispering by Bumblebee';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=U1PQpD6-Prs";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Morning Coffee by Wist';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=hYhxwO37GpM";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Always With Me by Sleepy Tom';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'cellophane by FKA twigs';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=YkLjqFpBh84";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'A Soulmate Who Wasnt Meant to Be by Jess Benko';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=L3yvk7Ix0g4";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'I Love You So by The Walters';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=NwFVSclD_uc";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);