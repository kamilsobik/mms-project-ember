import EmberRouter from '@ember/routing/router';
import config from 'mms-ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('settings');
    this.route('kpi');
    this.route('request', function () {});
    this.route('requests');
    this.route('open-request');
    this.route('close-request');
    this.route('app', function () {
      this.route('user', function () {});
    });
    this.route('user', function () {});
    this.route('users');
  });

  this.route('login');
  this.route('register');
});
