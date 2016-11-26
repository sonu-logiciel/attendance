import Ember from 'ember';

export default Ember.Route.extend({
  isWide: false,
  model(params){
    return this.get('store').findRecord('rental',params.rental_id);
  },
  actions:{
    toggleImageSize(){
      this.toggleProperty('isWide');
    }
  }
});
