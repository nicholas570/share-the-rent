import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import swal from 'sweetalert';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rent: 0,
      charges: 0,
      daphné: 0,
      nicolas: 0,
      ows: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    const regex = /[a-zA-Z]/g;
    if (e.target.value.match(regex)) {
      swal({
        title: 'Only numbers please!',
        text: 'do not cheat',
        icon: 'error',
        button: 'Agreed',
      });
    } else {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => console.log(this.state)
      );
    }
  }

  calculate(e) {
    e.preventDefault();
    console.log(this.state);
    const { daphné, nicolas, rent, charges } = this.state;
    let total = Number(daphné) + Number(nicolas);
    let Npart =
      (Number(rent) + Number(charges)) * (Number(nicolas) / Number(total));
    let roundedPart = Math.round(Npart);
    this.setState({ ows: roundedPart }, () => console.log(this.state.ows));
  }

  render() {
    const { daphné, nicolas, ows } = this.state;
    let total = Number(daphné) + Number(nicolas);

    return (
      <Form className='d-flex flex-column w-50'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Loyer</Form.Label>
          <Form.Control
            type='text'
            placeholder='loyer mensuel'
            name='rent'
            required
            onChange={this.handleChange}
          />
          <Form.Label>Charges</Form.Label>
          <Form.Control
            type='text'
            placeholder='charges mensuelles'
            name='charges'
            required
            onChange={this.handleChange}
          />
          <Form.Label>Salaire de Daphné</Form.Label>
          <Form.Control
            type='text'
            placeholder='salaire mensuel'
            name='daphné'
            required
            onChange={this.handleChange}
          />
          <Form.Label>Salaire de Nicolas</Form.Label>
          <Form.Control
            type='text'
            placeholder='salaire mensuel'
            name='nicolas'
            required
            onChange={this.handleChange}
          />
          <Form.Label>Total des salaires</Form.Label>
          <Form.Control
            type='text'
            placeholder='total'
            name='total'
            required
            value={total}
          />
        </Form.Group>

        <Button variant='success' type='submit' onClick={this.calculate}>
          Calculer
        </Button>

        <Form.Label>Ma dette</Form.Label>
        <Form.Control
          type='text'
          placeholder='total'
          name='total'
          required
          value={ows}
        />
      </Form>
    );
  }
}

export default MyForm;
