
const obzor = Array.from(document.getElementsByClassName("obzor"));
const karta = Array.from(document.getElementsByClassName("karta"));
const kompas = Array.from(document.getElementsByClassName("kompas"));
const vjetar = Array.from(document.getElementsByClassName("vjetar"));
const nizina = Array.from(document.getElementsByClassName("nizina"));
const razv = Array.from(document.getElementsByClassName("razv"));
const zem = Array.from(document.getElementsByClassName("zem"));
const bodovi = document.querySelector(".bodovi");
const postoci = document.querySelector(".postoci");
const modal = document.getElementById("modal");
const ocjena = document.querySelector(".ocjena");
const btnG1 = document.querySelector(".btn-g1");
const btnG2 = document.querySelector(".btn-g2");
const btnG3 = document.querySelector(".btn-g3");
const btnG4 = document.querySelector(".btn-g4");
const btnL1 = document.querySelector(".btn-l1");
const btnL2 = document.querySelector(".btn-l2");
const btnL3 = document.querySelector(".btn-l3");
const unesi1 = document.querySelector(".unesi1");
const unesi2 = document.querySelector(".unesi2");
const submn = document.getElementById("submit");
const button = document.querySelectorAll("form a.button");

let counter = 0;

const submitFunction = () => {

    if (vjetar[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG1.appendChild(ne);
    };
    if (karta[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG2.appendChild(ne);
    };
    if (kompas[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG3.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG3.appendChild(ne);
    };
    if (obzor[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG4.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG4.appendChild(ne);
    };
    if (nizina[2].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL1.appendChild(ne);
    };
    if (razv[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL2.appendChild(ne);
    };
    if (zem[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL3.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL3.appendChild(ne);
    };

    const obvText1 = document.querySelector(".obv-text1");
    const orijent = document.querySelector(".orijent").value;
    const ori = orijent.replace(/\s+/g, '').toLowerCase();
    const tlocrt = document.querySelector(".tlocrt").value;
    const tlo = tlocrt.replace(/\s+/g, '').toLowerCase();

    if (ori === "orijentacija") {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        unesi1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        unesi1.appendChild(ne);
    };

    if (tlo === "tlocrt") {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        unesi2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        unesi2.appendChild(ne);
    };


    console.log(counter);
}

const con = () => {
    modal.style.display = "block";
    bodovi.innerHTML = counter;
    let post = counter / 9 * 100;
    post = Math.round(post) / 1;
    postoci.innerHTML = post;
    if(post < 50) ocjena.innerHTML = "Niste osvojili dovoljno bodova. Još vježbati pojmove.";
    if(post >= 50 && post < 64) ocjena.innerHTML = "vaša ocjena je 2";
    if(post >= 64 && post < 76) ocjena.innerHTML = "vaša ocjena je 3";
    if(post >= 76 && post < 88) ocjena.innerHTML = "vaša ocjena je 4";
    if(post >= 88 && post < 100) ocjena.innerHTML = "BRAVO!!! Vaša ocjena je 5";

    submn.style.display = "none";
    button.forEach( function(item) {
        item.style.display = "inline-block";
    });
    
    closeModal();
}
const closeModal = () => {
    const closeicon = document.querySelectorAll(".clo");
    closeicon.forEach(function () {
        this.addEventListener("click", function(){
            modal.style.display = "none";
        });
    })

}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const submitDisable = () => {
    submn.disabled = true;
    submn.style.opacity = "0.6";
}




