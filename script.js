"use strict";

let bookList = [];

getAll().then((apiBooks) => {
  window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
  });
});

bookList = JSON.parse(localStorage.getItem("bookList"));

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
        author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
      );
    })
  )
);

function renderBookList(index) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");
  if (existingElement) {
    root.removeChild(existingElement);
  }

  index.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(index));
  const register = document.querySelectorAll(".book-list__item");
  register.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      let id;
      if (event.target.parentElement.id) {
        id = event.target.parentElement.id;
      } else {
        id = event.target.id;
      }

      console.log("event", event.target, id);
      const deleteBox = document.getElementById("bookInfo");
      if (deleteBox) {
        deleteBox.remove();
      } else {
        InfoBox(id);
      }

      const bookInfo = InfoBox(callBook(id));

      root.insertAdjacentHTML("beforeend", bookInfo);
    });

    item.addEventListener("mouseout", (event) => {
      bookInfo.remove();
    });
    const callBook = (id) => {
      return bookList.filter((item) => item.id == id).shift();
    };
  });
}
