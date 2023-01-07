// start our gallery

// create popup with imge
// get image in array
let ourGallery = document.querySelectorAll(".gallry .box img");
console.log(ourGallery);
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    // create the popup
    let popupBox = document.createElement("div");

    popupBox.className = "popup-box";

    // add alternative text
    if (img.alt !== null) {
      // create close span
      let closeSpan = document.createElement("span");

      // create close text
      let close = document.createTextNode("X");

      closeSpan.appendChild(close);

      closeSpan.className = "close-btn";

      popupBox.appendChild(closeSpan);
    }

    // create img
    let popupImg = document.createElement("img");

    // set src of img
    popupImg.src = img.src;

    popupBox.appendChild(popupImg);

    document.body.appendChild(popupBox);
  });
});
//  close popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-btn") {
    e.target.parentNode.remove();

    // remove overlay
    // anthor way to rmove
    document.querySelector(".popup-overlay").remove();
  }
});
