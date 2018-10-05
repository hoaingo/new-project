package com.pms.portal.model;

import com.pms.jdbc.orm.Key;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author darik.intern
 */
public class MenuItem {

    @Key(value = "id")
    int menuId;
     @Key(value = "parent_id")
    int parentId;
    @Key(value = "menu_title")
    String menuTitle;
    @Key(value = "menu_class")
    String menuClass;
    @Key(value = "menu_path")
    String menuPath;
    @Key(value = "is_card_menu")
    Boolean isCardMenu;
    
    List<MenuItem> subMenu = new ArrayList<>();
    List<MenuItem> cardMenu = new ArrayList<>();

    public Boolean getIsCardMenu() {
        return isCardMenu;
    }

    public void setIsCardMenu(Boolean isCardMenu) {
        this.isCardMenu = isCardMenu;
    }

    public List<MenuItem> getCardMenu() {
        return cardMenu;
    }

    public void setCardMenu(List<MenuItem> cardMenu) {
        this.cardMenu = cardMenu;
    }

    public String getMenuPath() {
        return menuPath;
    }

    public void setMenuPath(String menuPath) {
        this.menuPath = menuPath;
    }

    public int getMenuId() {
        return menuId;
    }

    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public String getMenuTitle() {
        return menuTitle;
    }

    public void setMenuTitle(String menuTitle) {
        this.menuTitle = menuTitle;
    }

    public String getMenuClass() {
        return menuClass;
    }

    public void setMenuClass(String menuClass) {
        this.menuClass = menuClass;
    }

    public List<MenuItem> getSubMenu() {
        return subMenu;
    }

    public void setSubMenu(List<MenuItem> subMenu) {
        this.subMenu = subMenu;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }
    
}
