import React from 'react';

// common
export type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type ClickEvent =
  | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  | React.TouchEvent<HTMLButtonElement | HTMLDivElement>;

export type OnClick = (
  event:
    | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    | React.TouchEvent<HTMLButtonElement | HTMLDivElement>
) => void;

// Props
export interface ChatProps {
  id: string;
  users: string[];
  timestamp: any;
  latestMessage: string;
}

export interface FriendProps {
  id: string;
  photoURL: string;
  displayName: string;
}

export interface ChatBoxProps {
  id: string;
  chat: string;
}

export interface ChatContentProps {
  chat: string;
  chat_id: string;
}

export interface LoadingProps {
  type: any;
  color: string;
}

export interface MessageProps {
  user: string;
  message: string;
  timestamp: any;
}
