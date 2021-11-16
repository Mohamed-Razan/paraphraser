import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import SubmitButton from './Submit/SubmitButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://rob-oconnor.com/paraphrasing-tool-api">
        Paraphrasing Tool
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  gridRoot: {
    flexGrow: 1,
  },
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  primary: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '400px',
    color: theme.palette.text.secondary,
  },
}));

export default function ParaphrasingTool() {
  const classes = useStyles();

  const [inputText, setInputText] = useState('')
  const [apiResponseText, setApiResponseText] = useState('Nothing here yet, enter some text in the box above')

  function setResponseText(apiResponse) {
    setApiResponseText(apiResponse)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom style={{textAlign: "center"}}>
          Paraphrasing Tool
        </Typography>

        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.paper}>
                <form className={classes.formRoot} noValidate autoComplete="off">
                  <TextField id="standard-basic"
                    label="Insert the text you would like to rewrite here"
                    placeholder="I love it when AI does all the work for me"
                    multiline
                    rows={16}
                    onChange={(e) => setInputText(e.target.value)}
                    variant="outlined"
                    value={inputText}
                  />
                </form>
                <Typography variant="body2" color="textSecondary">Character Count: {inputText.length}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.paper}>

                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> New Text: {' '} </Typography>
                <Divider variant="middle" />
                <br />
                <Typography variant="p" style={{paddingBottom: 2}}>{apiResponseText}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.primary}>
                <SubmitButton inputText={inputText} responseText={setResponseText} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}