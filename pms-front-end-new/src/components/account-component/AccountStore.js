import { observable, action } from "mobx";
import path from "../path_variable";
import MyNotification from "../MyNotification";
export class AccountStore {
  @observable loginAccount = {};
  @observable account = { limit: 5, page: 0, totalPage: 0, totalRecord: 0, records: [] };
  @observable pageEdit = 1;
  @observable
  list = {
    name: "",
    department: "",
    address: "",
    associate_role: ""
  };
  @observable csvData = []
  @observable
  listLDAP = {
    userId: "",
    userName: "",
    cn: "",
    name: ""
  };
  @observable dataPaging = [];
  @observable listUser = [];
  // @observable isChecked = ;
  @observable arr = [];
  @observable valueFieldName1 = "";
  @observable valueFieldName2 = "";
  @observable valueFieldSearch = "";
  @observable department = [];
  @observable listRole = [];
  @observable newRole = [];
  @observable rolesAccount = [];
  @observable newAccount = {
    permissions : "",
    status : "ACTIVE",
    userGender : "Male"

  };
  @observable accountById = [];
  @observable
  DataInitial = {
    account: [{ id: "", name: "", type: "" }],
    department: [{ id: "", name: "", type: "" }],
    address: [{ id: "", name: "", type: "" }],
    associate_role: [{ id: "", name: "", type: "" }]
  };
  @observable
  accountDTO = {
    userName: "",
    fullName: "",
    confirmPassword: "",
    password: "",
    status: "INACTIVE",
    department: "",
    permissions: "",
    associatedRoles: "",
    maxApprovalAmount: "",
    lstCompanies: "",
    specificPrPo: "",
    delegatedUserId: "",
    delegateFromDate: "",
    delegateExpiredDate: "",
    isRunning: 1
  };
  @observable listUserLDAP = [];

  resetAccount() {
    this.accountDTO = {
      userId: "",
      userName: "",
      fullName: "",
      confirmPassword: "",
      password: "",
      status: "ACTIVE",
      department: "",
      permissions: "",
      associatedRoles: "",
      maxApprovalAmount: "",
      lstCompanies: "",
      specificPrPo: "",
      delegatedUserId: "",
      delegateFromDate: "",
      delegateExpiredDate: "",
      isRunning: 1
    };
  }

  @observable isdeny = false;
  @observable permissions = [];
  constructor() { }
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  fetchPermissionName=()=> {
    fetch(path.account.GET_ALL_PERMISSION_NAME,{
        credentials : 'include'
    })
    .then(this.handleErrors)
    .then( response => response.json())
    .then( data => {
      
        this.permissions = data
               
    }).catch( error => {
        this.isdeny = true;
        this.generate("danger","False !","Connec false !");      
    }) 
}

