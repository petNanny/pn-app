import { useUserGetAllConversationsQuery } from "../../redux/conversationApi";
import { useParams } from "react-router-dom";
import { Spinner, Box, Card, Flex, Input, Button } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { PageContent } from "./styledMessage";
import { useGetOnePetOwnerQuery } from "../../redux/petOwnerApi";
import { useUserOneConversationMessagesQuery } from "../../redux/messageApi";
import { io } from "socket.io-client";
import { useSendMessageMutation } from "../../redux/messageApi";

const Message = () => {
  const { id } = useParams();
  const { data: conversationData, isLoading: isConversationLoading } =
    useUserGetAllConversationsQuery(id);
  const [displayConversationId, setDisplayConversationId] = useState<string | null>(null);
  const {
    data: messageData,
    isLoading: isMessageLoading,
    refetch: refetchMessages,
  } = useUserOneConversationMessagesQuery(displayConversationId);
  console.log("messageData: ", messageData);

  const [otherMemberName, setOtherMemberName] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [sendMessage] = useSendMessageMutation();

  if (isConversationLoading) return <Spinner />;

  console.log("conversationData: ", conversationData);

  // const socket = io(process.env.REACT_APP_CHAT_URL || "http://localhost:5000");

  // useEffect(() => {
  //   socket.emit("addUser", currentUserId);
  // }, []);

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

  const currentUserId = id;
  const contactNames = conversationData.map((conversation: any) => {
    const otherMember = conversation.members.find(
      (member: { _id: string }) => member._id !== currentUserId
    );
    return otherMember ? otherMember.userName : "";
  });

  const handleConversationClick = (conversationId: string) => {
    console.log("conversationId: ", conversationId);
    setDisplayConversationId(conversationId);
    // const otherMember = messageData?.members.find(
    //   (member: { _id: string }) => member._id !== currentUserId
    // ).userName;
    // setOtherMemberName(otherMember);
  };

  const handleMessageSubmit = async (e: any) => {
    e.preventDefault();
    const message = {
      conversationId: displayConversationId,
      sender: currentUserId,
      text: newMessage,
    };
    const receiverId = messageData?.members?.find(
      (member: { _id: string }) => member._id !== currentUserId
    )._id;
    // socket.emit("sendMessage", {
    //   senderId: currentUserId,
    //   receiverId,
    //   text: newMessage,
    // });
    try {
      await sendMessage({ body: message });
      refetchMessages();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <PageContent>
      <Box marginBottom="1rem">all messages</Box>
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
                  From:{" "}
                  {conversation.members[0]._id === currentUserId
                    ? "You"
                    : conversation.members[0].userName}
                </p>
                <p>
                  To:{" "}
                  {conversation.members[1]._id === currentUserId
                    ? "You"
                    : conversation.members[1].userName}
                </p>
              </Box>
            </Card>
          ))}
        </Box>
        <Box width="100%" paddingLeft="3rem">
          <Box color="red">{displayConversationId}</Box>
          <Box>
            {messageData && messageData.length > 0 ? (
              messageData.map((message: any, index: number) => (
                <Box key={index} height="3rem" width="100%" marginBottom="1rem">
                  {message.sender === currentUserId ? (
                    <Box display="flex" justifyContent="flex-end">
                      <Box display="flex" flexDirection="column">
                        <Box>{message.sender}</Box>
                        <Box>Message: {message.text}</Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box display="flex" justifyContent="flex-start">
                      <Box display="flex" flexDirection="column">
                        <Box>{message.sender}</Box>
                        <Box>Message: {message.text}</Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              ))
            ) : (
              <p></p>
            )}
          </Box>
          <Box>
            <Input
              id="message"
              name="message"
              height="50px"
              focusBorderColor="#00C38A"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              placeholder="Leave your message here"
            />
            <Button onClick={handleMessageSubmit}>send</Button>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </PageContent>
  );
};

export default Message;
