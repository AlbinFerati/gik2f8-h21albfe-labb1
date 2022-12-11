const BookListItem = (book) => {
  let html = `
    <li  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 
    last:border-b-0 border-b border-indigo-700" id="${book.id}">
    <p>${book.author} - ${book.title}</p>
    </li>
    `;
  return html;
};

const InfoBox = (bookData) => {
  const information = `<div id="bookInfo">

        <div>
            <img src="${bookData.coverImage}" alt="${bookData.title}" width=10%/>
        </div>

        <div >
            <p> Title: ${bookData.title} Author: ${bookData.author} Pages: ${bookData.pages} Release date: ${bookData.releaseDate} </p>
        </div>

  </div>`;
  return information;
};
