const divider = () => {
  const rightVideo = document.getElementById("rightVideo");
  const rightVideoWrapper = document.getElementById("rightVideoWrapper");

  const bodyElement = document.querySelector("body");
  const divElement = document.querySelector(".divider");
  const docWidth = bodyElement.getBoundingClientRect().width;
  divElement.style.left = bodyElement.getBoundingClientRect().width / 2 + "px";

  var oldPos = 0,
    newPos = 0;
  // divElement.onmousedown = (e) => {
  //   e = e || window.event;
  //   e.preventDefault();
  //   // get the mouse cursor position at startup:
  //   oldPos = e.clientX;
  //   document.onmouseup = closeDragElement;
  //   // call a function whenever the cursor moves:
  //   document.onmousemove = elementDrag;
  // };
  divElement.onpointerdown = (e) => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    oldPos = e.clientX;
    document.onpointerup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onpointermove = elementDrag;
  };

  const elementDrag = (e) => {
    e = e || window.event;

    // e.preventDefault();
    newPos = oldPos - e.clientX;
    oldPos = e.clientX;
    console.log(e.pageX);
    position = (e.pageX / window.innerWidth) * 100;
    // console.log(e);
    if (position > 1.5 && position < 98) {
      divElement.style.left = divElement.offsetLeft - newPos + "px";

      rightVideoWrapper.style.width = e.clientX + "px";
      rightVideo.style.width = (100 / position) * 100 + "%";
    }
  };
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

    document.onpointerup = null;
    document.onpointermove = null;
  }
};
window.addEventListener("load", divider);
