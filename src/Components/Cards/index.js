import { ShowCard } from "../ShowCard";
import ShowPeople from "../ShowPeople";

export const Cards = (props) => {
  const myChoice = props.choice;
  if (props.data.length !== 0) {
    return (
      <>
        {myChoice === "shows"
          ? props.data.map((item) => {
              if (item.show.summary && item.show.rating) {
                return <ShowCard key={item.show.id} data={item} />;
              }
            })
          : myChoice === "people"
          ? props.data.map((item) => {
              return <ShowPeople key={item.person.id} data={item} />;
            })
          : ""}
      </>
    );
  }
};
