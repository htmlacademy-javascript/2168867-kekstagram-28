const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i;
const isValidHashtag = (tag) => hashtagRules.test(tag);

export { isValidHashtag };
