export interface ReducerAction<S, T> {
  payload?: Partial<S>;
  type: T;
};