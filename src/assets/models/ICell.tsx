import IPiece from "./IPiece";

export default interface ICell {
  code: string;
  piece: IPiece | undefined;
}
