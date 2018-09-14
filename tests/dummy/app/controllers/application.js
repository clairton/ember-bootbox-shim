import Ember from 'ember';
import bootbox from 'bootbox';

export default Ember.Controller.extend({
  actions: {
    open(){
      bootbox.alert('Bootbox is loaded!');
    }
  }
});
