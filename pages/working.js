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


//------------------------------------------------Working-----------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Inside Out by Eve 6';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=T8Xb_7YDroQ";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Paralyzer by Finger Eleven';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=BJk6gZuPKRE";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'All My Friends are Nobodies by zebrahead';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=WBcveX82KAk";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = '666 by World Divided';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=DZpt8YXFwso";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Born to be Epic by Equilibrium';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=hYoB2Tj3LR8";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'My Curse by Killswitch Engine';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=iPW9AbRMwFU";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Uppercuts by Terror Reid';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=FjUa8x4udE4";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Pemex by Shakwell';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=VlIExbHPWtw";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Nike Ticks by YNG Martyr';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=eAwclWAC37k";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Whats Poppin by DaBaby';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=HIwAI05Y1fU";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Audi by Smokepurpp';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=1dvTJJvEFL8";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Hot n*gga by Bobby Shmurda';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=vJwKKKd2ZYE";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Onna Come Up by Lil Eazzyy';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=S3JUizWXdUM";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'How You Feel? by DJ Scheme';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=RjTsQINzwl8";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Fox 5 by Lil Keed';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=CcdtGQShZXI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'One, Two Step by Ciara';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=iBHNgV6_znU";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Always on Time by Ja Rule';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=nkwWiYDeMvE";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Back That Azz Up by JUVENILE';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=WL2txMU50CI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Mary Jane Rick James';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=PrPNwLuk0zQ";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'You Dropped A Bomb On Me  by The Gap Band';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=17lkdqoLt44";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'll Be Good Rene & Angela';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=VVj1m8uy5AM";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Heroes by Poylow';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=pMp6bNe-CY8";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Round & Round by SP3CTRUM';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=WOZejEi5fwo";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Somewhere in LA by DVRKO';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=liq_c00ZzFI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Bang Bang by Jessie J';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=0HDdjwpPM3Y";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Heatwave by Wiley';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=CZkt1qsyzHI";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Aint Your Mama by Jennifer Lopez';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=Pgmx7z49OEk";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Stranglehold by Ted Nugent';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=0c3d7QgZr7g";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);
 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'The Boys Are Back In Town by Thin Lizzy';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=nN120kCiVyQ";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'One Bourbon, One Scotch, One Beer by George Thorogood & The Destoryers';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=sDf0IwXoOmY";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Dont You Worry About Me by Bad Boy Chiller Crew';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=lPckvzufS90";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Dont You Worry About Me by Bad Boy Chiller Crew';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=xayg8QTT738";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Do Me No Good by Shift K3Y';
  button.className = 'btn-styled';
 
  button.onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=VDNAywbP0es";
  };
 
  var container = document.getElementById('container');
  container.appendChild(button);
}, false);