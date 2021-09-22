//Authenticate spotify
//SpotifyWebApi().get(track)
//cats;
//mood; //This will be set by button click
//if (mood === "rage"){
//    cats = ["Punk", "Metal", "Rock", "Rap Metal"];
//}else if (mood === "destresser"){
//    cats = ["Jazz", "Oldies", "Classic Rock"];
//}else if (mood === "Calm"){
//    cats = ["Jazz", "Lo-Fi", "instrumental"];
//}else if (mood === "cozy"){
//    cats = ["Classical", "Jazz", "20's", "30's", "40's", "R&B"]
//}else if (mood === "happy"){
//    cats = ["Throwback", "Pop", "KPop", "Classic Rock", "Hip Hop", "Funk", "Acid Rock"]
//}else if (mood === "Sad"){
//    cats = ["R&B", "Blues", "Jazz"]
//}else if (mood === "Love"){
//    cats = ["Rock Ballads", "Love"]
//}else if (mood === "Cooking"){
//    cats = ["Classic Rock", "Funk", "Instrumentals", "Latin", "Samba", "Jazz", "Classical", "Lo-Fi"]
//}else if (mood === "Working"){
//    cats = ["Rock", "Funk", "Instrumentals", "Electronic Dance Music", "Punk"]
//}else if (mood === "Party"){
//    cats = ["Party"]
//}else if (mood === "Reading"){
//    cats = "Jazz"
//}
//for (let i = 0; i < 50; i++) {
//    SpotifyWebApi().get(random, category);

//}

//----------------------------------Above is some Potential randomized code for spotify, will finish once operational--------------------------

//----------------------------------Below is shazam---------------------------------------------------------------------------

var curSong;
var curMood;
var infoGen = document.getElementById('songInfo');
var spotPlayer = document.getElementById('')
//hard coded all songs in shazam accepted format, not a great fix but it is indeed a fix
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




//Shazam web API song info. Buttons should give this function song name and artis as arg, returns song info.
function songInfo(song){
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: song, //Song here should be the argument.
        locale: 'en-US',
        offset: '0',
        limit: '1'
      },
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': 'd1a90f55b4msh95e8fbd54c5197ap1aac26jsn82548a77bea8'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return options;
}

//Function for generating buttons. Functions as a tracklist and buttons should return song info for shazam on click
function printBtn() {
    for (var i = 0; i < curMood.length; i++) {
        var btn = document.createElement("Track " + (i +1).toString);
        var t = document.createTextNode(curMood[i]);
        btn.addEventListener('click', () => {
          curSong = curMood[i];
          infoGen.appendChild(songInfo(curSong))
        })
        btn.appendChild(t);
        document.body.appendChild(btn);
    }
} 


//Buttons from index will set current mood, generate a buttonized tracklist, create spotify player

//-----------------Rage Button---------------
let rageBtn = document.getElementById('rageBtn')

rageBtn.addEventListener('click', () => {

curMood = moodRage;
printBtn();

var ragePlay = document.createElement("iframe");
ragePlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
ragePlay.width="100%" 
ragePlay.height="380" 
ragePlay.allowfullscreen="" 
ragePlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(ragePlay)
})

//-----------------Stressed Button---------------
let stressedBtn = document.getElementById('stressedBtn')

stressedBtn.addEventListener('click', () => {

curMood = moodDestress;
printBtn();

var stressedPlay = document.createElement("iframe");
stressedPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
stressedPlay.width="100%" 
stressedPlay.height="380" 
stressedPlay.allowfullscreen="" 
stressedPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(stressedPlay)
})

//-----------------Chill Button---------------
let chillBtn = document.getElementById('chillBtn')

chillBtn.addEventListener('click', () => {

curMood = moodCalm;
printBtn();

var chillPlay = document.createElement("iframe");
chillPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
chillPlay.width="100%" 
chillPlay.height="380" 
chillPlay.allowfullscreen="" 
chillPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(chillPlay)
})

//-----------------Happy Button---------------
let happyBtn = document.getElementById('happyBtn')

happyBtn.addEventListener('click', () => {

curMood = moodHappy;
printBtn();

var happyPlay = document.createElement("iframe");
happyPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
happyPlay.width="100%" 
happyPlay.height="380" 
happyPlay.allowfullscreen="" 
happyPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(happyPlay)
})

//-----------------Sad Button---------------
let sadBtn = document.getElementById('sadBtn')

sadBtn.addEventListener('click', () => {

curMood = moodSad;
printBtn();

var sadPlay = document.createElement("iframe");
sadPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
sadPlay.width="100%" 
sadPlay.height="380" 
sadPlay.allowfullscreen="" 
sadPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(sadPlay)
})

//-----------------Love Button---------------
let loveBtn = document.getElementById('loveBtn')

loveBtn.addEventListener('click', () => {

curMood = moodLove;
printBtn();

var lovePlay = document.createElement("iframe");
lovePlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
lovePlay.width="100%" 
lovePlay.height="380" 
lovePlay.allowfullscreen="" 
lovePlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(lovePlay)
})

//-----------------Cooking Button---------------
let cookingBtn = document.getElementById('cookingBtn')

cookingBtn.addEventListener('click', () => {

curMood = moodCooking;
printBtn();

var cookingPlay = document.createElement("iframe");
cookingPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
cookingPlay.width="100%" 
cookingPlay.height="380" 
cookingPlay.allowfullscreen="" 
cookingPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(cookingPlay)
})

//-----------------Dance Button---------------
let danceBtn = document.getElementById('danceBtn')

danceBtn.addEventListener('click', () => {

curMood = moodParty;
printBtn();

var partyPlay = document.createElement("iframe");
partyPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
partyPlay.width="100%" 
partyPlay.height="380" 
partyPlay.allowfullscreen="" 
partyPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(partyPlay)
})

//-----------------Reading Button---------------
let readingBtn = document.getElementById('readingBtn')

readingBtn.addEventListener('click', () => {

curMood = moodReading;
printBtn();

var readingPlay = document.createElement("iframe");
readingPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
readingPlay.width="100%" 
readingPlay.height="380" 
readingPlay.allowfullscreen="" 
readingPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(readingPlay)
})


//-----------------Workout Button---------------
let workoutBtn = document.getElementById('workoutBtn')

workoutBtn.addEventListener('click', () => {

curMood = moodExercise;
printBtn();

var workoutPlay = document.createElement("iframe");
workoutPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
workoutPlay.width="100%" 
workoutPlay.height="380" 
workoutPlay.allowfullscreen="" 
workoutPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(workoutPlay)
})

//-----------------Gaming Button---------------
let gamingBtn = document.getElementById('gamingBtn')

gamingBtn.addEventListener('click', () => {

curMood = moodGaming;
printBtn();

var gamingPlay = document.createElement("iframe");
gamingPlay.src="https://open.spotify.com/embed/playlist/5PdrjMZzJYfXf50yePAwID" 
gamingPlay.width="100%" 
gamingPlay.height="380" 
gamingPlay.allowfullscreen="" 
gamingPlay.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

spotPlayer.appendChild(gamingPlay)
})



//These lines of code to be added in HTML. 

//<body onload="printBtn();"></body>    *******************
//<button onclick="songInfo()"></button>  *****************

//IMPORTANT: argument for songInfo should be generated by clicking track button. So onClick() argument should be the element name itself, I think?

//Description:
//printBtn(): takes current mood as argument, current mood should also store in curMood. Creates a list of songs from the mood which are all clickable
//songInfo(): takes curSong as argument, curSong should be generated by a click on button array from printBtn. Uses shazam API to return song info, should return as formatted string.

