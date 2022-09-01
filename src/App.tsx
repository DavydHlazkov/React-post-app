import './App.css';
import React, { useState, useRef } from 'react';
import { Button, TextField, Box } from '@mui/material';
import AllList from './components/allList/AllList';
import LastFivePost from './components/lastFivePost/LastFivePost';

function App() {
  const [info, setInfo] = useState<any>([]);
  const [name, setName] = useState<any>("")

  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefUrl = useRef<HTMLInputElement>(null);
  const inputRefPost = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setInfo((prevState: any) => [
      ...prevState,
      {
        userName: data.get('userName'),
        userAvatar: data.get('userAvatar'),
        postText: data.get('postText'),
        addedTime: Date.now(),
      },
    ]);
    inputRefName.current.value = ""
    inputRefUrl.current.value = ""
    inputRefPost.current.value = ""
  };


  return (
    <div className="container">
      <div>
        <div className="par-and-form">
          <div className="form">
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                placeholder="Ваше имя*"
                name="userName"
                autoFocus
                inputRef={inputRefName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="userAvatar"
                placeholder="Введите сылку на аватарку"
                type="text"
                id="userAvatar"
                inputRef={inputRefUrl}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="postText"
                placeholder="Текст поста"
                type="text"
                id="postText"
                inputRef={inputRefPost}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: 300, backgroundColor: '#ADADAD' }}
              >
                Добавить
              </Button>
            </Box>
          </div>
          <div className="posts-quantity">
            Объявлений: {info ? info.length : 0}
          </div>
        </div>
        <AllList info={info} />
      </div>

      <LastFivePost info={info} />
    </div>
  );
}

export default App;
