import React from 'react';
import { ScrollView } from 'react-native';

import { Typography, BackButton, EmptyContent } from '../../../components';
import { Container, JSONContainer } from './styles';
import { goBack } from '../../../navigation';
import withArtworksQuery, { ChildProps } from '../../../apollo/queries/artworks';

// interface Props extends ChildProps {}

class FetchExample extends React.Component<ChildProps> {
  async componentDidMount() {
    const { data } = this.props;
    await data.refetch();
  }

  render() {
    const { data } = this.props;
    const { loading, artworks, error } = data;

    return (
      <Container>
        <BackButton onPress={() => goBack()} text="FetchExample" />
        {loading || error ? (
          <EmptyContent text={JSON.stringify(error)} />
        ) : (
          <JSONContainer>
            <ScrollView>
              <Typography>{JSON.stringify(artworks, null, 2)}</Typography>
            </ScrollView>
          </JSONContainer>
        )}
      </Container>
    );
  }
}

export default withArtworksQuery(FetchExample);
