import "./Alta.css";


const Alta = () => {
return (
    
    <>
    <main>
    <h1>Alta de Productos</h1>
        <form id="product-form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" required />

            <label for="stock">Stock:</label>
            <input type="number" id="stock" name="stock" required />

            <label for="marca">Marca:</label>
            <input type="text" id="marca" name="marca" required />

            <label for="categoria">Categoría:</label>
            <input type="text" id="categoria" name="categoria" required />

            <label for="descripcion-corta">Descripción Corta:</label>
            <textarea id="descripcion-corta" name="descripcion-corta" required></textarea>

            <label for="descripcion-larga">Descripción Larga:</label>
            <textarea id="descripcion-larga" name="descripcion-larga" required></textarea>

            <label for="envio">Envío sin cargo:</label>
            <input type="checkbox" id="envio" name="envio" />

            <label for="edad-desde">Edad Desde:</label>
            <input type="number" id="edad-desde" name="edad-desde" />

            <label for="edad-hasta">Edad Hasta:</label>
            <input type="number" id="edad-hasta" name="edad-hasta" />

            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto" accept="image/*" required />

            <button type="submit">Agregar Producto</button>
        </form>
        </main>
        </>
)

}

export default Alta