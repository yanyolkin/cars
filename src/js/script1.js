const slides = document.querySelectorAll(".header__slide");

console.log(slides);

// for (let i = 0; i < slides.length - 2; i++) {
//   document
//     .querySelector(".header__lines")
//     .insertAdjacentHTML(
//       "beforeend",
//       `<div class="header__line" data-slide=${i + 1}></div>`
//     );
// }

slides.forEach((slide, i, slides) => {
  if (i < slides.length - 2) {
    document
      .querySelector(".header__lines")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="header__line" data-slide=${i + 1}></div>`
      );
  }
});

function selectSlide(slide, animate = true) {
  if (animate) {
    slides.forEach((sl, i) => {
      sl.style.transform = `translateX(${(i - slide) * 100}%)`;
      sl.style.transition = "all 2s";
    });
  } else {
    slides.forEach((sl, i) => {
      sl.style.transform = `translateX(${(i - slide) * 100}%)`;
      sl.style.transition = "all 0s";
    });
  }
}

let currentSlide = 1;
selectSlide(currentSlide, false);
activeLine(currentSlide);

function next() {
  if (currentSlide < slides.length - 2) {
    currentSlide++;
    selectSlide(currentSlide);
    activeLine(currentSlide);
  } else {
    currentSlide = 0;
    selectSlide(currentSlide, false);
    currentSlide++;
    setTimeout(() => {
      selectSlide(currentSlide, true);
    }, 29);
    activeLine(currentSlide);
  }
}

function activeLine(slide) {
  document.querySelectorAll(".header__line").forEach((line) => {
    line.classList.remove("header__line_active");
    if (+line.dataset.slide === slide) {
      line.classList.add("header__line_active");
    }
  });
}

let timer = setInterval(next, 5000);

document.querySelector(".header__lines").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("header__line")) {
    currentSlide = +e.target.dataset.slide;
    clearInterval(timer);
    activeLine(currentSlide);
    selectSlide(currentSlide);
    timer = setInterval(next, 5000);
  }
});

const sections = document.querySelectorAll("section");

console.log(sections);

sections.forEach((section) => {
  section.classList.add("off");
  section.style.transition = "all 2s";
});

function sectionAppear(entries, observer) {
  if (entries[0].isIntersecting) {
    console.log("ok");
    entries[0].target.classList.remove("off");
    observer.unobserve(entries[0].target);
  }
}

const sectionObserver = new IntersectionObserver(sectionAppear, {
  threshold: 0.1,
});

sections.forEach((section) => sectionObserver.observe(section));
