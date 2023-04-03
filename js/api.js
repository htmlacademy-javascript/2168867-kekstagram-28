import { BASE_URL } from './constants.js';

const Route = {
  GET: '/data',
  POST: '',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET: 'Не удалось загрузить данные. Попробуйте перезагрузить страницу',
  POST: 'Не удалось отправить форму. Попробуйте еще раз',
};

const load = (mode, body = null) =>
  fetch(`${BASE_URL}${Route[mode]}`, { method: Method[mode], body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ErrorText[mode]);
    });

const getData = () => load(Method.GET);

const sendData = (body) => load(Method.POST, body);

export { getData, sendData };
