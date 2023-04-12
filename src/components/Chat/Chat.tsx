import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_CHAT_URL || "http://localhost:5000");

const Chat = () => {
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
    <>
      <div>chat</div>
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
    </>
  );
};

export default Chat;
