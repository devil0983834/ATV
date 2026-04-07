src 

├─ App.vue 

├─ main.js 

├─ assets 

│  ├─ demo 

│  │  ├─ code.scss 

│  │  ├─ demo.scss 

│  │  └─ flags 

│  │     ├─ flags.css 

│  │     └─ flags_responsive.png 

│  ├─ layout 

│  │  ├─ layout.scss 

│  │  ├─ _core.scss 

│  │  ├─ _footer.scss 

│  │  ├─ _main.scss 

│  │  ├─ _menu.scss 

│  │  ├─ _mixins.scss 

│  │  ├─ _preloading.scss 

│  │  ├─ _responsive.scss 

│  │  ├─ _topbar.scss 

│  │  ├─ _typography.scss 

│  │  ├─ _utils.scss 

│  │  └─ variables 

│  │     ├─ _common.scss 

│  │     ├─ _dark.scss 

│  │     └─ _light.scss 

│  ├─ styles.scss 

│  └─ tailwind.css 

├─ layout 

│  ├─ AppConfigurator.vue 

│  ├─ AppFooter.vue 

│  ├─ AppLayout.vue 

│  ├─ AppMenu.vue   Hiển thị menu, điều hướng 

│  ├─ AppMenuItem.vue 

│  ├─ AppSidebar.vue 

│  ├─ AppTopbar.vue 

│  └─ composables 

│     └─ layout.js 

├─ modules 

│  ├─ admin 

│  │  ├─ pages 

│  │  │  ├─ RoleManagement.vue 

│  │  │  └─ UserManagement.vue 

│  │  ├─ services 

│  │  │  └─ AdminService.js 

│  │  └─ router.js 

│  ├─ approval 

│  │  ├─ pages 

│  │  │  ├─ ApproveRequest.vue 

│  │  │  └─ MyApprovalHis.vue 

│  │  └─ router.js 

│  ├─ core 

│  │  ├─ pages 

│  │  │  ├─ AccessDenied.vue 

│  │  │  ├─ Error.vue 

│  │  │  ├─ Login.vue 

│  │  │  └─ NotFound.vue 

│  │  ├─ services 

│  │  │  ├─ AuthService.js 

│  │  │  ├─ BaseService.js 

│  │  │  ├─ EnCoApiClientService.js 

│  │  │  └─ EnCoCrytoService.js 

│  │  ├─ stores 

│  │  │  └─ useAuthStore.js 

│  │  └─ router.js 

│  ├─ equipmentMonitoring 

│  │  ├─ component 

│  │  │  ├─ ChartSection.vue 

│  │  │  ├─ TableSection.vue 

│  │  │  └─ TopJamTable.vue 

│  │  ├─ pages 

│  │  │  ├─ JAMmonitor.vue 

│  │  │  ├─ MTBArecord.vue 

│  │  │  └─ PMmonitoring.vue 

│  │  └─ router.js 

│  ├─ hccControlPage 

│  │  ├─ component 

│  │  │  └─ PartInOut.vue 

│  │  ├─ models 

│  │  │  └─ Request.ts 

│  │  ├─ pages 

│  │  │  ├─ HccDashBoard.vue 

│  │  │  ├─ HccRequest.vue 

│  │  │  ├─ SocketCloseRate.vue 

│  │  │  └─ SocketCloseRateHistory.vue 

│  │  ├─ utils 

│  │  │  └─ hccCommonFunc.js 

│  │  └─ routes.js 

│  ├─ holdLotManagement 

│  │  ├─ component 

│  │  │  ├─ BaseChart.vue 

│  │  │  └─ BaseTable.vue 

│  │  ├─ pages 

│  │  │  ├─ Dashboard.vue 

│  │  │  └─ History.vue 

│  │  ├─ services 

│  │  │  └─ ReleaseLotService.js 

│  │  └─ router.js 

│  ├─ oldSource 

│  │  ├─ components 

│  │  │  ├─ AgridAction 

│  │  │  │  └─ ButtonAction.vue 

│  │  │  ├─ ChartBase 

│  │  │  │  ├─ ChartColumn.vue 

│  │  │  │  └─ ChartPie.vue 

│  │  │  ├─ ChartFcstTrend 

│  │  │  │  ├─ ChartColumn.vue 

│  │  │  │  └─ ChartLine.vue 

│  │  │  ├─ ChartInputLoading 

│  │  │  │  └─ ChartMixColumnLine.vue 

