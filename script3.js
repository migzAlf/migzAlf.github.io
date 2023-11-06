const firstSection = document.getElementById("section1");
const secondSection = document.getElementById("section2");

const eceLogo = document.getElementById("eceLogo");

const portfolioInfoContainerTextWrapper = document.getElementById(
  "portfolioInfoContainerTextWrapper"
);

const portfolioNavNameText = document.getElementById("portfolioNavNameText");
const portFolioPortraitImage = document.getElementById(
  "portFolioPortraitImage"
);
const portfolioDescriptionWrapper = document.getElementById(
  "portfolioDescriptionWrapper"
);

const portfolioNavContainer = document.getElementById("portfolioNavContainer");

const profileSlider = document.getElementById("profileSlider");

const [
  portfolioNavButton1,
  portfolioNavButton2,
  portfolioNavButton3,
  portfolioNavButton4,
] = [
  document.getElementById("portfolioNavButton1"),
  document.getElementById("portfolioNavButton2"),
  document.getElementById("portfolioNavButton3"),
  document.getElementById("portfolioNavButton4"),
];

const [pnbc1, pnbc2, pnbc3, pnbc4] = [
  document.getElementById("pnbc1"),
  document.getElementById("pnbc2"),
  document.getElementById("pnbc3"),
  document.getElementById("pnbc4"),
];

const navButtons = [pnbc1, pnbc2, pnbc3, pnbc4];

let currentNavButton = pnbc1;

const [s1pnbc1, s1pnbc2, s1pnbc3, s1pnbc4, s1pnbc5, s1pnbc6, s1pnbc7] = [
  document.getElementById("s1pnbc1"),
  document.getElementById("s1pnbc2"),
  document.getElementById("s1pnbc3"),
  document.getElementById("s1pnbc4"),
  document.getElementById("s1pnbc5"),
  document.getElementById("s1pnbc6"),
  document.getElementById("s1pnbc7"),
];

let profileSliderItems = [
  s1pnbc1,
  s1pnbc2,
  s1pnbc3,
  s1pnbc4,
  s1pnbc5,
  s1pnbc6,
  s1pnbc7,
];

let currentProfileSliderItem;

let [PSI1, PSI2, PSI3, PSI4, PSI5, PSI6, PSI7] = [
  document.getElementById("PSI1"),
  document.getElementById("PSI2"),
  document.getElementById("PSI3"),
  document.getElementById("PSI4"),
  document.getElementById("PSI5"),
  document.getElementById("PSI6"),
  document.getElementById("PSI7"),
];

let PSIarray = [PSI1, PSI2, PSI3, PSI4, PSI5, PSI6, PSI7];

//color doms
const nameDivider = document.getElementById("nameDivider");
const projectTitle = document.getElementById("projectTitle");
const portfolioInfoContainerVerticalLine = document.getElementById(
  "portfolioInfoContainerVerticalLine"
);

const socmedLinks = [{
  "name": "Pastrana",
  "facebook": "https://www.facebook.com/vonjerome.cruz.1",
  "linkedin": "https://www.linkedin.com/in/vonjeromecruz/",
  "slack": "https://bootswagonorg.slack.com/team/U0649CPQ3EE"
},
{
  "name": "Ballesterps",
  "facebook": "https://www.facebook.com/miggyalf",
  "linkedin": "https://www.linkedin.com/in/miguel-alfonso-ballesteros-818769232/",
  "slack": "https://bootswagonorg.slack.com/team/U063US3QDCP"
},{
  "name": "Jacinto",
  "facebook": "https://facebook.com/thdeus12",
  "linkedin": "https://www.linkedin.com/in/marcus-thadeus-jacinto-101091288",
  "slack": "https://bootswagonorg.slack.com/team/U0642PAUQTY"
},{
  "name": "Espiritu",
  "facebook": "https://www.facebook.com/kiel.espiritu.3?mibextid=ZbWKwL",
  "linkedin": "https://www.linkedin.com/in/ezekiel-espiritu-11a003289",
  "slack": "https://bootswagonorg.slack.com/team/U0642PAUQTY"
},

{
  "name": "Cruz",
  "facebook": "https://www.facebook.com/vonjerome.cruz.1",
  "linkedin": "https://www.linkedin.com/in/vonjeromecruz/",
  "slack": "https://bootswagonorg.slack.com/team/U0649CPQ3EE"
}
,{
  "name": "Macbante",
  "facebook": "https://www.facebook.com/joshlerwin05/",
  "linkedin": "www.linkedin.com/in/joshlerwin05    ",
  "slack": "https://bootswagonorg.slack.com/team/U063US8GJ4F                               "
},{
  "name": "Deguzman",
  "facebook": "https://www.facebook.com/buen.deguzman.1?mibextid=ZbWKwL",
  "linkedin": "https://www.linkedin.com/in/buen-deguzman-26535429a?trk=contact-info",
  "slack": "https://bootswagonorg.slack.com/team/U063US8GJ4F"
}]

