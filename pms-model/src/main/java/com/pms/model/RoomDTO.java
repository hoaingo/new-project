/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pms.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author User
 */
public class RoomDTO extends PagingDTO {

    @Key(value = "room_id")
    private long roomId;
    @Key(value = "branch_id")
    private long branchId;
    @Key(value = "room_name")
    private String roomName;
    @Key(value = "floor")
    private String floor;
    @Key(value = "capacity")
    private String capacity;
    @Key(value = "room_status")
    private String roomStatus;

    public long getRoomId() {
        return roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(String roomStatus) {
        this.roomStatus = roomStatus;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public long getBranchId() {
        return branchId;
    }

    public void setBranchId(long branchId) {
        this.branchId = branchId;
    }

}
