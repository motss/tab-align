// @ts-check

function findMaxTitle(titles: string[]) {
  return Array.isArray(titles) && titles.length > 0
    ? Math.max(...titles.map(t => t.length))
    : 0;
}

export function tabAlign(
  texts: string[], alignTo: string = 'start', whitespace: number = 0, fillWith: string = ' '
) {
  if (Array.isArray(texts) && texts.length > 0) {
    const maxTitle = findMaxTitle(texts);

    return (title: string) => {
      const padding = fillWith.repeat(maxTitle - title.length + whitespace);

      if (alignTo === 'end') {
        return `${padding}${title}`
      } else if (alignTo === 'center') {
        const totalPadding = maxTitle - title.length + whitespace;
        const startPad = Math.floor(totalPadding / 2);

        return `${fillWith.repeat(startPad)}${title}${fillWith.repeat(totalPadding - startPad)}`;
      }

      return `${title}${padding}`;
    };
  }

  throw new Error('texts must be defined with values');
}

export default tabAlign;
