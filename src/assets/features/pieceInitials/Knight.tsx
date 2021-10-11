import IPiece, { PieceType, Team } from "../../models/IPiece";

const InitialKnight = (t: Team): IPiece => {
  return {
    name: PieceType.KNIGHT,
    team: t,
    checkNewPosition: (currentLocation, newPosition) => {
      return (
        newPosition % 8 === currentLocation % 8 ||
        (currentLocation - (currentLocation % 8) <= newPosition &&
          currentLocation + (7 - (currentLocation % 8)) >= newPosition)
      );
    }
  } as IPiece;
};

export default InitialKnight;
