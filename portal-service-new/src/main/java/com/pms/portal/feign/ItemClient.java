package com.pms.portal.feign;

import java.util.List;
import com.pms.model.ItemDTO;
import com.pms.model.ProductTypeDTO;
import com.pms.model.SubTypeDTO;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author mark.intern
 */
@EnableFeignClients
@FeignClient("item-service")
public interface ItemClient {

    @RequestMapping(value = "/pms/items/get-list-item", method = GET)
    List<ItemDTO> getListItems();

    @RequestMapping(value = "/pms/items/get-item-by-item-id", method = GET)
    ItemDTO getItemById(@RequestParam("itemId") long itemId);

    @RequestMapping(value = "/pms/items/update", method = POST)
    ItemDTO updateItem(@RequestBody ItemDTO item);

    @RequestMapping(value = "/pms/items/new", method = POST)
    ItemDTO createNewItem(@RequestBody ItemDTO item);

    @RequestMapping(value = "/pms/items/delete", method = POST)
    boolean deleteItem(@RequestBody ItemDTO item);

    @RequestMapping(value = "/pms/items/get-by-name", method = GET)
    List<ItemDTO> getListItemByName(@RequestParam("name") String name);
    
    @RequestMapping(value = "/pms/items/get-list-product-type", method = GET)
    List<ProductTypeDTO> getListProductType();
        
    @RequestMapping(value = "/pms/items/get-list-sub-type", method = GET)
    public List<SubTypeDTO> getListSubType();
}
