export const EXTENSION_STATE = 'EXTENSION_STATE';

export const getLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(EXTENSION_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const setLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(EXTENSION_STATE, serializedState);
  } catch (error) {
    // Ignore write errors.
  }
};
