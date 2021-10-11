import IPiece, { PieceType, Team } from "../../models/IPiece";

const InitialRock = (t: Team): IPiece => {
  return {
    name: PieceType.ROOK,
    team: t,
    checkNewPosition: (currentLocation, newPosition) => {
      console.log(currentLocation);
      console.log(newPosition);
      return (
        newPosition % 8 === currentLocation % 8 ||
        (currentLocation - (currentLocation % 8) <= newPosition &&
          currentLocation + (7 - (currentLocation % 8)) >= newPosition)
      );
    }
  } as IPiece;
};

export default InitialRock;
