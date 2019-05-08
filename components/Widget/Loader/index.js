import './index.css'

export default (props) => (
  <div className="Loader" style={{display:props.open ? 'flex' : 'none'}}>
    loading...
  </div>
)