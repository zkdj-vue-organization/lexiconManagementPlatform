/**
 * Created by zhangxin on 2018/11/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      callbackUrl: 'http://localhost:8080/',
      isLogin: false,
      user: null,
      userName: '',
      hasPermissions: '',
      sourceList: [{label: '舆情', key: 1},{label: 'DPAC', key: 2},{label: 'NQAS', key: 3},{label: '400', key: 4}],
      brandList:[{value: '大众', label: '大众'}, {value: '奥迪', label: '奥迪'}, {value: 'EBO', label: 'EBO'}],
      heatHours: ['1', '2', '3', '4', '5', '6', '7',
        '8', '9', '10','11','12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      permission: [{
        label: '首页',
        key: 'home',
        children:[{
          label: '品牌',
          key: 'home:brand',
          children:[{
            label: '大众',
            key: 'home:brand:vw'
          },{
            label: '奥迪',
            key: 'home:brand:audi'
          },{
            label: 'EBO',
            key: 'home:brand:ebo'
          }]
        },{
          label: '下载',
          key: 'home:download',
          children:[{
            label: '数据',
            key: 'home:download:data'
          },{
            label: '图表',
            key: 'home:download:chart'
          }]
        },{
          label: '数据展示',
          key: 'home:view',
          children: [{
            label: '舆情',
            key: 'home:view:yq'
          },{
            label: 'DPAC',
            key: 'home:view:dpac'
          },{
            label: 'NQAS',
            key: 'home:view:nqas'
          },{
            label: '400',
            key: 'home:view:400'
          }]
        }]
      },{
        label: '检索',
        key: 'search',
        children: [{
          label: '下载',
          key: 'search:download',
          children: [{
            label: '数据',
            key: 'search:download:data'
          },{
            label: '图表',
            key: 'search:download:chart'
          }]
        },{
          label: '数据展示',
          key: 'search:view',
          children: [{
            label: '舆情',
            key: 'search:view:yq'
          },{
            label: 'DPAC',
            key: 'search:view:dpac'
          },{
            label: 'NQAS',
            key: 'search:view:nqas'
          },{
            label: '400',
            key: 'search:view:400'
          },]
        }]
      },{
        label: '分析',
        key: 'analysis',
        children: [{
          label: '单车型',
          key: 'analysis:single',
          children: [{
            label: '下载',
            key: 'analysis:single:download',
            children: [{
              label: '数据',
              key: 'analysis:single:download:data'
            },{
              label: '图表',
              key: 'analysis:single:download:chart'
            }]
          },{
            label: '数据展示',
            key: 'analysis:single:view',
            children:[{
              label: '舆情',
              key: 'analysis:single:view:yq'
            },{
              label: 'DPAC',
              key: 'analysis:single:view:dpac'
            },{
              label: 'NQAS',
              key: 'analysis:single:view:nqas'
            },{
              label: '400',
              key: 'analysis:single:view:400'
            }]
          }]
        },{
          label: '多车型',
          key: 'analysis:multi',
          children:[{
            label: '下载',
            key: 'analysis:multi:download',
            children: [{
              label: '数据',
              key: 'analysis:multi:download:data'
            },{
              label: '图表',
              key: 'analysis:multi:download:chart'
            }]
          },{
            label: '数据展示',
            key: 'analysis:multi:view',
            children:[{
              label: '舆情',
              key: 'analysis:multi:view:yq'
            },{
              label: 'DPAC',
              key: 'analysis:multi:view:dpac'
            },{
              label: 'NQAS',
              key: 'analysis:multi:view:nqas'
            },{
              label: '400',
              key: 'analysis:multi:view:400'
            }]
          }]
        },{
          label: '车型组',
          key: 'analysis:group',
          children: [{
            label: '下载',
            key: 'analysis:group:download',
            children: [{
              label: '数据',
              key: 'analysis:group:download:data'
            },{
              label: '图表',
              key: 'analysis:group:download:chart'
            }]
          },{
            label: '数据展示',
            key: 'analysis:group:view',
            children:[{
              label: '舆情',
              key: 'analysis:group:view:yq'
            },{
              label: 'DPAC',
              key: 'analysis:group:view:dpac'
            },{
              label: 'NQAS',
              key: 'analysis:group:view:nqas'
            },{
              label: '400',
              key: 'analysis:group:view:400'
            }]
          }]
        }]
      },{
        label: '预警',
        key: 'warn',
        children: [{
          label: '预警主页',
          key: 'warn:home',
          children: [{
            label: '下载',
            key: 'warn:home:download',
            children: [{
              label: '数据',
              key: 'warn:home:download:data'
            },{
              label: '图表',
              key: 'warn:home:download:chart'
            }]
          },{
            label: '数据展示',
            key: 'warn:home:view',
            children: [{
              label: '舆情',
              key: 'warn:home:view:yq'
            },{
              label: 'DPAC',
              key: 'warn:home:view:dpac'
            },{
              label: 'NQAS',
              key: 'warn:home:view:nqas'
            },{
              label: '400',
              key: 'warn:home:view:400'
            }]
          }]
        },{
          label: '预警列表',
          key: 'warn:list',
          children: [{
            label: '下载',
            key: 'warn:list:download',
            children: [{
              label: '数据',
              key: 'warn:list:download:data'
            },{
              label: '图表',
              key: 'warn:list:download:chart'
            }]
          },{
            label: '数据展示',
            key: 'warn:list:view',
            children: [{
              label: '舆情',
              key: 'warn:list:view:yq'
            },{
              label: 'DPAC',
              key: 'warn:list:view:dpac'
            },{
              label: 'NQAS',
              key: 'warn:list:view:nqas'
            },{
              label: '400',
              key: 'warn:list:view:400'
            }]
          }]
        }]
      },{
        label: '报告',
        key: 'report',
        children: [{
          label: '智能报告',
          key: 'report:report',
          children: [{
            label: '周报',
            key: 'report:report:week'
          },{
            label: '月报',
            key: 'report:report:month'
          }]
        },{
          label: '模板',
          key: 'report:model'
        }]
      },{
        label: '安全',
        key: 'power',
        children: [{
          label: '安全主页',
          key: 'power:index'
        },{
          label: '安全预警',
          key: 'power:alert'
        },{
          label: '安全报告',
          key: 'power:report'
        }]
      },{
        label: '权限',
        key: 'security',
        children: [{
          label: '用户',
          key: 'security:user'
        },{
          label: '角色',
          key: 'security:role'
        },{
          label: '车型组',
          key: 'security:carmodel'
        },{
          label: '预警等级',
          key: 'security:alertlevel'
        },{
          label: '预警问题',
          key: 'security:issue'
        },{
          label: '数据上传',
          key: 'security:data:upload'
        }]
      }]
    },
    actions,
    mutations,
    getters
  })
}
