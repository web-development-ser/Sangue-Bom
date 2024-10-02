import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

export default function BloodDonorList() {
    const [donors, setDonors] = useState([])

    useEffect(() => {
        const savedDonors = JSON.parse(localStorage.getItem('bloodDonors')) || [];
        setDonors(savedDonors);
    }, []);

    return (
        <Container className="mt-5">
            <h2>Lista de Doadores</h2>
            {donors.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo Sanguíneo</th>
                            <th>CEP</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((donor, index) => (
                            <tr key={index}>
                                <td>{donor.name}</td>
                                <td>{donor.bloodType}</td>
                                <td>{donor.cep}</td>
                                <td>{donor.address}</td>
                                <td>{donor.city}</td>
                                <td>{donor.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Nenhum doador cadastrado ainda.</p>
            )}
        </Container>
    );
}