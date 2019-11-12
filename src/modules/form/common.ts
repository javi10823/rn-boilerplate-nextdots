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
