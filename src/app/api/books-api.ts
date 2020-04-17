import axios from 'axios';

const createRequestUrl = (request: string, query?: string): string =>
  `https://api.nytimes.com/svc/books/v3/${request}?api-key=9SqowuYO6prbxPwdEGwdctlqRqc2VvBZ${
    query ? `&${query}` : ''
  }`;

interface BookDetails {
  title: string;
  description: string;
  contributor: string;
  author: string;
  contributor_note: string;
  price: 0;
  age_group: string;
  publisher: string;
  primary_isbn13: string;
  primary_isbn10: string;
}

interface BookData {
  list_name: string;
  display_name: string;
  published_date: string;
  rank: 1;
  rank_last_week: 1;
  weeks_on_list: 84;
  amazon_product_url: string;
  book_details: BookDetails[];
}

interface BooksData {
  results: BookData[];
}

interface AxiosBooksResponse {
  data: BooksData;
}

export const getBooks = (listName: string): Promise<AxiosBooksResponse> =>
  axios.get(createRequestUrl('lists.json', `list=${listName}`));

interface CategoryData {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

interface AxiosCategoryResponse {
  data: {
    results: CategoryData[];
  };
}

export const getCategories = (): Promise<AxiosCategoryResponse> =>
  axios.get(createRequestUrl('lists/names.json'));
