import ChatContent from '../../components/ChatContent';

import styled from 'styled-components';

const ChatBox = () => {
  return (
    <Container>
      <ChatContainer>
        <ChatContent />
      </ChatContainer>
    </Container>
  );
};

export default ChatBox;

const Container = styled.div`
  display: flex;
  background-color: #f8fafc;
  width: 100%;
`;

const ChatContainer = styled.div`
  flex: 1;
`;
