import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book { # this is the type of the Object we want to return to client
    id: ID!
    name: String!
    genre: String!
  }

  type Author {
    id: ID!
    name: String
    age: Int
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
  }
`
export default typeDefs

