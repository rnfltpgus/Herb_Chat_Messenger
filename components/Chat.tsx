import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import moment from 'moment';

import { ChatProps } from '../types/index';
import getFriendData from '../utils/getFriendData';

import { Avatar } from '@mui/material';
import styled from 'styled-components';

const Chat: NextPage<ChatProps> = ({
  id,
  users,
  timestamp = '',
  latestMessage = '',
}) => {
  const router = useRouter();
  const [friend, setFriend] = useState({});

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  useEffect(() => {
    if (users.length > 0) {
      getFriendData(users).then((data) => {
        setFriend(data);
      });
    }
  }, [users]);

  return (
    <Container onClick={enterChat}>
      <FrdAvatar src={friend.photoURL} />
      <ChatContainer>
        <div style={{ gridArea: 'name' }}>{friend.displayName}</div>
        <div style={{ gridArea: 'latest_message' }}>{latestMessage}</div>
        <div style={{ gridArea: 'time', fontSize: '14px' }}>
          {timestamp ? moment(timestamp?.toDate()).format('LT') : ''}
        </div>
      </ChatContainer>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 67px;
  padding-left: 15px;
  word-break: break-word;

  :hover {
    background-color: #f5f5f5;
  }
`;

const FrdAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

const ChatContainer = styled.div`
  display: grid;
  padding: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #ededed;
  gap: 10px;
  grid-template-areas:
    'name name time'
    'latest_message latest_message.';
`;
