import { observable } from 'mobx';

export class CategoryModel {
  readonly id: number;
  @observable public listName: string;
  @observable public title: string;
  @observable public updateType: string;
  @observable public lastPublishedAt: string;

  constructor(
    listName: string,
    title: string,
    updateType: string,
    lastPublishedAt: string
  ) {
    this.id = CategoryModel.generateId();
    this.listName = listName;
    this.title = title;
    this.updateType = updateType;
    this.lastPublishedAt = lastPublishedAt;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default CategoryModel;
