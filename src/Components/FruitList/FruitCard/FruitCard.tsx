import { IFruit } from "../../../App";

type IFruitCard = {
  fruit: IFruit;
};

export const FruitCard = ({ fruit }: IFruitCard) => {
  return (
    <li>
      <h3>{fruit.name}</h3>
      <p>{fruit.category}</p>
      <span>{fruit.price}</span>
    </li>
  );
};
