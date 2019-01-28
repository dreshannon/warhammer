import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import { config } from './helpers/firebaseConfig';

require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

Vue.config.productionTip = false;

firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
