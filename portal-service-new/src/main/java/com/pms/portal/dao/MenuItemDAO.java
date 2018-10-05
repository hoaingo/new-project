package com.pms.portal.dao;

import com.pms.portal.model.MenuItem;
import java.util.List;

/**
 *
 * @author darik.intern
 */
public interface MenuItemDAO {

    List<MenuItem> getMenuListByPermission(String menuRoleId);
}
