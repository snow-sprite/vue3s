export default {
  appKey: "app-security", // 系统关键字
  // appKey: 'APP_SAOP', // 系统关键字
  showFullMenu: false, // 显示完整菜单
  showSystemMenu: true, // 显示系统管理菜单
  defaultProxyPath: "./service", // 默认代理路径
  pageAdaptToWindow: true, // 页面适应窗口
  showPageTitle: true, // 显示页面标题
  showFooter: false, // 显示底部栏
  showWorld: false,
  server_name: "./app-security",
  server_name2: "gansuevercm",
  serverName: "apk-analysis",
  search_server_name: "./app-search",
  baseFilePath: "./fileserver/file/browse/",
  //导出word
  exportWord: "/allapp/exportReport1/",
  //下载基础研判的文件
  downApkAnalysisFileUrl: "service/apk-analysis/file/",
  // 详情页面的tab切换顺序,只需要调整元素项在数组中的位置即可，不需要修改label，name，auth的属性值，也可以通过设置isForceHidden=true强制隐藏此项
  appDetailTabs: [
    {
      label: "检测结果",
      name: "zero",
      auth: null,
      isForceHidden: false
    },
    {
      label: "样本基础信息",
      name: "first",
      auth: "appdetails:APK",
      isForceHidden: false
    },
    {
      label: "威胁情报数据",
      name: "second",
      auth: "appdetails:Base",
      isForceHidden: false
    },
    {
      label: "渠道信息",
      name: "third",
      auth: "appdetails:ShopMeta",
      isForceHidden: false
    },
    {
      label: "恶意程序",
      name: "fourth",
      auth: "appdetails:CodeSafe",
      isForceHidden: false
    },
    {
      label: "隐私行为统计",
      name: "five",
      auth: "appdetails:YinSi",
      isForceHidden: false
    },
    {
      label: "安全评估",
      name: "six",
      auth: "appdetails:Risk",
      isForceHidden: false
    },
    {
      label: "回传数据",
      name: "seven",
      auth: "appdetails:NetData",
      isForceHidden: false
    },
    {
      label: "人工研判",
      name: "eight",
      auth: "appdetails:Judge",
      isForceHidden: false
    },
    {
      label: "信息安全",
      name: "nine",
      auth: "appdetails:InformationSecurity",
      isForceHidden: true
    },
    {
      label: "违法违规",
      name: "ten",
      auth: "appdetails:illegal",
      isForceHidden: false
    },
    {
      label: "安全监督合规检查",
      name: "eleven",
      auth: "appdetails:appinfosafe",
      isForceHidden: false
    },
    {
      label: "备案详情",
      name: "twelve",
      auth: "appdetails:appRecord",
      isForceHidden: false
    }
  ]
};
