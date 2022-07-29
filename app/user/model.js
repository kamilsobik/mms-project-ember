import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') password;
  @attr('string') email;
  @attr('boolean', { defaultValue: false }) isRequestor;
  @attr('boolean', { defaultValue: false }) isAdmin;
  @hasMany('request') requests;
}
