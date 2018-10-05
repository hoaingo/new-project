/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.portal;

import com.pms.model.purchase_request.PurchaseRequestDTO;
import com.pms.portal.unit.MyGson;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author katy.trinh
 */
public class Test {
    public static void main(String[] args) {
        String json = "{\"purchase_type\":\"true\",\"purpose\":\"HR In need\",\"required_by\":\"2018-06-06\",\"location_used\":\"1\",\"single_tender\":\"true\",\"vendor_suggest_id\":\"\",\"priority\":\"0\",\"project_id\":\"1\",\"cost_center_id\":\"CC01\",\"gl_id\":\"35\",\"billing_id\":\"\",\"shipping_id\":\"20\",\"additional_comment\":\"\",\"items_selected\":[{\"item_id\":3,\"description\":\"des\",\"type\":29,\"sub_type\":2,\"product_detail\":\"\",\"quantity\":\"12\",\"gl_id\":\"35\",\"currency\":\"1\",\"unit_price\":\"12\",\"total_price\":\"144.0000\",\"vendor_id\":\"4\",\"pr_id\":\"\",\"id\":3}],\"upload_file\":[],\"within_budget\":\"false\"}";
        PurchaseRequestDTO pr;
        try {
            pr = MyGson.fromJson(json, PurchaseRequestDTO.class);
            System.out.println(pr.toString());
        } catch (IOException ex) {
            Logger.getLogger(UserApplication.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
