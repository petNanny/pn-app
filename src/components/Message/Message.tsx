import {
  useUserGetAllConversationsQuery,
  useUserGetOneConversationQuery,
} from "../../redux/conversationApi";
import { useParams } from "react-router-dom";
import { Spinner, Box, Card, Flex, Input, Button } from "@chakra-ui/react";
import { useEffect, useMemo, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { PageContent } from "./styledMessage";
import {
  useUserOneConversationMessagesQuery,
  useSendMessageMutation,
} from "../../redux/messageApi";
import { io } from "socket.io-client";
import Messages from "./Messages/Messages";

const Message = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState<any>();
  const [messages, setMessages] = useState<any>();
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<any>();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [displayConversationId, setDisplayConversationId] = useState<string | null>(null);
  const scrollRef = useRef<any>();
  const { id } = useParams();
  const socket = io(process.env.REACT_APP_CHAT_URL || "http://localhost:5000");
  const { data: conversationData, isLoading: isConversationLoading } =
    useUserGetAllConversationsQuery(id);
  const {
    data: messageData,
    isLoading: isMessageLoading,
    refetch: refetchMessages,
  } = useUserOneConversationMessagesQuery(displayConversationId);
  const { data: currentConversationData, isLoading: isCurrentConversationLoading } =
    useUserGetOneConversationQuery(displayConversationId);
  const [sendMessage] = useSendMessageMutation();

  useEffect(() => {
    socket.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    });
  }, [socket]);

  useEffect(() => {
    arrivalMessage &&
      currentConversationData?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversationData]);

  useEffect(() => {
    socket.emit("addUser", id);
  }, [id]);

  useEffect(() => {
    setMessages(messageData);
  }, [messageData]);

  const handleConversationClick = (conversationId: string) => {
    console.log("conversationId: ", conversationId);
    setDisplayConversationId(conversationId);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = {
      conversationId: displayConversationId,
      sender: id,
      text: newMessage,
    };
    if (messageData && messageData.length > 0 && messageData[0].members) {
      const receiverId = messageData[0].conversationId.members.find(
        (member: { _id: string }) => member._id !== id
      )._id;
      console.log("receiverId: ", receiverId);
      socket.emit("sendMessage", {
        senderId: id,
        receiverId,
        text: newMessage,
      });
    }
    let receiverId: string;
    const targetConversation = conversationData.find(
      (conversation: any) => conversation._id === displayConversationId
    );
    if (targetConversation) {
      const targetMember = targetConversation.members.find((member: any) => member._id !== id);
      if (targetMember) {
        receiverId = targetMember._id;
        console.log("receiverId: ", receiverId);
        socket.emit("sendMessage", {
          senderId: id,
          receiverId,
          text: newMessage,
        });
      }
    }
    try {
      const res = await sendMessage({ body: message });
      await setMessages([...messages, res]);
      setNewMessage("");
      await refetchMessages();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!conversationData || conversationData.length === 0)
    return (
      <PageContent>
        <p>
          You don&apos;t have any messages at the moment. Contact a sitter and schedule a meet &
          greet{""}
          for free. Then finalism the booking by paying through the PetNanny platform.
        </p>
      </PageContent>
    );

  console.log("conversationData: ", conversationData);

  return (
    <PageContent>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column" width="30%">
          {conversationData.map((conversation: any, index: number) => (
            <Card
              key={index}
              height="3rem"
              width="100%"
              cursor="pointer"
              justifyContent="center"
              borderRadius="0"
              onClick={() => handleConversationClick(conversation._id)}
            >
              <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <p>
                  {conversation.members[0]._id === id
                    ? conversation.members[1].userName
                    : conversation.members[0].userName}
                </p>
              </Box>
            </Card>
          ))}
        </Box>
        <Box display="flex" width="100%" paddingLeft="3rem">
          <div>
            {currentConversationData ? (
              <>
                <div>
                  {messages &&
                    messages.length > 0 &&
                    messages.map((m: any, index: number) => (
                      <div key={index}>
                        {/* <Messages message={m} own={m.sender === id} /> */}
                        <div style={{ color: m.sender === id ? "red" : "green" }}>
                          message: {m.text}
                        </div>
                      </div>
                    ))}
                </div>
                <div>
                  <textarea
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button onClick={handleSubmit}>Send</button>
                </div>
              </>
            ) : (
              <span>Open a conversation to start a chat.</span>
            )}
          </div>
        </Box>
      </Box>
    </PageContent>
  );
};

export default Message;
