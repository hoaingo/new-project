import { observable, action } from 'mobx';
import MyNotification from '../MyNotification';
import path from '../path_variable';

export class PermissionStore {
    @observable listPerName = []
    @observable permissions = []
    @observable allPermissions = []
    @observable permission_obj = { permissionId: '', permissionName: '', permissionDescription: '', updatedDate: '', updatedBy: '' }
    @observable isdeny = false;

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetchData () {
        fetch(path.permission.GET_ALL_PERMISSIONS, {
            credentials: 'include'
        })
        .then(this.handleErrors)
        .then(response => response.json())
        .then((data) => {
                this.allPermissions = data 
                this.listPerName = data.map(item => {
                    return (item.permissionName.toLowerCase())
                });
        })
        .catch( error => {
            this.isdeny = true;
            this.generate("danger","Failure Notification!","Failed to fetch Permissions!");   
        })
    }

    fetchPermissionsByLoginUser () {
        fetch(path.permission.GET_PERMISSIONS_BY_LOGIN_USER, {
            credentials: 'include'
        })
        .then(this.handleErrors)
        .then(response => response.json())
        .then((data) => {
            this.permissions = data            
        })
        .catch( error => {
            this.isdeny = true;
            MyNotification.alertError('Failed to fetch Permissions!','');
        })
    }

@action
insertPermissionToList(obj) {
    this.permissions.push(obj);
}

@action
updatePermissionInListByid(obj) {
    this.permissions = this.permissions.map(item => item.permissionId === obj.permissionId ? obj : item);
}

@action
removePermissionById(permissionId) {
    this.permissions = this.permissions.filter((item) => item.permissionId !== permissionId)
}

@action
updateBodyPermission(permission_obj) {
    this.permission_obj = permission_obj
}

}

export default new PermissionStore;

