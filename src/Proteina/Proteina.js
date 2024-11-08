import ProteinaL from "../img/proteina.jpg"


const Proteina = () => {
    return (
        <section class="producto">
            <img src={ProteinaL} alt="Proteína" />
            <p><strong>Descripción:</strong> La proteína en polvo whey es un suplemento esencial para quienes buscan aumentar su ingesta de proteínas, mejorar la recuperación muscular y apoyar el crecimiento muscular. Ideal para el consumo post-entrenamiento.</p>
                <p><strong>Beneficios:</strong></p>
                <ul>
                    <li>Apoya el crecimiento y la recuperación muscular.</li>
                    <li>Fácil digestión y rápida absorción.</li>
                    <li>Ayuda a satisfacer las necesidades diarias de proteína.</li>
                    <li>Ideal para consumir después del entrenamiento.</li>
                </ul>
                
                <p><strong>Modo de Uso:</strong> Mezclar una porción de 30 gramos de proteína en 200-250 ml de agua o leche y consumir después del entrenamiento o como un suplemento de proteínas adicional en tu dieta.</p>
                
                <p><strong>Ingredientes:</strong> Concentrado de proteína de suero de leche, saborizante natural, y edulcorantes.</p>
                
                <p><strong>Peso Neto:</strong> 1 kg</p>
                
                <p><strong>Precio:</strong> $25.000 ARS</p>
                
                <p><strong>Advertencias:</strong></p>
                <ul>
                    <li>Consultar con un médico antes de usar si tienes alguna condición de salud.</li>
                    <li>Este producto no debe ser utilizado como un sustituto de una dieta equilibrada.</li>
                    <li>Mantener fuera del alcance de los niños.</li>
                </ul>
                <a href="www.creatina.com" class="btn-comprar">Comprar</a>
        </section>
);
};

export default Proteina;