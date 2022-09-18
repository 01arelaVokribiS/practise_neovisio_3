const body = document.body;
const burger = document?.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");
const allLinks = document.querySelectorAll("[data-goto]");
const tabs = document.querySelector(".tabs");
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav--visible");
  body.classList.toggle("stop-scroll");
});

allLinks.forEach((el) => {
  el.addEventListener("click", smoothScrollingHandler);

  body.classList.remove("stop-scroll");
  burger.classList.remove("burger--active");
  nav.classList.remove("header__nav--visible");
});

tabs.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("tabs__btn")) {
    const tabsPath = evt.target.dataset.tabsPath;

    tabsBtnHandler(tabsPath);
    tabsContentHandler(tabsPath);
  }
});

function smoothScrollingHandler(evt) {
  evt.preventDefault();

  const clickedLink = evt.target;
  const gotoBlock = document.querySelector(clickedLink.dataset.goto);
  const gotoBlockValue =
    gotoBlock.getBoundingClientRect().top +
    scrollY -
    document.querySelector("header").offsetHeight;

  window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth",
  });
}

function tabsBtnHandler(path) {
  tabsBtn.forEach((el) => {
    el.classList.remove("tabs__btn--active");
  });

  document
    .querySelector(`[data-tabs-path=${path}]`)
    .classList.add("tabs__btn--active");
}

function tabsContentHandler(path) {
  tabsContent.forEach((el) => {
    el.classList.remove("tabs__content--active");
  });

  document
    .querySelector(`[data-tabs-target=${path}]`)
    .classList.add("tabs__content--active");
}
