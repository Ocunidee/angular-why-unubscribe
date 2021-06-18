import { AuthorDetail } from '../models/author-detail';
import { books } from '../data/book-list';

export const authorDetails: Map<number, AuthorDetail> = new Map([
  [
    1,
    {
      id: 1,
      name: 'Rudyard Kipling',
      nationality: 'British',
      birthYear: '1865',
      books: books.filter(book => book.author === 'Rudyard Kipling')
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'George Orwell',
      nationality: 'British',
      birthYear: '1903',
      books: books.filter(book => book.author === 'George Orwell')
    }
  ],
  [
    3,
    {
      id: 3,
      name: 'Bernard Werber',
      nationality: 'French',
      birthYear: '1961',
      books: books.filter(book => book.author === 'Bernard Werber')
    }
  ],
  [
    4,
    {
      id: 4,
      name: 'Joseph Kessel',
      nationality: 'French',
      birthYear: '1898',
      books: books.filter(book => book.author === 'Joseph Kessel')
    }
  ],
  [
    5,
    {
      id: 5,
      name: 'Jack London',
      nationality: 'American',
      birthYear: '1876',
      books: books.filter(book => book.author === 'Jack London')
    }
  ]
]);