│  │  │  ├─ ChartUeMtba 

│  │  │  │  ├─ ChartLine.vue 

│  │  │  │  ├─ ChartMixStackLine.vue 

│  │  │  │  ├─ ChartMixStackLineFixed.vue 

│  │  │  │  └─ DropDownTarget.vue 

│  │  │  ├─ dashboard 

│  │  │  │  ├─ BestSellingWidget.vue 

│  │  │  │  ├─ NotificationsWidget.vue 

│  │  │  │  ├─ RecentSalesWidget.vue 

│  │  │  │  ├─ RevenueStreamWidget.vue 

│  │  │  │  └─ StatsWidget.vue 

│  │  │  ├─ landing 

│  │  │  │  ├─ FeaturesWidget.vue 

│  │  │  │  ├─ FooterWidget.vue 

│  │  │  │  ├─ HeroWidget.vue 

│  │  │  │  ├─ HighlightsWidget.vue 

│  │  │  │  ├─ PricingWidget.vue 

│  │  │  │  └─ TopbarWidget.vue 

│  │  │  ├─ FloatingConfigurator.vue 

│  │  │  └─ GlobalToastHandler.vue 

│  │  ├─ pages 

│  │  │  ├─ assy1 

│  │  │  │  ├─ InputLoading.vue 

│  │  │  │  └─ UeMtba.vue 

│  │  │  ├─ assy2 

│  │  │  │  ├─ FcstTrend.vue 

│  │  │  │  ├─ InputLoading.vue 

│  │  │  │  └─ UeMtba.vue 

│  │  │  ├─ automation 

│  │  │  │  └─ UeMtba.vue 

│  │  │  ├─ canva 

│  │  │  │  └─ MaterialHandlingChecklist.vue 

│  │  │  ├─ pcs 

│  │  │  │  ├─ FcstTrend.vue 

│  │  │  │  └─ FcstTrendBak.vue 

│  │  │  ├─ plant 

│  │  │  │  └─ FcstTrend.vue 

│  │  │  ├─ qre 

│  │  │  │  └─ NpiLot.vue 

│  │  │  ├─ rpa 

│  │  │  │  ├─ CreateSchedule.vue 

│  │  │  │  ├─ ExecuteHistory.vue 

│  │  │  │  └─ ListSchedule.vue 

│  │  │  ├─ test 

│  │  │  │  ├─ InputLoading.vue 

│  │  │  │  └─ UeMtba.vue 

│  │  │  └─ uikit 

│  │  │     ├─ ButtonDoc.vue 

│  │  │     ├─ ChartDoc.vue 

│  │  │     ├─ FileDoc.vue 

│  │  │     ├─ FormLayout.vue 

│  │  │     ├─ InputDoc.vue 

│  │  │     ├─ ListDoc.vue 

│  │  │     ├─ MediaDoc.vue 

│  │  │     ├─ MenuDoc.vue 

│  │  │     ├─ MessagesDoc.vue 

│  │  │     ├─ MiscDoc.vue 

│  │  │     ├─ OverlayDoc.vue 

│  │  │     ├─ PanelsDoc.vue 

│  │  │     ├─ TableDoc.vue 

│  │  │     ├─ TimelineDoc.vue 

│  │  │     └─ TreeDoc.vue 

│  │  ├─ services 

│  │  │  ├─ CountryService.js 

│  │  │  ├─ CustomerService.js 

│  │  │  ├─ MessagingService.js 

│  │  │  ├─ NodeService.js 

│  │  │  ├─ PhotoService.js 

│  │  │  └─ ProductService.js 

│  │  └─ router.js 

│  ├─ panelYieldMonitoring 

│  │  ├─ pages 

│  │ │  └─ Dashboard.vue 

│  │  ├─ services 

│  │ │  └─ EcimWebService.js 

│  │  └─ router.js 

│  └─ registerMachine 

│     ├─ component 

│     ├─ models 

│     │  └─ Request.ts 

│     ├─ pages 

│     │  └─ registerPage.vue 

│     ├─ utils 

│     │  └─ hccCommonFunc.js 

│     └─ routes.js 

├─ plugin 

│  ├─ eventBus.js 

│  ├─ FontAwesome.js 

│  ├─ HighChart.js 

│  └─ i18n.js 

└─ router 

   └─ index.js  // file cấu hình Router chính của ứng dụng Vue 

└─ utils 

   ├─ func.js 

   └─ variable.js 