import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style.css";

export default function BloodDonationForm() {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    cep: "",
    address: "",
    city: "",
    state: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("bloodDonors")) || [];
    if (savedData.length) {
      console.log("Dados carregados do localStorage:", savedData);
    }
  }, []);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
      setFormData({
        ...formData,
        address: response.data.logradouro,
        city: response.data.localidade,
        state: response.data.uf,
      });
    } catch (err) {
      setError("Erro ao buscar endereço");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingDonors = JSON.parse(localStorage.getItem("bloodDonors")) || [];

    const updatedDonors = [...existingDonors, formData];

    localStorage.setItem("bloodDonors", JSON.stringify(updatedDonors));

    console.log("Dados salvos no localStorage:", updatedDonors);

    setFormData({
      name: "",
      bloodType: "",
      cep: "",
      address: "",
      city: "",
      state: "",
    });
  };

  return (

    <Container className="mt-5 container_form">
      <h1>Cadastro de Doação de Sangue</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="bloodType">
          <Form.Label>Tipo Sanguíneo</Form.Label>
          <Form.Control
            as="select"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
          >
            <option>Selecione</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu CEP"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            onBlur={fetchAddress}
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Endereço será preenchido automaticamente"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cidade será preenchida automaticamente"
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Estado será preenchido automaticamente"
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
