/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../services/firebase";

function ChatRoom({ user }) {
  const [messages, setMessages] = useState([]);
  //   const [user, setUser] = useState(auth().currentUser);
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  const [inputClass, setInputClass] = useState("");

  const dummyDiv = useRef();
  let chatInput = useRef();

  /** handler for sending messages, updating db */
  const sendMessage = async (e) => {
    e.preventDefault();
    setWriteError(null);

    if (content !== "") {
      try {
        await db.ref("chats").push({
          content,
          timestamp: Date.now(),
          uid: user.uid,
          email: user.email,
        });
        setContent("");

        dummyDiv.current.scrollIntoView({ behaviour: "smooth" });
      } catch (err) {
        setWriteError(err.message);
      }
    }
  };

  /** handle form change and trim start to ensure no whitespace can be written to db */
  const handleChange = (e) => {
    setContent(e.target.value.trimStart());
  };

  useEffect(() => {
    chatInput.focus();
    setReadError(null);

    /** get existing messages in doc on page load. setting a limit to it */
    async function getSnapshot() {
      try {
        db.ref("chats")
          .limitToLast(500)
          .on("value", (snapshot) => {
            let message = [];
            snapshot.forEach((snap) => {
              message.push(snap.val());
            });
            setMessages(message);
          });
      } catch (err) {
        setReadError(err.message);
      }
    }

    getSnapshot().then(() => {
      setTimeout(() => {
        if (dummyDiv.current) {
          dummyDiv.current.scrollIntoView({ behaviour: "smooth" });
        }
      }, 1700);
    });

    return () => {};
  }, [user]);

  return (
    <div>
      <div>
        <div>
          <div>
            <span>DheraGram</span>
            {messages.map((text) => {
              /** check to see if message bubble was sent or received */

              return (
                <div key={text.timestamp} className={`flex`}>
                  <p title={new Date(text.timestamp).toLocaleString()}>
                    {text.content}
                  </p>
                </div>
              );
            })}
            <span ref={dummyDiv}></span>
          </div>
        </div>
      </div>
      <div className="input-container flex">
        <form
          onSubmit={sendMessage}
          autoComplete="off"
          style={{ display: "flex" }}
        >
          <input
            style={{ marginRight: "5px" }}
            onChange={handleChange}
            value={content}
            name="content"
            placeholder="DheraGram"
            className={`${inputClass}`}
            ref={(input) => (chatInput = input)}
          />
          <label htmlFor="submit">
            <p>Send</p>
          </label>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
