import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import cart from './store/actions/cart';
import styled from 'styled-components';
import logo from '././favicon_soccershop.png';

function Header() {
    return (
        <Content>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} class="me-2" alt="..." />DioShop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <Cart />
                </div>
            </nav>
        </Content>

    );
}

const Content = styled.div`
    background-color: #f07167;
`

export default Header;
