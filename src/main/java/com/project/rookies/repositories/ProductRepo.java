package com.project.rookies.repositories;

import com.project.rookies.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ProductRepo extends JpaRepository<Product,Long> {
    Product findProductByProductName(String name);
    Product findProductByProductNameAndStatus(String productName,Boolean status);
    @Query(value = "select * from product p where status is true order by total_sold desc,updated_at desc offset :page limit :size ",nativeQuery = true)
    List<Product> getListproduct(@Param("page") int page,@Param("size") int size);
    @Query(value = "select * from product p where status is true order by total_sold desc offset :page limit :size ",nativeQuery = true)
    List<Product> getListProductBestSeller(@Param("page") int page,@Param("size") int size);
    @Modifying
    @Query(value = "update product set status = :status where id = :id",nativeQuery = true)
    int updateProductStatusById(@Param("status") boolean status, @Param("id") Long id);
}
