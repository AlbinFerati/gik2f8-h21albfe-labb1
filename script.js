"use strict";

let bookList = [];

getAll().then((apiBooks) => {
  window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
  });
});

bookList = JSON.parse(localStorage.getItem("bookList"));

searchField.addEventListener("keyup", (event) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = event.target.value.toLowerCase();
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
  register.forEach((bar) => {
    bar.addEventListener("mouseover", (event) => {
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

    bar.addEventListener("mouseout", (event) => {
      bookInfo.remove();
    });
    const callBook = (number) => {
      return bookList.filter((book) => book.id == number).shift();
    };
  });
}
