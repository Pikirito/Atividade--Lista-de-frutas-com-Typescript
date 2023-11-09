import { useEffect, useState } from "react";
import { Api } from "./Api/FruitApi";
import { FruitList } from "./Components/FruitList/FruitList";

export type IFruit = {
  id: number;
  name: string;
  category: string;
  price: number;
};

function App() {
  const [fruitList, setFruitList] = useState<IFruit[]>([]);

  useEffect(() => {
    const getFruit = async () => {
      try {
        const { data } = await Api.get("/fruits");
        setFruitList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFruit();
  }, []);

  return <FruitList fruitList={fruitList} />;
}

export default App;
