/* 
  Grupo:
    Heloísa Schilmer
    Marisa Sales
    Yan Matheus
*/

/*
  BookLists deve conter as seguintes propriedades:
    [x] Número de livros marcados como lidos
    [x] Número de livros marcados como ainda não lidos
    [x] Uma referência ao próximo livro a ser lido (book object)
    [x] Uma referência ao livro que está sendo lido (book object)
    [x] Uma referência ao último livro lido (book object)
    [x] Um array de todos os livros

  Cada Book deve ter várias propriedades:
    [x] Title
    [x] Genre
    [x] Author
    [x] Read (true ou false)
    [x] ReadDate, pode estar em branco, caso contrário, precisa ser um JS Date() object

  Cada BookList deve ter alguns métodos:
    - .add(book)
      [x] deve adicionar um livro à lista de livros.
    - .finishCurrentBook()
      [x] deve marcar o livro que está sendo lido como "read"
      [x] Definir redDate para new Date(Date.now())
      [x] Alterar o último livro lido para o livro que acabou de ser concluído
      [x] Mudar o livro atual para ser o próximo livro a ser lido
      [x] Altere a propriedade do próximo livro a ser lido para ser o primeiro livro não lido que encontrar na lista de livros
*/

class BookList {
	constructor() {
		this.currentBook = undefined;
		this.nextBook = undefined;
		this.lastBook = undefined;
		this.allBooks = [];
		this.readBooks = [];
		this.unreadBooks = [];
		this.NumberOfReadBooks = 0;
		this.NumberOfUnreadBooks = 0;
	}

	add(book) {
		if (this.allBooks.includes(book)) {
			return 'You have already registered this book';
		}
		this.allBooks = [...this.allBooks, book];

		book.read
			? (this.readBooks = [...this.readBooks, book])
			: (this.unreadBooks = [...this.unreadBooks, book]);

		if (book.read && !book.readDate) {
			this.currentBook = book;
		}

		this.NumberOfReadBooks = this.readBooks.length;
		this.NumberOfUnreadBooks = this.unreadBooks.length;
	}

	setCurrentBook(book) {
		if (this.currentBook === book) {
			return `You're already reading "${book.title}" since ${book.readDate}.`;
		}

		if (this.readBooks.includes(book)) {
			return `You already read "${book.title}" in ${book.readDate}.`;
		}

		book.read = true;
		book.readDate = new Date(Date.now());
		this.readBooks = [...this.readBooks, book];
		// TODO: excluir book da lista de unreadBooks
		this.currentBook = book;
		return `You started reading "${book.title}".`;
	}

	getCurrentBook() {
		return this.currentBook
			? `You\'re currently reading "${this.currentBook.title}".`
			: "You're not currently reading any books.";
	}

	finishCurrentBook() {
		if (!this.currentBook) {
			return "You don't have a current book.";
		}
		this.lastBook = this.currentBook;
		this.currentBook = undefined;
		this.nextBook = this.allBooks.find((book) => !book.read);
		return `You finished reading "${this.lastBook.title}"`;
	}

	getSuggestion() {
		return this.nextBook
			? `How about "${this.nextBook.title}" written by ${this.nextBook.author}?`
			: "We don't have any suggestions right now. Try again later";
	}

	getUnreadBooks() {
		return this.unreadBooks;
	}

	getReadBooks() {
		return this.readBooks;
	}

	getBooksByAuthor(author) {
		const upperCaseEntry = author.toUpperCase();
		const byAuthor = this.allBooks.filter(
			(book) => book.author.toUpperCase() === upperCaseEntry
		);
		return byAuthor.length > 0 ? byAuthor : `Author ${author} not found.`;
	}

	getBooksByGenre(genre) {
		const upperCaseEntry = genre.toUpperCase();
		const byGenre = this.allBooks.filter(
			(book) => book.genre.toUpperCase() === upperCaseEntry
		);
		return byGenre.length > 0 ? byGenre : `Genre ${genre} not found.`;
	}
}

class Book {
	constructor({ title, genre, author, read, readDate }) {
		this.title = title || 'Unknown title';
		this.genre = genre || 'Unknown genre';
		this.author = author || 'Unknown author';
		this.read = read || false;
		this.readDate = read ? new Date(readDate) : undefined;
	}
}

// Some Books
const library = new BookList();

const philosopherStone = new Book({
	title: "Harry Potter and the Philosopher's Stone",
	genre: 'Fantasy',
	author: 'J. K. Rowling',
	read: true,
	// Mês, dia, ano
	readDate: '02/08/2010',
});

const chamberOfSecrets = new Book({
	title: 'Harry Potter and the Chamber of Secrets',
	genre: 'Fantasy',
	author: 'J. K. Rowling',
	read: true,
	readDate: '12/23/2010',
});

const prisonerOfAzkaban = new Book({
	title: 'Harry Potter and the Prisoner of Azkaban',
	genre: 'Fantasy',
	author: 'J. K. Rowling',
});

const theShining = new Book({
	title: 'The Shining',
	genre: 'Horror',
	author: 'Stephen King',
});

const books = [
	philosopherStone,
	chamberOfSecrets,
	prisonerOfAzkaban,
	theShining,
];

books.map((book) => library.add(book));

console.log(library.allBooks);
console.log(library.NumberOfReadBooks);
console.log(library.NumberOfUnreadBooks);

console.log(library.getUnreadBooks());
console.log(library.getReadBooks());

console.log(library.add(prisonerOfAzkaban));

console.log(library.getCurrentBook());
console.log(library.setCurrentBook(chamberOfSecrets));
console.log(library.finishCurrentBook());

console.log(library.getSuggestion());
console.log(library.setCurrentBook(prisonerOfAzkaban));
console.log(library.finishCurrentBook());
console.log(library.getCurrentBook());

console.log(library.getSuggestion());

console.log(library.getBooksByAuthor('Stephen King'));
console.log(library.getBooksByAuthor('Paulo Coelho'));

console.log(library.getBooksByGenre('fantasy'));
console.log(library.getBooksByGenre('Drama'));

console.log(library.setCurrentBook(theShining));
console.log(library.finishCurrentBook());

console.log(library.getSuggestion());
console.log(library.getReadBooks());
