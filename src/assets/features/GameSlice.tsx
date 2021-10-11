import { createSlice } from "@reduxjs/toolkit";
import ICell from "../models/ICell";
import { Team } from "../models/IPiece";
import InitialRock from "../features/pieceInitials/Rook";
import InitialBiShop from "../features/pieceInitials/BiShop";
import InitialKnight from "../features/pieceInitials/Knight";
import InitialQueen from "../features/pieceInitials/Queen";
import InitialKing from "../features/pieceInitials/King";
import InitialPawn from "../features/pieceInitials/Pawn";

export const GAME_KEY = "GAME";

export interface GameState {
  currentTeam: Team;
  cells: ICell[];
}

const initialState: GameState = {
  currentTeam: Team.WHITE,
  cells: [
    {
      code: "A8",
      piece: InitialRock(Team.BLACK)
    },
    {
      code: "B8",
      piece: InitialKnight(Team.BLACK)
    },
    {
      code: "C8",
      piece: InitialBiShop(Team.BLACK)
    },
    {
      code: "D8",
      piece: InitialQueen(Team.BLACK)
    },
    {
      code: "E8",
      piece: InitialKing(Team.BLACK)
    },
    {
      code: "F8",
      piece: InitialBiShop(Team.BLACK)
    },
    {
      code: "G8",
      piece: InitialKnight(Team.BLACK)
    },
    {
      code: "H8",
      piece: InitialRock(Team.BLACK)
    },
    {
      code: "A7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "B7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "C7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "D7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "E7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "F7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "G7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "H7",
      piece: InitialPawn(Team.BLACK)
    },
    {
      code: "A6",
      piece: undefined
    },
    {
      code: "B6",
      piece: undefined
    },
    {
      code: "C6",
      piece: undefined
    },
    {
      code: "D6",
      piece: undefined
    },
    {
      code: "E6",
      piece: undefined
    },
    {
      code: "F6",
      piece: undefined
    },
    {
      code: "G6",
      piece: undefined
    },
    {
      code: "H6",
      piece: undefined
    },
    {
      code: "A5",
      piece: undefined
    },
    {
      code: "B5",
      piece: undefined
    },
    {
      code: "C5",
      piece: undefined
    },
    {
      code: "D5",
      piece: undefined
    },
    {
      code: "E5",
      piece: undefined
    },
    {
      code: "F5",
      piece: undefined
    },
    {
      code: "G5",
      piece: undefined
    },
    {
      code: "H5",
      piece: undefined
    },
    {
      code: "A4",
      piece: undefined
    },
    {
      code: "B4",
      piece: undefined
    },
    {
      code: "C4",
      piece: undefined
    },
    {
      code: "D4",
      piece: undefined
    },
    {
      code: "E4",
      piece: undefined
    },
    {
      code: "F4",
      piece: undefined
    },
    {
      code: "G4",
      piece: undefined
    },
    {
      code: "H4",
      piece: undefined
    },
    {
      code: "A3",
      piece: undefined
    },
    {
      code: "B3",
      piece: undefined
    },
    {
      code: "C3",
      piece: undefined
    },
    {
      code: "D3",
      piece: undefined
    },
    {
      code: "E3",
      piece: undefined
    },
    {
      code: "F3",
      piece: undefined
    },
    {
      code: "G3",
      piece: undefined
    },
    {
      code: "H3",
      piece: undefined
    },
    {
      code: "A2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "B2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "C2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "D2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "E2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "F2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "G2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "H2",
      piece: InitialPawn(Team.WHITE)
    },
    {
      code: "A1",
      piece: InitialRock(Team.WHITE)
    },
    {
      code: "B1",
      piece: InitialKnight(Team.WHITE)
    },
    {
      code: "C1",
      piece: InitialBiShop(Team.WHITE)
    },
    {
      code: "D1",
      piece: InitialQueen(Team.WHITE)
    },
    {
      code: "E1",
      piece: InitialKing(Team.WHITE)
    },
    {
      code: "F1",
      piece: InitialBiShop(Team.WHITE)
    },
    {
      code: "G1",
      piece: InitialKnight(Team.WHITE)
    },
    {
      code: "H1",
      piece: InitialRock(Team.WHITE)
    }
  ]
};

export const GameSlice = createSlice({
  name: GAME_KEY,
  initialState,
  reducers: {
    newGame: (state) => {
      state = initialState;
    },
    changePiecePosition: (state, action) => {}
  }
});

export const { newGame, changePiecePosition } = GameSlice.actions;

export default GameSlice.reducer;
