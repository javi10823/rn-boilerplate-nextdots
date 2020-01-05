import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';
import AsyncStorage from '@react-native-community/async-storage';

import { USER_TOKEN } from '../utils/constant';
import Config from '../config';

const authLink = setContext(async (req, { headers }) => {
  const token = await AsyncStorage.getItem(USER_TOKEN);

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadCapableLink = createUploadLink({ uri: Config.API_URL });

export async function renewLink() {
  client.link = authLink.concat(uploadCapableLink);
}

const client = new ApolloClient({
  link: authLink.concat(uploadCapableLink),
  cache: new InMemoryCache(),
  connectToDevTools: __DEV__,
  resolvers: {},
});

export default client;
