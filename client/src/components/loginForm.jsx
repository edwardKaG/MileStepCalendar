import React, {FC, useContext, useState} from 'react';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);

  return (
    <div>
        <Box
            component="form"
            sx={{mx: "auto", width: "50ch",
                "& > :not(style)": { mx: "auto", width: "50ch" }}}
            autoComplete="off"
        >
            <TextField
                onChange={e => setEmail(e.target.value)}
                value={email}
                id="outlined"
                type="text"
                label="Email"
                variant="outlined"
            />
        </Box>
        <Box
            component="form"
            sx={{mx: "auto", width: "50ch",
                "& > :not(style)": { mx: "auto", width: "50ch" }}}
            autoComplete="off"
        >
            <TextField
                id="outlined"
                label="Password"
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
            />
            </Box>
        <Box
            component="form"
            sx={{mx: "auto", width: "50ch",
                "& > :not(style)": { mx: "auto", width: "55ch" }}}
            autoComplete="off">
            <Button onClick={() => store.login(email, password)} variant="contained" color="primary">
                Login
            </Button>
        </Box>
        <Box
            component="form"
            sx={{mx: "auto", width: "50ch",
                "& > :not(style)": { mx: "auto", width: "55ch" }
            }}
            autoComplete="off">
            <Button onClick={() => store.registration(email, password)} variant="outlined" color="primary">
                Registration
            </Button>
        </Box>
    </div>
  );
};

export default observer(LoginForm);