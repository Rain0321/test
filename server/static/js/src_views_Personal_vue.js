"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchuangshiji"] = self["webpackChunkchuangshiji"] || []).push([["src_views_Personal_vue"],{

/***/ "./src/views/Personal.vue":
/*!********************************!*\
  !*** ./src/views/Personal.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personal.vue?vue&type=template&id=2487987a& */ \"./src/views/Personal.vue?vue&type=template&id=2487987a&\");\n/* harmony import */ var _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Personal.vue?vue&type=script&lang=js& */ \"./src/views/Personal.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Personal.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://chuangshiji/./src/views/Personal.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/http */ \"./src/api/http.js\");\n/* harmony import */ var _tools_mapData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tools/mapData */ \"./src/tools/mapData.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    data() {\r\n        return {\r\n            charts: '',\r\n            optionData: [\"155\", \"400\", \"900\", \"800\", \"300\", \"900\", \"270\"]\r\n        }\r\n    },\r\n    methods: {\r\n        // 折线图\r\n        drawLine(id) {\r\n            this.charts = echarts__WEBPACK_IMPORTED_MODULE_0__.init(document.getElementById(id));\r\n            this.charts.setOption({\r\n                    title:{\r\n                        left:'3%',\r\n                        top:'5%',\r\n                        text:\"最近一周订单数量\",//标题文本，支持使用 \\n 换行。\r\n                    },\r\n\t\t\t\t\ttooltip: {\r\n\t\t\t\t\t\ttrigger: 'axis'\r\n\t\t\t\t\t},\r\n\t\t\t\t\tlegend: {\r\n                        align:'right',//文字在前图标在后\r\n                        left:'3%',\r\n                        top:'15%',\r\n\t\t\t\t\t\tdata: ['近一周']\r\n\t\t\t\t\t},\r\n\t\t\t\t\tgrid: {\r\n                        top:'30%',\r\n\t\t\t\t\t\tleft: '5%',\r\n\t\t\t\t\t\tright: '5%',\r\n\t\t\t\t\t\tbottom: '5%',\r\n\t\t\t\t\t\tcontainLabel: true\r\n\t\t\t\t\t},\r\n                    toolbox: {\r\n\t\t\t\t\t\tfeature: {\r\n\t\t\t\t\t\t\tsaveAsImage: {} //保存为图片\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\txAxis: {\r\n\t\t\t\t\t\ttype: 'category',\r\n                        boundaryGap:true,\r\n                        axisTick:{\r\n                            alignWithLabel:true //保证刻度线和标签对齐\r\n                        },\r\n                        data: [\"周一\",\"周二\",\"周三\",\"周四\",\"周五\",\"周六\",\"周日\"] //x坐标的名称\r\n\t\t\t\t\t\r\n\t\t\t\t\t},\r\n\t\t\t\t\tyAxis: {\r\n\t\t\t\t\t\ttype: 'value',\r\n\t\t\t\t\t\tboundaryGap: true,\r\n                        splitNumber:4, //纵坐标数\r\n                        interval:250 //强制设置坐标轴分割间隔\r\n\t\t\t\t\t},\r\n                    series: [{\r\n\t\t\t\t\t\tname: '近一周',\r\n\t\t\t\t\t\ttype: 'line', //折线图line;柱形图bar;饼图pie\r\n\t\t\t\t\t\tstack: '总量',\r\n                        areaStyle: {\r\n                            //显示区域颜色---渐变效果\r\n                            color:{\r\n                                type: 'linear',\r\n                                x: 0,\r\n                                y: 0,\r\n                                x2: 0,\r\n                                y2: 1,\r\n                                colorStops: [{\r\n                                    offset: 0, color: 'rgb(255,200,213)' // 0% 处的颜色\r\n                                }, {\r\n                                    offset: 1, color: '#ffffff' // 100% 处的颜色\r\n                                }],\r\n                                global: false // 缺省为 false\r\n                            }\r\n                        },\r\n                        itemStyle: {\r\n\t\t\t\t\t\t\tcolor: 'rgb(255,96,64)', //改变折线点的颜色\r\n\t\t\t\t\t\t\tlineStyle: {\r\n\t\t\t\t\t\t\t\tcolor: 'rgb(255,96,64)' //改变折线颜色\r\n\t\t\t\t\t\t\t}\r\n                            \r\n                        },\r\n\t\t\t\t\t\tdata: this.optionData\r\n\t\t\t\t\t}]\r\n            })\r\n        },\r\n        drawEarth() {\r\n            let earthChart = echarts__WEBPACK_IMPORTED_MODULE_0__.init(document.getElementById('earth'));\r\n            let option = {\r\n                tooltip: {\r\n                    trigger: 'item',\r\n                    // formatter: ``\r\n                },\r\n                geo: {\r\n                    map: 'china',\r\n                    label: {\r\n                        show: true\r\n                    },\r\n                    zoom: 1.5,\r\n                    roam: true\r\n                }\r\n            };\r\n            (0,_api_http__WEBPACK_IMPORTED_MODULE_1__.get)('/static/data/china.json')\r\n                .then( res => {\r\n                    console.log(res);\r\n                    let airData = res.features;\r\n                    //console.log(airData instanceof Array)\r\n                    airData.forEach(item => {\r\n                        item.name = item.properties.name;\r\n                        item.value = 300 * Math.random();\r\n\r\n                    });\r\n                    console.log(airData);\r\n                    let scatterData = [ \r\n                        {value: [85.294711, 41.371801]},\r\n                        { value: [117.000923, 36.675807]}\r\n                    ]\r\n                    option.series =[ \r\n                        {\r\n                        data: airData,\r\n                        geoIndex: 0,\r\n                        type: 'map',\r\n                        name: '随机数'\r\n                        },\r\n                        {\r\n                            data: scatterData,\r\n                            type: 'effectScatter',\r\n                            coordinateSystem: 'geo',\r\n                            //设置涟漪动画缩放比\r\n                            rippleEffect: {\r\n                                scale: 10\r\n                            }\r\n                        }\r\n                    ]\r\n                    option.visualMap = {\r\n                        min: 0,\r\n                        max: 300,\r\n                        inRange: {\r\n                            color: ['white', 'green']\r\n                        },\r\n                        calculable: true\r\n                    }\r\n                    echarts__WEBPACK_IMPORTED_MODULE_0__.registerMap('china', res);\r\n                    earthChart.setOption(option);\r\n                })\r\n        },\r\n        drawPlanePath() {\r\n            let planeChart =echarts__WEBPACK_IMPORTED_MODULE_0__.init(document.getElementById('plane-path'))\r\n            var planePath = \"path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z\";\r\n          //var planePath = 'arrow';\r\n          var convertData = function(data) {\r\n            var res = [];\r\n            for (var i = 0; i < data.length; i++) {\r\n              var dataItem = data[i];\r\n            \r\n              var fromCoord = _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.geoCoordMap[dataItem[0].name];\r\n              var toCoord = _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.geoCoordMap[dataItem[1].name];\r\n              if (fromCoord && toCoord) {\r\n                res.push({\r\n                  fromName: dataItem[0].name,\r\n                  toName: dataItem[1].name,\r\n                  coords: [fromCoord, toCoord],\r\n                  value: dataItem[1].value\r\n                });\r\n              }\r\n            }\r\n            return res;\r\n          };\r\n        \r\n          var color = [\"#a6c84c\", \"#ffa022\", \"#46bee9\"]; //航线的颜色\r\n          var series = [];\r\n          [\r\n            [\"西安\", _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.XAData],\r\n            [\"西宁\", _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.XNData],\r\n            [\"银川\", _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.YCData]\r\n          ].forEach(function(item, i) {\r\n            series.push(\r\n              {\r\n                name: item[0] + \" Top3\",\r\n                type: \"lines\",\r\n                zlevel: 1,\r\n                effect: {\r\n                  show: true,\r\n                  period: 6,\r\n                  trailLength: 0.7,\r\n                  color: \"red\", //arrow箭头的颜色\r\n                  symbolSize: 3\r\n                },\r\n                lineStyle: {\r\n                  normal: {\r\n                    color: color[i],\r\n                    width: 0,\r\n                    curveness: 0.2\r\n                  }\r\n                },\r\n                data: convertData(item[1])\r\n              },\r\n              {\r\n                name: item[0] + \" Top3\",\r\n                type: \"lines\",\r\n                zlevel: 2,\r\n                symbol: [\"none\", \"arrow\"],\r\n                symbolSize: 10,\r\n                effect: {\r\n                  show: true,\r\n                  period: 6,\r\n                  trailLength: 0,\r\n                  symbol: planePath,\r\n                  symbolSize: 15\r\n                },\r\n                lineStyle: {\r\n                  normal: {\r\n                    color: color[i],\r\n                    width: 1,\r\n                    opacity: 0.6,\r\n                    curveness: 0.2\r\n                  }\r\n                },\r\n                data: convertData(item[1])\r\n              },\r\n              {\r\n                name: item[0] + \" Top3\",\r\n                type: \"effectScatter\",\r\n                coordinateSystem: \"geo\",\r\n                zlevel: 2,\r\n                rippleEffect: {\r\n                  brushType: \"stroke\"\r\n                },\r\n                label: {\r\n                  normal: {\r\n                    show: true,\r\n                    position: \"right\",\r\n                    formatter: \"{b}\"\r\n                  }\r\n                },\r\n                symbolSize: function(val) {\r\n                  return val[2] / 8;\r\n                },\r\n                itemStyle: {\r\n                  normal: {\r\n                    color: color[i]\r\n                  },\r\n                  emphasis: {\r\n                    areaColor: \"#2B91B7\"\r\n                  }\r\n                },\r\n                data: item[1].map(function(dataItem) {\r\n                  return {\r\n                    name: dataItem[1].name,\r\n                    value: _tools_mapData__WEBPACK_IMPORTED_MODULE_2__.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])\r\n                  };\r\n                })\r\n              }\r\n            );\r\n          });\r\n          echarts__WEBPACK_IMPORTED_MODULE_0__.registerMap('china', __webpack_require__.e(/*! import() */ \"src_tools_china_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @/tools/china.js */ \"./src/tools/china.js\", 23)));\r\n          var option = {\r\n    tooltip: {\r\n      trigger: \"item\",\r\n      formatter: function(params, ticket, callback) {\r\n        if (params.seriesType == \"effectScatter\") {\r\n          return \"线路：\" + params.data.name + \"\" + params.data.value[2];\r\n        } else if (params.seriesType == \"lines\") {\r\n          return (\r\n            params.data.fromName +\r\n            \">\" +\r\n            params.data.toName +\r\n            \"<br />\" +\r\n            params.data.value\r\n          );\r\n        } else {\r\n          return params.name;\r\n        }\r\n      }\r\n    },\r\n    legend: {\r\n      orient: \"vertical\",\r\n      top: \"bottom\",\r\n      left: \"right\",\r\n      data: [\"西安 Top3\", \"西宁 Top3\", \"银川 Top3\"],\r\n      textStyle: {\r\n        color: \"#fff\"\r\n      },\r\n      selectedMode: \"multiple\"\r\n    },\r\n    geo: {\r\n      map: \"china\",\r\n      label: {\r\n        emphasis: {\r\n          show: true,\r\n          color: \"#fff\"\r\n        }\r\n      },\r\n      // 把中国地图放大了1.2倍\r\n      zoom: 1.2,\r\n      roam: true,\r\n      itemStyle: {\r\n        normal: {\r\n          // 地图省份的背景颜色\r\n          areaColor: \"rgba(20, 41, 87,0.6)\",\r\n          borderColor: \"#195BB9\",\r\n          borderWidth: 1\r\n        },\r\n        emphasis: {\r\n          areaColor: \"#2B91B7\"\r\n        }\r\n      }\r\n    },\r\n    series: series\r\n  };\r\n  planeChart.setOption(option);\r\n  window.addEventListener(\"resize\", function() {\r\n    planeChart.resize();\r\n  });\r\n        }\r\n    },\r\n    mounted() {\r\n        this.$nextTick(function() {\r\n            this.drawLine('test-echars');\r\n            this.drawEarth();\r\n            this.drawPlanePath();\r\n        })\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://chuangshiji/./src/views/Personal.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/Personal.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Personal.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://chuangshiji/./src/views/Personal.vue?");

/***/ }),

