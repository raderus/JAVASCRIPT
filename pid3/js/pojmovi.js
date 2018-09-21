/* Copyright Radovan Rus (c) 2018. */

// Card data
var cardsArray = [
    {
        'name': 'bura',
        'term': 'Bura i Jugo',
        'img': 'img/pojmovi/bura.jpg',
        'description': 'U primorskom zavičaju dva vjetra pušu tijekom cijele godine: bura i jugo. Bura puše s kopna na more, a jugo s mora na kopno.',
    },
    {
        'name': 'horizont',
        'term': 'Horizont',
        'img': 'img/pojmovi/horizont.jpg',
        'description': 'Prostor koji vidimo sa stajališta naziva se obzor, vidokrug ili horizont. Obzor je različit s obzirom na mjesto stajanja. ',
    },
    {
        'name': 'karta',
        'term': 'Zemljovid',
        'img': 'img/pojmovi/karta.jpg',
        'description': 'Za prikazivanje većih površina na ravnom listu papira koriste se geografske karte (zemljovid). Zemljovidi imaju istaknute boje koje imaju svoje značenje.',
    },
    {
        'name': 'kompas',
        'term': 'Kompas',
        'img': 'img/pojmovi/kompas.jpg',
        'description': 'Kompas je manja kutija koji ljudima služi za orijentaciju u prostoru. U njemu se nalazi magnetna igla i prsten na kojem su upisane strane svijeta.',
    },
    {
        'name': 'nizina',
        'term': 'Nizinski zavičaj',
        'img': 'img/pojmovi/nizina.jpg',
        'description': 'Nizinski zavičaj smješten je na sjeveru naše domovine. Na zemljovidu taj prostor je označen zelenom bojom. Najniži dio naše domovine. Povoljan za naseljavanje.',
    },
    {
        'name': 'obala',
        'term': 'Razvedena obala',
        'img': 'img/pojmovi/obala.jpg',
        'description': 'Hrvatska obala Jadranskog mora ima puno otoka, poluotoka, zaljeva i uvala. Time je vrijedna i zanimljiva. Takva obala se zove razvedenom.',
    },
    {
        'name': 'orijentacija',
        'term': 'Orijentacija',
        'img': 'img/pojmovi/orijentacija.jpg',
        'description': 'Određivanje strana svijeta i smjera kretanja u prostoru zovemo orijentacijom ili snalaženjem u prostoru. Ako se na primjer Sunce u sredini dana nalazi na jugu.',
    },
    {
        'name': 'planina',
        'term': 'Gorski zavičaj',
        'img': 'img/pojmovi/planina.jpg',
        'description': 'Gorski zavičaj nalazi se između nizinskog zavičaja na sjeveru i primorskog na jugu. Površinom je najmanji i tu živi najmanje stanovnika. Na zemljovidu obojen je smeđom bojom.',
    },
    {
        'name': 'primorje',
        'term': 'Primorski zavičaj',
        'img': 'img/pojmovi/primorje.jpg',
        'description': 'Prostor uz Jadransko more, s obalom, svim poluotocima i otocima čini primorski zavičaj. Smješten je na jugu i zapadu naše domovine. More je osnovno obilježje primorskog zavičaja.',
    },
    {
        'name': 'stajaliste',
        'term': 'Stajalište',
        'img': 'img/pojmovi/stajaliste.jpg',
        'description': 'Mjesto na kojem se nalazimo i s kojeg promatramo prostor oko sebe zove se stajalište. Za bilo koje kretanje moramo znati stajalište i gdje želimo stići – odredište. ',
    },
    {
        'name': 'tlocrt',
        'term': 'Tlocrt',
        'img': 'img/pojmovi/tlocrt.jpg',
        'description': 'Tlocrt je crtež predmeta gledan odozgo. Takav crtež dobijemo kada postavimo predmet na papir ili na zemlju. Tlocrt je dvodimenzionalni prikaz nekog predmeta. On je geometrijski lik.',
    },
    {
        'name': 'model',
        'term': 'Model',
        'img': 'img/pojmovi/maketa.jpg',
        'description': 'Model je trodimenzionalni  umanjeni prikaz nekog predmeta ili objekta. Model ima duljinu, širinu i visinu. Model je geometrijsko tijelo.',
    },
];


// Shuffle 1
var cardsNew = cardsArray.sort(function () {
    return 0.5 - Math.random();
});
var mainLeft = cardsNew.slice(0,6);

// Shuffle 2
function shuffle(array) {
    var rand, index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
    }
    return result;
}
var mainRight = shuffle(mainLeft)

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 800;

