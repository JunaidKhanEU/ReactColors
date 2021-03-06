import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'white',
    margin: '.5rem',
    minWidth: '200px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%'

  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '.5rem',
    fontSize: '1rem',
    position: 'relative'

  },
  emoji: {
    marginLeft: '.5rem',
    fontSize: '1.5rem'
  },
  miniColor:{
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'

  }
}
const Minipalette = (props) => {
  const { classes, paletteName, emoji, colors } = props
  const miniColorsBoxes = colors.map(color => {
    return (
      <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }} />
      
    )
  })
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        {miniColorsBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
    </div>
  )
}

export default withStyles(styles)(Minipalette)
