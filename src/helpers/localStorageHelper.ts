export const getParsedItem = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) as string) as T;
};

export const setItemToStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const hasItem = (key: string): boolean => {
  return !!localStorage.getItem(key);
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export interface ITodo {
  id: string;
  title: string;
  description: string;
}
