interface MessagesProps {
  message: any;
  own: boolean;
}

const Messages = ({ message, own }: MessagesProps) => {
  return <div style={{ color: own ? "red" : "green" }}>message: {message.text}</div>;
};

export default Messages;
