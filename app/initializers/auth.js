// ## in file ###

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

// export default {
//   name: 'auth',
//   initialize: initialize
// };


// ## from tutorial ####
import Ember from 'ember';

var Ref = new window.Firebase('https://blog2ember.firebaseio.com/');
// var Ref = new window.Firebase("https://<your firebase>.firebaseio.com/");


var auth = Ember.Object.extend({
  authed: false,
  username: '',
  init: function() {
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, twitterUser){
      if (error) {
        alert("Authecntication failed: " + error);
        this.set('authed', true);
        this.set('username', twitterUser.username);
      } else {
        this.set('authed', false);
      }

    }.bind(this));
  }
});

export default {
  name: "Auth",

  initialize: function( container, app ) {
    app.register('auth:main', auth, {singleton: true});
    app.inject('controller', 'auth', 'auth:main');
    app.inject('route', 'auth', 'auth:main');
  }

};























