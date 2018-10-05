package com.pms.item.dao;

import com.pms.model.ItemDTO;
import com.pms.model.ProductTypeDTO;
import com.pms.model.SubTypeDTO;
import java.util.List;

/**
 *
 * @author Conan
 */
public interface ItemDAO {

    List<ItemDTO> getListItems();

    ItemDTO getItemById(long itemId);

    ItemDTO updateItemById(ItemDTO item);

    ItemDTO createNewItem(ItemDTO item);

    boolean deleteItem(ItemDTO item);

    List<ItemDTO> getListItemByName(String name);

    List<ProductTypeDTO> getListProductType();

    List<SubTypeDTO> getListSubType();
}
