import ArrivalIcon from "./ArrivalIcon";
import AwayIcon from "./AwayIcon";

//Das ist eine Komponente
export default function ListItem({iconType}: {iconType:string;}){

    const showArrivalIcon = iconType === "arrival";
    const showAwayIcon = iconType === "away";

    return (
        <div className="listItem">
    
          <div className="icon">
            {showArrivalIcon && <ArrivalIcon/>}
            {showAwayIcon && <AwayIcon/>}
          </div>
    
          <div className="personName">
            miriam
          </div>
    
          <div className="timestamp">
            31.01.2024 11:38
          </div>
    
        </div>
      );
}