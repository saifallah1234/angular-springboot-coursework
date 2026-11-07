package com.fsb.apionlinestore.business.services;

import java.util.List;

import com.fsb.apionlinestore.business.exceptions.DuplicateCodeException;
import com.fsb.apionlinestore.dao.entities.Product;

public interface ProductService {
    List<Product> getAllProducts();
    Product addProduct(Product product) throws DuplicateCodeException;
    Product updateProduct(Long id,Product product) throws DuplicateCodeException;
    void deleteProduct(Long id);
} 
