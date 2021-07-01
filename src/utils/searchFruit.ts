import Fuse from "fuse.js";
import calories from "../model/calories";

const fuse = new Fuse(calories, {
  keys: ["Food"],
  isCaseSensitive: false,
});

const searchFruit = (fruitName: string) => {
  return fuse.search(fruitName);
};

export default searchFruit;
