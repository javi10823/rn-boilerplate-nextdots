import React from 'react';
import { TextInputProps } from 'react-native';
import { TextFieldProps } from 'react-native-material-textfield';
import { WrappedFieldProps, Field, BaseFieldProps } from 'redux-form';

import { TextInput } from '../../../components';

interface TextFieldCustomProps {
  label: string;
  row: boolean;
}

export type TextInputFieldProps = WrappedFieldProps &
  TextInputProps &
  TextFieldProps &
  TextFieldCustomProps;

class TextInputField extends React.Component<TextInputFieldProps> {
  render() {
    const { meta, input, label, row, ...textInputProps } = this.props;
    return (
      <TextInput
        {...textInputProps}
        label={label}
        row={row}
        onFocus={(e: any) => input.onFocus(e)} // workaround
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        value={input.value}
        error={meta.error && meta.touched ? meta.error : ''}
      />
    );
  }
}

type ReduxFormPropsToPick =
  | 'validate'
  | 'name'
  | 'format'
  | 'normalize'
  | 'parse'
  | 'warn'
  | 'forwardRef'
  | 'immutableProps';

type PickedReduxFormProps = Pick<BaseFieldProps, ReduxFormPropsToPick>;

// NOTE: add more react-native TextInput props if needed
type ReactNativeTextInputPropsToPick =
  | 'keyboardType'
  | 'secureTextEntry'
  | 'autoCapitalize'
  | 'maxLength';

type PickedReactNativeTextInputProps = Pick<TextInputProps, ReactNativeTextInputPropsToPick>;

type MaterialTextInputPropsToPick = 'renderAccessory';

type PickedMaterialTextInputProps = Pick<TextFieldProps, MaterialTextInputPropsToPick>;

interface Props
  extends PickedReduxFormProps,
    PickedReactNativeTextInputProps,
    PickedMaterialTextInputProps {
  label: string;
  row?: boolean;
}

export const TextField: React.FC<Props> = props => <Field component={TextInputField} {...props} />;
