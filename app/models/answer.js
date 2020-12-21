import Model, { attr, belongsTo } from '@ember-data/model';

export default class Answer extends Model {
  @belongsTo("question") question;
  @attr("string") body;
  @attr("date", {
    defaultValue() {
      return new Date()
    }
  }) createdAt;
}