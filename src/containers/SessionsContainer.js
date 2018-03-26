import React from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class SessionsContainer extends React.Component {
  state = {
    username:'',
    password:''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  createUser = () => {
    let options = {
      method:'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/users', options)
      .then(res => res.json())
      .then(json => console.log(json))
  }

  render() {
    return(
      <Container>
        <h1>Sign Up</h1>
        <Form onSubmit={this.createUser}>
          <label>Username</label>
          <Form.Input name='username' value={this.state.username} onChange={this.handleChange}/>
          <label>Password</label>
          <Form.Input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
          <Button type='submit'>Submit</Button>
        </Form>

        <NavLink exact to='/login'>Log In</NavLink>
      </Container>
    )
  }
}
