<template>
    <div class="login">
        <h3>Sign In</h3>
        <button @click="login">Get the fuck outta here!</button>
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
// var provider = new firebase.auth.GoogleAuthProvider();

export default {
    name: 'login',
    data() {
        return {};
    },
    created() {
        var u = localStorage.getItem('user');
        if (u) {
            this.$router.replace('/home');
        }
        firebase.auth().getRedirectResult().then(function(result) {
            // Google Access token
            var token = result.credential.accessToken;
            // Signed in user info
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            this.$router.replace('/home');
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    },
    methods: {
        login: function() {
            firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            // this.$router.replace('home');
        }
    }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }
    
    input {
        margin: 1em auto;
        width: 20%;
        padding: 15px;
        display: block;
    }

    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
        display: block;
        margin: auto;
        border-radius: 50%;
        background-color: white;
    }

    button:hover {
        background-color: #eaeaea;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
