import "./Creatina.css"
import LogoC from "../img/creatina.jpg"


const Creatina = () => {
    return (
        <section class="producto">
        <img src={LogoC} alt="Creatina" />
        <div class="producto-detalles">
    <h1>Creatina Monohidratada</h1>
    
    <p><strong>Descripción:</strong> La creatina monohidratada es un suplemento popular entre atletas y personas que entrenan en el gimnasio. Es conocido por su capacidad para aumentar la fuerza, mejorar el rendimiento en actividades de alta intensidad y promover el crecimiento muscular.</p>
    
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Aumento de la fuerza y resistencia muscular.</li>
        <li>Mejora del rendimiento en ejercicios de alta intensidad.</li>
        <li>Incremento de la masa muscular.</li>
        <li>Ayuda en la recuperación después del ejercicio.</li>
    </ul>
    
    <p><strong>Modo de Uso:</strong> Consumir 5 gramos de creatina monohidratada al día, preferiblemente después del entrenamiento o según las indicaciones de un profesional de la salud.</p>
    
    <p><strong>Ingredientes:</strong> 100% creatina monohidratada pura.</p>
    
    <p><strong>Peso Neto:</strong> 300 gramos</p>
    
    <p><strong>Precio:</strong> $30.000 ARS</p>
    
    <p><strong>Advertencias:</strong></p>
    <ul>
        <li>No exceder la dosis recomendada.</li>
        <li>Mantener fuera del alcance de los niños.</li>
        <li>Consultar con un médico antes de usar si tienes alguna condición de salud o estás tomando medicamentos.</li>
    </ul>
</div>
        <a href="www.creatina.com" class="btn-comprar">Comprar</a>
    </section>
    );
};

export default Creatina;