package com.pms.portal.controller;

import com.pms.model.purchase_request.PurchaseRequestDTO;
import com.pms.portal.unit.MyGson;
import java.io.IOException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

    @Test
    public void testConvertJson() throws IOException {
        String json = "{\"purchase_type\":\"true\",\"purpose\":\"HR In need\",\"required_by\":\"2018-06-06\",\"location_used\":\"1\",\"single_tender\":\"true\",\"vendor_suggest_id\":\"\",\"priority\":\"0\",\"project_id\":\"1\",\"cost_center_id\":\"CC01\",\"gl_id\":\"35\",\"billing_id\":\"\",\"shipping_id\":\"20\",\"additional_comment\":\"\",\"items_selected\":[{\"item_id\":3,\"description\":\"des\",\"type\":29,\"sub_type\":2,\"product_detail\":\"\",\"quantity\":\"12\",\"gl_id\":\"35\",\"currency\":\"1\",\"unit_price\":\"12\",\"total_price\":\"144.0000\",\"vendor_id\":\"4\",\"pr_id\":\"\",\"id\":3}],\"upload_file\":[],\"within_budget\":\"false\"}";
        PurchaseRequestDTO pr = MyGson.fromJson(json, PurchaseRequestDTO.class);
        System.out.println(pr.toString());
    }

}
