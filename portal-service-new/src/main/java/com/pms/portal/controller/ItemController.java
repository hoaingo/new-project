package com.pms.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pms.model.ItemDTO;
import com.pms.model.ProductTypeDTO;
import com.pms.model.SubTypeDTO;
import com.pms.portal.auth.AuthenticationService;
import com.pms.portal.feign.ItemClient;
import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "/pms/items")
//@PreAuthorize("hasAnyAuthority('CREATE_MODIFY_PURCHASE_REQUEST')")
public class ItemController {

    @Autowired
    ItemClient client;

    @Autowired
    AuthenticationService authService;


//    @PreAuthorize("hasRole('ROLE_REQUESTER')")
//    @PreAuthorize("hasAnyAuthority('CREATE_MODIFY_PURCHASE_REQUEST')")

    @RequestMapping(value = "/get-list-item", method = RequestMethod.GET)
    public List<ItemDTO> getListItems() {
        return client.getListItems();
    }

//    @PreAuthorize("hasAnyAuthority('CREATE_ITEM')")
    @RequestMapping(value = "/get-item-by-item-id", method = RequestMethod.GET)
    public ItemDTO getItemById(@RequestParam("itemId") long itemId) {
        return client.getItemById(itemId);
    }

//    @PreAuthorize("hasAnyAuthority('CREATE_ITEM')")
    @RequestMapping(value = "/new-item", method = RequestMethod.POST)
    public ItemDTO createNewItem(@RequestBody ItemDTO item) {
        return client.createNewItem(item);
    }

//    @PreAuthorize("hasAnyAuthority('CREATE_ITEM')")
    @RequestMapping(value = "/update-item", method = RequestMethod.POST)
    public ItemDTO updateItemById(@RequestBody ItemDTO item) {
        return client.updateItem(item);
    }

//    @PreAuthorize("hasAnyAuthority('CREATE_ITEM')")
    @RequestMapping(value = "/delete-item", method = RequestMethod.POST)
    public boolean deleteItemById(@RequestBody ItemDTO item) {
        return client.deleteItem(item);
    }

    @RequestMapping(value = "/get-by-name", method = GET)
    public List<ItemDTO> searchByName(@RequestParam("name") String name) {
        return client.getListItemByName(name);
    }
    
    @RequestMapping(value = "/get-list-product-type", method = GET)
    List<ProductTypeDTO> getListProductType(){
        return client.getListProductType();
    }
    
    @RequestMapping(value = "/get-list-sub-type", method = GET)
    public List<SubTypeDTO> getListSubType(){
        return client.getListSubType();
    };

}
