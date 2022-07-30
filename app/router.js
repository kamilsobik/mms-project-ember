import EmberRouter from '@ember/routing/router';
import config from 'mms-ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('responder');
  this.route('requestor');
  this.route('settings');
  this.route('kpi');

  this.route('request', function () {
    this.route('show');
  });
  this.route('requests');
  this.route('login');

  this.route('app', function () {
    this.route('user', function () {});
  });

  this.route('user', function () {
    this.route('show');
  });
  this.route('users');
  this.route('register');
});
