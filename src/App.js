import './styles.css';
import imageInSrc from './imageInSrc.jpeg'

function App() {

  const myName = "Yahya Rhemmali";

  const video = {
    src : "/myVideo.mp4",
    width:"320px",
    height:"240px",
    controls : true,
    type:"video/mp4" 
  }

  return (
    <div className="App">
      <div>
        <h1>{myName}</h1>
        <br />
        <img src={imageInSrc} alt="" />
        <br />
        <img src="imageInPublic.jpeg" alt="" />
      </div> 
      <video {...video}></video>
    </div>
  );
}

export default App;
