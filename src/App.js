import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { PointScoredButton } from "./PointScoredButton ";
import { ResetButton } from "./ResetButton"

export default function App() {
  return (
    <div>
      <Display />
      <div className="button-row">
        <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
      </div>
     <div className="button-row">
        <ResetButton />
        <PlayPauseButton />
     </div>
      
      
    </div>
  );
}
