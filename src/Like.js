import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useOnDocument from './common/useOnDocument';
import { Typography, Grid, IconButton, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CommonFrame from './CommonFrame';

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
      liked: false,
      likeCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // refresh value
    const likeCount = this.state.liked == true ? 0 : 1;
    this.setState({
      liked: !this.state.liked,
      likeCount: likeCount
    });
  }

  render() {
    const { userId, articleId, db } = this.props;
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like'
    const color = this.state.liked ? 'secondary' : 'primary'
    const likeCount = this.state.likeCount;
    return (
      <div className="customContainer">
        <Button  onClick={this.handleClick} color={color} variant="contained">
          {label}
        </Button>
        {likeCount}
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