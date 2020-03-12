import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import State from '../../../reducers';
import { fetchExample } from '../../../actions/example';
import { Typography, BackButton, EmptyContent } from '../../../components';
import { Container, JSONContainer } from './styles';
import { goBack } from '../../../navigation';

interface Props {
  fetchExample: () => void;
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
    let exampleDrink = {};
    if (exampleData) {
      exampleDrink = exampleData.drinks[1];
    }

    return (
      <Container testID="fetch_example_screen">
        <BackButton
          testID="back_button_on_fetch_screen"
          onPress={() => goBack()}
          text="FetchExample"
        />
        {fetchExampleIsLoading ? (
          <EmptyContent testID="loading_on_fetch_example" text="Loading..." />
        ) : fetchExampleError ? (
          <EmptyContent testID="error_on_fetch_example" text={fetchExampleError} />
        ) : (
          <JSONContainer testID="data_on_fetch_example">
            <ScrollView>
              <Typography>{JSON.stringify(exampleDrink, null, 2)}</Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchExample);
