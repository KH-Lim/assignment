import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	form: {
		width: "100%", // Fix IE 11 issue..
		marginTop: 70
	},
	submit: {
		marginTop: 30,
		padding: "8px 20px",
		fontSize: 18,
		height: 60
	},
	userTypeLabel: {
		margin: 0,
		width: "50%",
		justifyContent: "center",
		backgroundColor: theme.palette.grey[200],
		color: theme.palette.grey[500]
	},
	active: {
		backgroundColor: "#FFFFFF",
		color: theme.palette.text.primary
	},
	rememberMeLabel: {
		fontSize: theme.typography.body2.fontSize
	}
}));

function Login() {
	const classes = useStyles();

  const handleSubmit = () => {
    console.log(123);
  };

  return (
    <div className={classes.root}>
      <form noValidate onSubmit={handleSubmit} className={classes.form}>

      </form>
      로그인
    </div>
  );
}

export default Login;
