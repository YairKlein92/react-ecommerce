// Define a base action type
type BaseAction<T extends string, P = undefined> = P extends undefined
  ? { type: T }
  : { type: T; payload: P };

// Matchable type for action creators
type Matchable<AC extends (...args: any[]) => BaseAction<any, any>> = AC & {
  type: ReturnType<AC>['type'];
  match(action: BaseAction<any, any>): action is ReturnType<AC>;
};

// Updated withMatcher function
export function withMatcher<
  AC extends (...args: any[]) => BaseAction<any, any>,
>(actionCreator: AC): Matchable<AC> {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: BaseAction<any, any>): action is ReturnType<AC> {
      return action.type === type;
    },
  });
}

// Action types
export type ActionWithPayload<T extends string, P> = { type: T; payload: P };
export type Action<T extends string> = { type: T };

// Updated createAction function with correct return types
export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): Action<T> | ActionWithPayload<T, P> {
  return payload === undefined ? { type } : { type, payload };
}

// export type Action<T extends string, P = void> = P extends void
//   ? { type: T }
//   : { type: T; payload: P };

// export function createAction<T extends string, P = void>(
//   type: T,
//   payload?: P
// ): Action<T, P> {
//   return payload === undefined ? { type } : { type, payload };
// }
