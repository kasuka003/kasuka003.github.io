(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{595:function(t,e,o){var content=o(698);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("bf016758",content,!0,{sourceMap:!1})},697:function(t,e,o){"use strict";var n=o(595);o.n(n).a},698:function(t,e,o){(e=o(62)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},814:function(t,e,o){"use strict";o.r(e);var n=o(1),c={Hokkaido:"北海道",Aomori:"青森県",Iwate:"岩手県",Miyagi:"宮城県",Akita:"秋田県",Yamagata:"山形県",Fukushima:"福島県",Ibaraki:"茨城県",Tochigi:"栃木県",Gunma:"群馬県",Saitama:"埼玉県",Chiba:"千葉県",Tokyo:"東京都",Kanagawa:"神奈川県",Niigata:"新潟県",Toyama:"富山県",Ishikawa:"石川県",Fukui:"福井県",Yamanashi:"山梨県",Nagano:"長野県",Gifu:"岐阜県",Shizuoka:"静岡県",Aichi:"愛知県",Mie:"三重県",Shiga:"滋賀県",Kyoto:"京都府",Osaka:"大阪府",Hyogo:"兵庫県",Nara:"奈良県",Wakayama:"和歌山県",Tottori:"鳥取県",Shimane:"島根県",Okayama:"岡山県",Hiroshima:"広島県",Yamaguchi:"山口県",Tokushima:"徳島県",Kagawa:"香川県",Ehime:"愛媛県",Kochi:"高知県",Fukuoka:"福岡県",Saga:"佐賀県",Nagasaki:"長崎県",Kumamoto:"熊本県",Oita:"大分県",Miyazaki:"宮崎県",Kagoshima:"鹿児島県",Okinawa:"沖縄県"},r=n.default.extend({middleware:"covid19Lastest",components:{},data:function(){return{infectedByRegion:this.$store.state.covid19.lastest.infectedByRegion.map((function(data){return data.region=c[data.region],data})).sort((function(a,b){return b.infectedCount-a.infectedCount}))}}}),l=(o(697),o(39)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("h3",{staticClass:"title"},[this._v("\n      covid-19\n    ")]),this._v(" "),e("el-table",{staticStyle:{width:"70%"},attrs:{data:this.infectedByRegion}},[e("el-table-column",{attrs:{prop:"region",label:"県"}}),this._v(" "),e("el-table-column",{attrs:{prop:"infectedCount",label:"感染者数"}})],1),this._v("\n    データ出典："),e("a",{attrs:{href:"https://apify.com/covid-19"}},[this._v("Apify covid-19")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);