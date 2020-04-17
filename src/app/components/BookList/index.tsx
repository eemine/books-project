import * as React from 'react';
import { BookModel } from 'app/models/BookModel';
import Grid from '@material-ui/core/Grid';
import Card from 'app/components/Card';

export interface BookListProps {
  books: BookModel[];
}

const BookList = ({ books }: BookListProps) => (
  <Grid
    container
    spacing={3}
    style={{ marginTop: '20px', marginBottom: '20px' }}
  >
    {books.map((book) => (
      <Grid key={book.id} item lg={3} md={4} sm={6} xs={12}>
        <Card
          id={book.id}
          author={book.author}
          bookName={book.bookName}
          publishDate={book.publishDate}
          image={book.image}
          description={book.description}
        />
      </Grid>
    ))}
  </Grid>
);

export default BookList;
