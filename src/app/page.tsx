import Image from "next/image";
import ListItem from "../components/ListItem";

/*Daten darstellen
HTML: Daten strukturiern
CSS: Daten Aussehen verleihen
*/

//Daten übertragen

/*Daten verarbeiten
Javascript: Logik ausführen
*/

//Daten speichern

export default function Home() {
  return (<>
    <div className="list">
      <ListItem iconType="arrival"/>
      <ListItem iconType="away"/>
      <ListItem iconType="arrival"/>
      <ListItem iconType="away"/>
      <ListItem iconType="arrival"/>
    </div>
  </>);
}
