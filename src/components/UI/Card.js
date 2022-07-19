import './Card.css'

// re-usable 'card' wrapper for other components
function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
