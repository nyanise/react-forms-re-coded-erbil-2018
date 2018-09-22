// Code ControlledInput Component Here
import React from "react";
 export default class ControlledInput extends React.Component 
{
  state= {
    value:""
  };
  render()
  {
    return (<form>
     <input type="text"  value={this.state.value} 
     onChange={(e) => this.setState({value:e.target.value})}/>
    </form>)
  }
} 