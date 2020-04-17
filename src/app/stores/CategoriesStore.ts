import { CategoryModel } from 'app/models';
import { useLocalStore } from 'mobx-react';

export type CategoriesStore = ReturnType<typeof useCategoriesStore>;
export const useCategoriesStore = (defaultCategories: CategoryModel[] = []) => {
  const store = useLocalStore(() => ({
    categories: defaultCategories,
    setCategories(items: CategoryModel[]): void {
      store.categories = items;
    },
  }));
  return store;
};
