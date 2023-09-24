import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardCourse.css';

const CardCourse = ({ nombre, img, status }) => {
  const getBackgroundColor = () => {
    if (status) return '#5cff92';
    else return '#ff5c5c';
  };

  return (
    <div className='col-md-3 px-3 my-3'>
      <Card className='h-100 bg-light cardCurso' style={{ width: '18rem' }}>
        <div className="card-image-container">
          <Card.Img className="card-image" variant="top" src={img} />
        </div>
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: getBackgroundColor(),
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Card.Title className='mt-2'>{nombre}</Card.Title>
          </div>
          <Card.Text style={{ textAlign: 'justify' }}></Card.Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" className="btn-custom mt-auto">
              Empezar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCourse;