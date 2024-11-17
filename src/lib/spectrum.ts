
import _ from "lodash";
import chroma from "chroma-js";
import { getCollection } from "astro:content";


export async function getSpectrum(): Promise<string[]> {
  const books = await getCollection("books");
  const arrayOfColors = books.map((book) =>
    book.data.color ? chroma(book.data.color as string) : null
  ).filter(Boolean) as chroma.Color[];

  const sortedColors = _.sortBy(
    arrayOfColors.map((color) => {
      const [_lum, _chroma, hue] = color.oklch();
      const newColor = chroma.oklch(0.88, 0.2, hue);
      return newColor;
    }),
    (color) => {
      const [_lum, _chroma, hue] = color.oklch();
      return hue;
    }
  ).map((_) => _.hex());

  return sortedColors;
}
