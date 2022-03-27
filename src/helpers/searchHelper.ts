import { ITodo } from './localStorageHelper';

export const searchHelper = (
  data: ITodo[] | undefined,
  searchValue: string
): ITodo[] | undefined => {
  const reg = new RegExp(`${searchValue}`, 'gim');
  if (data) {
    return data.filter((item) => {
      if (item.title.match(reg)) {
        return item;
      }
    });
  }
};
