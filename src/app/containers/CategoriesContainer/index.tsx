import * as React from 'react';
import { observer } from 'mobx-react';
import { CategoryModel } from 'app/models';
import { useCategoriesStore } from 'app/stores/CategoriesStore';
import { getCategories } from 'app/api/books-api';
import Container from '@material-ui/core/Container';
import CategoryList from 'app/components/CategoryList';

export const CategoriesContainer = observer(() => {
  const categoriesStore = useCategoriesStore();

  React.useEffect(() => {
    getCategories().then(({ data }) => {
      categoriesStore.setCategories(
        data.results.map(
          (result) =>
            new CategoryModel(
              result.list_name_encoded,
              result.display_name,
              result.updated,
              result.newest_published_date
            )
        )
      );
    });
  }, [getCategories]);

  return (
    <Container>
      <CategoryList items={categoriesStore.categories} />
    </Container>
  );
});
