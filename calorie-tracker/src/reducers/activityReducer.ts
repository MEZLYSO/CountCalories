import { Activity } from "../types";
//
//

export type ActivityActions = {};

type ActivityState = {
  activities: Activity[];
};

//
//
export const initialState = {
  activities: [],
};
//
//
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions,
) => {};
