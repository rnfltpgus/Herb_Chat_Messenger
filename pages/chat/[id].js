import { doc, getDoc } from '@firebase/firestore';
import { db } from '../../firebase';

import ChatContent from '../../components/ChatContent';

import styled from 'styled-components';

const ChatBox = ({ chat, id }) => {
  return (
    <Container>
      <ChatContainer>
        <ChatContent chat={chat} chat_id={id} />
      </ChatContainer>
    </Container>
  );
};

export default ChatBox;

export async function getServerSideProps(context) {
  const docRef = doc(db, 'chats', context.query.id);
  const docSnap = await getDoc(docRef);
  return {
    props: {
      chat: JSON.stringify(docSnap.data()),
      id: context.query.id,
    },
  };
}

const Container = styled.div`
  display: flex;
  background-color: #f8fafc;
  width: 100%;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  max-height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
