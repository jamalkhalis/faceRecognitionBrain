import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Particles from "react-tsparticles";
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import particles from './particles.json';
import './App.css';

const urls = {
  "user_app_id": {
        "user_id": "iqyisbjqfgq0",
        "app_id": "4e8c250ab3ee4acfa326a0bb826f9db4"
    },
  "inputs": [
    {
      "data": {
        "image": {
          "url": ""
        }
      }
    }
  ]
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: '',
      route: 'register',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = JSON.parse(data, null, 2).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box = {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    this.setState({box: box})
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {

    this.setState({imageUrl: this.state.input})

    // JSON.parse(requestOptions.body).inputs[0].data.image.url = "https://samples.clarifai.com/metro-north.jpg"

    // urls.inputs[0].data.image.url = "https://samples.clarifai.com/metro-north.jpg"
    urls.inputs[0].data.image.url = this.state.input

    const raw = JSON.stringify(urls);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key e7993e595f174b3b8cd51e5b51d0859e'
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs", requestOptions)
    .then(response => response.text())
    .then(result => this.calculateFaceLocation(result))
    .catch(error => console.log('error', error));

  }

  onRouteChange = (route) => {
    route === "home" ? this.state.isSignedIn = true : this.state.isSignedIn = false
    this.setState({route: route})
  }

  render() {
    const {input, imageUrl, box, route, isSignedIn} = this.state;
    return (
      <div className="App">

        <Particles
          className='particles'
          id="tsparticles"
          options={particles}
        />

        <div style={{display: 'flex', justifyContent: 'space-between'}}> 
            <Logo />  
            <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        </div>

        {route === 'home'
          ? <div>
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit} 
              />

              <FaceRecognition imageUrl={imageUrl} box={box} />
            </div>

          : (
              route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )

          

           
        }
      </div>
    )
  }
}

export default App;
