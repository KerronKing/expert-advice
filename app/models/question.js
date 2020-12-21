import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Question extends Model {
  @belongsTo("user") user;
  @hasMany("answer") answers;
  @attr("string") title;
  @attr("string") description;
  @attr tags;
  @attr("date", {
    defaultValue() {
      return new Date()
    }
  }) createdAt;
}
