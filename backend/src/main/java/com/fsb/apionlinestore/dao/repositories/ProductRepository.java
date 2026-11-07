package com.fsb.apionlinestore.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fsb.apionlinestore.dao.entities.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{

}
