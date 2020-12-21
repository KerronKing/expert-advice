import Model, { attr, hasMany } from '@ember-data/model';

export default class User extends Model {
  @hasMany("question") questions;
  @attr("string") email;
  @attr("string") password;
}
