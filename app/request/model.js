import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr('string') type;
  @attr('string') machine;
  @attr('string') title;
  @attr('string') downtime;
  @attr('string') status;
  @attr('date') createdAt;
  @belongsTo('user', { autoSave: true }) owner;
}
