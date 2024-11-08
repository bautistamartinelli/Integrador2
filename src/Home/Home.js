import React from'react';
import Proteina from "../img/proteina.jpg"
import Creatina from "../img/creatina.jpg"
import { Link } from 'react-router-dom';
import "./Home.css"



const Home = () => {
    const carrito = () => {

        alert("Producto agregado al carrito");

        const producto = {
            nombre: 'creatina',
            precio: 30.000,
            descripcion: 'La creatina es un suplemento popular entre los atletas y culturistas por su capacidad para mejorar el rendimiento en ejercicios de alta intensidad. Ayuda a aumentar la fuerza y la masa muscular al permitir entrenamientos más intensos y prolongados.',
        }

        localStorage.setItem('producto', JSON.stringify(producto));

        

    }
    return(
        <>
        <main>
        <section class="cards">
            <div class="card" id="creatina">
                <Link to="/creatina"><img src={Creatina} alt="Creatina" /></Link>
                <h3>Creatina</h3>
                <p>Ayuda a mejorar el rendimiento en ejercicios de alta intensidad, promoviendo la fuerza y el aumento de masa muscular.</p>
                <p>Precio: $30.000</p>
                <button onClick={carrito}>Agregar al carrito</button>
            </div>
            <div class="card" id="proteina">
                <Link to="/proteina"><img src={Proteina} alt="Proteina" /></Link>
                <h3>Proteina</h3>
                <p>Esencial para la recuperación y el crecimiento muscular después del entrenamiento.</p>
                <p>Precio: $25.000</p>
                <button onClick={carrito}>Agregar al carrito</button>
            </div>
        </section>
    </main>
    </>
    )
}

export default Home;