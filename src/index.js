import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDc_vAmhacSoWlhj_iBFvWSElO2jIaAx6g",
        authDomain: "mygames-efb82.firebaseapp.com",
        databaseURL: "https://mygames-efb82.firebaseio.com",
        projectId: "mygames-efb82",
        storageBucket: "mygames-efb82.appspot.com",
        messagingSenderId: "708809114401",
        appId: "1:708809114401:web:f2086e7c26b4e0a24e7460",
        measurementId: "G-867YEWHWWV"
    };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />,document.getElementById("app"));


