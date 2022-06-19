import React from 'react';
import './style.css'

class Props extends React.Component{
  constructor(){
    super()
    this.state={
      count:0,
      text:'example-text'
    }
  }
  render() {
    const plus=()=>{
      if(this.state.count<10) this.setState({count:this.state.count+1});
    }
    const minus=()=>{
      if(this.state.count>0) this.setState({count:this.state.count-1});
    }
    const onchange=(e)=>{
      this.setState({text:e.target.value})
    }
    return (
      <div className='App'>
        <button onClick={plus}>+</button>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>{this.state.count}</p>
        <button onClick={minus}>-</button>
        <input type="text" value={this.state.text} onChange={onchange}/>
        <h3 style={{margin:'0 10px'}}>{this.state.text}</h3>

        <h2>{this.props.title}</h2>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default Props;