/***/ "./src/views/Personal.vue?vue&type=template&id=2487987a&":
/*!***************************************************************!*\
  !*** ./src/views/Personal.vue?vue&type=template&id=2487987a& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_2487987a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=template&id=2487987a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=template&id=2487987a&\");\n\n\n//# sourceURL=webpack://chuangshiji/./src/views/Personal.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=template&id=2487987a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Personal.vue?vue&type=template&id=2487987a& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this,\n      _c = _vm._self._c\n    return _c(\"div\", { staticClass: \"page-personal\" }, [\n      _c(\"div\", {\n        staticStyle: { width: \"100%\", height: \"520px\", background: \"#fff\" },\n        attrs: { id: \"test-echars\" },\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", {\n        staticStyle: {\n          width: \"100%\",\n          height: \"520px\",\n          background: \"#fff\",\n          border: \"1px\",\n        },\n        attrs: { id: \"earth\" },\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", {\n        staticStyle: {\n          width: \"100%\",\n          height: \"520px\",\n          background: \"#fff\",\n          border: \"1px\",\n        },\n        attrs: { id: \"plane-path\" },\n      }),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://chuangshiji/./src/views/Personal.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/tools/mapData.js":
/*!******************************!*\
  !*** ./src/tools/mapData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XAData\": () => (/* binding */ XAData),\n/* harmony export */   \"XNData\": () => (/* binding */ XNData),\n/* harmony export */   \"YCData\": () => (/* binding */ YCData),\n/* harmony export */   \"geoCoordMap\": () => (/* binding */ geoCoordMap)\n/* harmony export */ });\nvar geoCoordMap = {\r\n    上海: [121.4648, 31.2891],\r\n    东莞: [113.8953, 22.901],\r\n    东营: [118.7073, 37.5513],\r\n    中山: [113.4229, 22.478],\r\n    临汾: [111.4783, 36.1615],\r\n    临沂: [118.3118, 35.2936],\r\n    丹东: [124.541, 40.4242],\r\n    丽水: [119.5642, 28.1854],\r\n    乌鲁木齐: [87.9236, 43.5883],\r\n    佛山: [112.8955, 23.1097],\r\n    保定: [115.0488, 39.0948],\r\n    兰州: [103.5901, 36.3043],\r\n    包头: [110.3467, 41.4899],\r\n    北京: [116.4551, 40.2539],\r\n    北海: [109.314, 21.6211],\r\n    南京: [118.8062, 31.9208],\r\n    南宁: [108.479, 23.1152],\r\n    南昌: [116.0046, 28.6633],\r\n    南通: [121.1023, 32.1625],\r\n    厦门: [118.1689, 24.6478],\r\n    台州: [121.1353, 28.6688],\r\n    合肥: [117.29, 32.0581],\r\n    呼和浩特: [111.4124, 40.4901],\r\n    咸阳: [108.4131, 34.8706],\r\n    哈尔滨: [127.9688, 45.368],\r\n    唐山: [118.4766, 39.6826],\r\n    嘉兴: [120.9155, 30.6354],\r\n    大同: [113.7854, 39.8035],\r\n    大连: [122.2229, 39.4409],\r\n    天津: [117.4219, 39.4189],\r\n    太原: [112.3352, 37.9413],\r\n    威海: [121.9482, 37.1393],\r\n    宁波: [121.5967, 29.6466],\r\n    宝鸡: [107.1826, 34.3433],\r\n    宿迁: [118.5535, 33.7775],\r\n    常州: [119.4543, 31.5582],\r\n    广州: [113.5107, 23.2196],\r\n    廊坊: [116.521, 39.0509],\r\n    延安: [109.1052, 36.4252],\r\n    张家口: [115.1477, 40.8527],\r\n    徐州: [117.5208, 34.3268],\r\n    德州: [116.6858, 37.2107],\r\n    惠州: [114.6204, 23.1647],\r\n    成都: [103.9526, 30.7617],\r\n    扬州: [119.4653, 32.8162],\r\n    承德: [117.5757, 41.4075],\r\n    拉萨: [91.1865, 30.1465],\r\n    无锡: [120.3442, 31.5527],\r\n    日照: [119.2786, 35.5023],\r\n    昆明: [102.9199, 25.4663],\r\n    杭州: [119.5313, 29.8773],\r\n    枣庄: [117.323, 34.8926],\r\n    柳州: [109.3799, 24.9774],\r\n    株洲: [113.5327, 27.0319],\r\n    武汉: [114.3896, 30.6628],\r\n    汕头: [117.1692, 23.3405],\r\n    江门: [112.6318, 22.1484],\r\n    沈阳: [123.1238, 42.1216],\r\n    沧州: [116.8286, 38.2104],\r\n    河源: [114.917, 23.9722],\r\n    泉州: [118.3228, 25.1147],\r\n    泰安: [117.0264, 36.0516],\r\n    泰州: [120.0586, 32.5525],\r\n    济南: [117.1582, 36.8701],\r\n    济宁: [116.8286, 35.3375],\r\n    海口: [110.3893, 19.8516],\r\n    淄博: [118.0371, 36.6064],\r\n    淮安: [118.927, 33.4039],\r\n    深圳: [114.5435, 22.5439],\r\n    清远: [112.9175, 24.3292],\r\n    温州: [120.498, 27.8119],\r\n    渭南: [109.7864, 35.0299],\r\n    湖州: [119.8608, 30.7782],\r\n    湘潭: [112.5439, 27.7075],\r\n    滨州: [117.8174, 37.4963],\r\n    潍坊: [119.0918, 36.524],\r\n    烟台: [120.7397, 37.5128],\r\n    玉溪: [101.9312, 23.8898],\r\n    珠海: [113.7305, 22.1155],\r\n    盐城: [120.2234, 33.5577],\r\n    盘锦: [121.9482, 41.0449],\r\n    石家庄: [114.4995, 38.1006],\r\n    福州: [119.4543, 25.9222],\r\n    秦皇岛: [119.2126, 40.0232],\r\n    绍兴: [120.564, 29.7565],\r\n    聊城: [115.9167, 36.4032],\r\n    肇庆: [112.1265, 23.5822],\r\n    舟山: [122.2559, 30.2234],\r\n    苏州: [120.6519, 31.3989],\r\n    莱芜: [117.6526, 36.2714],\r\n    菏泽: [115.6201, 35.2057],\r\n    营口: [122.4316, 40.4297],\r\n    葫芦岛: [120.1575, 40.578],\r\n    衡水: [115.8838, 37.7161],\r\n    衢州: [118.6853, 28.8666],\r\n    西宁: [101.4038, 36.8207],\r\n    西安: [109.1162, 34.2004],\r\n    贵阳: [106.6992, 26.7682],\r\n    连云港: [119.1248, 34.552],\r\n    邢台: [114.8071, 37.2821],\r\n    邯郸: [114.4775, 36.535],\r\n    郑州: [113.4668, 34.6234],\r\n    鄂尔多斯: [108.9734, 39.2487],\r\n    重庆: [107.7539, 30.1904],\r\n    金华: [120.0037, 29.1028],\r\n    铜川: [109.0393, 35.1947],\r\n    银川: [106.3586, 38.1775],\r\n    镇江: [119.4763, 31.9702],\r\n    长春: [125.8154, 44.2584],\r\n    长沙: [113.0823, 28.2568],\r\n    长治: [112.8625, 36.4746],\r\n    阳泉: [113.4778, 38.0951],\r\n    青岛: [120.4651, 36.3373],\r\n    韶关: [113.7964, 24.7028]\r\n  };\r\n\r\nvar XAData = [\r\n    [{ name: \"西安\" }, { name: \"拉萨\", value: 100 }],\r\n    [{ name: \"西安\" }, { name: \"上海\", value: 100 }],\r\n    [{ name: \"西安\" }, { name: \"广州\", value: 100 }],\r\n    [{ name: \"西安\" }, { name: \"西宁\", value: 100 }],\r\n    [{ name: \"西安\" }, { name: \"银川\", value: 100 }]\r\n  ];\r\n\r\nvar XNData = [\r\n    [{ name: \"西宁\" }, { name: \"北京\", value: 100 }],\r\n    [{ name: \"西宁\" }, { name: \"上海\", value: 100 }],\r\n    [{ name: \"西宁\" }, { name: \"广州\", value: 100 }],\r\n    [{ name: \"西宁\" }, { name: \"西安\", value: 100 }],\r\n    [{ name: \"西宁\" }, { name: \"银川\", value: 100 }]\r\n  ];\r\n\r\nvar YCData = [\r\n    [{ name: \"拉萨\" }, { name: \"潍坊\", value: 100 }],\r\n    [{ name: \"拉萨\" }, { name: \"哈尔滨\", value: 100 }],\r\n    [{ name: \"银川\" }, { name: \"上海\", value: 100 }],\r\n    [{ name: \"银川\" }, { name: \"西安\", value: 100 }],\r\n    [{ name: \"银川\" }, { name: \"西宁\", value: 100 }]\r\n  ];\n\n//# sourceURL=webpack://chuangshiji/./src/tools/mapData.js?");

/***/ })

}]);