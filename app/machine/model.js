import Model, { attr } from '@ember-data/model';

export default class MachineModel extends Model {
  @attr('string') machineName;
}
