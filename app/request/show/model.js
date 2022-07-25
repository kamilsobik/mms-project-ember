import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr('string') id;
  @attr('string') type;
  @attr('string') responder;
  @attr('string') requestor;
  @attr('string') machine;
  @attr('string') title;
  @attr('string') downtime;
  @attr('string') createdDate;
  @belongsTo('user') requestor;
}
