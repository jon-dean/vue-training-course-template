webpackJsonp([1],{"7zck":function(e,t){},IQpC:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("M4fF");t.default={mounted:function(){(0,n.isUndefined)(window.PDFObject)?console.error("VuePDFViewer Error: PDFObject not found. Get it here: https://pdfobject.com, please include js file."):(0,n.isUndefined)(this.url)?console.error("VuePDFViewer Error: no file url provided"):PDFObject.embed(this.url,this.$el)},props:["height","url"],data:function(){var e="400px";return this.height?e=this.height:console.warn('Please specify viewer height, e.g. height="500px"'),{styleObject:{height:e}}},watch:{url:function(e){PDFObject.embed(e,this.$el)}}}},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("/5sW"),o={name:"app",data:function(){return{currentYear:(new Date).getFullYear()}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("main",[t("v-container",{attrs:{fluid:""}},[t("router-view")],1)],1),this._v(" "),t("v-footer",{attrs:{color:"indigo",app:""}},[t("span",{staticClass:"white--text"},[this._v("© "+this._s(this.currentYear)+" All Rights Reserved.")])])],1)},staticRenderFns:[]},a=s("VU/8")(o,i,!1,null,null,null).exports,l=s("/ocq"),r=(s("7zck"),{name:"TrainingTemplate",data:function(){return{drawer:null,audioPlayer:[],audioPlaying:!1,elapsedTime:0,remainingTime:0,trackLength:0,startedAudioPlayback:!1,scrubBar:0,scrubBarMax:0,percentageCompleted:0,currentLesson:"lesson-1",courseContentList:[{moduleTitle:"Module #1 Title",active:!0,lessons:[{lessonID:"lesson-1",lessonTitle:"Lesson #1 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-2"},{lessonID:"lesson-2",lessonTitle:"Lesson #2 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-3"},{lessonID:"lesson-3",lessonTitle:"Lesson #3 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-4"}]},{moduleTitle:"Module #2 Title",active:!1,lessons:[{lessonID:"lesson-4",lessonTitle:"Lesson #4 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-5"},{lessonID:"lesson-5",lessonTitle:"Lesson #5 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-6"},{lessonID:"lesson-6",lessonTitle:"Lesson #6 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-7"}]},{moduleTitle:"Module #3 Title",active:!1,lessons:[{lessonID:"lesson-7",lessonTitle:"Lesson #7 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-8"},{lessonID:"lesson-8",lessonTitle:"Lesson #8 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"},{lessonID:"lesson-9",lessonTitle:"Lesson #9 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"}]}],activeLesson:[],lessonContent:[{lessonID:"lesson-1",lessonType:"video",lessonTitle:"Lesson #1 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-2",lessonType:"pdf",lessonTitle:"Lesson #2 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-3",lessonType:"audio",lessonTitle:"Lesson #3 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-4",lessonType:"video",lessonTitle:"Lesson #4 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-5",lessonType:"pdf",lessonTitle:"Lesson #5 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo3.pdf",posterImage:""},{lessonID:"lesson-6",lessonType:"audio",lessonTitle:"Lesson #6 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-7",lessonType:"video",lessonTitle:"Lesson #7 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-8",lessonType:"pdf",lessonTitle:"Lesson #8 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo6.pdf",posterImage:""},{lessonID:"lesson-9",lessonType:"audio",lessonTitle:"Lesson #9 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""}]}},created:function(){this.loadContent(this.currentLesson)},updated:function(){var e=document.getElementById("audioPlayer");e&&(this.audioPlayer=e)},methods:{loadContent:function(e){this.currentLesson=e;for(var t=0;t<this.lessonContent.length;t++)if(e===this.lessonContent[t].lessonID){this.activeLesson=this.lessonContent[t];break}for(var s=0;s<this.courseContentList.length;s++){this.courseContentList[s].active=!1;for(var n=0;n<this.courseContentList[s].lessons.length;n++)e===this.courseContentList[s].lessons[n].lessonID?(this.courseContentList[s].lessons[n].active=!0,this.courseContentList[s].active=!0):this.courseContentList[s].lessons[n].active=!1}this.calculateCompletedPercentage(),this.audioPlayer&&this.resetAudioPlayer()},completeLesson:function(e){for(var t=0;t<this.courseContentList.length;t++)for(var s=0;s<this.courseContentList[t].lessons.length;s++)if(e===this.courseContentList[t].lessons[s].lessonID){this.courseContentList[t].lessons[s].lessonComplete=!0,this.loadContent(this.courseContentList[t].lessons[s].nextLesson),this.calculateCompletedPercentage();break}},calculateCompletedPercentage:function(){for(var e=0,t=0,s=0;s<this.courseContentList.length;s++)for(var n=0;n<this.courseContentList[s].lessons.length;n++)!0===this.courseContentList[s].lessons[n].lessonComplete&&t++,e++;this.percentageCompleted=Math.round(t/e*100)},audioLoaded:function(){if(null!==this.audioPlayer){var e=void 0;isNaN(this.audioPlayer.duration)?e=setTimeout(this.audioLoaded,500):(clearTimeout(e),this.trackLength=this.formatTrackTime(Math.floor(this.audioPlayer.duration)),this.elapsedTime=this.formatTrackTime(this.audioPlayer.currentTime),this.scrubBarMax=this.audioPlayer.duration)}},audioPlayPause:function(){this.audioPlayer.paused?(this.audioPlayer.play(),this.audioPlaying=!0,this.startedAudioPlayback=!0):(this.audioPlayer.pause(),this.audioPlaying=!1)},onAudioTimeUpdate:function(){this.scrubBar=this.audioPlayer.currentTime,this.elapsedTime=this.formatTrackTime(this.audioPlayer.currentTime),this.remainingTime=this.formatTrackTime(this.audioPlayer.duration-this.audioPlayer.currentTime)},changeCurrentTrackTime:function(){this.audioPlayer.currentTime=this.scrubBar},resetAudioPlayer:function(){this.elapsedTime=0,this.remainingTime=0,this.audioPlayer.currentTime=0,this.startedAudioPlayback=!1,this.audioPlaying=!1},formatTrackTime:function(e){var t=Math.floor(e/60),s=Math.floor(e%60);return s=s>=10?s:"0"+s,t+":"+s}}}),c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"trainingTemplate"},[s("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("v-subheader",{staticClass:"courseProgress"},[s("v-progress-linear",{attrs:{height:"15"},model:{value:e.percentageCompleted,callback:function(t){e.percentageCompleted=t},expression:"percentageCompleted"}})],1),e._v(" "),s("div",{staticClass:"courseProgressText"},[s("strong",[e._v(e._s(e.percentageCompleted)+"% Completed")])]),e._v(" "),s("v-list",e._l(e.courseContentList,function(t){return s("v-list-group",{key:t.moduleTitle,attrs:{value:t.active}},[s("v-list-tile",{attrs:{slot:"item"},on:{click:function(e){}},slot:"item"},[s("v-list-tile-content",[s("v-list-tile-title",[e._v(e._s(t.moduleTitle))])],1),e._v(" "),s("v-list-tile-action",[s("v-icon",[e._v("keyboard_arrow_down")])],1)],1),e._v(" "),e._l(t.lessons,function(t){return s("v-list-tile",{key:t.lessonTitle,staticClass:"removeListPadding",on:{click:function(s){e.loadContent(t.lessonID)}}},[s("v-list-tile-action",[t.active?s("v-icon",{staticClass:"blue--text"},[e._v("\n\t\t\t\t\t\t\t\tplay_circle_outline\n\t\t\t\t\t\t\t")]):t.lessonComplete?s("v-icon",{staticClass:"green--text"},[e._v("\n\t\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\t")]):s("v-icon",[e._v("\n\t\t\t\t\t\t\t\tradio_button_unchecked\n\t\t\t\t\t\t\t")])],1),e._v(" "),s("v-list-tile-content",[s("v-list-tile-title",{class:{lessonComplete:t.lessonComplete}},[e._v(e._s(t.lessonTitle))])],1)],1)})],2)}))],1),e._v(" "),s("v-toolbar",{staticClass:"elevation-0",attrs:{color:"indigo",dark:"",fixed:"",app:""}},[s("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),s("v-toolbar-title",[e._v("Course Title")])],1),e._v(" "),s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs11:"",sm11:"",md12:"",lg12:"",xl12:""}},[s("div",{staticClass:"alignToTop"},[s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.activeLesson.lessonTitle))]),e._v(" "),s("div",[e._v(e._s(e.activeLesson.lessonDescription))])])]),e._v(" "),s("v-card-actions",{staticClass:"floatRight"},[s("v-btn",{staticClass:"elevation-0 hidden-sm-and-down",attrs:{color:"error",dark:"",large:""},on:{click:function(t){e.completeLesson(e.activeLesson.lessonID)}}},[e._v("Complete And Go To Next Lesson")]),e._v(" "),s("v-btn",{staticClass:"elevation-0 hidden-md-and-up",attrs:{color:"error",dark:"",small:""},on:{click:function(t){e.completeLesson(e.activeLesson.lessonID)}}},[e._v("Complete And Go To Next Lesson")])],1),e._v(" "),s("div",{staticClass:"clearfix"}),e._v(" "),"video"==e.activeLesson.lessonType?s("div",[s("v-card-media",{staticClass:"cardMediaFormatting"},[s("video",{attrs:{width:"100%",height:"100%",controls:"",poster:e.activeLesson.posterImage}},[s("source",{attrs:{src:e.activeLesson.contentURL,type:"video/mp4"}})])])],1):e._e(),e._v(" "),"audio"==e.activeLesson.lessonType?s("div",[s("v-card-media",{staticClass:"cardMediaFormatting theme--dark indigo"},[s("div",{staticClass:"audioFormatting"},[s("audio",{ref:"audioPlayer",attrs:{id:"audioPlayer",oncanplay:e.audioLoaded()},on:{timeupdate:e.onAudioTimeUpdate,ended:e.resetAudioPlayer}},[s("source",{attrs:{src:e.activeLesson.contentURL,type:"audio/mpeg"}})]),e._v(" "),s("div",{attrs:{id:"playPauseButton"}},[s("v-btn",{attrs:{color:"error",fab:"",large:"",dark:""},on:{click:function(t){e.audioPlayPause()}}},[e.audioPlaying?s("v-icon",[e._v("pause")]):s("v-icon",[e._v("play_arrow")])],1)],1),e._v(" "),s("div",{staticClass:"white--text",attrs:{id:"leftSideTime"}},[e._v(e._s(e.elapsedTime))]),e._v(" "),s("div",{attrs:{id:"scrubBar"}},[s("v-slider",{attrs:{step:"0",min:"0",max:e.scrubBarMax,color:"red"},on:{input:function(t){e.changeCurrentTrackTime()}},model:{value:e.scrubBar,callback:function(t){e.scrubBar=t},expression:"scrubBar"}})],1),e._v(" "),s("div",{attrs:{id:"rightSideTime"}},[e.startedAudioPlayback?s("div",{staticClass:"white--text"},[e._v("-"+e._s(e.remainingTime))]):s("div",{staticClass:"white--text"},[e._v("-"+e._s(e.trackLength))])])])])],1):e._e(),e._v(" "),"pdf"==e.activeLesson.lessonType?s("div",[s("v-card-media",{staticClass:"cardMediaFormatting"},[s("vue-pdf-viewer",{staticClass:"hidden-sm-and-down text-center",attrs:{height:"950px",url:e.activeLesson.contentURL}}),e._v(" "),s("vue-pdf-viewer",{staticClass:"hidden-md-and-up text-center",attrs:{height:"400px",url:e.activeLesson.contentURL}})],1)],1):e._e()],1)],1)])],1)],1)],1)],1)},staticRenderFns:[]},d=s("VU/8")(r,c,!1,function(e){s("VZKV")},"data-v-385fac1b",null).exports,u=s("t8Tz");n.a.use(l.a),n.a.component("vue-pdf-viewer",u.a);var p=new l.a({routes:[{path:"/",name:"TrainingTemplate",component:d}]}),h=s("3EgV"),v=s.n(h);n.a.use(v.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:p,render:function(e){return e(a)}})},OkYJ:function(e,t,s){"use strict";var n=s("IQpC"),o=s.n(n),i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:this.styleObject})},staticRenderFns:[]},a=function(e){s("kpoU")},l=s("VU/8")(o.a,i,!1,a,null,null);t.a=l.exports},VZKV:function(e,t){},kpoU:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.28a846847498a5641082.js.map