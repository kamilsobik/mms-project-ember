import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr('string') type;
  @attr('string') machine;
  @attr('string') title;
  @attr('number') downtime;
  @attr('string') solution;
  @attr('string', { defaultValue: 'open' }) status;
  @attr('date', { defaultValue: () => new Date() }) createdAt;
  @belongsTo('user', { autoSave: true }) owner;
}
