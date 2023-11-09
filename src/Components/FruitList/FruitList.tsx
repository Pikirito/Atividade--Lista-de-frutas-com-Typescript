import { IFruit } from "../../App";
import { FruitCard } from "./FruitCard/FruitCard";

type IFruitList = {
  fruitList: IFruit[];
};

export const FruitList = ({ fruitList }: IFruitList) => {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
};
