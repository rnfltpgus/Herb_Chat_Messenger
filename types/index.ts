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

export interface ButtonProps {
  label: string;
  onClick?: OnClick;
  color?: string;
  hoverColor?: string;
}
