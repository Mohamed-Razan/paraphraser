import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { FileCopy } from '@material-ui/icons';

import SubmitButton from './Submit/SubmitButton';
import "./App.css"
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: "rgb(240, 240, 240)"
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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '460px',
    color: theme.palette.text.secondary,
  }
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
        <Typography variant="h1" component="h1" gutterBottom style={{ textAlign: "center", fontFamily: "'Estonia', cursive" }}>
          Paraphrasing Tool
        </Typography>

        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> New Text: {' '} </Typography>
                <Divider variant="middle" />
                <br />
                <form className={classes.formRoot} noValidate autoComplete="off">
                  <TextField id="standard-basic"
                    label="New Text"
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
              <Paper elevation={3} className={classes.paper} style={{textAlign: "left"}}>

                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> Paraphrased Text: {' '} </Typography>
                <Divider variant="middle" />
                <br />
                <Typography variant="p" style={{ paddingBottom: 2 }}>{apiResponseText}</Typography>
                <br />
                <Button 
                  variant="contained" 
                  color="primary"
                  disabled={apiResponseText === "Nothing here yet, enter some text in the box above"}
                  onClick={() => {navigator.clipboard.writeText(apiResponseText)}}
                  style={{marginTop: "10px"}}
                >
                  {<FileCopy />}
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.primary}>
                <SubmitButton inputText={inputText} responseText={setResponseText} className={classes.submit} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}