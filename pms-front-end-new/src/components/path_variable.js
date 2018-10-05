export const prefixPath = 'http://localhost:7979/scm'
export const urlLocation = 'http://localhost:7979/'
const path = {
  item: {
    GET_STATUS_SERVICE: `${prefixPath}/items/get-status-service`,
    GET_ALL_ITEM: `${prefixPath}/items/get-list-item`,
    UPDATE_ITEM: `${prefixPath}/items/update-item`,
    CREATE_ITEM: `${prefixPath}/items/new-item`,
    DELETE_ITEM: `${prefixPath}/items/delete-item`,
    GET_BY_NAME: `${prefixPath}/items/get-by-name?name=`,
    GET_ITEM_BY_ID: `${prefixPath}/items/get-item-by-item-id?itemId=`,
    GET_ALL_PRODUCT_TYPE: `${prefixPath}/items/get-list-product-type`,
    GET_ALL_SUB_TYPE: `${prefixPath}/items/get-list-sub-type`
  },
  shipping: {
    GET_ALL: `${prefixPath}/shippings/get-all-shipping`,
    ADD_SHIPPING: `${prefixPath}/shippings/add-shipping`,
    EDIT_SHIPPING: `${prefixPath}/shippings/update-shipping`,
    DEL_SHIPPING: `${prefixPath}/shippings/delete-shipping?shippingAddressId=`,
    GET_BY_NAME: `${prefixPath}/shippings/get-by-name?name=`,
    GET_ALL_SHIPPING_PAGING: `${prefixPath}/shippings/get-all-shipping-paging?page=`,
    GET_ALL_SHIPPING_PAGING_FILTER: `${prefixPath}/shippings/get-all-shipping-paging-filter?page=`
  },
  account: {
    GET_ALL_ACCOUNTS: `${prefixPath}/accounts/get-list-user-name`,
    GET_DETAIL_ACCOUNT: `${prefixPath}/accounts/get-detail-account?userId=`,
    INSERT_ACCOUNT: `${prefixPath}/accounts/insert-account`,
    UPDATE_ACCOUNT: `${prefixPath}/accounts/update-account`,
    DELETE_ACCOUNT: `${prefixPath}/accounts/delete-account`,
    GET_DETAIL: `${prefixPath}/accounts/detail-account`,
    GET_ACCOUNT_BY_ID: `${prefixPath}/accounts/get-account-by-id`,
    UPDATE_ACCOUNT_PROFILE: `${prefixPath}/accounts/update-account-profile`,
    GET_ALL_ACCOUNTS_PAGING_FILTER: `${prefixPath}/accounts/get-all-account?page=`,
    GET_ALL_ACCOUNT_INIT_DATA: `${prefixPath}/accounts/get-data-new-account`,
    INSERT_OR_UPDATE_USER_SETTING: `${prefixPath}/accounts/insert-or-update-user-setting`,
    GET_ALL_LIST_USER_LDAP: `${prefixPath}/ldap/get-list-user-ldap`,
    GET_LIST_USER_LDAP: `${prefixPath}/ldap/get-user-ldap`,
    GET_SHIFT: `${prefixPath}/accounts/get-account-shift`,
    GET_ALL_PERMISSION_NAME: `${prefixPath}/accounts/get-list-permission-name`
  },
  student: {
    GET_ALL_STUDENT_PAGING_FILTER: `${prefixPath}/students/get-all-student?page=`,
    INSERT_STUDENT: `${prefixPath}/students/insert-student`,
    UPDATE_STUDENT: `${prefixPath}/students/update-student`,
    DELETE_STUDENT: `${prefixPath}/students/delete-student`,
    GET_SCHEDULE: `${prefixPath}/students/get-student-schedule`
  },
  course: {
    GET_ALL_COURSE: `${prefixPath}/course/get-all-course`,
    GET_ALL_COURSE_PAGING_FILTER: `${prefixPath}/course/get-all-course-paging-filter?page=`,
    ADD_COURSE: `${prefixPath}/course/add-course`,
    EDIT_COURSE: `${prefixPath}/course/update-course`,
    DEL_COURSE: `${prefixPath}/course/delete-course?courseId=`,
  },
  course_level: {
    GET_ALL_COURSE_LEVEL_PAGING_FILTER: `${prefixPath}/course-level/get-all-course-level-paging-filter?page=`,
    ADD_COURSE_LEVEL: `${prefixPath}/course-level/add-course-level`,
    EDIT_COURSE_LEVEL: `${prefixPath}/course-level/update-course-level`,
    DEL_COURSE_LEVEL: `${prefixPath}/course-level/delete-course-level?courseLevelId=`,
    GET_ALL_COURSE_NAME: `${prefixPath}/course-level/get-list-course-name`,
    ADD_ROOM: `${prefixPath}/course-level/add-room`,
    EDIT_ROOM: `${prefixPath}/course-level/update-room`,
    DEL_ROOM: `${prefixPath}/course-level/delete-room`,
    GET_ALL_ROOM: `${prefixPath}/course-level/get-list-room?page=`,
    ADD_BRANCH: `${prefixPath}/course-level/add-branch`,
    EDIT_BRANCH: `${prefixPath}/course-level/update-branch`,
    DEL_BRANCH: `${prefixPath}/course-level/delete-branch`,
    GET_ALL_BRANCH: `${prefixPath}/course-level/get-list-branch?page=`,
    GET_TIME_SHEET: `${prefixPath}/course-level/get-time-sheet?courseLevelId=`
  },
  room: {
    GET_ALL_ROOM_PAGING_FILTER: `${prefixPath}/room/get-all-room-paging-filter?page=`,
    ADD_ROOM: `${prefixPath}/room/add-room`,
    EDIT_ROOM: `${prefixPath}/room/update-room`,
    DEL_ROOM: `${prefixPath}/room/delete-room?roomId=`,
    GET_ALL_BRANCH_NAME: `${prefixPath}/room/get-list-branch-name`,
  },
  schedule: {
    GET_ALL_SCHEDULE: `${prefixPath}/course/get-all-schedule?courseLevelName=`,
    GET_SCHEDULE_ID: `${prefixPath}/course/get-schedule-id?classId=`,
    EDIT_SCHEDULE: `${prefixPath}/course/update-schedule`,
    ADD_SCHEDULE: `${prefixPath}/course/add-schedule`,
    GET_ALL_COURSE_LEVEL_NAME: `${prefixPath}/course/get-list-course-level-name`,
    GET_ALL_CLASS_NAME: `${prefixPath}/course/get-list-class-name?courseLevelName=`,
    GET_ALL_ROOM_NAME: `${prefixPath}/course/get-list-room-name`,
    GET_ALL_USER_NAME: `${prefixPath}/course/get-list-user-name`,
  },
  class: {
    GET_ALL_CLASS_PAGING_FILTER: `${prefixPath}/class/get-all-class-paging-filter?page=`,
    ADD_CLASS: `${prefixPath}/class/add-class`,
    EDIT_CLASS: `${prefixPath}/class/update-class`,
    DEL_CLASS: `${prefixPath}/class/delete-class?classId=`,
  },
  report: {
    GET_REPORT_CLASS: `${prefixPath}/accounts/get-report-class`,
    GET_REPORT_TEACHER: `${prefixPath}/accounts/get-report-teacher`,
    GET_REPORT_STUDENT: `${prefixPath}/accounts/get-report-student`,
    GET_REPORT_MONTH_REVENUE: `${prefixPath}/accounts/get-month-revenue`,
  }
}

export default path
