/* eslint-disable @next/next/no-img-element */
import CustomVerticalMore from './CustomVerticalMore';

import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar src='/sponge-bob.jpeg' />
        <IconsGroup>
          <IconButton>
            <img src='/story.svg' alt='새로고침' />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <CustomVerticalMore />
        </IconsGroup>
      </Header>
      <SearchChat>
        <SearchBar>
          <SearchIcon />
          <SearchInput />
        </SearchBar>
      </SearchChat>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: #ffffff;
  min-width: 320px;
  max-width: 450px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  width: 100%;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsGroup = styled.div``;

const SearchChat = styled.div`
  background-color: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 10px;
  border-bottom: 1px solid #ededed;
  background: white;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
`;
