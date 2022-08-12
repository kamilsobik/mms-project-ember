import Model, { attr } from '@ember-data/model';

export default class LineModel extends Model {
  @attr('string') lineName;
}
