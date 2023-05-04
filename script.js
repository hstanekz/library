const addButton = document.querySelector('.add');
const toggleRead = document.querySelector('.toggle');
const bookForm = document.querySelector('form');
const deleteButtons = document.querySelectorAll('.delete');
const bookReadInput = document.querySelector('#options');



let myLibrary = [];

function Book(title, author, pageNum, readingStatus) { // constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.readingStatus = readingStatus;

}

function addBookToLibrary(title, author, pageNum, readingStatus) {
    let newBook = new Book(title, author, pageNum, readingStatus);
    myLibrary.push(newBook);
  
    // create a new grid item element
    const gridItem = document.createElement('div');
    gridItem.classList.add('book');
    gridItem.classList.add(`book-${myLibrary.length}`);
  
    const titleDiv = document.createElement('div');
    titleDiv.textContent = `Title: ${title}`;
    gridItem.appendChild(titleDiv);
  
    const authorDiv = document.createElement('div');
    authorDiv.textContent = `Author: ${author}`;
    gridItem.appendChild(authorDiv);
  
    const pageNumDiv = document.createElement('div');
    pageNumDiv.textContent = `Pages: ${pageNum}`;
    gridItem.appendChild(pageNumDiv);
  
    const readingStatusDiv = document.createElement('div');
    const readingStatusText = document.createElement('span');
    readingStatusText.textContent = readingStatus;
    readingStatusDiv.appendChild(readingStatusText);
    gridItem.appendChild(readingStatusDiv);
  
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle');
    toggleButton.textContent = 'Toggle';
    gridItem.appendChild(toggleButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    gridItem.appendChild(deleteButton);
  
    // add the grid item to the main class
    const main = document.querySelector('.main');
    main.appendChild(gridItem);
  
    // add event listener to the delete button
    deleteButton.addEventListener('click', (event) => {
      const gridItem = event.target.parentNode;
      gridItem.remove();
  
      // remove the book from myLibrary
      const index = parseInt(gridItem.classList[1].split('-')[1]) - 1;
      myLibrary.splice(index, 1);
    });
  
    // add event listener to the toggle button
    toggleButton.addEventListener('click', () => {
      // toggle the reading status
      newBook.readingStatus = newBook.readingStatus === 'Yes' ? 'No' : 'Yes';
  
      // update the display
      readingStatusText.textContent = newBook.readingStatus;
    });
  }
  

function openForm() {
    bookForm.style.display = 'block';
}

function closeForm() {
    bookForm.style.display = 'none';
}

addButton.addEventListener('click', openForm);

bookForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const bookReadInput = document.querySelector('option');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const bookRead = bookReadInput.value;

    addBookToLibrary(title, author, pages, bookRead);

    closeForm();
});

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', (event) => {
      const gridItem = event.target.parentNode;
      gridItem.remove();
    });
  });
