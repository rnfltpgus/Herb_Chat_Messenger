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
  users: string;
  timestamp: string;
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
