import { AuthorDetail } from '../models/author-detail';
import { books } from '../data/book-list';

export const authorDetails: AuthorDetail[] = [
  {
    id: 0,
    name: 'Rudyard Kipling',
    nationality: 'British',
    birthYear: '1865',
    books: books.filter(book => book.author === 'Rudyard Kipling')
  },
  {
    id: 1,
    name: 'George Orwell',
    nationality: 'British',
    birthYear: '1903',
    books: books.filter(book => book.author === 'George Orwell')
  },
  {
    id: 2,
    name: 'Bernard Werber',
    nationality: 'French',
    birthYear: '1961',
    books: books.filter(book => book.author === 'Bernard Werber')
  },
  {
    id: 3,
    name: 'Joseph Kessel',
    nationality: 'French',
    birthYear: '1898',
    books: books.filter(book => book.author === 'Joseph Kessel')
  },
  {
    id: 4,
    name: 'Jack London',
    nationality: 'American',
    birthYear: '1876',
    books: books.filter(book => book.author === 'Jack London')
  }
];
