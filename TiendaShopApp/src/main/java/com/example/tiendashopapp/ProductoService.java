package com.example.tiendashopapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> getAllProductos(){
        return productoRepository.findAll();
    }

    public Producto getProductoById(Long id){
        return productoRepository.findById(id).orElseThrow(()-> new RuntimeException("Producto no encontrado"));
    }

    public Producto createProducto(Producto producto){
        return productoRepository.save(producto);
    }
}
