const BookListItem = (book) => {
  let html = `
    <li  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 
    last:border-b-0 border-b border-indigo-700" id="${book.id}">
    <p>${book.author} - ${book.title}</p>
    </li>
    `;
  return html;
};

const InfoBox = (book) => {
  const information = `<div id="bookInfo">

        <div>
            <img src="${book.coverImage}" alt="${book.title}" width=10%/>
        </div>

        <div >
            <p> Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Release date: ${book.releaseDate} </p>
        </div>

  </div>`;
  return information;
};
