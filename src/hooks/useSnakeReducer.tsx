import { useReducer } from "react";
import { CONST } from "utils";
import { ReducerAction } from "../models/ReducerAction";

export enum SnakeActionType {
  RESET_GAME = "RESET_GAME",
  SET_DIRECTION = "SET_DIRECTION",
  SET_IS_DEAD = "SET_IS_DEAD",
  SET_IS_PLAYING = "SET_IS_PLAYING",
  SET_SCORE = "SET_SCORE",
};

interface SnakeLocalStorage {
  highscore: number;
};

export interface SnakeState extends SnakeLocalStorage {
  apple: [number, number];
  direction: "up" | "down" | "left" | "right" | undefined;
  isDead: boolean;
  isPlaying: boolean;
  score: number;
  snake: [number, number][];
};

const localStrg = localStorage.getItem(CONST.SNAKE.LOCAL_STORAGE_KEY)
  ? (JSON.parse(localStorage.getItem(CONST.SNAKE.LOCAL_STORAGE_KEY) as string) as SnakeLocalStorage)
  : undefined;

const initialstate: SnakeState = {
  apple: [50, 50],
  direction: undefined,
  highscore: localStrg ? localStrg.highscore : 0,
  isDead: false,
  isPlaying: false,
  score: 0,
  snake: [[25, 25], [26, 25], [27, 25]],
};

const reducer = (state: SnakeState, action: ReducerAction<SnakeState, SnakeActionType>): SnakeState => {
  switch (action.type) {
    case "RESET_GAME":
      return initialstate;
    case "SET_DIRECTION":
      return {
        ...state,
        direction: action.payload?.direction,
      };
    case "SET_IS_DEAD":
      return {
        ...state,
        isDead: action.payload?.isDead !== undefined
          ? action.payload.isDead
          : true,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.payload?.isPlaying !== undefined
          ? action.payload.isPlaying
          : true,
      };
    case "SET_SCORE":
      return {
        ...state,
        ...[action.payload?.score && { score: action.payload?.score }],
      };
    default:
      return state;
  }
};

export const useSnakeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return [ state, dispatch ] as const;
};