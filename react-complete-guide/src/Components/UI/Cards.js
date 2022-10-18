import React from 'react';
import './Cards.css'

function Cards(props) {

    const classes = 'card ' + props.className   /* to apply styling to the custom component other than Cards.css*/   

  return (
    <div className={classes}>{props.children}</div>   /* for displaying the content in between custom component tags */
  )
}

export default Cards

