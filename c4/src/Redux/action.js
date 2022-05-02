// action types
export const ADD_REA = "ADD_REA"
// Action Creators
export const repairReducer = (data)=>{
    return {
      type: ADD_REA,
      payload:data
    };
}