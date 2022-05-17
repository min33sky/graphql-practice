import { Resolver } from './../types/resolver';
import axios from 'axios';

let tweets = [
  {
    id: '1',
    text: 'first One!',
    userId: '2',
  },
  {
    id: '2',
    text: 'second one!',
    userId: '1',
  },
];

let users = [
  {
    id: '1',
    firstName: 'nico',
    lastName: 'las',
  },
  {
    id: '2',
    firstName: 'Elon',
    lastName: 'Mask',
  },
];

const tweetResolver: Resolver = {
  Query: {
    allTweets: () => {
      return tweets;
    },
    tweet: (_, { id }) => {
      const tweet = tweets.find((tweet) => tweet.id === id);
      return tweet;
    },
    allUsers: () => {
      console.log('Get All_User');
      return users;
    },
    allMovies() {
      return axios
        .get('https://yts.mx/api/v2/list_movies.json')
        .then((json: any) => json.data.data.movies);
    },
    movie(_, { id }) {
      return axios
        .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((json: any) => {
          return json.data.data.movie;
        });
    },
  },

  Mutation: {
    postTweet: (_, { userId, text }) => {
      const exists = users.find((user) => user.id === userId);

      if (!exists) throw new Error('존재하지 않는 User');

      const newPost = {
        id: tweets.length + 1 + '',
        text,
        userId,
      };

      tweets.push(newPost);

      return newPost;
    },
    deleteTweet: (_, { id }) => {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },

  User: {
    fullName: ({ firstName, lastName }) => {
      console.log('Get Full_Name');
      return `${firstName} ${lastName}`;
    },
  },

  Tweet: {
    author: ({ userId }) => {
      return users.find((user) => user.id === userId);
    },
  },
};

export default tweetResolver;
