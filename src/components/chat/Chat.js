import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../Firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import "../../index.css"

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    
    return (
        <div >
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid ,url }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img className="userpic" src={photoURL} alt="" />
                            <p>{text}</p>
                            <img className="imggg img-fluid" src={url} />
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll}  />
            <div ref={scroll} ></div>
        </div>
    )
}
export default Chat