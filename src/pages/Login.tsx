import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const regExp = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '500px',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  },
  submit: {
    marginTop: 30,
    padding: '8px 20px',
    fontSize: 18,
    height: 60
  },
}));

function Login() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (checkValidated('all').checked && event.currentTarget.checkValidity()) {
      console.log('send');
    } else {
      setError(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { key, value } = {
			key: event.target.name,
			value: event.target.value
		};
		setFormData(prevState => ({
			...prevState,
			[key]: value
		}));
  };

  const checkValidated = (type: string) => {
    const returnData = {
      checked: true,
      message: ''
    };

    switch (type) {
      case 'email':
        if (formData.email.trim() === '') {
          returnData.checked = false;
          returnData.message = 'Email is required';
        } else if (!regExp.test(formData.email)) {
          returnData.checked = false;
          returnData.message = 'Email is not a valid email';
        }
        break;
      case 'password':
        if (formData.password.trim() === '') {
          returnData.checked = false;
          returnData.message = 'Password is required';
        } 
        break;
      case 'all':
        if (formData.email.trim() === '') {
          returnData.checked = false;
        } else if (!regExp.test(formData.email)) {
          returnData.checked = false;
        } else if (formData.password.trim() === '') {
          returnData.checked = false;
        }   
    }

    return returnData;
  };

  return (
    <div className={classes.root}>
      <form noValidate onSubmit={handleSubmit} className={classes.form}>
        <h2>Sign in</h2>
        <TextField
          label="E-mail"
          id="email"
          name="email"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          error={error && !checkValidated('email').checked}
          helperText={error && checkValidated('email').message}
          required
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          error={error && !checkValidated('password').checked}
          helperText={error && checkValidated('password').message}
          required
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large">
          SEND
				</Button>
      </form>
    </div>
  );
}

export default Login;
