import { BookModel } from 'app/models';
import { useLocalStore } from 'mobx-react';

export type BookStore = ReturnType<typeof useBookStore>;
export const useBookStore = (defaultBooks: BookModel[] = []) => {
  const store = useLocalStore(() => ({
    books: defaultBooks,
    setBooks(items: BookModel[]): void {
      store.books = items;
    },
  }));
  return store;
};
