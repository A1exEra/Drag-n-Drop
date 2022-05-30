"use strict";
const draggables = document.querySelectorAll(`.draggable`);
const containers = document.querySelectorAll(`.container`);
draggables.forEach((draggable) => {
  draggable.addEventListener(`dragstart`, (e) => {
    console.log(`Drag Start`);
    draggable.classList.add(`dragging`);
  });
  draggable.addEventListener(`dragend`, (e) => {
    draggable.classList.remove(`dragging`);
    console.log(`Drag End`);
  });
});
containers.forEach((container) => {
  container.addEventListener(`dragover`, (e) => {
    e.preventDefault();
    const draggable = document.querySelector(`.dragging`);
    console.log(`Drag Over`);
    container.append(draggable);
    // const afterElement = getDragAterElement(container, e.clientY);
    // console.log(afterElement);
    // if (afterElement == null) {
    //     container.append(draggable);
    // }
    // else {
    //   container.insertBefore(draggable, afterElement);
    // }
  });
});
/*
function getDragAterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(`.draggable:not(.dragging)`),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.top / 2;
      //   console.log(box);
      //   console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  );
}
*/
