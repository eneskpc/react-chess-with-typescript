export enum Team {
  WHITE = "WHITE",
  BLACK = "BLACK"
}

export enum PieceType {
  PAWN = "PAWN",
  BISHOP = "BISHOP",
  KNIGHT = "KNIGHT",
  ROOK = "ROOK",
  QUEEN = "QUEEN",
  KING = "KING"
}

export default interface IPiece {
  name: PieceType;
  team: Team;
  checkNewPosition: (currentPosition: number, newPosition: number) => boolean;
}
