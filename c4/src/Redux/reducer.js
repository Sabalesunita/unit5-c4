// const init = {};

// export const reducer = (store = init, { type, payload }) => {
//   switch (type) {
//     default:
//       return store;
//   }
// };

import { ADD_REA } from "./actions";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_REA:
      return {
        ...store, task:{...store.task,task:payload}
      }
    default:
      return store;
  }
};