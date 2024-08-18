import Card from "./Card";
import data from "../data.json";

interface CardData {
  Name: string;
  Price: string;
  Image: string;
}

export default function CardGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.data.map((cardData: CardData, index) => (
        <Card
          key={index}
          name={cardData.Name}
          price={cardData.Price}
          image={cardData.Image}
        />
      ))}
    </div>
  );
}
