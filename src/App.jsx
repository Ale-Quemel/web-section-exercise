import { NavBar } from "./components/navbar/NavBar";
import { Section } from "./components/section/section";
import { data } from "./data/data";

export const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        {
          data.map(section => (
            <Section key={section.id} title={section.title} cardList={section.cardList}/>
          ))
        }
      </main>
    </>
  );
}