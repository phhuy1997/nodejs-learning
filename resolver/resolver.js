// This is the data that we get from database for example
const resolver = {
	Query: { // apply for type Query
		books: () => { // apply for query key "books" that was defined at schema.js
			return [
				{
					id: 1,
					name: 'De men phieu luu ki',
					genre: 'Adventure'
				},
				{
					id: 2,
					name: 'Lam giau khong kho',
					genre: 'Education'
				}
			]
		},
		authors: () => { // apply for query key "authors" that was defined at schema.js
			return [
				{
					id: 1,
					name: 'Ngo Tat To',
					age: 127
				},
				{
					id: 2,
					name: 'Vu Trong Phung',
					age: 109
				},
				{
					id: 3,
					name: 'Nam Cao',
					age: 106
				}
			]
		}
	}
}

module.exports = resolver;
