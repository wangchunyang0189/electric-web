const getURL = (path) => {
  return new URL(`../../../assets/image/${path}`, import.meta.url).href
}
export const appDataList = [
  {
    appName: '玉米',
    appIcon: getURL('yumi.png')
  },
  {
    appName: '小麦',
    appIcon: getURL('xiaomai.png')
  },
  {
    appName: '水稻',
    appIcon: getURL('shuidao.png')
  },
  {
    appName: '大豆',
    appIcon: getURL('dadou.png')
  },
  {
    appName: '油菜',
    appIcon: getURL('youcai.png')
  },
  {
    appName: '棉花',
    appIcon: getURL('mianhua.png')
  },
  {
    appName: '渔排',
    appIcon: getURL('yupai.png')
  },
  {
    appName: '长势监测',
    appIcon: getURL('zhangshijiance.png')
  },
  {
    appName: '产量预估',
    appIcon: getURL('chanliangpinggu.png')
  },
  {
    appName: '病虫害监测',
    appIcon: getURL('bingchonghaijiance.png')
  },
  {
    appName: '洪水监测',
    appIcon: getURL('hongshuijiance.png')
  },
  {
    appName: '面积测算',
    appIcon: getURL('mianjicesuan.png')
  },
  {
    appName: '地物圈画',
    appIcon: getURL('diwuquanhua.png')
  },
  {
    appName: '耕地',
    appIcon: getURL('gendi.png')
  },
  {
    appName: '林地',
    appIcon: getURL('lindi.png')
  },
  {
    appName: '建筑物',
    appIcon: getURL('jianzhuwu.png')
  },
  {
    appName: '光伏',
    appIcon: getURL('guangfu.png')
  },
  {
    appName: '变化检测',
    appIcon: getURL('bianhuajiance.png')
  },
  {
    appName: '道路桥梁',
    appIcon: getURL('daoluqiaoliang.png')
  },
  {
    appName: '风电',
    appIcon: getURL('fengdian.png')
  }
]
export const caseTypeData = [
  {
    caseName: '工业',
    caseIcon: getURL('gongye.png')
  },
  {
    caseName: '林业',
    caseIcon: getURL('linye.png')
  },
  {
    caseName: '农业',
    caseIcon: getURL('nongye.png')
  },
  {
    caseName: '渔业',
    caseIcon: getURL('yuye.png')
  },
  {
    caseName: '自然监测',
    caseIcon: getURL('ziran.png')
  }
]

export const caseDataList = [
  {
    caseTitle: '饶河县农田',
    caseImage: getURL('introduce_feicheng_202308.png'),
    caseType:'工业'
  },
  {
    caseTitle: '兰考县21万亩高标准农田建设项目',
    caseImage: getURL('introduce_lankao_202404.png'),
    caseType:'林业'
  },
  {
    caseTitle: '唐河县受灾',
    caseImage: getURL('introduce_raohe_202308.png'),
    caseType: '农业'
  },
  {
    caseTitle: '浪戛光伏发电项目',
    caseImage: getURL('introduce_shawan141_202308.png'),
    caseType: '渔业'
  },
  {
    caseTitle: '格拉基水电站',
    caseImage: getURL('introduce_shenxian_202404.png'),
    caseType: '自然监测'
  },
  {
    caseTitle: '青川县储备林',
    caseImage: getURL('introduce_shouguang_202404.png'),
    caseType:'工业'
  },
  {
    caseTitle: '饶河县农田',
    caseImage: getURL('introduce_shouzai_pingyi_202407.png'),
    caseType:'林业'
  },
  {
    caseTitle: '唐河县受灾',
    caseImage: getURL('introduce_shouzai_tanghe_202408.png'),
    caseType: '农业'
  },
  {
    caseTitle: '浪戛光伏发电项目',
    caseImage: getURL('introduce_xiajin_202308.png'),
    caseType: '渔业'
  },
  {
    caseTitle: '饶河县农田',
    caseImage: getURL('introduce_feicheng_202308.png'),
    caseType: '自然监测'
  },
  {
    caseTitle: '兰考县21万亩高标准农田建设项目',
    caseImage: getURL('introduce_lankao_202404.png'),
    caseType:'工业'
  },
  {
    caseTitle: '唐河县受灾',
    caseImage: getURL('introduce_raohe_202308.png'),
    caseType:'林业'
  },
  {
    caseTitle: '浪戛光伏发电项目',
    caseImage: getURL('introduce_shawan141_202308.png'),
    caseType: '农业'
  },
  {
    caseTitle: '格拉基水电站',
    caseImage: getURL('introduce_shenxian_202404.png'),
    caseType: '渔业'
  },
  {
    caseTitle: '青川县储备林',
    caseImage: getURL('introduce_shouguang_202404.png'),
    caseType: '自然监测'
  }
]
