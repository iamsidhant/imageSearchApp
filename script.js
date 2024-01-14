const accesskey = "ErAxyHdtPvLRKr1WfKXBVHI_nu6PvTUYKLAXQyfn1IA";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})

showMoreButtonEl.addEventListener("click", () => {
    searchImages();
})