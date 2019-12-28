import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
 
const ButtonGroup1= (props) => {
  return (
  

  <div className="bg-info">
    <div className="bg-info clearfix btn-primary" style={{ padding: '1.5rem' }}>
      <button className="btn btn-secondary float-left text-warning" margin="100px">Home</button>
      <button className="btn btn-danger float-left">Tutorials</button>
      <button className="btn btn-danger float-left">Services</button>
      <button className="btn btn-primary float-left">About us</button>
    </div>
    <h1>{props.ariaLabel} {props.className}</h1>
    <ButtonToolbar>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>

    
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
      <Button>8</Button>
 
      <Button>9</Button>
      <Button>10</Button>
      <Button>11</Button>
      <Button>12</Button>

    </ButtonGroup>
    </ButtonToolbar>
</div>  );

  }
export default  ButtonGroup1;