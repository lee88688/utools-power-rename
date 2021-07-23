import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  inputLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textFiled: {
    flexGrow: 1
  },
  mode: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inputLine}>
        <TextField className={classes.textFiled} variant="outlined"/>
        <ArrowForwardIcon/>
        <TextField className={classes.textFiled} variant="outlined"/>
      </div>
      <div className={classes.mode}>
        <RadioGroup name="mode" row>
          <FormControlLabel label="普通模式" value="normal" control={<Radio/>}/>
          <FormControlLabel label="正则表达式" value="regex" control={<Radio/>}/>
          <FormControlLabel label="增强模式" value="power" control={<Radio/>}/>
        </RadioGroup>
      </div>
    </div>
  );
}

export default App;
