import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const URL = process.env.REACT_APP_CHAT_URL || "http://localhost:5000";
const socket = io("http://localhost:5000/");

// const ENDPOINT = "http://localhost:5000";

const Chat = () => {
  // const [socketConnected, setSocketConnected] = useState(false);
  // const test = [
  //   { sender: "You", message: "Hello", receiver: "Me" },
  //   { sender: "You", message: "Hello", receiver: "Me" },
  // ];

  // const [messages, setMessages] = useState<any>(test);
  // const [newMessage, setNewMessage] = useState("");

  // useEffect(() => {
  //   console.log(socket);
  //   socket.on("new message", (message) => {
  //     setMessages((prevMessages: any) => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.off("new message");
  //   };
  // }, []);
  // useEffect(() => {
  //   // socket.emit("setup", userData);
  //   socket.on("connected", () => setSocketConnected(true));
  // }, []);

  // console.log(socket);

  // const handleNewMessageChange = (event: any) => {
  //   setNewMessage(event.target.value);
  // };

  // const handleNewMessageSubmit = (event: any) => {
  //   event.preventDefault();
  //   socket.emit("new message", {
  //     sender: "You",
  //     message: newMessage,
  //     receiver: "Me",
  //   });
  //   setNewMessage("");
  // };

  // const connect = () => {
  //   socket.connect();
  // };

  // const disconnect = () => {
  //   socket.disconnect();
  // };
  // const [message, setMessage] = useState('');
  // const [chatLog, setChatLog] = useState<string[]>([]);

  // useEffect(() => {
  //   // Listen for incoming chat messages from server
  //   socket.on('chat', (message: string) => {
  //     setChatLog((prevChatLog) => [...prevChatLog, message]);
  //   });

  //   // Clean up Socket.IO connection
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // const sendMessage = () => {
  //   // Send chat message to server
  //   socket.emit('chat', message);

  //   // Clear chat input field
  //   setMessage('');
  // };

  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setChatLog((prevChatLog) => [...prevChatLog, data.senderId + ": " + data.text]);
    });

    socket.on("getUsers", (data) => {
      setUsers(data);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.emit("sendMessage", { senderId: "myUserId", receiverId: "otherUserId", text: message });
    setMessage("");
  };

  return (
    <div>
      <ul>
        {chatLog.map((message: string, index: number) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
