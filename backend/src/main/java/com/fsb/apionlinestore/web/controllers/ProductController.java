package com.fsb.apionlinestore.web.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsb.apionlinestore.business.exceptions.DuplicateCodeException;
import com.fsb.apionlinestore.business.services.ProductService;
import com.fsb.apionlinestore.dao.entities.Product;
import com.fsb.apionlinestore.web.dto.ProductDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/products/")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public ResponseEntity<?> getProducts() {
        List<ProductDTO> products = this.productService.getAllProducts().stream()
        .map(ProductDTO::toProductDTO)
        .toList();
        return new ResponseEntity<>(products,HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<?> addProduct(@RequestBody Product productRequest) throws DuplicateCodeException {
        Product product=productService.addProduct(productRequest);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product requestProduct) throws DuplicateCodeException {
        Product product = productService.updateProduct(id, requestProduct);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        this.productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
