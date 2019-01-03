/**
 * Created by zhangxin on 2018/11/13.
 */
import {
  login,
  vertifyLogin,
  trendAnalysisSearch,
  carBrandPieSearch,
  nationalTerritorySearch,
  hotDiagramSearch,
  retrievalPageSearch,
  problemWordCloud,
  getArticleDetail,
  trendAnalysisRanking,
  trendAnalysisSingle,
  nationalTerritoryAnalysis,
  systemProblemAnalysis,
  hotDiagramAnalysis,
  analysisPageAnalysis,
  carBrandSystem,
  changeTrendAnalysis,
  trendAnalysisMultiple,
  trendAnalysisGroup,
  modelGroupSelectAll,
  getModelListByGroupId,
  systemProblemGroup,
  dateOverview,
  homeTrendAnalysis,
  qualityProblemSearch,
  systemProblemSearch,
  warningDailyTop5,
  warningDailyTop10,
  warningListRoll,
  warningWeekTop10,
  warningDailyTrend,
  warningWeekTrend,
  warningLevelList,
  warningReceiverList,
  warningReceiverSave,
  deleteWarningLevel,
  addWarningLevel,
  warningInfoList,
  warningArticleList,
  getUserList,
  roleLoadAll,
  relateUserRole,
  getUserInfo,
  updateUserPermission,
  addRole,
  updateRole,
  getRoleInfo,
  carModelGroupList,
  deleteCarModelGroup,
  updateCarModelGroup,
  getRoleList,
  getAllCarModelList,
  modelGroupAdd,
  modelGroupUpdate,
  warningProblemList,
  warningProblemUpdate,
  warningProblemExport,
  warningProblemImport,
  getOakwoodListByBrand,
  getSystemList,
  getQualityIssueList,
  getCompeteList,
  getWeekReportList,
  getMonthReportList,
  getTemplateReportList,
  getTemplateInfo,
  templateUpdate,
  deleteReport,
  qualityProblemGroup,
  uploadDpac,
  uploadNqas,
  uploadFourHundreds,
  getUserPermissions
} from '../api'

export default {
  LOGIN: ({commit, state}, {param}) => {
    return login(param).then((res, req) => {
      return res
    })
  },
  vertifyLogin: ({commit, state}, {code}) => {
    return vertifyLogin(code).then((res, req) => {
      return res
    })
  },
  relateUserRole: ({commit, state}, {param, id}) => {
    return relateUserRole(param, id).then((res, req) => {
      return res
    })
  }
}
