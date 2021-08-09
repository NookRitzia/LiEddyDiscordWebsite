// JavaScript source code
const IMAGE_LOCATION = ["../../Shopping Page/Pictures/Red.png", "../../Shopping Page/Pictures/Orange.png", "../../Shopping Page/Pictures/Yellow.png",
    "../../Shopping Page/Pictures/Green.png", "../../Shopping Page/Pictures/Blue.png"];

const TITLE_TEXT = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

const PRICE = ["$250", "$250", "$250", "$250", "$250"];

const DESCRIPTION = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sit amet urna at auctor. Nam semper arcu congue, commodo nisl non, congue magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque eget sapien vitae vehicula. Proin eget placerat tortor. Maecenas posuere, arcu in aliquet convallis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, tortor ut venenatis viverra, sapien justo imperdiet urna, ut fringilla erat tellus vel purus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget lacus mauris. Pellentesque pharetra ac sem a ornare. In aliquam tristique ipsum sit amet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium sodales tortor eget tincidunt. Nullam sed interdum leo. Vivamus vulputate non dui id egestas."];

const IMAGE_ELEMENT = [document.getElementById("scrollImage1"), document.getElementById("scrollImage2"), document.getElementById("scrollImage3")];
const DIV_ELEMENT = [document.getElementById("scrollDiv1"), document.getElementById("scrollDiv2"), document.getElementById("scrollDiv3")];

const TITLE_DIV = [document.getElementById("imageTitle1"), document.getElementById("imageTitle2"), document.getElementById("imageTitle3")];
const PRICE_DIV = [document.getElementById("imagePrice1"), document.getElementById("imagePrice2"), document.getElementById("imagePrice3")];
const DESCRIPTION_DIV = [document.getElementById("imageDescription1"), document.getElementById("imageDescription2"), document.getElementById("imageDescription3")];


let imageIndex = 1;

let leftArrow = document.getElementById("LeftNavigationArrow");
let rightArrow = document.getElementById("RightNavigationArrow");

let indexDisplay = document.getElementById("IndexDisplay");




let dissapearAnimation = [{ opacity: 1, easing: 'ease-in' }, { opacity: 0.2, easing: 'ease-out' }];
let appearAnimation = [{ opacity: 0.2, easing: 'ease-in' }, { opacity: 1, easing: 'ease-in' }];

function hideImages(time) {
    for (let i = 0; i < IMAGE_ELEMENT.length; i++)
        IMAGE_ELEMENT[i].animate(dissapearAnimation, time);
}

function showImages(time) {
    for (let i = 0; i < IMAGE_ELEMENT.length; i++)
        IMAGE_ELEMENT[i].animate(appearAnimation, time);
}

function hideText(time) {
    for (let i = 0; i < TITLE_DIV.length; i++)
        TITLE_DIV[i].animate(dissapearAnimation, time);
    for (let i = 0; i < PRICE_DIV.length; i++)
        PRICE_DIV[i].animate(dissapearAnimation, time);
    for (let i = 0; i < DESCRIPTION_DIV.length; i++)
        DESCRIPTION_DIV[i].animate(dissapearAnimation, time);
}

function showText(time) {
    for (let i = 0; i < TITLE_DIV.length; i++)
        TITLE_DIV[i].animate(appearAnimation, time);
    for (let i = 0; i < PRICE_DIV.length; i++)
        PRICE_DIV[i].animate(appearAnimation, time);
    for (let i = 0; i < DESCRIPTION_DIV.length; i++)
        DESCRIPTION_DIV[i].animate(appearAnimation, time);
}


function updateIndexDisplay() {
    indexDisplay.innerHTML = "0" + imageIndex + "&ensp;/&ensp;05";
}

function updateText() {
    hideText(500);
    switch (imageIndex) {
        case 1:
            
            TITLE_DIV[0].innerHTML = TITLE_TEXT[4];
            TITLE_DIV[1].innerHTML = TITLE_TEXT[0];
            TITLE_DIV[2].innerHTML = TITLE_TEXT[1];

            PRICE_DIV[0].innerHTML = PRICE[4];
            PRICE_DIV[1].innerHTML = PRICE[0];
            PRICE_DIV[2].innerHTML = PRICE[1];

            DESCRIPTION_DIV[0].innerHTML = DESCRIPTION[4];
            DESCRIPTION_DIV[1].innerHTML = DESCRIPTION[0];
            DESCRIPTION_DIV[2].innerHTML = DESCRIPTION[1];
            break;
        case 5:
            TITLE_DIV[0].innerHTML = TITLE_TEXT[3];
            TITLE_DIV[1].innerHTML = TITLE_TEXT[4];
            TITLE_DIV[2].innerHTML = TITLE_TEXT[0];

            PRICE_DIV[0].innerHTML = PRICE[3];
            PRICE_DIV[1].innerHTML = PRICE[4];
            PRICE_DIV[2].innerHTML = PRICE[0];

            DESCRIPTION_DIV[0].innerHTML = DESCRIPTION[3];
            DESCRIPTION_DIV[1].innerHTML = DESCRIPTION[4];
            DESCRIPTION_DIV[2].innerHTML = DESCRIPTION[0];
            break;
        default:
            TITLE_DIV[0].innerHTML = TITLE_TEXT[imageIndex - 2];
            TITLE_DIV[1].innerHTML = TITLE_TEXT[imageIndex - 1];
            TITLE_DIV[2].innerHTML = TITLE_TEXT[imageIndex];

            PRICE_DIV[0].innerHTML = PRICE[imageIndex - 2];
            PRICE_DIV[1].innerHTML = PRICE[imageIndex - 1];
            PRICE_DIV[2].innerHTML = PRICE[imageIndex];

            DESCRIPTION_DIV[0].innerHTML = DESCRIPTION[imageIndex - 2];
            DESCRIPTION_DIV[1].innerHTML = DESCRIPTION[imageIndex - 1];
            DESCRIPTION_DIV[2].innerHTML = DESCRIPTION[imageIndex];
            break;
    }
    showText(500);
}

function updateAll() {
    updateImages();
    updateIndexDisplay();
    updateText();
}

function updateImages() {
    hideImages(500);
    switch (imageIndex) {
        case 1:
            IMAGE_ELEMENT[0].src = IMAGE_LOCATION[4];
            IMAGE_ELEMENT[1].src = IMAGE_LOCATION[0];
            IMAGE_ELEMENT[2].src = IMAGE_LOCATION[1];
            break;
        case 5:
            IMAGE_ELEMENT[0].src = IMAGE_LOCATION[3];
            IMAGE_ELEMENT[1].src = IMAGE_LOCATION[4];
            IMAGE_ELEMENT[2].src = IMAGE_LOCATION[0];
            break;
        default:
            IMAGE_ELEMENT[0].src = IMAGE_LOCATION[imageIndex - 2];
            IMAGE_ELEMENT[1].src = IMAGE_LOCATION[imageIndex - 1];
            IMAGE_ELEMENT[2].src = IMAGE_LOCATION[imageIndex];
            break;
    }
    showImages(500); 
}

leftArrow.onclick = () => {
    if (imageIndex != 1)
        imageIndex--;
    else
        imageIndex = 5;

    updateAll();
};

rightArrow.onclick = () => {
    if (imageIndex != 5)
        imageIndex++;
    else
        imageIndex = 1;

    updateAll();
}

updateAll();
