import React ,{Component} from 'react';
import Fruit from './Fruit';
import './App.css';

class App extends Component {

  state={
    
  }
  colors = ['red', 'blue', 'green', 'yellow', 'cornflowerblue','fuchsia','pink', 'lemongreen'];
  fruits =['Pineapple','Lemon', 'Blueberry','Orange', 'Pear','Banana', 'Cherry', 'Strawberry']
  
  render() {
    return (
      <div>
        <Fruit someProps={this.fruits[Math.floor(Math.random()*this.fruits.length)]}
        color={this.colors[ Math.floor(Math.random() * this.colors.length) ]}/>
        <Fruit someProps={this.fruits[Math.floor(Math.random()*this.fruits.length)]} 
        color={this.colors[ Math.floor(Math.random() * this.colors.length) ]}/>
        <Fruit someProps={this.fruits[Math.floor(Math.random()*this.fruits.length)]}
         color={this.colors[ Math.floor(Math.random() * this.colors.length) ]}/>

        <button onClick={()=>{
          this.setState({})
        }}>Randomize</button>
      </div>
    );
  }
}

export default App;