// Prepare the DOM
function preLoad() {

    var memo = document.getElementById('memo');
    var timeGrid = document.createElement('section');
    timeGrid.setAttribute('class', 'timeGrid');
    memo.appendChild(timeGrid);
    

    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    memo.appendChild(grid);

    var pojmovi = document.createElement('section');
    pojmovi.setAttribute('class', 'pojmovi');
    var terms = document.getElementById('terms');
    terms.appendChild(pojmovi);

// Terms
mainRight.forEach(function (item) {
    var name = item.name;
    var term = item.term;
    var description = item.description;

    var desc = document.createElement('span');
    desc.classList.add('popuptext');

    var ime = document.createElement('div');
    ime.classList.add('pojam');
    ime.dataset.name = name;

    var txt = document.createElement('a');
    txt.classList.add('txt');
    txt.classList.add('popup');

    // Popup Tooltip with funcions
    txt.addEventListener('mouseover',createTip);
    txt.addEventListener('mouseout',cancelTip);

    // Safari iOS bug fix
    /*function isAppleDevice() {
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
        );
    }
    if (isAppleDevice()) {
        txt.addEventListener('touchstart',createTip);
        txt.addEventListener('touchend',cancelTip);
    } else {

    }*/

    // Append elements to the section
    pojmovi.appendChild(ime);
    ime.appendChild(txt);
    txt.appendChild(desc);

    var textnode = document.createTextNode(term);
    txt.appendChild(textnode);

    var popDesc = document.createTextNode(description);
    desc.appendChild(popDesc);

    //Popup functions
    function createTip() {
        desc.classList.add("show");
    }
    function cancelTip() {
        desc.classList.remove("show");
    }

});
// Cards
mainLeft.forEach(function (item) {
    var name = item.name,
        img = item.img;
    
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    var timeCard = document.createElement('div');
    timeCard.classList.add('timeCard');
    timeCard.style.backgroundImage = 'url(' + img + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    timeGrid.appendChild(timeCard);

});

var memoNow = document.querySelector('.memo-now');
var termOverlay = document.querySelector(".term-overlay");
function timeShow() {
    timeGrid.classList.add("timeShow");
    termOverlay.style.display="block";
    memoNow.style.display = "flex";
}
timeShow();
var cancelTimeShow = function cancelTimeShow() {
    var sect = document.querySelector(".timeGrid");
    sect.parentNode.removeChild(sect);
    termOverlay.style.display = "none";
    memoNow.style.display = "none";
}
setTimeout(cancelTimeShow,40000);

memoNow.addEventListener('click', function() {
    setTimeout(cancelTimeShow,5);
});


var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match');
    });
};

var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    });

    var txt_nodes = document.getElementsByClassName('txt');
    for (var i = 0; txt_nodes.length > i; i++) {
        txt_nodes[i].setAttribute('style', 'pointer-events: auto;');
    }
    var card_nodes = document.getElementsByClassName('card');
    for (var i = 0; card_nodes.length > i; i++) {
        card_nodes[i].setAttribute('style', 'pointer-events: auto;');
    }
};

var main = document.querySelector('.main');
main.addEventListener('click', function (event) {
    var clicked = event.target;

    if (clicked.classList.contains( 'txt' ) || ( 'card' ) ) {

        if (clicked.nodeName === 'SECTION' ||
            clicked.parentNode.classList.contains('main') ||
            clicked.parentNode.classList.contains('pojmovi') ||
            clicked.parentNode.classList.contains('main-left') ||
            clicked.parentNode.classList.contains('main-right') ||
            clicked.parentNode.classList.contains('timeGrid') ||
            clicked.parentNode.classList.contains('timeCard') ||
            clicked.parentNode.classList.contains('timeShow') ||
            clicked.parentNode.classList.contains('txt') ||
            
            clicked === previousTarget ||
            clicked.parentNode.classList.contains('selected') ||
            clicked.parentNode.classList.contains('match')) {
            return;
        }

        if (clicked.classList.contains('txt')) {
            var txt_nodes = document.getElementsByClassName('txt');

            for (var i = 0; txt_nodes.length > i; i++) {
                txt_nodes[i].setAttribute('style', 'pointer-events: none;');
            }
        }

        if (clicked.classList.contains('front')){
            var card_nodes = document.getElementsByClassName('card');

            for (var i = 0; card_nodes.length > i; i++) {
                card_nodes[i].setAttribute('style', 'pointer-events: none;');
            }
        }

        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
                moveCounter();
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }

            if (firstGuess && secondGuess) {

                if (firstGuess === secondGuess) {

                    setTimeout(match, delay);

                    matchCounter();
                }
                setTimeout(resetGuesses, delay);

            }
            // assign the clicked value to previousTarget after the first click
            previousTarget = clicked;
        }
    }
})

var moves = 0;
var counter = document.querySelector(".moves");
function moveCounter() {
    moves++;
    counter.innerHTML = moves;

    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}
var second = 0, minute = 0, hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute + ":" + second;
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}
var matchCount = 0;
var finalTime = 0;
var bingo = document.querySelector(".bingo");
var modal = document.getElementById("modal");
function matchCounter() {
    matchCount += 2;
    bingo.innerHTML = matchCount;

    if (matchCount === 12) {
        clearInterval(interval);
        finalTime = timer.innerHTML;
        congratulations();
    }

    function congratulations(){
        modal.style.display = "block";

        document.querySelector(".broj-pokusaja").innerHTML = moves;
        document.querySelector(".bodovi").innerHTML = matchCount;
        document.querySelector(".vrijeme-min").innerHTML = minute;
        document.querySelector(".vrijeme-sec").innerHTML = second;
        var oznaka = Array.from(document.querySelectorAll(".oznaka"));
        if (matchCount < moves) oznaka[0].style.display = "block";
        if (matchCount > moves ) oznaka[1].style.display = "block";
        if (matchCount === moves ) oznaka[2].style.display = "block";

        closeModal();
    }

    function closeModal(){
        var closeicon = document.querySelector(".close")
        closeicon.addEventListener("click", function(){
            modal.style.display = "none";
        });
    }
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// IE forEach fix
    if (!NodeList.prototype.forEach) {
        Object.defineProperty(NodeList.prototype, "forEach", {
            value: Array.prototype.forEach,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
}
window.onload = preLoad;

