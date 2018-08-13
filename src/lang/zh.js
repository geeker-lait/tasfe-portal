export default {
  route: {
    dashboard: '首页',
    introduction: '简述',
    documentation: '文档',
    system: '系统管理',
    systemUser: '系统用户',
    systemRole: '角色管理',
    systemPermission: '权限管理',
    systemResources: '资源管理',
    systemDepartment: '部门管理',
    systemConfig: '系统配置',
    systemAccount:'账号管理',
    productCategories: '品类管理',

    userManger: '用户管理',
    userList: '用户列表',
    merchantManger: '商户管理',
    merchantList: '企业商户',
    productManger: '产品管理',
    supplyDemandList: '供应列表',
    orderManger: '订单管理',
    orderList: '订单列表',
    guide: '引导页',
    permission: '权限测试页',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    componentIndex: '介绍',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    bar: 'Bar',
    barProfile: 'Profile',
    barPosts: 'Posts',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },

  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    department: '部门',
    position: '职位',
    username: '用户名',
    number: '用户编号',
    name: '姓名',
    importance: '重要性',
    detail: '详情',
    disable: '禁用',
    enabled: '启用',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    role: {
      code: '角色码',
      name: '角色名'
    }
  },

  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  system: {
    account:{
      
    },

    accredit: {
      roleId: '角色ID',
      roleName: '角色名',
      resourceId: '资源ID',
      resourcePath: '资源路径',
      permissions: '权限'
    },
    resource: {
      name: '资源名',
      path: '路径',
      data: '数据',
      typ: '类型',
      resourceId: '资源ID'
    },
    role: {
      name: '角色名',
      descr: '描述'
    },
    user: {
      number: '编号',
      name: '姓名',
      age: '年龄',
      sex: '性别',
      phone: '手机'
    },
    permission: {
      name: '名称',
      code: 'code',
      val: '权限值',
      descr: '描述'
    }

  },

  product: {
    categories: '品类'
  },

  merchant: {
    name: '公司名称',
    organizationCode: '组织机构代码',
    legalPerson: '法人',
    address: '公司地址',
    capital: '注册资金',
    phone: '公司电话',
    groupId: '组织ID',
    type: '公司类型',
    validity: '经营期限'
  }

}
