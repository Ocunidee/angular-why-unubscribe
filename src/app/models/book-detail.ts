import { Author } from './author';

export interface BookDetail {
  id: number;
  title: string;
  author: Author;
  editor: string;
  parutionYear: string | number;
  pageNumber: string | number;
}
