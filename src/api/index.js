import {get ,post,upload,del} from './utile'
export default {
  getAllCustomer: (param = {}) => get("/getAllCustomer", param),
  deleteCustomer: url => del(`/deleteCustomer/${url}`),
  getAllEmployee: (param = {}) => get("/getAllEmployee", param),
  getAllCombo: (param = {}) => get("/getAllCombo", param),
  getAllRentClothes: (param = {}) => get("/getAllRentClothes", param),
  addRentClothes: url => upload(`/addRentClothes/${url}`),
  getCombosWithAid: url => get(`/getCombosWithAid/${url}`),
  getAllComboOrders: (param = {}) => get(`/getAllComboOrders`, param),
  editEmployee: (param = {}) => get(`/editEmployee`, param),
  deleteEmployee: url => del(`/deleteEmployee/${url}`),
  addEmployee: (param = {}) => get(`/addEmployee`, param),
  deleteRentClothesWithId: url => del(`/deleteRentClothesWithId/${url}`),
  editOrderStateWithId: url => get(`/editOrderStateWithId/${url}`),
  employeeLogin: (param = {}) => get('/employeeLogin',param),
  employeeIndex: url => get(`/employeeIndex`),
  getAllClothesOrders: url => get(`/getAllClothesOrders`),
  getPermissionsByEid: url => get(`/getPermissionsByEid/${url}`)
};