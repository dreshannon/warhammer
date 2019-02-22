<template>
    <div class="login">
        <h3>Sign In</h3>
        <button class="btn btn-success" @click="login"><i class="fab fa-google"></i> Sign in with Google</button>
    </div>
</template>

<script>
import firebase from 'firebase/app';
// var provider = new firebase.auth.GoogleAuthProvider();

export default {
    name: 'login',
    props: ['fb'],
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$router.replace('/home');
            }
        });
        firebase.auth().getRedirectResult().then(function(result) {
            // Google Access token
            var token = result.credential.accessToken;
            this.$router.replace('/home');
        }).catch(function(error) {
            console.log('Error: ' + error);
        });
    },
    methods: {
        login: function() {
            firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function(error) {
            //     console.log(error);
            // });
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    margin-top: 40px;
}

/* button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    display: block;
    margin: auto;
    background-color: white;
}

button:hover {
    background-color: #eaeaea;
} */
</style>
