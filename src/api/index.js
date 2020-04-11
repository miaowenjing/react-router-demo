import {get ,post,upload,del} from './utile'
export default {
  employeeLogin: (url = {}) => post(`login/${url}`,),

  getAllCustomer: (param = {}) => get("/getAllCustomer", param),
  deleteCustomer: url => del(`/deleteCustomer/${url}`),
  customerIndex: (param = {}) => get("/customerIndex", param),


  getAllEmployee: (param = {}) => get("/getAllEmployee", param),
  editEmployee: (param = {}) => get(`/editEmployee`, param),
  deleteEmployee: url => del(`/deleteEmployee/${url}`),
  addEmployee: (param = {}) => get(`/addEmployee`, param),

  getAllCombo: (param = {}) => get("/getAllCombo", param),
  getAllRentClothes: (param) => get("/getAllRentClothes", param),
  // getAllRentClothes: (param) => get("/getAllClothes", param),
  addRentClothes: params => post(`/addRentClothes?`+params),
  getCombosWithAid: url => get(`/getCombosWithAid/${url}`),
  getAllComboOrders: (param = {}) => get(`/getAllComboOrders`, param),
 
 
  deleteRentClothesWithId: url => del(`/deleteRentClothesWithId/${url}`),
  editOrderStateWithId: url => get(`/editOrderStateWithId/${url}`),
  employeeIndex: url => get(`/employeeIndex`),
  getAllClothesOrders: (params={}) => get(`/getAllClothesOrdersWithPage`,params),
editClothesOrder: url => get(`/editClothesOrder?`,url),
  getPermissionsByEid: url => get(`/getPermissionsByEid/${url}`)
};