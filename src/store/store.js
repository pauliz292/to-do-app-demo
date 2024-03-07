import {createContext, useContext} from 'react';

import TaskStore from './taskStore';

const store = {
  taskStore: new TaskStore(),
};
export default store;

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
