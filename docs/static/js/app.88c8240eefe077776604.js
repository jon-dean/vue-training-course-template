webpackJsonp([1],{"7zck":function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("/5sW"),o={name:"app",data:function(){return{currentYear:(new Date).getFullYear()}}},i={render:function(){var e=this.$createElement,s=this._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("main",[s("v-container",{attrs:{fluid:""}},[s("router-view")],1)],1),this._v(" "),s("v-footer",{attrs:{color:"indigo",app:""}},[s("span",{staticClass:"white--text"},[this._v("© "+this._s(this.currentYear)+" All Rights Reserved.")])])],1)},staticRenderFns:[]},l=t("VU/8")(o,i,!1,null,null,null).exports,a=t("/ocq"),r=(t("7zck"),{name:"TrainingTemplate",data:function(){return{drawer:null,percentageCompleted:0,currentLesson:"lesson-1",courseContentList:[{moduleTitle:"Module #1 Title",active:!0,lessons:[{lessonID:"lesson-1",lessonTitle:"Lesson #1 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-2"},{lessonID:"lesson-2",lessonTitle:"Lesson #2 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-3"},{lessonID:"lesson-3",lessonTitle:"Lesson #3 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-4"}]},{moduleTitle:"Module #2 Title",active:!1,lessons:[{lessonID:"lesson-4",lessonTitle:"Lesson #4 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-5"},{lessonID:"lesson-5",lessonTitle:"Lesson #5 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-6"},{lessonID:"lesson-6",lessonTitle:"Lesson #6 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-7"}]},{moduleTitle:"Module #3 Title",active:!1,lessons:[{lessonID:"lesson-7",lessonTitle:"Lesson #7 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-8"},{lessonID:"lesson-8",lessonTitle:"Lesson #8 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"},{lessonID:"lesson-9",lessonTitle:"Lesson #9 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"}]}],activeLesson:[],lessonContent:[{lessonID:"lesson-1",lessonType:"video",lessonTitle:"Lesson #1 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-2",lessonType:"pdf",lessonTitle:"Lesson #2 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-3",lessonType:"audio",lessonTitle:"Lesson #3 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-4",lessonType:"video",lessonTitle:"Lesson #4 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-5",lessonType:"pdf",lessonTitle:"Lesson #5 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-6",lessonType:"audio",lessonTitle:"Lesson #6 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-7",lessonType:"video",lessonTitle:"Lesson #7 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-8",lessonType:"pdf",lessonTitle:"Lesson #8 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-9",lessonType:"audio",lessonTitle:"Lesson #9 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""}]}},created:function(){this.loadContent(this.currentLesson)},methods:{loadContent:function(e){this.currentLesson=e;for(var s=0;s<this.lessonContent.length;s++)if(e===this.lessonContent[s].lessonID){this.activeLesson=this.lessonContent[s];break}for(var t=0;t<this.courseContentList.length;t++){this.courseContentList[t].active=!1;for(var n=0;n<this.courseContentList[t].lessons.length;n++)e===this.courseContentList[t].lessons[n].lessonID?(this.courseContentList[t].lessons[n].active=!0,this.courseContentList[t].active=!0):this.courseContentList[t].lessons[n].active=!1}this.calculateCompletedPercentage()},completeLesson:function(e){for(var s=0;s<this.courseContentList.length;s++)for(var t=0;t<this.courseContentList[s].lessons.length;t++)if(e===this.courseContentList[s].lessons[t].lessonID){this.courseContentList[s].lessons[t].lessonComplete=!0,this.loadContent(this.courseContentList[s].lessons[t].nextLesson),this.calculateCompletedPercentage();break}},calculateCompletedPercentage:function(){for(var e=0,s=0,t=0;t<this.courseContentList.length;t++)for(var n=0;n<this.courseContentList[t].lessons.length;n++)!0===this.courseContentList[t].lessons[n].lessonComplete&&s++,e++;this.percentageCompleted=Math.round(s/e*100)}}}),c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"trainingTemplate"},[t("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(s){e.drawer=s},expression:"drawer"}},[t("v-subheader",{staticClass:"courseProgress"},[t("v-progress-linear",{attrs:{height:"15"},model:{value:e.percentageCompleted,callback:function(s){e.percentageCompleted=s},expression:"percentageCompleted"}})],1),e._v(" "),t("div",{staticClass:"courseProgressText"},[t("strong",[e._v(e._s(e.percentageCompleted)+"% Completed")])]),e._v(" "),t("v-list",e._l(e.courseContentList,function(s){return t("v-list-group",{key:s.moduleTitle,attrs:{value:s.active}},[t("v-list-tile",{attrs:{slot:"item"},on:{click:function(e){}},slot:"item"},[t("v-list-tile-content",[t("v-list-tile-title",[e._v(e._s(s.moduleTitle))])],1),e._v(" "),t("v-list-tile-action",[t("v-icon",[e._v("keyboard_arrow_down")])],1)],1),e._v(" "),e._l(s.lessons,function(s){return t("v-list-tile",{key:s.lessonTitle,staticClass:"removeListPadding",on:{click:function(t){e.loadContent(s.lessonID)}}},[t("v-list-tile-action",[s.active?t("v-icon",{staticClass:"blue--text"},[e._v("\n\t\t\t\t\t\t\t\tplay_circle_outline\n\t\t\t\t\t\t\t")]):s.lessonComplete?t("v-icon",{staticClass:"green--text"},[e._v("\n\t\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\t")]):t("v-icon",[e._v("\n\t\t\t\t\t\t\t\tradio_button_unchecked\n\t\t\t\t\t\t\t")])],1),e._v(" "),t("v-list-tile-content",[t("v-list-tile-title",{class:{lessonComplete:s.lessonComplete}},[e._v(e._s(s.lessonTitle))])],1)],1)})],2)}))],1),e._v(" "),t("v-toolbar",{staticClass:"elevation-0",attrs:{color:"indigo",dark:"",fixed:"",app:""}},[t("v-toolbar-side-icon",{on:{click:function(s){s.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),t("v-toolbar-title",[e._v("Course Title")])],1),e._v(" "),t("v-content",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[t("v-card",[t("v-card-title",{attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.activeLesson.lessonTitle))]),e._v(" "),t("div",[e._v(e._s(e.activeLesson.lessonDescription))])])]),e._v(" "),t("v-card-actions",{staticClass:"floatRight"},[t("v-btn",{staticClass:"elevation-0",attrs:{color:"error",dark:"",large:""},on:{click:function(s){e.completeLesson(e.activeLesson.lessonID)}}},[e._v("Complete And Go To Next Lesson")])],1),e._v(" "),t("div",{staticClass:"clearfix"}),e._v(" "),"video"==e.activeLesson.lessonType?t("div",[t("v-card-media",{staticClass:"cardMediaFormatting"},[t("video",{attrs:{width:"100%",height:"100%",controls:"",poster:e.activeLesson.posterImage}},[t("source",{attrs:{src:e.activeLesson.contentURL,type:"video/mp4"}})])])],1):e._e(),e._v(" "),"audio"==e.activeLesson.lessonType?t("div",[t("v-card-media",{staticClass:"cardMediaFormatting theme--dark indigo"},[t("div",{staticClass:"audioFormatting"},[t("audio",{attrs:{controls:""}},[t("source",{attrs:{src:e.activeLesson.contentURL,type:"audio/mpeg"}})])])])],1):e._e(),e._v(" "),"pdf"==e.activeLesson.lessonType?t("div",[t("v-card-media",{staticClass:"cardMediaFormatting"},[t("object",{attrs:{data:e.activeLesson.contentURL,type:"application/pdf",width:"100%",height:"1200"}})])],1):e._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},p=t("VU/8")(r,c,!1,function(e){t("YffA")},"data-v-6476e67b",null).exports;n.a.use(a.a);var v=new a.a({routes:[{path:"/",name:"TrainingTemplate",component:p}]}),d=t("3EgV"),h=t.n(d);n.a.use(h.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:v,render:function(e){return e(l)}})},YffA:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.88c8240eefe077776604.js.map