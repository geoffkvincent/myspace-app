import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Divider, Button } from 'semantic-ui-react';
import PostForm from './PostForm'

class Posts extends React.Component {

  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }


  posts = () => {
    const { posts } = this.props
    return posts.map( post =>
      <Card key={post.id}>
        
        <Card.Content>
          <Card.Header>
            {post.name}
          </Card.Header>
          <Card.Description>
            
          </Card.Description>
        </Card.Content>
        {post.body}
        <Card.Content extra>
          
        </Card.Content>
      </Card>
    )
  }

  render() {
    let { showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Back' : 'New Post' }
        </Button>
        { showForm ?
          <PostForm closeForm={this.toggleForm} />
          :
          <div>
       <Divider />
          <Card.Group itemsPerRow={4}>
           { this.posts() }
          </Card.Group>
          </div>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    const posts = state.posts;
    
    return { posts}
  }
  

export default connect(mapStateToProps)(Posts);