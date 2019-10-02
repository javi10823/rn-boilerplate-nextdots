import { FormState, FormStateTyped } from 'redux-form';
import { Schema } from 'yup';

export const validator = (schema: Schema<any>) => async (formValues: any) => {
  try {
    await schema.validate(formValues, { abortEarly: false });
    return {};
  } catch (e) {
    console.log(e);
    throw e.inner.reduce(
      (errors, err) => ({
        ...errors,
        [err.path]: err.message,
      }),
      {},
    );
  }
};

export const mapFormToProps = <V>(form: FormState) => {
  return form as FormStateTyped<V>;
};
