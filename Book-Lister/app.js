class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI { 
    static displayBooks() { 
        const books = Store.getBook();
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.getElementById('book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="text-light">${book.title}</td>
        <td class="text-light">${book.author}</td>
        <td class="text-light">${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm danger">X</a></td>
        `;
        list.appendChild(tr);

    }
    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    static removeBook(el) {
        if (el.classList.contains('danger')) {
            el.parentElement.parentElement.remove();
        }
    }
    static alert(msg,color) {
        const container = document.getElementById('container');
        const form = document.getElementById('book-form');

        const div = document.createElement('div');
        div.className = `alert alert-${color}`;
        div.appendChild(document.createTextNode(msg));

        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 1000);
    }
    
}
class Store {
    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBookToStore(book) {
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBookFromStore(isbn) {
        const books = Store.getBook();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


//displayBooks
document.addEventListener('DOMContentLoaded', UI.displayBooks());

//Add book
document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title= document.getElementById('title').value;
    const author= document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        UI.alert('Please Fill All The Feilds','danger');
    } else {
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);

        Store.addBookToStore(book);

        UI.alert('Book Added','success');        

        UI.clearFields();

        
    }
    
    
});


//remove elements 
document.getElementById('book-list').addEventListener('click', (e) => {
    
    
    UI.removeBook(e.target);

    Store.removeBookFromStore(e.target.parentElement.previousElementSibling.textContant);


    UI.alert('Book Deleted', 'success');

});    
