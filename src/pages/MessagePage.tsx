import PageLayout from "../components/Layout/PageLayout";
import Message from "../components/Message/Message";

const MessagePage = () => {
  return (
    <PageLayout>
      {/* TODO:render all chats here, then you can click anyone box to link in chat page */}
      <Message />
    </PageLayout>
  );
};

export default MessagePage;
