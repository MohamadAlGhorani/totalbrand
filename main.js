var articles = document.querySelectorAll('section article');


// function getRandomColor() {
//     // var letters = '0123456789ABCDEF';
//     // var color = '#';
//     // for (var i = 0; i < 6; i++) {
//     //     color += letters[Math.floor(Math.random() * 16)];
//     // }
//     var colors = ['#000000', '#ec002f', '#F45B69']
//     var nummerBlok = Math.floor(Math.random() * 3);
//     var color = colors[nummerBlok];
//     return color;
// }


// function clickTimer() {
//     for (var i = 0; i < articles.length; i++) {
//         articles[i].lastElementChild.remove();
//         var divs = document.createElement('div');
//         var classes = ['triangle', 'circle', 'square', 'up-tringle', 'left-tringle', 'right-tringle', 'right-up-tringle', 'left-up-tringle', 'right-left-tringle', 'left-right-tringle', 'half-circle', 'half-left-circle', 'bottom-left-circle', 'bottom-right-circle', 'bottom-circle', 'top-circle', 'right-circle', 'left-circle', 'bottom-half-circle', 'top-half-circle', 'right-half-circle', 'left-half-circle'];
//         var classNumber = Math.floor(Math.random() * 22);
//         divs.classList.add(classes[classNumber]);
//         divs.dataset.classnr = classNumber;
//         // var nummer = Math.floor(Math.random() * 51);
//         // divs.style.borderRadius = nummer + '%';
//         // divs.addEventListener("click", clickMe);
//         articles[i].addEventListener("click", clickMe);
//         divs.addEventListener("mouseover", setColor);
//         var colors = ['#000000', '#ec002f', '#F45B69']
//         var nummerBlok = Math.floor(Math.random() * 3);
//         var color = colors[nummerBlok];
//         // divs.style.background = getRandomColor();
//         divs.style.background = color;
//         divs.dataset.colornr = nummerBlok;
//         articles[i].appendChild(divs);
//     }
// }

for (var i = 0; i < articles.length; i++) {
    var divs = document.createElement('div');
    var classes = ['triangle', 'circle', 'square', 'up-tringle', 'left-tringle', 'right-tringle', 'right-up-tringle', 'left-up-tringle', 'right-left-tringle', 'left-right-tringle', 'half-circle', 'half-left-circle', 'bottom-left-circle', 'bottom-right-circle', 'bottom-circle', 'top-circle', 'right-circle', 'left-circle', 'bottom-half-circle', 'top-half-circle', 'right-half-circle', 'left-half-circle'];
    var classNumber = Math.floor(Math.random() * 22);
    if (articles[i].className == '') articles[i].classList.add(classes[classNumber]);
    divs.dataset.classnr = classNumber;
    // var nummer = Math.floor(Math.random() * 51);
    // divs.style.borderRadius = nummer + '%';
    // divs.addEventListener("click", clickMe);
    articles[i].addEventListener("click", clickMe);
    divs.addEventListener("mouseover", setColor);
    var colors = ['#000000', '#ec002f', '#F45B69']
    var nummerBlok = Math.floor(Math.random() * 3);
    var color = colors[nummerBlok];
    // divs.style.background = getRandomColor();
    divs.style.background = color;
    divs.dataset.colornr = nummerBlok;
    articles[i].appendChild(divs);
}

var timer = setInterval(timerf, 2000);


function timerf() {
    // articles[i].firstChild.className = '';
    // var classes = ['triangle', 'circle', 'square', 'up-tringle', 'left-tringle', 'right-tringle', 'right-up-tringle', 'left-up-tringle', 'right-left-tringle', 'left-right-tringle', 'half-circle', 'half-left-circle', 'bottom-left-circle', 'bottom-right-circle', 'bottom-circle', 'top-circle', 'right-circle', 'left-circle', 'bottom-half-circle', 'top-half-circle', 'right-half-circle', 'left-half-circle'];
    // var classNumber = Math.floor(Math.random() * 22);
    // var articlenr = Math.floor(Math.random() * 34);
    // articles[articlenr].firstChild.classList.add(classes[classNumber]);
    // // divs[i].dataset.classnr = classNumber;
    // // var nummer = Math.floor(Math.random() * 51);
    // // divs.style.borderRadius = nummer + '%';
    // // divs.addEventListener("click", clickMe);
    // var colors = ['#000000', '#ec002f', '#F45B69']
    // var nummerBlok = Math.floor(Math.random() * 3);
    // var color = colors[nummerBlok];
    // // divs.style.background = getRandomColor();
    // articles[i].lastElementChild.style.background = color;
    // // divs[i].dataset.colornr = nummerBlok;
    var articlenr = Math.floor(Math.random() * 34);
    articles[articlenr].click();
}

function clickMe(ev) {
    // var nummer = Math.floor(Math.random() * 51);
    // this.style.transform = 'rotateY(' + 180 + 'deg)';
    // this.style.borderRadius = nummer + '%';
    var classes = ['circle', 'square', 'up-tringle', 'left-tringle', 'left-right-tringle', 'left-up-tringle', 'triangle', 'right-tringle', 'right-up-tringle', 'right-left-tringle', 'half-circle', 'half-left-circle', 'bottom-left-circle', 'bottom-right-circle', 'bottom-circle', 'top-circle', 'right-circle', 'left-circle', 'bottom-half-circle', 'top-half-circle', 'right-half-circle', 'left-half-circle'];
    i = Number(this.lastElementChild.dataset.classnr) + 1;
    if (i >= classes.length) i = 0;
    this.className = '';
    this.classList.add(classes[i]);
    this.querySelector('div').dataset.classnr = i;
    if (ev.isTrusted) {
        clearInterval(timer);
    }

    // var classNumber = Math.floor(Math.random() * 3);
    // if (this.classList.contains('triangle')) {
    //     this.classList.remove('triangle');
    //     this.classList.add('circle');
    // } else if (this.classList.contains('circle')) {
    //     this.classList.remove('circle');
    //     this.classList.add('square');
    // } else {
    //     this.classList.remove('square');
    //     this.classList.add('triangle');
    // }
}

function setColor() {
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    var colors = ['#000000', '#ec002f', '#F45B69'];
    i = Number(this.dataset.colornr) + 1;

    if (i >= colors.length) i = 0;
    this.style.background = colors[i];
    this.dataset.colornr = i;
}