import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book { # this is the type of the Object we want to return to client
    id: ID!
    name: String!
    genre: String!
    author: Author  # we want to be responsed "author : Author". But in mocked booksData, it only has authorId: ID!  
                    # --> In resolver.js, we need to declare a query for detail Books to link to the master Author. So that authorId can be map with Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE
  type Query {
    books: [Book] # this is the query key&value that we allow client to query on to get the data from Object above
                    # --> At Client we can query like: 
                                                        #   query MyFirstQuery {
                                                        #     books {
                                                        #       id
                                                        #       name 
                                                        #       genre
                                                        #     }
                                                        #   }
    authors: [Author]
    bookById (id: ID!): Book # --> At Client we can query like: 
                                                        #   query MyFirstQuery {
                                                        #     bookById (id: 2) {
                                                        #       id
                                                        #       name 
                                                        #       genre
                                                        #     }
                                                        #   }
    authorById (id: ID!): Author 
  }


  type Mutation {
    createAuthor(id: ID, name: String, age: Int) : Author  # Create an author with the schema Author
    createBook(id: ID, name: String, genre: String, authorId: ID): Book # Create a book with the Book Schema
                                                                        # But in Book schema, it has author: Author instead of authorId: ID
                                                                        # --> We need to map them in the resolver

  }
`
export default typeDefs

