import { useDispatch } from "react-redux";
import { pointScored } from "./store";


export function PointScoredButton ({ playerId, children}) {

    const dispatch = useDispatch();

    return (

    <div >
        <button 
            className="button"
            onClick={()=> {
              dispatch (pointScored(playerId));
            }}
        >
           {children}
        </button> 
       
    </div>
    )
}