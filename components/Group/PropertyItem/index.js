import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import ImageSlider from '../../Widget/ImageSlider'
import IconModal from '../../Widget/Modal'
import Maps from '../../Widget/Maps'

import './index.css'


const CardExampleCard = () => (
  <Card className="PropertyItem" fluid>
    <HeaderCard />
    <ImageSlider />
    <Card.Content>
      <PriceLabel> Rp 200.000.000 </PriceLabel>
      <LocationLabel> Ciulur, Sumedang Utara, Sumedang </LocationLabel>
    </Card.Content>
    <Card.Content>
      <Button>Lihat Detail</Button>
    </Card.Content>
  </Card>
)

const HeaderCard = () => (
  <Card.Content>
    <Card.Header>Rumah Taman Asri</Card.Header>
    <Card.Meta className="posted-date">Posted In 25 Mei 2019</Card.Meta>
  </Card.Content>
)

const PriceLabel = (props) => (
  <div className="price-label" >{props.children}</div>
)


const LocationLabel = (props) => (
  <div className="location-label">
    <IconModal 
      label ={
            (p) => (<div onClick={p.onClick}>
              <a href="#openMap"> 
                {props.children} <Icon name='info circle' className="icon-open-maps" />
              </a> 
            </div>)
        }>
      <Maps/> 
    </IconModal> 
  </div>
)

const Button = (props) => (
  <div className="detail-button">{props.children}</div>
)



export default CardExampleCard