  insertAccount = (data) => {
    fetch(path.account.INSERT_ACCOUNT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(this.handleErrors)
      .then(response => response.redirected ? window.location.reload() : response.json())
      .then(response => {
        if (response) {
          // this.props.goBack();
          this.pageEdit = this.account.totalPage
          MyNotification.alertSuccess("Add new user success!", "");
          this.fetchListAccount(!!this.pageEdit ? this.pageEdit : 1);
        }
        else {
          MyNotification.alertError("User account name must be unique, insert unaccepted!")
        }

      }).catch(error => {
        MyNotification.alertError("Add new user fail!", "");
      })
  }

  fetchAccountById() {
    fetch(path.account.GET_ACCOUNT_BY_ID, {
      credentials: "include"
    })
      .then(this.handleErrors)
      .then(
        response =>
          response.json()
      )
      .then(data => {
        this.accountById = data;
        console.log(data);
      })
      .catch(error => {
        MyNotification.alertError("Get Account By Id false!");
        this.isdeny = true;
        this.account = [];
      });
  }
  fetchAllInitData() {
    fetch(path.account.GET_ALL_ACCOUNT_INIT_DATA, {
      credentials: "include"
    })
      .then(
        response => response.json()
      )
      .then(data => {
        if (data.status === 500) {
          this.error = {
            status: true,
            message: "Failed to fetch list"
          };
          throw new Error("failed to fetch list");
        }

        this.DataInitial = data;
      })
      .catch(e => {
        console.log(e);
      });
  }

  fetchDetail(id) {
    fetch(path.account.GET_DETAIL_ACCOUNT + id, {
      credentials: "include"
    })
      .then(
        response => response.json()
      )
      .then(data => {
        if (data.status === 500) {
          this.error = {
            status: true,
            message: "Failed to fetch detail"
          };
          throw new Error("failed to fetch detail");
        }

        this.accountDTO.permissions = data.permissions.toArray();
        this.accountDTO = data;
      })
      .catch(e => {
        console.log(e);
      });
  }

  fetchAllUser() {
    fetch(path.account.GET_ALL_ACCOUNTS, {
      credentials: "include"
    })
      .then(this.handleErrors)
      .then(
        response => response.json()
      )
      .then(data => {
        this.listUser = data;
      })
      .catch(error => {
        MyNotification.alertError("Get All User fail !");
        this.isdeny = true;
        this.account = [];
      });
  }

  fetchListAccount = pageNumber => {
    var url =
      path.account.GET_ALL_ACCOUNTS_PAGING_FILTER +
      pageNumber +
      "&limit=" +
      this.account.limit +
      "&userName=" +
      this.valueFieldName1 +
      "&roleName=" +
      this.valueFieldName2;

    fetch(url, {
      credentials: "include"
    })
      .then(this.handleErrors)
      // .then(response => response.json())
      .then(response => response.json())
      .then(data => {
        this.account = data;
      })
      .catch(error => {
        this.isdeny = true;
        MyNotification.alertError('Occurred error: "' + error + '" during get list account.', "");
      });
  };
  fetchData() {

    // fetch(path.department.GET_ALL_DEPARTMENT, {
    //   credentials: "include"
    // })
    //   .then(this.handleErrors)
    //   .then(
    //     response =>
    //       response.json()
    //   )
    //   .then(data => {
    //     this.department = data;
    //   })
    //   .catch(error => {
    //     MyNotification.alertError("Get Department false!");
    //     this.isdeny = true;
    //     this.department = [];
    //   });
    // fetch(path.role.GET_ROLES_BY_LOGIN_USER, {
    //   credentials: "include"
    // })
    //   .then(this.handleErrors)
    //   .then(
    //     response =>
    //       response.json()
    //   )
    //   .then(data => {
    //     this.listRole = data;
    //   })
    //   .catch(error => {
    //     MyNotification.alertError("Get Roles by login user false!");
    //     this.isdeny = true;
    //     this.listRole = [];
    //   });
  }
  fetchDetailAccount() {
    fetch(path.account.GET_DETAIL, {
      credentials: "include"
    })
      .then(this.handleErrors)
      .then(
        response => response.json()
      )
      .then(data => {
        this.loginAccount = data;
      })
      .catch(error => {
        MyNotification.alertError("Get Roles by login user false!");
        this.isdeny = true;
      });
  }

  fetchUserFromLDAP = (userName) => {

    if (userName == "") {
      var url = path.account.GET_ALL_LIST_USER_LDAP
    }
    else {
      var url = path.account.GET_LIST_USER_LDAP + "?userName=" + userName
    }


    fetch(url, {
      credentials: "include"
    })
      .then(this.handleErrors)
      .then(
        response => response.json()
      )
      .then(data => {
        this.listUserLDAP = data;
        this.dataPaging = data
      })
      .catch(error => {
        MyNotification.alertError("Get list user from LDAP fail!");

        this.isdeny = true;
      });



  };

  @action
  updateAccount = (account) => {
    this.newAccount = account;
  }

  @action
  updateLDAP(account) {
    this.listLDAP = account;
  }
  @action
  updateList(item) {
    this.list = item;
  }
  // @action
  // updateAccount(item) {
  //   this.accountDTO = item;
  //   this.delegateUserDTO = item;
  // }
  @action
  updateLoginAccount(loginAccount) {
    this.loginAccount = loginAccount;
  }
  @action
  refeshData() {
    this.newRole = [];
    this.newAccount = [];
  }
  @action
  resfeshPassword() {
    document.getElementById("currentPassword").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirm").value = "";
    document.getElementById("passwordLabel").className = "form-group";
    document.getElementById("passwordConfirmLabel").className = "form-group";
    document.getElementById("fullNameLabel").className = "form-group";
  }
  resfeshPasswordIncorrect() {
    document.getElementById("currentPasswordLabel").className =
      "form-group has-danger";
    document.getElementById("currentPassword").className =
      "form-control form-control-danger";
  }
}
export default new AccountStore();