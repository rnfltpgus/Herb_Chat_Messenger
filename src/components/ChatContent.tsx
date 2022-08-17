import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
} from '@firebase/firestore';
import moment from 'moment';

import { useAuth } from '../Auth';
import { db } from '../firebase';
import Message from './Message';
import getFriendData from '../utils/getFriendData';
import { ChatContentProps } from '../types';

import { Avatar, IconButton } from '@mui/material';
import {
  Search,
  ArrowBack,
  InsertEmoticon,
  AttachFile,
  Mic,
} from '@mui/icons-material';
import styled from 'styled-components';

const ChatContent: NextPage<ChatContentProps> = ({ chat, chat_id }) => {
  const router = useRouter();
  const [friend, setFriend] = useState<any>({});
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const { currentUser } = useAuth() as {
    currentUser: {
      photoURL: any;
      email: any;
      uid: string;
    };
  };
  const chatParse = JSON.parse(chat);

  useEffect(() => {
    const messagesRef = collection(db, 'chats', chat_id, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      setMessages(
        QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, [chat_id]);

  useEffect(() => {
    if (chatParse.users?.length > 0) {
      getFriendData(chatParse.users).then((data) => {
        setFriend(data);
      });
    } else {
      console.log('😢 without chatParse');
    }
  }, [chat_id]);

  const sendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const usersRef = doc(db, 'users', currentUser.uid);
    const messagesRef = collection(db, 'chats', chat_id, 'messages');
    const chatRef = doc(db, 'chats', chat_id);

    setDoc(usersRef, { lastSeen: serverTimestamp() }, { merge: true });

    await addDoc(messagesRef, {
      timestamp: serverTimestamp(),
      message: input,
      user: currentUser.email,
      photoURL: currentUser.photoURL,
    });

    setDoc(
      chatRef,
      {
        latestMessage: input,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );

    setInput('');
  };

  return (
    <Container>
      <Header>
        <Avatar src={friend.photoURL} />
        <HeaderInfo>
          <h3>{friend.displayName}</h3>
          <div>Last Active: {moment(friend.lastSeen?.toDate()).fromNow()}</div>
        </HeaderInfo>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton type='button' onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
      </Header>
      <MessagesContainer>
        {messages.map((message) => (
          <Message
            key={message.id}
            user={message.user}
            message={message.message}
            timestamp={message.timestamp}
          />
        ))}
      </MessagesContainer>
      <InputContainer>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <Input
          onChange={(e) => setInput(e.target.value)}
          placeholder='Please enter a message.'
          value={input}
        />
        <button hidden disabled={!input} type='submit' onClick={sendMessage}>
          Send message
        </button>
        <IconButton></IconButton>
      </InputContainer>
    </Container>
  );
};

export default ChatContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  position: sticky;
  background-color: #f0f0f0;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
  margin-left: 15px;
  flex: 1;

  & h3 {
    margin: 3px;
  }

  & div {
    font-size: 14px;
    color: gray;
    margin: 3px;
  }
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: #f0f0f0;
  z-index: 100;
`;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 15px;
  padding: 12px;
  margin-left: 15px;
  margin-right: 15px;
`;

const MessagesContainer = styled.div`
  padding: 20px;
  background-color: #f2fae2;
  flex: 1;
  background-image: url('/bg-chat.png');
  background-attachment: fixed;
  background-repeat: repeat;
`;
