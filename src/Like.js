import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useOnDocument from './common/useOnDocument';
import { Typography, Grid, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CommonFrame from './CommonFrame';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
});

class Like extends React.Component {

  constructor() {
    super();

    // const pathArticle = `/users/${userId}/articles/${articleId}`;
    // const refArticle = db.doc(pathArticle);
    // const [ article, err ] = useOnDocument(db, pathArticle);
    // const [ sections, setSections ] = useState(null);
    // const [ readOnly, setReadOnly ] = useState(true);

    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const { userId, articleId, db } = this.props;
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like'
    const color = this.state.liked ? 'secondary' : 'primary'
    return (
      <div className="customContainer">
        {/* <Button  onClick={this.handleClick} color={color} variant="contained">
          {label}
        </Button> */}
        <Icon onClick={this.handleClick}>add_circle</Icon>
      </div>
    );
  }
}

Like.propTypes = {
  userId: PropTypes.string.isRequired,
  db: PropTypes.object.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default withStyles(styles)(Like);