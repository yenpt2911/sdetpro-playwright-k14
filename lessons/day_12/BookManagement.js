/**
 * Book: title, author, isCheckout, dueDate, returnBook, borrowBook
 * Library: book management: how many book left, which one was removed
 * 
 */

class Book {
    constructor(title, author) {
        this.title = title;  // not _title due to not need getter or setter
        this.author = author;
        this.isCheckout = false;
    }

    borrowBook() {
        if (!this.isCheckout) {
            console.log("Checking out the book...");
            this.isCheckout = true;
        } else {
            console.log("Not available!");
        }
    }

    returnBook() {
        this.isCheckout = false;
    }

}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Current books: ${JSON.stringify(this.books)}`);
    }

    removeBook(book) {
        const bookIndex = this.books.indexOf(book);
        const isBookExisting = bookIndex !== -1;
        if (isBookExisting) {
            this.book.splice(bookIndex, 1);
        } else {
            console.log('The book is not in the library to remove!');
        }
    }

    searchByTitle(book) {
        // TODO: implement this
    }

    searchByAuthor(book) {
        // TODO: implement this
    }
}

//In-memory DB

const library = new Library();
const book1 = new Book('Hoc JS trong 1 thap ki', 'Teo');
const book2 = new Book('Hoc JS trong 24hrs', 'Ti');
library.addBook(book1);
library.addBook(book2);

//TODO: Search book by title, author

book1.borrowBook();
book1.borrowBook();
book1.returnBook();
book1.borrowBook();