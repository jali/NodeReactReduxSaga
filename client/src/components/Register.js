import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Register = () => (
  <div>
    <Modal trigger={<Button positive basic inverted>Register</Button>} closeIcon>
      <Header icon='signup' content='Sign up' />
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

        <div className="field">
          <label>Email</label>
          <input type="email" />
        </div>
      </form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red'>
          <Icon name='remove' /> Cancel
        </Button>
        <Button color='green'>
          <Icon name='checkmark' /> Register
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
)

export default Register