const socmedWrapper = document.getElementById("socmedWrapper");

const [facebookDiv, linkedInDiv, slackDiv] = [document.getElementById("SMI1"), document.getElementById("SMI2"), document.getElementById("SMI3")]


const socmedItems = [facebookDiv, linkedInDiv, slackDiv]

portraitImage2.onclick = () => {
  //switch to section 2
  secondSection.style.display = "flex";
  firstSection.style.display = "none";

  //set nav bar name and portrait image
  portfolioNavNameText.textContent =
    membersFull[currentPortraitSlot.second].name;
  portFolioPortraitImage.src = members[currentPortraitSlot.second].imageSrc;

  //set professional summary
  clearPortfolioInfoContainerTextWrapperChildren();
  PICTWappend(createh2("PROFESSIONAL SUMMARY"));
  PICTWappend(PDWappend(createh3(getCurrentMember().professionalSummary)));

  //set nav button colors
  pnbc1.setAttribute("fill", members[currentPortraitSlot.second].color);
  clearNavButtonColor(pnbc1);

  //set profile slider item button colors
  profileSliderItems[currentPortraitSlot.second].setAttribute(
    "fill",
    members[currentPortraitSlot.second].color
  );
  currentProfileSliderItem = profileSliderItems[currentPortraitSlot.second];
  clearSliderButtonColor(currentProfileSliderItem);

  //prevent initial animation at PICT
  portfolioInfoContainerTextWrapper.style.animation = "none";

  //display profileSlider
  profileSlider.style.display = "flex";

  //change theme
  projectTitle.style.color = members[currentPortraitSlot.second].color;
  portfolioInfoContainerVerticalLine.style.backgroundColor =
    members[currentPortraitSlot.second].color;

  //change theme - texts
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    if (element.tagName == "H2") {
      element.style.color = members[currentPortraitSlot.second].color;
    }
  });

  //change text highlighting rule
  changeHighlightColorPortfolioInfo(members[currentPortraitSlot.second].color);

  //disable project title and display socmed links
  projectTitle.style.display = "none";
  socmedWrapper.style.display = "flex";

  //set socmed items link to selected person
  facebookDiv.onclick = () => {
    window.open(socmedLinks[currentPortraitSlot.second].facebook,'_blank')
  }

  linkedInDiv.onclick = () => {
    window.open(socmedLinks[currentPortraitSlot.second].linkedin,
      "_blank")
  }

  slackDiv.onclick = () => {
    window.open(socmedLinks[currentPortraitSlot.second].slack,'_blank')
  }

   // add hover color based on person selected color
   socmedItems.forEach(socmedItem => {
    console.log(socmedItem)
    socmedItem.onmouseenter = () => {
      socmedItem.children[0].children[0].setAttribute("fill", members[currentPortraitSlot.second].color)
    }

    socmedItem.onmouseleave = () => {
      socmedItem.children[0].children[0].setAttribute("fill", "#D9D9D9")
    }
  })
};

