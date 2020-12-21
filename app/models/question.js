import Model, { attr } from '@ember-data/model';

export default class Question extends Model {
  @attr("string") title;
  @attr("string") description;
  @attr tags;
  @attr("date", {
    defaultValue() {
      return new Date()
    }
  }) createdAt;
}
