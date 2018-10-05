package com.pms.item.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.model.ItemDTO;
import com.pms.model.ProductTypeDTO;
import com.pms.model.SubTypeDTO;
import com.pms.user.auth.UserSession;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Conan
 */
@Repository
public class ItemDAOImpl implements ItemDAO {
    private static final Logger logger = Logger.getLogger(ItemDAOImpl.class.getName());

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    UserSession userSession;

    @Value("${up_pms_get_list_item}")
    String upPmsGetListItem;
    @Value("${up_pms_get_item_by_id}")
    String upPmsGetItemById;
    @Value("${up_pms_update_item_by_id}")
    String upPmsUpdateItemById;
    @Value("${up_pms_insert_item}")
    String upPmsInsertItem;
    @Value("${up_pms_delete_item_by_id}")
    String upPmsDeleteItemById;
    @Value("${up_pms_search_item_by_name}")
    String upPmsSearchItemByName;

    //product type
    @Value("${up_pms_get_list_product_type}")
    String upPmsGetListProductType;
    //SubType
    @Value("${up_pms_get_list_sub_type}")
    String upPmsGetListSubType;
    @Override
    public List<ItemDTO> getListItems() {
        return jdbcTemplate.query(upPmsGetListItem, RowMapperUtils.getRowMapper(ItemDTO.class));
    }

    @Override
    public ItemDTO getItemById(long itemId) {
        List<ItemDTO> item = jdbcTemplate.query(upPmsGetItemById, RowMapperUtils.getRowMapper(ItemDTO.class), itemId);
        if (item.isEmpty()) {
            return null;
        }
        return item.get(0);
    }

    @Override
    public ItemDTO updateItemById(ItemDTO item) {
        boolean isSuccess = jdbcTemplate.update(upPmsUpdateItemById,
                item.getItemId(), item.getName(), item.getDescription(), item.getType(), item.getSubType(), item.getUnitMeasurement(), userSession.getUserName()) > 0;
        if(isSuccess){
            return getItemById(item.getItemId());
        }
        return null;
    }

    @Override
    public ItemDTO createNewItem(ItemDTO item) {
        return jdbcTemplate.queryForObject(upPmsInsertItem, RowMapperUtils.getRowMapper(ItemDTO.class),
                item.getName(), item.getDescription(), item.getType(), item.getSubType(), item.getUnitMeasurement(), userSession.getUserName());

    }

    @Override
    public boolean deleteItem(ItemDTO item) {
        return jdbcTemplate.update(upPmsDeleteItemById, item.getItemId()) > 0;
    }

    @Override
    public List<ItemDTO> getListItemByName(String name) {
        return jdbcTemplate.query(upPmsSearchItemByName, RowMapperUtils.getRowMapper(ItemDTO.class), name);
    }

    @Override
    public List<ProductTypeDTO> getListProductType() {
        return jdbcTemplate.query(upPmsGetListProductType, RowMapperUtils.getRowMapper(ProductTypeDTO.class));
    }

    @Override
    public List<SubTypeDTO> getListSubType() {
        return jdbcTemplate.query(upPmsGetListSubType, RowMapperUtils.getRowMapper(SubTypeDTO.class));
    }
}
