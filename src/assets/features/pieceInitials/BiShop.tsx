import IPiece, { PieceType, Team } from "../../models/IPiece";

const InitialBiShop = (t: Team): IPiece => {
  return {
    name: PieceType.BISHOP,
    team: t,
    checkNewPosition: (currentLocation, newPosition) =>
      Math.abs(currentLocation - newPosition) % 7 === 0 ||
      Math.abs(currentLocation - newPosition) % 9 === 0
  } as IPiece;
};

export default InitialBiShop;
