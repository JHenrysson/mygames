import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// importing firebase ^^ and their libraries ^

// create a function to be able to access this from the outside
// game - is either memory game or minesweeper
//first we get the firebase .auth()
//
//returns a promise holding an array of our score objects
// game parameter is either memory | snake | minesweeper (collection id)

export function fetchLeaderboard(game) {
    const auth = firebase.auth();
    const db = firebase.firestore();
    return auth
        .signInAnonymously()
        .then(() => db.collection(game).orderBy("timeMs", "asc").get())
        .then((querySnapshot) => {
            let leaderboard = [];
            querySnapshot.forEach((doc) => {
                leaderboard.push(doc.data());
            });
            return leaderboard;
        })
        .catch(function (error) {
            console.log("Error getting leaderboard: ", error);
        });
}

/*
* returns a promise for saving the score
* */
export function saveScore(game, score) {
    const auth = firebase.auth();
    const db = firebase.firestore();
    return auth
        .signInAnonymously()
        .then(() => db.collection(game).add(score))
        .catch(function (error) {
            console.log("Error saving score: ", error);
        });
}