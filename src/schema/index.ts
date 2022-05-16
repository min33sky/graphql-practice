import { gql } from 'apollo-server-express';
import tweetSchema from './tweet';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, tweetSchema];
