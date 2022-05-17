import { gql } from 'apollo-server-express';

const tweetSchema = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }

  type Tweet {
    id: ID!
    text: String!
    author: User!
  }

  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }

  extend type Query {
    allTweets: [Tweet!]
    tweet(id: ID!): Tweet
    allUsers: [User!]
    allMovies: [Movie!]!
    movie(id: String!): Movie
  }

  extend type Mutation {
    postTweet(text: String!, userId: String!): Tweet!
    """
    Deletes a Tweet if found, else returns false
    """
    deleteTweet(id: ID!): Boolean!
  }
`;

export default tweetSchema;
