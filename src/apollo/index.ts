import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import AsyncStorage from '@react-native-community/async-storage';

import { USER_TOKEN } from '../utils/constant';
import Config from '../config';

const httpLink = new HttpLink({
  uri: Config.API_URL,
});

const authLink = setContext(async (req, { headers }) => {
  const token = await AsyncStorage.getItem(USER_TOKEN);

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
