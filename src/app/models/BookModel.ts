import { observable } from 'mobx';

export class BookModel {
  readonly id: number;
  @observable public author: string;
  @observable public bookName: string;
  @observable public publishDate: string;
  @observable public image: string;
  @observable public description: string;

  constructor(
    author: string,
    bookName: string,
    publishDate: string,
    image: string,
    description: string
  ) {
    this.id = BookModel.generateId();
    this.author = author;
    this.bookName = bookName;
    this.publishDate = publishDate;
    this.image = image;
    this.description = description;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default BookModel;
