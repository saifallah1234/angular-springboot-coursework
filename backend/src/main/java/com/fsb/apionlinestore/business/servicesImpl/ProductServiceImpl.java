package com.fsb.apionlinestore.business.servicesImpl;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.fsb.apionlinestore.business.exceptions.DuplicateCodeException;
import com.fsb.apionlinestore.business.services.ProductService;
import com.fsb.apionlinestore.dao.entities.Product;
import com.fsb.apionlinestore.dao.repositories.ProductRepository;

import jakarta.persistence.EntityNotFoundException;
@Service
public class ProductServiceImpl implements ProductService{
    private final ProductRepository productRepository;
    
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return this.productRepository.findAll(Sort.by(Direction.ASC,"name"));
    }

    @Override
    public Product addProduct(Product product) throws DuplicateCodeException {
        if (product == null) {
            throw new IllegalArgumentException("product cannot be null");
        }
        try {
            return productRepository.save(product);
        } catch (DataIntegrityViolationException e) {
            throw new DuplicateCodeException();
        }
    }

    @Override
    public Product updateProduct(Long id, Product product) throws DuplicateCodeException {
        if (id ==null || product ==null) {
            throw new IllegalArgumentException(" id and product cannot be null");
        }
        getProductById(id);
        
        try {
            return productRepository.save(product);
        } catch (Exception e) {
            throw new DuplicateCodeException();
        }
    }

    private Product getProductById(Long id) {
        return this.productRepository.findById(id).orElseThrow(()-> new EntityNotFoundException());
    }

    @Override
    public void deleteProduct(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("id cannot be null");
        }
        Product product =this.getProductById(id) ;
        productRepository.delete(product);
    }
    
}
