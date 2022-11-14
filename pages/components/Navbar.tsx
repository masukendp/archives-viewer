import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function NavbarComponent() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>マスコミ研究会 頒布物アーカイブ</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