PSIarray.forEach((PSI, index) => {
  PSI.onclick = () => {
    if (currentProfileSliderItem == profileSliderItems[index]) return;

    currentProfileSliderItem = profileSliderItems[index];

    if (currentPortraitSlot.second != index) {
      currentPortraitSlot.second = index;
      currentPortraitSlot.first = decrementSlider(
        currentPortraitSlot.second,
        7
      );
      currentPortraitSlot.third = incrementSlider(
        currentPortraitSlot.second,
        7
      );
    }

    //set professional summary
    clearPortfolioInfoContainerTextWrapperChildren();
    PICTWappend(createh2("PROFESSIONAL SUMMARY"));
    PICTWappend(PDWappend(createh3(getCurrentMember().professionalSummary)));

    //set nav bar name and portrait image
    portfolioNavNameText.textContent =
      membersFull[currentPortraitSlot.second].name;
    portFolioPortraitImage.src = members[currentPortraitSlot.second].imageSrc;

    //set nav button colors
    pnbc1.setAttribute("fill", members[currentPortraitSlot.second].color);
    clearNavButtonColor(pnbc1);

    //set slider button
    clearSliderButtonColor(profileSliderItems[index]);
    profileSliderItems[index].setAttribute(
      "fill",
      members[currentPortraitSlot.second].color
    );

    //set profile slider item button colors
    profileSliderItems[currentPortraitSlot.second].setAttribute(
      "fill",
      members[currentPortraitSlot.second].color
    );
    currentProfileSliderItem = profileSliderItems[currentPortraitSlot.second];

    //reanimate second section
    reanimateSection2();

    //reanimate nav bar
    reanimateNavBar();

    //reset current nav button
    currentNavButton = pnbc1;

    //reanimate portrait
    reanimatePortrait();

    //reanimate portfolio text
    reanimatePortfolioInfoContainerTextWrapper();

    //reset font size
    portfolioInfoContainerTextWrapper.style.fontSize = null;

    //change theme
    projectTitle.style.color = members[currentPortraitSlot.second].color;
    portfolioInfoContainerVerticalLine.style.backgroundColor =
      members[currentPortraitSlot.second].color;

    //change theme - texts
    [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
      if (element.tagName == "H2") {
        element.style.color = members[currentPortraitSlot.second].color;
      }
    });

    //add text highlighting css rule
    changeHighlightColorPortfolioInfo(
      members[currentPortraitSlot.second].color
    );

    //change section1 roullete pictures and text
    changeImage(portraitImage1, members[currentPortraitSlot.first].imageSrc);
    changeImage(portraitImage2, members[currentPortraitSlot.second].imageSrc);
    changeImage(portraitImage3, members[currentPortraitSlot.third].imageSrc);

    changeText(portraitName1, members[currentPortraitSlot.first].name);
    changeText(portraitName2, members[currentPortraitSlot.second].name);
    changeText(portraitName3, members[currentPortraitSlot.third].name);

    // reanimate socmed div
    reanimateSocmedWrapper();
  };
});

eceLogo.onclick = () => {
  //switch to section 1
  firstSection.style.display = "grid";
  secondSection.style.display = "none";

  //hide profileSlider
  profileSlider.style.display = "none";

  //reset current nav button
  currentNavButton = pnbc1;

  //reset profile slider color
  clearSliderButtonColor();

  //reset font size to description
  portfolioInfoContainerTextWrapper.style.fontSize = null;

  //reset project title color
  projectTitle.style.color = "white";

  //reset text highlighting rule
  deleteCustomStyleSheetRule();

  //disable socmed links and display project
  socmedWrapper.style.display = "none";
  projectTitle.style.display = "flex";
};

function reanimatePortrait() {
  portFolioPortraitImage.style.animation = "none";
  portFolioPortraitImage.offsetHeight;
  portFolioPortraitImage.style.animation = null;
}

function reanimateNavBar() {
  portfolioNavContainer.style.animation = "none";
  portfolioNavContainer.style.transform = "translate(-20vw)";
  portfolioNavContainer.offsetHeight;
  portfolioNavContainer.style.animation = null;
}

function reanimateSection2() {
  secondSection.style.animation = "none";
  secondSection.offsetHeight;
  secondSection.style.animation = null;
}

function reanimateSocmedWrapper () {
  socmedWrapper.style.animation = "none";
  socmedWrapper.offsetHeight;
  socmedWrapper.style.animation = null;
 }
