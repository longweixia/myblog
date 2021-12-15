(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{213:function(t,n,e){"use strict";e.r(n);var a=e(6),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"手写函数-简单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手写函数-简单"}},[t._v("#")]),t._v(" 手写函数(简单)")]),t._v(" "),e("h2",{attrs:{id:"_1-倒计时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-倒计时"}},[t._v("#")]),t._v(" 1.倒计时")]),t._v(" "),e("h3",{attrs:{id:"_1-1-当前时间距离当前周周末的倒计时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-当前时间距离当前周周末的倒计时"}},[t._v("#")]),t._v(" 1-1. 当前时间距离当前周周末的倒计时")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 计算当天距离当前24:00:00的时间，即当天结束的倒计时，单位为秒\ngetDayLat() {\n\t\t\tlet now = new Date()\n\t\t\tlet hour = now.getHours() // 时\n\t\t\tlet min = now.getMinutes() // 分\n\t\t\tlet sec = now.getSeconds() // 秒\n\n\t\t\tlet h = 24 - hour // 倒计时 时\n\t\t\tif (min > 0 || sec > 0) {\n\t\t\t\th -= 1\n\t\t\t}\n\t\t\tlet m = 60 - min // 倒计时 分\n\t\t\tif (sec > 0) {\n\t\t\t\tm -= 1\n\t\t\t}\n\t\t\tif (m == 60) {\n\t\t\t\tm = 0\n\t\t\t}\n\t\t\tlet s = 60 - sec // 倒计时 秒\n\t\t\tif (s == 60) {\n\t\t\t\ts = 0\n\t\t\t}\n\n\t\t\tlet result = h * 3600 + m * 60 + s\n\t\t\treturn result\n\t\t},\n\n\n//倒计时--周\ngetDaojishiWeek() {\n\t\t\tlet nowData = new Date()\n\t\t\t//获取今天的是周几\n\t\t\tlet currentDay = nowData.getDay()\n\t\t\t//把currentDay为0就是周日，需要把重置数字为7\n\t\t\tif (currentDay == 0) {\n\t\t\t\tcurrentDay = 7\n\t\t\t}\n\n\t\t\tlet times = (7 - currentDay) * 24 * 3600 + Number(this.getDayLat())\n\t\t\tthis.timesecond = times //拿到倒计时的秒数\n\t\t},\n\n")])])]),e("p",[t._v("获得倒计时的秒数后，我们可以使用uview的u-count-down倒计时组件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<u-count-down\n\t:show-days="true"\n\t:timestamp="timesecond"\n\tseparator="zh"\n\tseparator-size="14"\n\tfont-size="24">\n</u-count-down>\n')])])]),e("h3",{attrs:{id:"_1-2-当前时间距离当前月月末的倒计时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-当前时间距离当前月月末的倒计时"}},[t._v("#")]),t._v(" 1-2. 当前时间距离当前月月末的倒计时")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 获取当前月的最后一天时间的毫秒数\n\t\tgetlastMoutnTime() {\n\t\t\tvar date = new Date()\n\t\t\t///获取当前月份\n\t\t\tvar currentmonth = date.getMonth()\n\t\t\t//获取下一个月份\n\t\t\tvar nextmonth = currentmonth + 1\n\t\t\t//获取下一月份的第一天\n\t\t\tvar nextmonthfirstday = new Date(date.getFullYear(), nextmonth, 1)\n\t\t\t//一天的毫秒数\n\t\t\tvar oneday = 1 * 24 * 3600 * 1000\n\t\t\t//下一个月的第一天减去一天时间就是当前月份的最后一天时间\n\t\t\tvar lasttime = new Date(nextmonthfirstday - oneday).getTime()\n\t\t\treturn lasttime\n\t\t},\n//计算倒计时的秒数\n\t\tgetDaojishiMouth() {\n\t\t\tlet times = this.getlastMoutnTime() - new Date().getTime()\n\t\t\tthis.timesecond = times / 1000\n\t\t}\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);