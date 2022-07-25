import "/src/styles/scss/index.scss";
// @ts-ignore
import dataSliders from "/data/data.json" assert { type: "json" };
const iconLike = require("/assets/likeIcon.svg");
const iconPlay = require("/assets/playArrow.svg");
const iconShare = require("/assets/shareArrow.svg");
const iconLeft = require("/assets/leftArrow.svg");
const iconRight = require("/assets/rightArrow.svg");
const mainBlock: HTMLElement = <HTMLElement>document.getElementById("main");
const COUNT_SLIDERS_VIEW = 3;
const listSliders: Array<string> = [];

const sliders: HTMLElement = document.createElement("div");
sliders.className = "sliders";
mainBlock.innerHTML += `<div class="slider__scrolling"><button class="slider__left">${iconLeft}</button></div>`;

let slider: string;
let divInfo:string;
for (const dataSlider of dataSliders) {
  const picture = require(`/assets/${dataSlider.imgName}`);

  if (dataSlider.moreInfo != '') {
    divInfo = `<div class="slider__info" id="slider__info">${dataSlider.moreInfo}</div>`;
  }else{
    divInfo='';
  }

  slider
    = `<div class="slider">
          <div class="slider__wrapper-hub">
          <div class="slider__wrapper-up"> 
          <img class="slider__picture" src="${picture}">       
          <div class="slider__control">  
              <div class="slider__btn">
                <button class="slider__like slider-icon slider-icon__sides">${iconLike}</button>
              </div>
              <div class="slider__btn">
                  <button class="slider__play slider-icon">${iconPlay}</button>
              </div>
              <div class="slider__btn">
                 <button class="slider__share slider-icon slider-icon__sides">${iconShare}</button>
              </div>
              ${divInfo}
          </div>
          </div>
          <div class="slider__wrapper-down">
            <h1 class="slider__title">${dataSlider.title}</h1>
            <p class="slider__description">${dataSlider.description}</p>
          </div>
        </div>
        </div>`;

  listSliders.push(slider);
}

for (let i = 0; i < COUNT_SLIDERS_VIEW; i++) {
  sliders.innerHTML += listSliders[i];
}
mainBlock.appendChild(sliders);
mainBlock.innerHTML += `<div class="slider__scrolling"><button class="slider__right">${iconRight}</button></div>`;

const blocksSlider: HTMLElement = <HTMLElement>document.querySelector(".sliders");

function countSliders(indexSlider: number) {
  blocksSlider.innerHTML = "";
  for (let i = COUNT_SLIDERS_VIEW - 1; i >= 0; i--) {

    if (listSliders[indexSlider - i] != undefined || (listSliders[indexSlider - i - 1] != null)) {
      blocksSlider.innerHTML += listSliders[indexSlider - i];
    } else {
      blocksSlider.innerHTML += listSliders[0];
    }
  }
}

const lenListSliders = listSliders.length;
let i = COUNT_SLIDERS_VIEW - 1;
const rightIcon: HTMLElement = <HTMLElement>document.getElementById("icon_right");

rightIcon.onclick = () => {
  i++;
  if (i < lenListSliders) {
    countSliders(i);
  } else {
    i = COUNT_SLIDERS_VIEW - 1;
    countSliders(i);
  }
};

const leftIcon: HTMLElement = <HTMLElement>document.getElementById("icon_left");
leftIcon.onclick = () => {
  i--;
  if (i < COUNT_SLIDERS_VIEW - 1) {
    i = lenListSliders - 1;
    countSliders(i);
  } else {
    countSliders(i);
  }
};
