import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import './app.css';

const Example = (props) => {
  return (
    <div className="blog"><h1>BlogSpot</h1>
    <div className="row">
      <a
        href="/food"
        className="col-md-3 categories category_left tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/09/05/f1/0905f16da3a4cf958991e707617ff3db.jpg)',
        }}
      >
        <div align="center">
          <h3>Budget & Finance</h3>
        </div>
      </a>
      
      <a
        href="/drink"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/2b/e0/04/2be004f3dbcc7b73026d968d4e40a1ba.jpg)',
        }}
      >
        <div align="center">
          <h3>Drinks</h3>
        </div>
      </a>
      <a
        href="/others"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/78/19/83/781983d66ca07d64a1111a6971164d22.jpg)',
        }}
      >
        <div align="center">
          <h3>Others</h3>
        </div>
      </a>
    </div>
    <div className="row">
    <a
        href="/food"
        className="col-md-3 categories category_left tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/af/a3/6e/afa36eb9c7d9b289b09a3c33ee634f3f.jpg)',
        }}
      >
        <div align="center">
          <h3>Food</h3>
        </div>
      </a>
      
      <a
        href="/drink"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/236x/90/74/be/9074be95401eae3a543ab84a3b90b4c8.jpg)',
        }}
      >
        <div align="center">
          <h3>Drinks</h3>
        </div>
      </a>
      <a
        href="/others"
        className="col-md-3 categories tint"
        style={{
          background:
              'url(https://i.pinimg.com/564x/9e/83/a8/9e83a87f2929ee494e7a336d43e2261b.jpg)',
        }}
      >
        <div align="center">
          <h3>Others</h3>
          
        </div>
      </a>
    </div>
   </div>
  );
};

export default Example;