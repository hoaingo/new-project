package com.pms.portal.feign;

import com.pms.model.ShippingDTO;
import com.pms.model.paging.PagingResult;
import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author darik.intern
 */
@EnableFeignClients
@FeignClient("shipping-service")
public interface ShippingClient {
    
        @Cacheable(value = "shipping")
        @RequestMapping(value = "/pms/shippings/get-shipping", method = GET)
        ShippingDTO getShipping(@RequestParam("shippingAddressId") int shippingAddressId);

        @RequestMapping(value = "/pms/shippings/get-all-shipping", method = GET)
        List<ShippingDTO> getListShipping();
        
//        @Cacheable(value = "shipping", cacheManager="timeoutCacheManager")
        @Cacheable(value = "shipping")
        @RequestMapping(value = "/pms/shippings/get-all-shipping-paging", method = GET)
        PagingResult<ShippingDTO> getListShipping(@RequestParam("page") int page, @RequestParam("limit") int limit);
        
        @Cacheable(value = "shipping")
        @RequestMapping(value = "/pms/shippings/get-all-shipping-paging-filter", method = GET)
        PagingResult<ShippingDTO> getListShipping(@RequestParam("page") int page
                                                , @RequestParam("limit") int limit 
                                                , @RequestParam("companyName") String companyName 
                                                , @RequestParam("officeLocation") String officeLocation);
        
        @CacheEvict(value = "shipping", allEntries=true)
        @RequestMapping(value = "/pms/shippings/add-shipping", method =POST)
        boolean addShipping(@RequestBody ShippingDTO shipping);
        
        @CacheEvict(value = "shipping", allEntries=true)
        @RequestMapping(value = "/pms/shippings/delete-shipping", method = POST)
        boolean deleteShipping(@RequestParam("shippingAddressId") int shippingAddressId);
        
        @CacheEvict(value = "shipping", allEntries=true)
        @RequestMapping(value = "/pms/shippings/update-shipping", method = POST)
        boolean updateShipping(@RequestBody ShippingDTO shipping);
        
        @RequestMapping(value = "/pms/shippings/get-by-name", method = GET)
        Object getShippingByName(@RequestParam("name") String name);
}
