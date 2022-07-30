import RESTSerializer from '@ember-data/serializer/rest';
import LocalStorageSerializer from 'ember-local-storage/serializers/serializer';
import ENV from 'mms-ember-project/config/environment';

const isTesting = ENV.environment === 'test';
const Serializer = isTesting ? RESTSerializer : LocalStorageSerializer;

export default class ApplicationSerializer extends Serializer {}
