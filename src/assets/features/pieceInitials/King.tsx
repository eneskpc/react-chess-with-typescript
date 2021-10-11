import IPiece, { PieceType, Team } from "../../models/IPiece";

const InitialKing = (t: Team): IPiece => {
  return {
    name: PieceType.KING,
    team: t,
    checkNewPosition: (currentLocation, newPosition) =>
      newPosition % 8 === currentLocation % 8 ||
      (currentLocation - (currentLocation % 8) <= newPosition &&
        currentLocation + (7 - (currentLocation % 8)) >= newPosition)
  } as IPiece;
};

export default InitialKing;