function reanimatePortfolioInfoContainerTextWrapper() {
  portfolioInfoContainerTextWrapper.style.animation = "none";
  portfolioInfoContainerTextWrapper.offsetHeight;
  portfolioInfoContainerTextWrapper.style.animation = null;
}

function createElem(element) {
  return document.createElement(element);
}
function createh2(text) {
  let elem = createElem("h2");
  elem.textContent = text;
  return elem;
}
function createh3(text) {
  let elem = createElem("h3");
  elem.textContent = text;
  return elem;
}
function createh4(text) {
  let elem = createElem("h4");
  elem.textContent = text;
  return elem;
}
function createUL(list) {
  let elem = createElem("ul");
  list.forEach((item) => {
    let li = createElem("li");
    li.textContent = item;
    elem.appendChild(li);
  });
  return elem;
}

function clearPortfolioInfoContainerTextWrapperChildren() {
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    element.remove();
  });

  [...PDWElement.children].forEach((element) => {
    element.remove();
  });
}

function PICTWappend(element) {
  portfolioInfoContainerTextWrapper.appendChild(element);
}

let PDWElement = createElem("div");
PDWElement.classList.add("portfolioDescriptionWrapper");

function PDWappend(element) {
  PDWElement.appendChild(element);
  return PDWElement;
}

function getCurrentMember() {
  return membersFull[currentPortraitSlot.second];
}

function clearNavButtonColor(excludeButton) {
  navButtons.forEach((navButton) => {
    if (navButton == excludeButton) return;
    navButton.setAttribute("fill", "#D9D9D9");
  });
}
function clearSliderButtonColor(excludeButton) {
  profileSliderItems.forEach((sliderButton) => {
    if (sliderButton == excludeButton) return;
    sliderButton.setAttribute("fill", "#D9D9D9");
  });
}

function checkIfCurrentButton(button) {
  return button == currentNavButton;
}

function deleteCustomStyleSheetRule() {
  try {
    customCSSsheet.sheet.deleteRule(0);
    customCSSsheet.sheet.deleteRule(1);
    customCSSsheet.sheet.deleteRule(2);
    customCSSsheet.sheet.deleteRule(3);
    customCSSsheet.sheet.deleteRule(4);
    customCSSsheet.sheet.deleteRule(5);
  } catch (e) {}
}

function changeHighlightColorPortfolioInfo(color) {
  deleteCustomStyleSheetRule();
  customCSSsheet.sheet.insertRule(
    `h1::selection {background-color: ${color};}`,
    0
  );

  customCSSsheet.sheet.insertRule(
    `h2::selection {background-color: ${color};}`,
    1
  );
  customCSSsheet.sheet.insertRule(
    `h3::selection {background-color: ${color};}`,
    2
  );

  customCSSsheet.sheet.insertRule(
    `h4::selection {background-color: ${color};}`,
    3
  );
  customCSSsheet.sheet.insertRule(
    `ul::selection {background-color: ${color};}`,
    4
  );

  customCSSsheet.sheet.insertRule(
    `li::selection {background-color: ${color};}`,
    5
  );
}

//portfolioInfoContainerTextWrapper

// portfolioNavButton1 -> Professional Summary
portfolioNavButton1.onclick = () => {
  if (checkIfCurrentButton(pnbc1)) return;
  currentNavButton = pnbc1;

  clearPortfolioInfoContainerTextWrapperChildren();
  reanimatePortfolioInfoContainerTextWrapper();

  pnbc1.setAttribute("fill", members[currentPortraitSlot.second].color);

  clearNavButtonColor(pnbc1);

  PICTWappend(createh2("PROFESSIONAL SUMMARY"));
  PICTWappend(PDWappend(createh3(getCurrentMember().professionalSummary)));

  portfolioInfoContainerTextWrapper.style.fontSize = null;

  //change theme - texts
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    if (element.tagName == "H2") {
      element.style.color = members[currentPortraitSlot.second].color;
    }
  });
};

