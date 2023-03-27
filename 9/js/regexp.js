//хэштег начинается с #(решетки), строка после решётки должна состоять из букв и чисел без пробелов, спецсимволов, пунктуации, эмодзи;
const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i;
const isValidHashtag = (tag) => hashtagRules.test(tag);

export { isValidHashtag };
