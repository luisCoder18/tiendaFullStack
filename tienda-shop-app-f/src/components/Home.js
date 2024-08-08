import React, { useEffect, useState } from 'react';
import { getProductos } from '../services/productService'; // Aquí va la importación

const Home = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosData = await getProductos();
                setProductos(productosData);
            } catch (error) {
                setError('Error fetching productos');
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {productos.length > 0 ? (
                    productos.map(producto => (
                        <li key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <p>{producto.descripcion}</p>
                            <p>${producto.precio}</p>
                            <img src={producto.imagenUrl} alt={producto.nombre} style={{ width: '200px' }} />
                        </li>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </ul>
        </div>
    );
};

export default Home;
