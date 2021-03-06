import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/authRedirect",
    component: () => import("@/views/login/authRedirect"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },  
  {
    path: "/fast-create",
    component: Layout,
    redirect: "/fastcreateerrorcode/index",
    children: [
      {
        path: "/fastcreateerrorcode/index",
        component: () => import("@/views/fastcreateerrorcode/index"),
        meta: { title: "快速申请错误码", icon: "fast" }
      },
      {
        path: "/fastcreateerrorcode/success",
        component: () => import("@/views/fastcreateerrorcode/success"),
        meta: { title: "申请错误码成功页面", icon: "dashboard" },
        hidden: true
      },
      {
        path: "/fastcreateerrorcode/failed",
        component: () => import("@/views/fastcreateerrorcode/failed"),
        meta: { title: "申请错误码失败页面", icon: "dashboard" },
        hidden: true
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/searchboard",
    meta: { title: "平台错误码", icon: "example" },
    children: [
      {
        path: "/searchboard",
        component: () => import("@/views/searchboard/index"),
        meta: { title: "错误码搜索", icon: "search" }
      },
      {
        path: "/searchboardResult",
        component: () => import("@/views/searchboard/normalResult"),
        meta: { title: "错误码搜索结果", icon: "result" },
        children:[
        
          {
            path: "/searchboardResult/normalResult",
            component: () => import("@/views/searchboard/normalResult"),
            meta: { title: "错误码搜索结果查看", icon: "list" }
          },
          
         
          // {
          //   path: "/fastcreateerrorcode/success",
          //   component: () => import("@/views/fastcreateerrorcode/success"),
          //   meta: { title: "按标签查看", icon: "dashboard" }
          // },
          // {
          //   path: "/fastcreateerrorcode/success",
          //   component: () => import("@/views/fastcreateerrorcode/success"),
          //   meta: { title: "按案例分类查看", icon: "dashboard" }
          // }
        ]
      },{
        path: "/searchboardResult/caseDetail",
        component: () => import("@/views/searchboard/errCasedetail"),
        meta: { title: "案例详情", icon: "dashboard" },
        hidden:true
      }
      
    ]
  },
  // {
  //   path: "/errorInfo",
  //   component: Layout,
  //   redirect: "/errorInfo/table",
  //   meta: { title: "错误码平台用户应用", icon: "example" },
  //   hidden: true,
  //   children: [
  //     {
  //       path: "/errorInfo/example",
  //       component: () => import("@/views/errorDealWith/list"),
  //       meta: { title: "错误码搜索", icon: "dashboard" }
  //     }
  //   ]
  // },
  {
    path: "/errorDealWith",
    component: Layout,
    redirect: "/errorDealWith/add",
    meta: { title: "我的错误码", icon: "book" },
    children: [
      {
        path: "/errorDealWith/list",
        component: () => import("@/views/errorDealWith/list"),
        meta: { title: "我的错误码列表", icon: "my-error-list" },
      },
      {
        path: "/errorDealWith/add",
        name:"errorDealWithEdit",
        component: () => import("@/views/errorDealWith/add"),
        meta: { title: "我的错误码添加", icon: "add" },
        hidden:true
      },
      {
        path: "/errorDealWith/detail",
        name: 'errorDealWithDetail',
        component: () => import("@/views/errorDealWith/detail"),
        meta: { title: "我的错误码详情", icon: "detail" },
        hidden:true
      },
      {
        path: "/errorStatistic/error-tag",
        component: () => import("@/views/errorStatistic/error-tag"),
        meta: { title: "我的错误码标签", icon: "tag" }
      },
      {
        path: "/errorStatistic/error-case-info",
        component: () => import("@/views/errorStatistic/error-case-info"),
        meta: { title: "我的案例", icon: "case" }
      },
    ]
  },
  {
    path: "/codeDetect",
    component: Layout,
    children: [
      {
        path: "/codeDetect",
        name: "错误代码检测",
        component: () => import("@/views/detect/index"),
        meta: { title: "错误码代码检测", icon: "check" }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    name: "个人信息",
    children: [
      {
        path: "index",
        name: "个人信息设置",
        component: () => import("@/views/user/index"),
        meta: { title: "个人信息设置", icon: "user" }
      }
    ]
  },
  {
    path: "/useC",
    component: Layout,
    redirect: "/userC/index",
    hidden: true,
    children: [
      {
        path: "index",
        name: "错误码diy",
        component: () => import("@/views/useC/index"),
        meta: { title: "错误码diy", icon: "eye" }
      }
    ]
  },
 
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    //mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
