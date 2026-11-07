package com.fsb.apionlinestore.web.dto;

import com.fsb.apionlinestore.dao.entities.Product;

import lombok.Builder;

@Builder
public record ProductDTO (Long id,String code,String name,String image,Float price){
    public static ProductDTO toProductDTO(Product product){
        return ProductDTO.builder()
        .id(product.getId())
        .name(product.getName())
        .code(product.getCode())
        .image(product.getImage())
        .price(product.getPrice())
        .build();
    }
}
