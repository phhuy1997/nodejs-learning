import { getAllEvents } from '../src/controllers/apiController.js';
import mockData, { distanceMockData, mockCharities, mockEventList } from '../static/mockData.js';
 
 
// This is the data that we get from database for example
const resolver = {
	Query: { // apply for type Query
		books: () => mockData.booksData,
		authors: () => mockData.authorsData,
		bookById: (parent, args) => mockData.booksData.find(book => book.id.toString() === args.id.toString()),
		authorById: (parent, args) => mockData.authorsData.find(author => author.id.toString() === args.id.toString()),
		events: async () => {
      try {
        const events = await getAllEvents();
        return events;
      } catch (err) {
        console.error(err);
        return []; // or throw an error
      }
    },
	},
	Book: { // resolve special fields for Book Schema
		author: (parent, args) => { // map the "author" in schema   vs    "authorId" in mocked-booksData
			console.log('parent: ', parent); // Is the books was query from Mocked-BooksData. -->  ex: {..., authorId: 2}
			return mockData.authorsData.find((author) => author.id === parent.authorId)
		}
	},
	Author: {
		books: (parent, args) => {
			return mockData.booksData.filter((book) => book.authorId === parent.Id);
		}
	},
	Event: {
		distances: (parent, args) => {
			return distanceMockData.filter((distance) =>
				(parent.distanceKeys ?? []).includes(distance.key)
			);
		},
		charities: (parent, args) => {
			return mockCharities.filter((charity) =>
				(parent.charityIds ?? []).includes(charity.id)
			);
		},
	},

	// MUTATION:
	Mutation: {
		createAuthor: (parent, args) => {
			// TODO: INSERT ... to db
			return args
		},
		createBook: (parent, args) => {
			// TODO: INSERT ... to db
			return args
		}
	}
}

export default resolver;

