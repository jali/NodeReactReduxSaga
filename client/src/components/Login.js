import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Login = () => (
  <div>
    <Modal trigger={<Button primary basic inverted>Login</Button>} closeIcon>
      <Header icon='sign in' content='Sign in' />
      <Modal.Content>
      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" />
        </div>
      </form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red'>
          <Icon name='remove' /> Cancel
        </Button>
        <Button color='green'>
          <Icon name='checkmark' /> Login
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
)

export default Login
