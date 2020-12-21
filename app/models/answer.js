import Model, { attr } from '@ember-data/model';

export default class Answer extends Model {
  @attr("string") body;
  @attr("date", {
    defaultValue() {
      return new Date()
    }
  }) createdAt;
}