import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>マスコミ研究会 アーカイブ</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export { NavbarComponent }