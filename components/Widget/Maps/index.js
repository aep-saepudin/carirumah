const Maps =  (props) => (
<iframe
  height      = "450"
  frameBorder = "0"
  style       = {{border:0, width:'100%'}}
  src         = {"https://www.google.com/maps/embed/v1/place?key=AIzaSyA2DICU9RySJQTE3BPDOVQFEDP_faHQRzE&q=" + props.lokasi.replace(" ","+")} 
  allowFullScreen>
</iframe>
)

Maps.defaultProps = {
  lokasi : "Ciulur Wetan, Kabupaten Sumedang"
}

export default Maps