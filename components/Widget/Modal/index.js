import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { withRouter } from "next/router";




class ModalModalExample extends React.Component {
  
  state = {
    open : false
  }

  componentDidMount(){
    window.onhashchange = ()=> {
      
      if (location.hash !== "#openMap") {
        const dimmer = document.querySelector('body > div.ui.page.modals.dimmer.transition.visible.active')
        if (dimmer) dimmer.click()
      }

    }
  }

  openModal = () => this.setState({open:true})
  closeModal = () => this.setState({open:false})
  
  render(){
    return (
      <>
          <this.props.label onClick={this.openModal} />
          <Modal 
            open={this.state.open}
            onClose={this.closeModal}
          >
          <Modal.Content image>
              {this.props.children}
          </Modal.Content>
        </Modal>
      </>
    )
  }
} 

export default withRouter(ModalModalExample) 