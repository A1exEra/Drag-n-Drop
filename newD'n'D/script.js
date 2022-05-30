"use strict";
const container = document.querySelectorAll(`.container`);
const draggable = document.querySelectorAll(`.draggable`);
const dropzone = document.querySelector(`.dropzone`);
let clone;
draggable.forEach((el) => {
  el.addEventListener(`dragstart`, (e) => {
    console.log(`Drag Start`);
    clone = el.cloneNode(true);
    el.classList.add(`dragging`);
  });
  el.addEventListener(`dragend`, (e) => {
    e.preventDefault();
    console.log(`Drag End`);
    el.classList.remove(`dragging`);
  });
});
container.forEach((el) => {
  el.addEventListener(`dragover`, (e) => {
    e.preventDefault();
    console.log(`Drop Over`);
    const dragged = document.querySelector(`.dragging`);
    el.append(dragged);
  });
});
dropzone.addEventListener(`dragover`, (e) => {
  e.preventDefault();
  console.log(`Dropzone`);
  // const dragged = document.querySelector(`.dragging`);
  console.log(clone);
  dropzone.append(clone);
});
