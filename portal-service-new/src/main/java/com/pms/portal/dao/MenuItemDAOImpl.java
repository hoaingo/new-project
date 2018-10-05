package com.pms.portal.dao;

import com.pms.jdbc.orm.RowMapperUtils;
import com.pms.portal.model.MenuItem;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author darik.intern
 */
@Repository
public class MenuItemDAOImpl implements MenuItemDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Value("${up_pms_get_list_menu_item_by_list_permission}")
    String upPmsGetListMenuItemByListPermission;

    @Override
    public List<MenuItem> getMenuListByPermission(String lstPermissionId) {
        List<MenuItem> listAllMenu = jdbcTemplate.query(upPmsGetListMenuItemByListPermission, RowMapperUtils.getRowMapper(MenuItem.class), lstPermissionId);

        Map<Integer, List<MenuItem>> mapByParentId = listAllMenu.stream().collect(Collectors.groupingBy(MenuItem::getParentId, Collectors.toList()));

        Map<Integer, List<MenuItem>> sortMapByParentId = new TreeMap<Integer, List<MenuItem>>(mapByParentId);
        List<MenuItem> menu = sortMapByParentId.values().stream().findFirst().get();
        recursionMenu(menu.get(0), menu, sortMapByParentId);

        return menu;
    }

    private void recursionMenu(MenuItem item, List<MenuItem> listChildMenu, Map<Integer, List<MenuItem>> map) {
        if (listChildMenu != null && !listChildMenu.isEmpty()) {
            item.setSubMenu(listChildMenu.stream().filter(s -> !s.getIsCardMenu()).collect(Collectors.toList()));
            item.setCardMenu(listChildMenu.stream().filter(s -> s.getIsCardMenu()).collect(Collectors.toList()));
            for (MenuItem childItem : listChildMenu) {
                recursionMenu(childItem, map.get(childItem.getMenuId()), map);
            }

        }

    }
}
