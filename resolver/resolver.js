import mockData from '../static/mockData.js';
 
 
// This is the data that we get from database for example
const resolver = {
	Query: { // apply for type Query
		books: () => mockData.booksData,
		authors: () => mockData.authorsData,
		bookById: (parent, args) => mockData.booksData.find(book => book.id.toString() === args.id.toString()),
		authorById: (parent, args) => mockData.authorsData.find(author => author.id.toString() === args.id.toString()),
	},
	Book: { // resolve special fields for Book Schema
		author: (parent, args) => { // map the "author" in schema   vs    "authorId" in mocked-booksData
			console.log('parent: ', parent); // Is the books was query from Mocked-BooksData. -->  ex: {..., authorId: 2}
			return mockData.authorsData.find((author) => author.id === parent.authorId)
		}
	}
}

export default resolver;

