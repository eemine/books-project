import * as React from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import BookModel from 'app/models/BookModel';
import BookList from 'app/components/BookList';
import Container from '@material-ui/core/Container';
import { useBookStore } from 'app/stores/BookStore';
import { getAmazonImageUrl } from 'app/utils/images';
import { getBooks } from 'app/api/books-api';

export const BooksContainer = observer(() => {
  const { listName } = useParams();
  const bookStore = useBookStore();

  React.useEffect(() => {
    getBooks(listName).then(({ data }) => {
      bookStore.setBooks(
        data.results.map(
          (result) =>
            new BookModel(
              result.book_details[0].author,
              result.book_details[0].title,
              result.published_date,
              getAmazonImageUrl(result.amazon_product_url),
              result.book_details[0].description
            )
        )
      );
    });
  }, [getBooks]);

  return (
    <Container>
      <BookList books={bookStore.books} />
    </Container>
  );
});
