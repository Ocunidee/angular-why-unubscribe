import { BookDetail } from '../models/book-detail';

export const bookDetails: Map<number, BookDetail> = new Map([
  [
    1,
    {
      id: 1,
      title: 'The Jungle Book',
      author: {
        name: 'Rudyard Kipling',
        id: 1
      },
      editor: 'Macmillan',
      parutionYear: '1894',
      pageNumber: 206
    }
  ],
  [
    2,
    {
      id: 2,
      title: 'The Second Jungle Book',
      author: {
        name: 'Rudyard Kipling',
        id: 1
      },
      editor: 'Macmillan',
      parutionYear: '1895',
      pageNumber: 202
    }
  ],
  [
    3,
    {
      id: 3,
      title: 'Animal Farm',
      author: {
        name: 'George Orwell',
        id: 2
      },
      editor: 'Secker and Warburg',
      parutionYear: '1945',
      pageNumber: 112
    }
  ],
  [
    4,
    {
      id: 4,
      title: 'Empire of the Ants',
      author: {
        name: 'Bernard Werber',
        id: 3
      },
      editor: 'Le Livre de Poche',
      parutionYear: '1991',
      pageNumber: 306
    }
  ],
  [
    5,
    {
      id: 5,
      title: 'The Day of the Ants',
      author: {
        name: 'Bernard Werber',
        id: 3
      },
      editor: 'Le Livre de Poche',
      parutionYear: '1992',
      pageNumber: 402
    }
  ],
  [
    6,
    {
      id: 6,
      title: 'The Lion',
      author: {
        name: 'Joseph Kessel',
        id: 4
      },
      editor: 'Gallimard',
      parutionYear: '1958',
      pageNumber: 319
    }
  ],
  [
    7,
    {
      id: 7,
      title: 'White Fang',
      author: {
        name: 'Jack London',
        id: 5
      },
      editor: 'Macmillan',
      parutionYear: '1906',
      pageNumber: 204
    }
  ],
  [
    8,
    {
      id: 8,
      title: 'The Call of the Wild',
      author: {
        name: 'Jack London',
        id: 5
      },
      editor: 'Macmillan',
      parutionYear: '1903',
      pageNumber: 232
    }
  ]
]);
