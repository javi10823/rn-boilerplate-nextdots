import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import State from '../../../reducers';
import { fetchExample } from '../../../actions/example';
import { Typography, BackButton, EmptyContent } from '../../../components';
import { Container, JSONContainer } from './styles';
import { goBack } from '../../../navigation';

interface Props {
  fetchExample: Function;
  exampleData: any;
  fetchExampleError: string;
  fetchExampleIsLoading: boolean;
}

class FetchExample extends React.Component<Props, State> {
  async componentDidMount() {
    const { fetchExample } = this.props;
    await fetchExample();
  }

  render() {
    const { exampleData, fetchExampleError, fetchExampleIsLoading } = this.props;

    return (
      <Container>
        <BackButton onPress={() => goBack()} text="FetchExample" />
        {fetchExampleIsLoading || fetchExampleError ? (
          <EmptyContent text={fetchExampleError} />
        ) : (
          <JSONContainer>
            <ScrollView>
              <Typography>{JSON.stringify(exampleData, null, 2)}</Typography>
            </ScrollView>
          </JSONContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => ({
  exampleData: state.example.exampleData,
  fetchExampleError: state.example.fetchExampleError,
  fetchExampleIsLoading: state.example.fetchExampleIsLoading,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchExample: () => dispatch(fetchExample()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchExample);
