import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import cart from './store/actions/cart';
import styled from 'styled-components';
import img1 from '././torcida.jpg';
import img2 from '././soccerbg3.jpg';
import img3 from '././brazuca.jpg';

const Carousel = () =>{

    return(

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>CAMISAS DO MELHORES TIMES DO BRASIL</h5>
                <p>Aproveite as nossas ofertas, e compre a camisa do seu time do coração!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>CAMISAS DAS NOVAS LIGAS</h5>
                <p>Não deixe de conferir as ofertas de camisas das ligas mais queridas do brasil.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h5>CAMISAS DAS LIGAS INTERNACIONAS</h5>
                <p>Não perca a oportunidade de torcer para o seu time, com a camisa certa!</p>
                </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
            
    );
}



export default Carousel;