import axios from "axios";
import router, { getCurrentCancelToken } from "@/router";
import qs from "qs";
import { Message } from "element-ui";
import { clearLoginInfo } from "../utils";
import config from "@/config";

const errorMessages = res => `${res.status} ${res.statusText}`;

const http = axios.create({
  // timeout: 1000 * 30,
  timeout: 1000 * 300,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
});

/**
 * 请求拦截
 */
http.interceptors.request.use(
  conf => {
    conf.cancelToken = getCurrentCancelToken();

    // get 请求加上随机数
    if (conf.method == "get") {
      conf.params = {
        t: new Date().getTime(),
        ...conf.params
      };
    }
    // 请求头带上token
    // conf.headers["token"] = Vue.cookie.get("token");
    // 或 conf.headers['Authorization'] = Vue.cookie.get("token");

    // url 转换
    /* conf.url = (process.env.NODE_ENV !== "production" && process.env.OPEN_PROXY
      ? "/proxyApi"
      : "") + conf.url; */
    if (!conf.baseURL) {
      conf.baseURL = config.defaultProxyPath;
    }

    // application/x-www-form-urlencoded 请求的数据进行序列化
    if (
      conf.headers["Content-Type"] &&
      conf.headers["Content-Type"].indexOf(
        "application/x-www-form-urlencoded"
      ) != -1
    ) {
      conf.data = qs.stringify(conf.data);
    }

    // console.log(conf)
    return conf;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
  res => {
    // 401, 用户session失效
    if (res.data && (res.data.code === 401 || res.data.code === -999)) {
      // 只有已打开的页面（获取过菜单）才出现提示，避免新打开的页面出现
      // 新打开的页面也不使用此处的跳转到login，因为 router.currentRoute.path 不符合预期
      if (router.options.hasDynamicRoutes) {
        Message.error(res.data.message);
        clearLoginInfo();
        router.push({
          name: "login",
          params: { target: router.currentRoute.path }
        });
      }
      // dash大屏页面未登录时，跳转回登录页面
      else {
        // window.location.href = '/#/login'
      }

      return Promise.reject(errorMessages(res));
    }
    if (res.data && res.data.code != undefined && res.data.code !== 200) {
      if (res.data.message) {
        Message.error(res.data.message);
      } else {
        Message.error("数据获取失败");
      }

      return Promise.reject(errorMessages(res));
    }
    if (res.data.body !== undefined) return res.data.body;
    return res.data;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误(400)";
          break;
        case 401:
          err.message = "未授权，请重新登录(401)";
          break;
        case 403:
          err.message = "拒绝访问(403)";
          break;
        case 404:
          err.message = "请求出错(404)";
          break;
        case 408:
          err.message = "请求超时(408)";
          break;
        case 500:
          err.message = "服务器错误(500)";
          break;
        case 501:
          err.message = "服务未实现(501)";
          break;
        case 502:
          err.message = "网络错误(502)";
          break;
        case 503:
          err.message = "服务不可用(503)";
          break;
        case 504:
          err.message = "网络超时(504)";
          break;
        case 505:
          err.message = "HTTP版本不受支持(505)";
          break;
        default:
          err.message = `连接出错(${err.response.status})!`;
      }
    } else {
      // 可能是请求被取消，这时不需要进行提示
      // err.message = "连接服务器失败!";
    }

    if (err.message) {
      Message.error(err.message);
    }

    return Promise.reject(err);
  }
);

export default http;
