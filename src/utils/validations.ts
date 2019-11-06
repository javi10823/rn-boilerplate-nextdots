import { FormState } from 'redux-form';

export const required = (value: string) => (!value ? 'Required field.' : undefined);

export const password = (value: string) =>
  value
    ? (value.length > 20 ? 'The password should not have more than 20 characters.' : undefined) ||
      (value.length < 6 ? 'At least 6 characters.' : undefined)
    : undefined;

export const validateEmail = (value: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value) {
    return emailRegex.test(value) ? null : 'Invalid email address.';
  }
  return null;
};
