import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') password;
  @attr('string') email;
  @attr('string', { defaultValue: 'requestor' }) userType;
  @hasMany('request') requests;
}
