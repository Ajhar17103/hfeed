import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
	url: "https://hulusthul.live/",
	consumerKey: "ck_9d96cef2573a0fcf41f1876c2ba7c3d7f546a163",
	consumerSecret:"cs_1261bef28ae9fe3e8bdca1648ba2c4097464ea04",
	wpAPI:true,
	version: "wc/v3",
  });
export default api;