import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {id:1,name:'sonu mourya'},
      {id:2,name:'sunny'},
      {id:3,name:'sam'},
      {id:4,name:'suraj'},
      {id:5,name:'sachin'},
      {id:6,name:'sager'},
      {id:7,name:'sulakhan'},
      {id:8,name:'surinder'},
      {id:9,name:'saroj'},
      {id:10,name:'sikander'}
    ];
  }
});
