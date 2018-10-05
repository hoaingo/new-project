package com.pms.modal.purchase.order;

import java.util.List;

public class UpdatedPODTO {
    private PurchaseOrderDTO poDTO;
    private List<POItemDetailDTO> itemDTO;
    private List<Integer> itemIdRemove;

    public PurchaseOrderDTO getPoDTO() {
        return poDTO;
    }

    public void setPoDTO(PurchaseOrderDTO poDTO) {
        this.poDTO = poDTO;
    }

    public List<POItemDetailDTO> getItemDTO() {
        return itemDTO;
    }

    public void setItemDTO(List<POItemDetailDTO> itemDTO) {
        this.itemDTO = itemDTO;
    }

    public List<Integer> getItemIdRemove() {
        return itemIdRemove;
    }

    public void setItemIdRemove(List<Integer> itemIdRemove) {
        this.itemIdRemove = itemIdRemove;
    }
    
}
