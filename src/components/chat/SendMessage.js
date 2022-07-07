import React, { useState } from "react";
import { db, auth, storage } from "../../Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Input, Button } from "@material-ui/core";
import "../../index.css";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  const [imageUpload, setImageUpload] = useState(null);
  const imagesListRef = ref(storage, "images/");
  const imgupload = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async(url) => {
            const { uid, photoURL } = auth.currentUser;

            await db.collection("messages").add({
              url,
              photoURL,
              uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        });
      });
    
  };

  return (
    <div >
      <form>
        <div className="sendMsg">
          <div className="sendpic">
          
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
            setImageUpload(event.target.files[0]);
            }}
          />
          <button className="btn btn-primary btn-success" style={{marginTop:"10px"}} onClick={imgupload}>Send Image</button>
          </div >
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
              height: "60px",
              // backgroundColor :"lightskyblue",
              color: "black"
            }}
            placeholder="Write Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            className="btn btn-success"
            onClick={sendMessage}
            style={
              {
                width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
              backgroundColor :"limegreen",
              backgroundColor :"lightskyblue",
              
              }
            }
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
