const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const textField = {
  minLength: 20,
  maxLength: 140,
};

function validateComment(comment) {
  if (comment.length >= textField.minLen && comment.length <= textField.maxLen) {
    document.querySelector('.img-upload__submit').disabled = false;
    return true;
  }
  document.querySelector('.img-upload__submit').disabled = true;
  return false;
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  `Комментарий должен быть от ${textField.minLen} до ${textField.maxLen} символов.`
);
