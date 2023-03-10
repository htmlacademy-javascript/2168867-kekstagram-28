//проверить длину строки. сверить с максимальной длиной. вернуть true, если строка меньше или равна указанной длине, в противном случае false
const isCheckLengthString = function (string, maxLength) {
  return string.length <= maxLength;
};

isCheckLengthString('проверяемая строка', 20);

//проверка строки на палиндром усложненный. привети в один регистр.убрать пробелы

const isPalindrom = (string) => {
  const registerString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = 0; i < registerString.length; i++) {

    reverseString += registerString.at(i);
  }
  return registerString === reverseString;
};

isPalindrom('Лёша на полке клопа нашёл');


//принять строку, извлечь из нее с цифры от 0 до 9. вернуть их в виде целого положительного числа. если нет цифр, вернуть NaN
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

extractNumber('1 кефир, 0.5 батона');

/*принять три параметра: исходную строку, минимальную длину и строку с добавочными символами. вернуть — исходную строку, с указанными символами до заданной длины.
Символы добавить в начало строки. Если исходная строка больше заданной длины, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.*/
const padStart = (string, minlengthString, plusSimbol) => {
  const lengthString = minlengthString - string.length;
  if (lengthString <= 0) {
    return string;
  }
  return plusSimbol.slice(0, lengthString % plusSimbol.length) + plusSimbol.repeat(lengthString / plusSimbol.length) + string;
};

padStart('q', 4, 'werty');
