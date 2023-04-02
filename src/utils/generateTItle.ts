/**
 *
 * @param title:string
 * @returns array of objects containing the class, the content and the key of the letter
 */
export const generateTitle = (title: string): any[] => {
  const titleArray = title.split("");
  let double = false;
  let newArray: any = [];

  titleArray.map((letter, index, titleArray): any => {
    if (index === 0 || titleArray[index - 1] === " ") {
      newArray.push({
        className: "first-letter",
        letter: letter,
        key: letter + index,
      });
      return;
    }

    if (letter === titleArray[index + 1] || double) {
      double = !double;
      newArray.push({
        className: "double-letter",
        letter: letter,
        key: letter + index,
      });
      return;
    }

    if (letter === " ") {
      newArray.push({
        className: "space",
        letter: letter,
        key: letter + index,
      });
      return;
    }

    newArray.push({
      className: "lower-case",
      letter: letter,
      key: letter + index,
    });
  });

  // setMyTitle(newArray);
  return newArray;
};
