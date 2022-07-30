import RESTAdapter from '@ember-data/adapter/rest';
import LocalStorageAdapter from 'ember-local-storage/adapters/local';
import ENV from 'mms-ember-project/config/environment';

const isTesting = ENV.environment === 'test';
const Adapter = isTesting ? RESTAdapter : LocalStorageAdapter;

export default class ApplicationAdapter extends Adapter {}
