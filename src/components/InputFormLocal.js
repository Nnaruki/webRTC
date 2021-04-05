import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useEffect, useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://naruki.biz">
        NARUKI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ localPeerName, setLocalPeerName }) {
  const label = 'Your name';
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  const initializeLocalPeer = useCallback((e) => {
    setLocalPeerName(name);
    e.preventDefault();
  },
  [name, setLocalPeerName]
  );

  if (localPeerName !== '') return <></>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Please insert {label} here.
        </Typography>
        <form className={classes.form} noValidate>          
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={label}
            name="name"
            onChange={(e) => setName(e.target.value)}
            onCompositionEnd={() => setIsComposed(false)}
            onCompositionStart={() => setIsComposed(true)}
            onKeyDown={(e) => {
              console.log({ e });
              if (isComposed) return;
              if (e.target.value === '') return;
                if (e.key === 'Enter'){
                  initializeLocalPeer(e);
                }
              
            }}
            value={name}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            disabled={disabled}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              initializeLocalPeer(e);
              e.preventDefault();
            }}
          >
            Dision
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
