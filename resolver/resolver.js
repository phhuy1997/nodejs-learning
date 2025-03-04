import mockData from '../static/mockData.js';
 
 
// This is the data that we get from database for example
const resolver = {
	Query: { // apply for type Query
		books: () => mockData.booksData,
		authors: () => mockData.authorsData,
		bookById: (parent, args) => mockData.booksData.find(book => book.id.toString() === args.id.toString()),
		authorById: (parent, args) => mockData.authorsData.find(author => author.id.toString() === args.id.toString()),
	}
}

export default resolver;

