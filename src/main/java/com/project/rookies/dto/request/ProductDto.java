package com.project.rookies.dto.request;

import com.project.rookies.entities.enums.EProductStatus;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
public class ProductDto {
    @NotBlank(message = "product name is require")
    private String productName;
    @NotBlank(message = "description is require")
    private String description;
    @NotNull(message = "category is require")
    private Long categoryId;
    @NotNull(message = "price is require")
    private float price;
    @NotNull(message = "amount is require")
    private int amount;
    private EProductStatus status;
    @NotEmpty(message = "image is require")
    List<ImageDto> imageDtos;
}
