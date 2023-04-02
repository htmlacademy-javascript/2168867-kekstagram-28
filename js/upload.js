const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessageElement = successMessageTemplate.cloneNode(true);
const errorMessageElement = errorMessageTemplate.cloneNode(true);

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const uploadSuccess = () => {
  document.body.append(successMessageElement);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessMessage);
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const uploadError = () => {
  document.body.append(errorMessageElement);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorMessage);
};


export { uploadSuccess, uploadError };
