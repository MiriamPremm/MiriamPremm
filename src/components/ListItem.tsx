import ArrivalIcon from "./ArrivalIcon";
import AwayIcon from "./AwayIcon";

//Das ist eine Komponente
export default function ListItem({
  iconType,
  personName,
  timestamp
}: {
  iconType: string;
  personName: string;
  timestamp: Date;
}){

    const showArrivalIcon = iconType === "arrival";
    const showAwayIcon = iconType === "away";

    return (
        <div className="listItem">
    
          <div className="icon">
            {showArrivalIcon && <ArrivalIcon/>}
            {showAwayIcon && <AwayIcon/>}
          </div>
    
          <div className="personName">
            {personName}
          </div>
    
          <div className="timestamp">
            {timestamp.toLocaleDateString("de-DE")}{" "}
            {timestamp.toLocaleTimeString("de-DE")}
          </div>
    
        </div>
      );
}