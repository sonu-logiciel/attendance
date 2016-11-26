import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employees');
  // this.route('employe');
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    // this.route('index', { path: '/custom-path'})
  this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
