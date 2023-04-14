import {
  useUserGetAllConversationsQuery,
  useUserGetOneConversationQuery,
} from "../../redux/conversationApi";
import { useParams } from "react-router-dom";
import { Spinner, Box, Card, Flex, Input, Button, useToast, Text, Avatar } from "@chakra-ui/react";
import { useEffect, useMemo, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { PageContent } from "./styledMessage";
import {
  useUserOneConversationMessagesQuery,
  useSendMessageMutation,
} from "../../redux/messageApi";
import { io } from "socket.io-client";

const Message = () => {
  const toast = useToast();
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
    setDisplayConversationId(conversationId);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = {
      conversationId: displayConversationId,
      sender: id,
      text: newMessage,
    };
    let receiverId: string;
    const targetConversation = conversationData.find(
      (conversation: { _id: string }) => conversation._id === displayConversationId
    );
    if (targetConversation) {
      const targetMember = targetConversation.members.find(
        (member: { _id: string }) => member._id !== id
      );
      if (targetMember) {
        receiverId = targetMember._id;
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
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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

  let otherMemberName = "";
  const targetConversation = conversationData.find(
    (conversation: { _id: string }) => conversation._id === displayConversationId
  );
  if (targetConversation) {
    const targetMember = targetConversation.members.find(
      (member: { _id: string }) => member._id !== id
    );
    if (targetMember) {
      otherMemberName = targetMember.userName;
    }
  }

  return (
    <PageContent>
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          width="30%"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            overflow: "auto",
          }}
        >
          {conversationData.map((conversation: any) => (
            <Card
              key={conversation._id}
              height="5rem"
              width="100%"
              cursor="pointer"
              justifyContent="center"
              borderRadius="0"
              color="rgb(0, 175, 237)"
              fontWeight={conversation._id === displayConversationId ? "bold" : "normal"}
              onClick={() => handleConversationClick(conversation._id)}
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  marginLeft="2rem"
                  src={
                    conversation.members[0]._id === id
                      ? conversation.members[1].avatar
                      : conversation.members[0].avatar
                  }
                />
                <Text marginLeft="3rem">
                  {conversation.members[0]._id === id
                    ? conversation.members[1].userName
                    : conversation.members[0].userName}
                </Text>
              </Box>
            </Card>
          ))}
        </Box>
        <Box display="flex" width="100%" paddingLeft="3rem" flexDirection="column">
          <Box margin="0 auto 1rem">{otherMemberName}</Box>
          <Box>
            {currentConversationData ? (
              <>
                <Box border="1px solid black" padding="1rem" height="60vh" overflowY="scroll">
                  {messages &&
                    messages.length > 0 &&
                    messages.map((m: { sender: string; text: string; _id: string }) => (
                      <Box key={m._id}>
                        <Box
                          color={m.sender === id ? "red" : "green"}
                          justifyContent={m.sender === id ? "flex-end" : "flex-start"}
                          display="flex"
                        >
                          {m.text}
                        </Box>
                      </Box>
                    ))}
                </Box>
                <Box padding="1rem" height="5rem">
                  <Input
                    placeholder="leave your message here..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <button onClick={handleSubmit}>Send</button>
                </Box>
              </>
            ) : (
              <span>Open a conversation to start a chat.</span>
            )}
          </Box>
        </Box>
      </Box>
    </PageContent>
  );
};

export default Message;
