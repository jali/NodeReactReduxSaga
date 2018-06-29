import React, { Component } from 'react';
// import Heart from './Ratings/Heart'
import { Container, Comment, Header, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import rootSaga from '../actions/sagas'
import NavMenu from './NavMenu'

class App extends Component {

  componentDidMount() {
    rootSaga()
  }


  render() {
    let error = ""
    if (this.props.books.error !== null) {
      error = this.props.books.error.message
    }

    let commentData = []
    if(this.props.comments.fetched === true){
      for (let comm of this.props.comments.result.data){
        commentData.push(
            <Comment key={comm._id.toString()}>
            <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>{comm.userName}</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>{comm.body}</Comment.Text>
              </Comment.Content>
            </Comment>
        )
      }
      
    }
    const bookData =[]
    if (this.props.books.fetched === true) {
      for (let row of this.props.books.result.data){
        bookData.push(  
          <Item key={row._id.toString()}>
            <Item.Image size='small' src={row.imageURL} />
            <Item.Content>
              <Item.Header as='h2'>{row.title}</Item.Header>
              <Item.Meta>Author: {row.author}</Item.Meta>
              <Item.Meta>Pages: {row.pages}</Item.Meta>
              <Item.Extra>Publisher: {row.publisher}</Item.Extra>
              <Item.Description>
                Som sort of book description
              </Item.Description>
              <Item.Extra>
                <Container textAlign='right'>
                  {/* <Heart /> */}
                </Container>
              </Item.Extra>
              <Item.Extra>
                <a target="_blank" href={row.buyURL}>Buy online.</a>
              </Item.Extra>
              {/* <BookComment id="5a5c9fa227b93d3790c0ca0e" /> */}
              <Comment.Group>
                <Header as='h4' dividing>Comments</Header>
                  {(row._id === "5a5c9fa227b93d3790c0ca0e")?commentData:"..."}
              </Comment.Group>
            </Item.Content>
          </Item>
          
          );
        }
    }
    
    return (
      
      <div className="App">
      <Container>
      <NavMenu />
      
      <Item.Group divided>
        {error}
          <div className="spinner" />
        {bookData}

      </Item.Group>
      </Container>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    books: state.books,
    comments: state.comments
  };
}

export default connect(mapStateToProps)(App)
