import { gql } from 'apollo-server-express';

const tweetSchema = gql`
  type User {
    id: ID
    username: String
  }

  type Tweet {
    id: ID
    text: String
    author: User
  }

  extend type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
`;

export default tweetSchema;
