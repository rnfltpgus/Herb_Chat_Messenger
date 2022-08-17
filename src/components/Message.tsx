/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import moment from 'moment';

import { useAuth } from '../Auth';
import { MessageProps } from '../types/index';

import styled from 'styled-components';

const Message: NextPage<MessageProps> = ({ user, message, timestamp }) => {
  const { currentUser } = useAuth() as {
    currentUser: {
      email: any;
    };
  };
  const loginMail = currentUser.email;
  const MessageType = user === loginMail ? MyMessage : FrdMessage;

  return (
    <Container>
      {user !== loginMail && (
        <MessageTail>
          <img src='/message-tail-frd.svg' alt='label-tag' />
        </MessageTail>
      )}
      <MessageType>
        {message}
        <Timestamp>{moment(timestamp).format('LT')}</Timestamp>
      </MessageType>
      {user === loginMail && (
        <MessageTail>
          <img src='/message-tail-my.svg' alt='label-tag' />
        </MessageTail>
      )}
    </Container>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
`;

const MessageBubble = styled.div`
  padding: 15px;
  padding-bottom: 26px;
  text-align: right;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
`;

const MyMessage = styled(MessageBubble)`
  margin-left: auto;
  background-color: #cefbac;
  border-radius: 8px 0px 8px 8px;
`;

const FrdMessage = styled(MessageBubble)`
  background-color: #ffffff;
  text-align: left;
  border-radius: 0px 8px 8px 8px;
`;

const MessageTail = styled.span`
  margin-top: -2px; ;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
