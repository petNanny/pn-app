import {
  useUserGetAllConversationsQuery,
  useUserGetOneConversationQuery,
} from "../../redux/conversationApi";
import { useParams } from "react-router-dom";
import { Box, Card, Button, useToast, Text, Avatar, Icon } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { PageContent } from "./styledMessage";
import {
  useUserOneConversationMessagesQuery,
  useSendMessageMutation,
} from "../../redux/messageApi";
import { io } from "socket.io-client";
import TextareaAutosize from "react-textarea-autosize";
import { FiExternalLink } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";

const Message = () => {
  const toast = useToast();
  const [isOtherMemberBtnHidden, setIsOtherMemberBtnHidden] = useState(true);
  const [messages, setMessages] = useState<any>();
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<any>();
  const [displayConversationId, setDisplayConversationId] = useState<string | null>(null);
  const messageContainerRef = useRef<any>();
  const { id } = useParams();
  const socket = io(process.env.REACT_APP_CHAT_URL || "");
  const { data: conversationData } = useUserGetAllConversationsQuery(id);
  const { data: messageData, refetch: refetchMessages } =
    useUserOneConversationMessagesQuery(displayConversationId);
  const { data: currentConversationData } = useUserGetOneConversationQuery(displayConversationId);
  const [sendMessage, { isLoading: isMessageSubmitting }] = useSendMessageMutation();

  useEffect(() => {
    socket.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
      refetchMessages();
    });
  }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentConversationData?.members.includes(arrivalMessage.sender) &&
  //     setMessages((prev: any) =>
  //       Array.isArray(prev) ? [...prev, arrivalMessage] : [arrivalMessage]
  //     );
  // }, [arrivalMessage, currentConversationData]);
  useEffect(() => {
    arrivalMessage &&
      setMessages((prev: any) =>
        Array.isArray(prev) ? [...prev, arrivalMessage] : [arrivalMessage]
      );
  }, [arrivalMessage]);

  useEffect(() => {
    socket.emit("addUser", id);
  }, [id]);

  useEffect(() => {
    setMessages(messageData);
  }, [messageData]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    arrivalMessage && refetchMessages();
  }, [arrivalMessage]);

  const handleConversationClick = (conversationId: string) => {
    setDisplayConversationId(conversationId);
    setIsOtherMemberBtnHidden(false);
  };

  const handleRefreshMessages = () => {
    refetchMessages();
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
      setMessages([...messages, res]);
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
  let otherMemberAvatar = "";
  let otherMemberPetSitterId = "";
  const targetConversation = conversationData.find(
    (conversation: { _id: string }) => conversation._id === displayConversationId
  );
  if (targetConversation) {
    const targetMember = targetConversation.members.find(
      (member: { _id: string }) => member._id !== id
    );
    if (targetMember) {
      otherMemberName = targetMember.userName;
      otherMemberAvatar = targetMember.avatar;
      otherMemberPetSitterId = targetMember.petSitter;
    }
  }

  const otherMemberUrl = `/petSitter/${otherMemberPetSitterId}`;
  const handleOtherMemberClick = () => {
    window.open(otherMemberUrl, "_blank");
  };

  return (
    <PageContent>
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          width="35%"
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
              border="none"
              shadow="none"
              color="rgb(0, 175, 237)"
              backgroundColor={conversation._id === displayConversationId ? "#d5e7f5" : "white"}
              onClick={() => handleConversationClick(conversation._id)}
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  margin="0 1rem"
                  src={
                    conversation.members[0]._id === id
                      ? conversation.members[1].avatar
                      : conversation.members[0].avatar
                  }
                />
                <Box display="flex" flexDirection="column">
                  <Text>
                    {conversation.members[0]._id === id
                      ? conversation.members[1].userName
                      : conversation.members[0].userName}
                  </Text>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
        <Box display="flex" width="100%" paddingLeft="3rem" flexDirection="column">
          <Box display="flex" alignItems="center" hidden={isOtherMemberBtnHidden ? true : false}>
            <Button
              margin="0 auto 0 0"
              height="100%"
              background="transparent"
              padding="1rem"
              _hover={{ background: "transparent" }}
              onClick={handleOtherMemberClick}
            >
              <Box display="flex" alignItems="center">
                <Avatar src={otherMemberAvatar} />
                <Box marginLeft="1rem">{otherMemberName}</Box>
                <Icon as={FiExternalLink} marginLeft="0.5rem" />
              </Box>
            </Button>
            <Button background="transparent" onClick={handleRefreshMessages}>
              <Icon as={TbRefresh} fontSize="1.5rem" marginLeft="0.5rem" />
            </Button>
          </Box>
          <Box>
            {currentConversationData ? (
              <>
                <Box
                  border="1px solid black"
                  padding="1rem"
                  height="60vh"
                  overflowY="scroll"
                  ref={messageContainerRef}
                  display="flex"
                  flexDirection="column-reverse"
                >
                  {messages &&
                    messages.length > 0 &&
                    messages.map(
                      (
                        m: { sender: string; text: string; _id: string; createdAt: Date },
                        index: number
                      ) => (
                        <Box key={index}>
                          <Box
                            color="rgba(0, 0, 0, 0.87)"
                            justifyContent={m.sender === id ? "flex-end" : "flex-start"}
                            display="flex"
                            key={index}
                            margin="0.2rem 0 0"
                          >
                            <Box
                              display="flex"
                              flexDirection="column"
                              alignItems={m.sender === id ? "flex-end" : "flex-start"}
                            >
                              <Box
                                borderRadius={
                                  m.sender === id ? "0.6rem 0 0 0.6rem" : "0 0.6rem 0.6rem 0"
                                }
                                backgroundColor={m.sender === id ? "#6ea9d7" : "#c6e3fa"}
                                padding="0.5rem 1rem"
                                maxWidth="80%"
                              >
                                {m.text}
                              </Box>
                              <Box fontSize="0.8rem">{new Date(m.createdAt).toLocaleString()}</Box>
                            </Box>
                          </Box>
                        </Box>
                      )
                    )}
                </Box>
                <Box padding="0.5rem 0" height="4rem" display="flex">
                  <TextareaAutosize
                    style={{
                      backgroundColor: "#c6e3fa",
                      borderRadius: "0.5rem",
                      width: "100%",
                      padding: "0.5rem 1rem",
                      outline: "none",
                    }}
                    minRows={1}
                    maxRows={3}
                    placeholder="say something..."
                    cacheMeasurements
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button
                    onClick={handleSubmit}
                    isDisabled={newMessage ? false : true}
                    backgroundColor="transparent"
                    isLoading={isMessageSubmitting ? true : false}
                  >
                    Send
                  </Button>
                </Box>
              </>
            ) : (
              <Box paddingTop="1.5rem">Click a username to start a chat.</Box>
            )}
          </Box>
        </Box>
      </Box>
    </PageContent>
  );
};

export default Message;
