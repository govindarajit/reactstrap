import React from 'react';
import { Button } from 'reactstrap';

const Buttons = (props) => {
  return (
    
    <div style={{padding:"10px" }}>
    <h2 style={{padding:"10px", borderBottom:"5px solid gray"}}> Reactstrap Buttons</h2>
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </div>
  );

}

export default Buttons;