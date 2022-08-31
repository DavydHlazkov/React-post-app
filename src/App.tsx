import './App.css';
import React, {useState} from 'react';
import { Button, TextField, Box} from '@mui/material';
import AllList from './components/allList/AllList';
import LastFivePost from './components/lastFivePost/LastFivePost';

function App() {

  const [info, setInfo] = useState<any>([])
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setInfo((prevState : any) => [...prevState, {
        userName: data.get('userName'),
        userAvatar: data.get('userAvatar'),
        postText: data.get('postText'),
        addedTime : Date.now()
        }
      ])
      console.log(info)
    ;}

  return (
    <div className='container'>
      <div className='form'>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              placeholder='Ваше имя'
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userAvatar"
              placeholder='Введите сылку на аватарку'
              type="text"
              id="userAvatar"
              autoComplete="userAvatar"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="postText"
              placeholder='Текст поста'
              type="text"
              id="postText"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Добавить
            </Button>
          </Box>
          <p>Объявлений: {info? info.length : 0}</p>
          <AllList info={info}/>
          </div>
          <LastFivePost info={info}/>
     </div>
  );
}

export default App;
