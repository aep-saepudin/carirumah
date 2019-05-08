import { Card } from 'semantic-ui-react'
import PropertyItem from '../components/Group/PropertyItem'
import Maps from '../components/Widget/Maps'
import Modal from '../components/Widget/Modal'
import Loader from '../components/Widget/Loader'

import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css"

import './index.css'


class Index extends React.Component {
  state = {
    currentWidth: 0,
    loader      : true
  }

  componentDidMount(){
    this.setState({currentWidth:window.screen.availWidth})

    window.addEventListener("orientationchange", () => {
      this.setState({currentWidth:window.screen.availWidth})
    }, false);
    this.setState({loader: false})
  }

  render(){
    return (
      <>
        <div className="Index" >
          <Card.Group itemsPerRow={this.state.currentWidth <= 360 ? 1 : 3}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Card.Group>
        </div>
        <Loader open={this.state.loader} />
      </>
    )
  }
}

export default Index