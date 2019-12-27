import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Collapse1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
     Hey There I'm Toggle<br/>
     Hey There I'm Toggle<br/>
     Hey There I'm Toggle<br/>
     Hey There I'm Toggle<br/>
     Hey There I'm Toggle<br/>
     :) :) :) :) :) :) :) :) :) :) :) :) 

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapse1;