// portfolioNavButton2 -> Education
portfolioNavButton2.onclick = () => {
  if (checkIfCurrentButton(pnbc2)) return;
  currentNavButton = pnbc2;

  clearPortfolioInfoContainerTextWrapperChildren();
  reanimatePortfolioInfoContainerTextWrapper();

  pnbc2.setAttribute("fill", members[currentPortraitSlot.second].color);

  clearNavButtonColor(pnbc2);

  PICTWappend(createh2("EDUCATION"));
  PDWappend(createh2("COLLEGE"));
  PDWappend(createh3(getCurrentMember().education.college));
  PDWappend(createh4("Bachelor of Science in Electronics Engineering"));
  PDWappend(createh2("SENIOR HIGHSCHOOL"));
  PDWappend(createh3(getCurrentMember().education.highschool));
  PDWappend(createh4("STEM Strand"));

  PICTWappend(PDWElement);

  portfolioInfoContainerTextWrapper.style.fontSize = null;

  //change theme - texts
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    if (element.tagName == "H2") {
      element.style.color = members[currentPortraitSlot.second].color;
    }
  });
};

// trainingandseminars: [
//   {
//     name: "Basic First-Aid and Rescue Tranining",
//     description: [
//       "Participated in First-Aid and Life Support Training as a part of the NSTP Curriculum",
//     ],
//   },
//   {
//     name: "Student Reporters' Summit",
//     description: [
//       "Attended training for aspiring student reporter that may be tapped by news networks for correspondence",
//     ],
//   },
// ]

// portfolioNavButton3 -> Seminars
portfolioNavButton3.onclick = () => {
  if (checkIfCurrentButton(pnbc3)) return;
  currentNavButton = pnbc3;

  clearPortfolioInfoContainerTextWrapperChildren();
  reanimatePortfolioInfoContainerTextWrapper();

  pnbc3.setAttribute("fill", members[currentPortraitSlot.second].color);

  clearNavButtonColor(pnbc3);

  PICTWappend(createh2("TRAINING AND SEMINARS"));
  getCurrentMember().trainingandseminars.forEach((seminar) => {
    PDWappend(createh3(seminar.name));
    PDWappend(createUL(seminar.description));
  });
  PICTWappend(PDWElement);

  portfolioInfoContainerTextWrapper.style.fontSize = null;

  //change theme - texts
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    if (element.tagName == "H2") {
      element.style.color = members[currentPortraitSlot.second].color;
    }
  });
};

// awards: [
//   {
//     name: "Award of Citation - Senior High School STEM",
//     description:
//       "Outstanding Performance in the Application of Information Technology",
//   },
//   {
//     name: "Best Group in Research - Senior High School STEM",
//     description: "Outstanding Research",
//   },
//   {
//     name: "With honors - Senior High School STEM",
//     description: "Graduated with Honors",
//   },
// ],

// portfolioNavButton4 -> awards/extracurriculars
portfolioNavButton4.onclick = () => {
  if (checkIfCurrentButton(pnbc4)) {
    return;
  }
  currentNavButton = pnbc4;

  clearPortfolioInfoContainerTextWrapperChildren();
  reanimatePortfolioInfoContainerTextWrapper();

  pnbc4.setAttribute("fill", members[currentPortraitSlot.second].color);
  clearNavButtonColor(pnbc4);

  let categoryCount = 0;

  if (getCurrentMember().awards.length != 0) {
    PICTWappend(createh2("AWARDS AND CERTIFICATES"));

    getCurrentMember().awards.forEach((award) => {
      PICTWappend(createh3(award.name));
      PICTWappend(createh4(award.description));
    });

    categoryCount++;
  }

  if (getCurrentMember().extracurricular != 0) {
    PICTWappend(createh2("EXTRACURRICULAR"));

    getCurrentMember().extracurricular.forEach((extracurricular1) => {
      PDWappend(createh3(extracurricular1.name));
      PDWappend(createUL(extracurricular1.description));
    });

    categoryCount++;
  }
  PICTWappend(PDWElement);

  if (categoryCount > 1) {
    portfolioInfoContainerTextWrapper.style.fontSize = ".60vw";
  }

  //change theme - texts
  [...portfolioInfoContainerTextWrapper.children].forEach((element) => {
    if (element.tagName == "H2") {
      element.style.color = members[currentPortraitSlot.second].color;
    }
  });
};
