import gql from 'graphql-tag';
import { graphql, ChildDataProps } from '@apollo/react-hoc';

const query = gql`
  query GET_ARTWORKS {
    artworks {
      id
      title
      imageUrl
      artist {
        id
        name
      }
      category
    }
  }
`;

interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  artist: {
    id: string;
    name: string;
  };
  category: string;
}

interface Response {
  artworks: [Artwork];
}

export type ChildProps = ChildDataProps<{}, Response, {}>;

const withArtworksQuery = graphql<{}, Response, {}, ChildProps>(query);

export default withArtworksQuery;
