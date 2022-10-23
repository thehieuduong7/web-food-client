package com.project.rookies.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Setter
@Getter
public class RateDto {
    @NotBlank(message = "content is require")
    private String content;
    @NotNull(message = "point is require")
    private float point;
    @NotNull(message = "customerId is require")
    private Long customerDtoId;
    @NotNull(message = "productId is require")
    private Long productDtoId;
}
