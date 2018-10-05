package com.pms.item.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pms.item.dao.ItemDAO;
import com.pms.model.ItemDTO;
import com.pms.model.ProductTypeDTO;
import com.pms.model.SubTypeDTO;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Conan
 */
@RestController
@RequestMapping("/pms/items")
public class ItemController {

    @Autowired
    ItemDAO itemDAO;

    @RequestMapping("/get-list-item")
    public List<ItemDTO> getListItems() {
        return itemDAO.getListItems();
    }

    @RequestMapping(value = "/get-item-by-item-id", method = GET)
    public ItemDTO getItemById(@RequestParam("itemId") long itemId) {
        return itemDAO.getItemById(itemId);
    }

    @RequestMapping(value = "/update", method = POST)
    public ItemDTO updateItemById(@RequestBody ItemDTO item) {
        return itemDAO.updateItemById(item);
    }

    @RequestMapping(value = "/new", method = POST)
    public ItemDTO createNewItem(@RequestBody ItemDTO item) {
        return itemDAO.createNewItem(item);
    }

    @RequestMapping(value = "/delete", method = POST)
    public boolean deleteItem(@RequestBody ItemDTO item) {
        return itemDAO.deleteItem(item);
    }

    @RequestMapping(value = "/get-by-name", method = GET)
    public List<ItemDTO> getItemByName(@RequestParam("name") String name) {
        return itemDAO.getListItemByName(name);
    }

    @RequestMapping(value = "/get-list-product-type", method = GET)
    public List<ProductTypeDTO> getListProductType() {
        return itemDAO.getListProductType();
    }
    @RequestMapping(value = "/get-list-sub-type", method = GET)
    public List<SubTypeDTO> getListSubType(){
        return itemDAO.getListSubType();
    };

}
