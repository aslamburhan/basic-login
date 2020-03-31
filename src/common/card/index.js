import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
  root: {
    minWidth: 310,
    margin:theme.spacing(1)
  },
  cardAction:{
    float:"right"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           Survey
        </Typography>
        <Typography variant="h5" component="h2">
        {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Frequency: {props.frequency}
        </Typography>
        <Typography variant="body2" component="p">
          Status: <span style={{color:"#eb8d21"}}>{props.status}</span>
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
          <Link to={props.url}>
        <Button size="small">Fill Survey</Button></Link>
      </CardActions>
    </Card>
  );
}
