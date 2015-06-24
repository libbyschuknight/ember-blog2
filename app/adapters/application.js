// ### from file #####

import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});


// ## from tutorial ####

// import DS from 'ember-data';

// export default DS.FriebaseAdapter.extend({
//   firebase: new window.Firebase("https://blog2ember.firebaseio.com/")
// });
