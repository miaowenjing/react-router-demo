import {get ,post} from './utile'
export default {
  getList: (param = {}) => get("/mocktable",param),
  postTable: (param = {}) => post("/desktopCtrl/chgStat", param)
  };