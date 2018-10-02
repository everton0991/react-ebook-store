import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../../services/Cart/Actions'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import { ListItemIcon } from '@material-ui/core'
import Number from '../../../components/Number'

/**
 * Component styles.
 */
const styles = ({
  list: {
    fontSize: '14px'
  },
  row: {
    padding: '20px 0'
  },
  checkbox: {
    padding: '4px',
    marginRight: '35px'
  },
  bold: {
    fontWeight: 'bold'
  }
})

/**
 * Here we are mapping our states to this component props.
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => {
  return {
    books: state.products.books
  }
}

/**
 * Here we are mapping our actions to the props.
 * 
 * @param {Object} state 
 */
const mapDispatchToProps = {
  onSelectItem: addItem,
  onDeselectItem: removeItem
}

class ProductList extends Component {
  state = {
    checked: [0]
  }

  /**
   * On toggle get the row item.
   * Update the checked state
   * And dispatch the actions to set the current amount.
   */
  handleToggle = item => () => {
    const { name } = item
    const { onSelectItem, onDeselectItem } = this.props
    const { checked } = this.state
    const currentIndex = checked.indexOf(name)
    const newChecked = [...checked]

    /**
     * If the item doesn`t exist in the checked array
     * we push it and dispatch the action to increase amount, 
     * else we remove from it.
     */
    if (currentIndex === -1) {
      onSelectItem({ item })
      newChecked.push(name)
    } else {
      onDeselectItem({ item })
      newChecked.splice(currentIndex, 1)
    }

    /**
     * Then update to the state.
     */
    this.setState({
      checked: newChecked,
    })
  }

  render() {
    const { classes, books } = this.props
    const { checked } = this.state

    return (
      <div className={classes.list}>
        <Typography paragraph={true}>
          Welcome to the best place for you to learn about Latin América E-commerce.
          Start to learn now and discovery ways options to improve your sales.
        </Typography>
        <List>
          {books && books.map(book => (
            <ListItem
              className={classes.row}
              key={book.id}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(book)}>
              <Checkbox
                className={classes.checkbox}
                checked={checked.indexOf(book.name) !== -1}
                tabIndex={-1}
                color="default"
                disableRipple />
              <ListItemIcon>
                <img src={book.thumbnail} alt="Product" />
              </ListItemIcon>
              <ListItemText 
                primary={(
                  <div>
                    <Typography
                      className={classes.bold}
                      variant='body1'>
                      {book.name}
                    </Typography>
                    <Typography
                      variant='body2'>
                      {book.description}
                    </Typography>
                  </div>
                )} />
              <ListItemSecondaryAction>
                <Number value={book.price} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

/**
 * Exporting our component with the styles and the states
 */
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductList)
)