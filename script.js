function changeColor(event) {
    el.setAttribute('style', 'animation: argh-my-eyes 0.1s infinite');
    fstr.setAttribute('style', 'visibility: hidden');
    btn.setAttribute('style', 'visibility: visible');
}

function moveElmRand(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

btn_test.addEventListener("mouseenter", function(e) { moveElmRand(e.target); });
btn_test.addEventListener("click", function(e) { alert("you are good"); });

addEventListener('click', createBox);

function createBox(event) {
    img.src = 'img/x.png';
    img.className = 'box';
    img.style.left = event.pageX + 'px';
    img.style.top = event.pageY + 'px';
    document.body.appendChild(img);

    click = click + 1
    document.getElementById("misstest").innerHTML = "MISSCLICKS: " + click;
    clicks.push({ time: Date.now(), amount: 1 });

    if (click == 7) {
        ad.setAttribute('style', 'visibility: visible');
        window.alert("zet je volume op maximum")
    }

    if (click == 13) {
        adtw.setAttribute('style', 'visibility: visible');
        window.alert("WEL ECHT DOEN HE?")
    }

    if (click == 19) {
        adtr.setAttribute('style', 'visibility: visible');
    }

    if (click == 25) {
        adfr.setAttribute('style', 'visibility: visible');
    }

    if (click == 33) {
        adfv.setAttribute('style', 'visibility: visible');
    }

    if (click == 39) {
        adsx.setAttribute('style', 'visibility: visible');
    }

    if (click == 45) {
        adsv.setAttribute('style', 'visibility: visible');
    }

    if (click == 51) {
        adeg.setAttribute('style', 'visibility: visible');
       
    }

    if (click == 58) {
        adnn.setAttribute('style', 'visibility: visible');
    }

    if (click == 64) {
        adtn.setAttribute('style', 'visibility: visible');
    }

    if (click == 70) {
        adel.setAttribute('style', 'visibility: visible');
        window.alert("laatste waarschuwing om je geluid aan te doen")
    }

    if (click == 77) {
        adtv.setAttribute('style', 'visibility: visible');
    }

    if (click == 83) {
        adth.setAttribute('style', 'visibility: visible');
    }

    if (click == 88) {
        adft.setAttribute('style', 'visibility: visible');
    }

    if (click == 93) {
        advt.setAttribute('style', 'visibility: visible');
    }

    if (click == 100) {
        ad.setAttribute('style', 'visibility: hidden');
        adtw.setAttribute('style', 'visibility: hidden');
        adtr.setAttribute('style', 'visibility: hidden');
        adfr.setAttribute('style', 'visibility: hidden');
        adfv.setAttribute('style', 'visibility: hidden');
        adsx.setAttribute('style', 'visibility: hidden');
        adsv.setAttribute('style', 'visibility: hidden');
        adeg.setAttribute('style', 'visibility: hidden');
        adnn.setAttribute('style', 'visibility: hidden');
        adtn.setAttribute('style', 'visibility: hidden');
        adel.setAttribute('style', 'visibility: hidden');
        adtv.setAttribute('style', 'visibility: hidden');
        adth.setAttribute('style', 'visibility: hidden');
        adft.setAttribute('style', 'visibility: hidden');
        advt.setAttribute('style', 'visibility: hidden');
        alert("Je hebt de button niet geklikt!");
        click = 0;
        window.open("https://www.youtube.com/watch?v=j1XlqTwmFx4")
    }
}
document.getElementById("misstest").innerHTML = "MISSCLICKS: " + click;

function clickReset() {
    click = 0
}