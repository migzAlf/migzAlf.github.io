const image1 = document.getElementById("image1");
const imageContainer = document.getElementById("imageContainer");
const galleryNavContainer = document.getElementById("galleryNavContainer");

let imagesArray = [
  { name: "landscape1", imageSrc: "landscapes/landscape1.png" },
  { name: "landscape2", imageSrc: "landscapes/landscape2.png" },
  { name: "landscape3", imageSrc: "landscapes/landscape3.png" },
  { name: "landscape4", imageSrc: "landscapes/landscape4.png" },
  { name: "landscape5", imageSrc: "landscapes/landscape5.png" },
  { name: "landscape6", imageSrc: "landscapes/landscape6.png" },
];

let imagesElementArray = imagesArray.map((image, index) => {
  let temp = new Image();
  temp.src = image.imageSrc;
  temp.setAttribute("id", `image${index}`);
  return temp;
});

let galleryNavButtons = [];
let progressInterval;
let currentNavButton2;

imagesElementArray.forEach((image, index) => {
  imageContainer.appendChild(image);

  //create the button
  let navButton = document.createElement("div");
  navButton.classList.add("GNbutton");
  navButton.setAttribute("id", `GNbutton${index}`);

  navButton.onclick = () => {
    //set the current nav button to this
    currentNavButton2 = navButton;

    //goto image
    document.location.hash = `image${index}`;

    //focus on selected nav and increase width
    navButton.style.width = "3vw";

    //reset all nav button sizes
    galleryNavButtons.forEach((GNbutton) => {
      if (GNbutton.index != index) {
        GNbutton.element.style.width = null;
      }
    });

    //clear progressIntervals and progress barsfirst
    clearInterval(progressInterval);
    galleryNavButtons.forEach((gnb, indexGnb) => {
      [...gnb.element.children].forEach((gnbChild) => {
        gnbChild.remove();
      });
    });

    //check if the autoplay is paused, if not make and add progress bar
    if (!getGalleryNavControlOnPlay()) return;

    //make and add progress bar
    let progress = 0;
    let progressBar = document.createElement("div");

    galleryNavButtons[index].element.appendChild(progressBar);
    progressBar.classList.add("GNButtonProgress");
    progressInterval = setInterval(() => {
      if (progress == 100) {
        progressBar.remove();
        clearInterval(progressInterval);
        galleryNavButtons[
          index + 1 <= galleryNavButtons.length - 1 ? index + 1 : 0
        ].element.click();
      }
      progress += 1;
      progressBar.style.width = `${progress}%`;
    }, 50);
  };

  galleryNavButtons.push({ element: navButton, index });
  galleryNavContainer.appendChild(navButton);
});

//init nav buttons
galleryNavButtons[0].element.click();

// nav control
const galleryNavControl = document.getElementById("galleryNavControl");

galleryNavControl.onclick = () => {
  if (galleryNavControlOnPlay) {
    galleryNavControl.src = "icons1/pause.png";
    galleryNavControlOnPlay = false;
    clearInterval(progressInterval);
    return;
  }

  galleryNavControlOnPlay = true;
  currentNavButton2.click();
  galleryNavControl.src = "icons1/play.png";
};

function getGalleryNavControlOnPlay() {
  return galleryNavControlOnPlay;
}

//set default to pause to avoid panning to it
galleryNavControl.click();

//scroll check, if outside gallery pause autoplay
document.body.onscroll = () => {
  if (scrollY <= 2000) {
    if (getGalleryNavControlOnPlay()) {
      galleryNavControl.click();
    }
  }
};
