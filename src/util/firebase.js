/* eslint-disable */
import firebase from 'firebase/app';

require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

export default class Firebase {
    constructor() {
        // Initialize Firebase
        this._config = {
            apiKey: "AIzaSyBWtueTAOm6HNH1AzoaWc7osqK1cXhoAxI",
            authDomain: "warhammer-8fc7f.firebaseapp.com",
            databaseURL: "https://warhammer-8fc7f.firebaseio.com",
            projectId: "warhammer-8fc7f",
            storageBucket: "warhammer-8fc7f.appspot.com",
            messagingSenderId: "837727629518"
        };
        firebase.initializeApp(this._config);

        // Initialize Cloud Firestore through Firebase
        this._db = firebase.firestore();

        this._docRef = null; // Document reference for retrieveing data from Firebase Cloud Firestore database
        this._docData = null; // Variable for contents of document reference
    }

    get docRef() {
        return this._docRef;
    }

    get docData() {
        return this._docData;
    }

    /**
     * Set document variable for data retrieval from Firebase Cloud Firestore
     * @param {string} collection - Collection where document is stored
     * @param {string} val - Requested document
     */
    setDocument(collection, val) {
        this._docRef = this._db.collection(collection).doc(val);
    }

    /**
     * Store contents of docRef into docData global veriable
     */
    setDocumentData() {
        if (this.docRef) {
            this.docRef.get().then((doc) => {
                if (doc.exists) {
                    this._docData = doc.data();
                    console.log(this.docData);
                } else {
                    console.log('Document does not exist!');
                }
            });
        } else {
            console.log('Document has not been set. To set document, call setDocument(string: val) function.');
        }
    }
}