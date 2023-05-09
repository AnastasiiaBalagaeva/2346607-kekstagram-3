import { checkStringLength } from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  'От 20 до 140 символов'
);

function validateComment(comment) {
  return !checkStringLength(comment, 19) && checkStringLength(comment, 140);
}

function validateForm() {
  return pristine.validate();
}

export{ validateForm };
