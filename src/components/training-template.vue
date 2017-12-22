<template>
  <div class="trainingTemplate">

    <v-navigation-drawer fixed v-model="drawer" app>
      <v-subheader class="courseProgress">
        <v-progress-linear v-model="percentageCompleted" height="15"></v-progress-linear>
      </v-subheader>
      <div class="courseProgressText"><strong>{{ percentageCompleted }}% Completed</strong></div>

      <v-list>
        <v-list-group v-for="item in courseContentList" :value="item.active" v-bind:key="item.moduleTitle">
          <v-list-tile slot="item" @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.moduleTitle }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.lessons" v-bind:key="subItem.lessonTitle" class="removeListPadding" @click="loadContent(subItem.lessonID)">
            <v-list-tile-action>
							<v-icon v-if="subItem.active" class="blue--text">
								play_circle_outline
							</v-icon>
							<v-icon v-else-if="subItem.lessonComplete" class="green--text">
								done
							</v-icon>
							<v-icon v-else>
								radio_button_unchecked
							</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-bind:class="{'lessonComplete': subItem.lessonComplete}">{{ subItem.lessonTitle }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app class="elevation-0">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Course Title</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout row>
          <v-flex xs12 sm12 md12 lg12 xl12>

            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ activeLesson.lessonTitle }}</h3>
                  <div>{{ activeLesson.lessonDescription }}</div>
                </div>
              </v-card-title>
              <v-card-actions class="floatRight">
                <v-btn color="error" dark large class="elevation-0" @click="completeLesson(activeLesson.lessonID)">Complete And Go To Next Lesson</v-btn>
              </v-card-actions>
              <div class="clearfix"></div>

              <div v-if="activeLesson.lessonType=='video'">
                <v-card-media class="cardMediaFormatting">
                  <video width="100%" height="100%" controls :poster="activeLesson.posterImage">
                    <source :src="activeLesson.contentURL" type="video/mp4">
                  </video>
                </v-card-media>
              </div>

              <div v-if="activeLesson.lessonType=='audio'">
                <v-card-media class="cardMediaFormatting theme--dark indigo">
                  <div class="audioFormatting">
                    <audio controls>
                      <source :src="activeLesson.contentURL" type="audio/mpeg">
                    </audio>
                  </div>
                </v-card-media>
              </div>

              <div v-if="activeLesson.lessonType=='pdf'">
                <v-card-media class="cardMediaFormatting">
                  <object :data="activeLesson.contentURL" type="application/pdf" width="100%" height="1200"></object>
                </v-card-media>
              </div>

            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
export default {

  name: 'TrainingTemplate',

  data () {
    return {
      drawer: null,

      totalLessons: 0,
      completedLessons: 0,
      percentageCompleted: 0,

      currentLesson: 'lesson-1',

      courseContentList: [
        {
          moduleTitle: 'Module #1 Title',
          active: true,
          lessons: [
            {
              lessonID: 'lesson-1',
              lessonTitle: 'Lesson #1 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-2'
            },
            {
              lessonID: 'lesson-2',
              lessonTitle: 'Lesson #2 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-3'
            },
            {
              lessonID: 'lesson-3',
              lessonTitle: 'Lesson #3 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-4'
            }
          ]
        },
        {
          moduleTitle: 'Module #2 Title',
          active: false,
          lessons: [
            {
              lessonID: 'lesson-4',
              lessonTitle: 'Lesson #4 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-5'
            },
            {
              lessonID: 'lesson-5',
              lessonTitle: 'Lesson #5 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-6'
            },
            {
              lessonID: 'lesson-6',
              lessonTitle: 'Lesson #6 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-7'
            }
          ]
        },
        {
          moduleTitle: 'Module #3 Title',
          active: false,
          lessons: [
            {
              lessonID: 'lesson-7',
              lessonTitle: 'Lesson #7 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-8'
            },
            {
              lessonID: 'lesson-8',
              lessonTitle: 'Lesson #8 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-9'
            },
            {
              lessonID: 'lesson-9',
              lessonTitle: 'Lesson #9 Title',
              lessonComplete: false,
              active: false,
              nextLesson: 'lesson-9'
            }
          ]
        }
      ],

      activeLesson: [],

      lessonContent: [
        {
          lessonID: 'lesson-1',
          lessonType: 'video',
          lessonTitle: 'Lesson #1 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-2',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #2 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-3',
          lessonType: 'audio',
          lessonTitle: 'Lesson #3 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        },
        {
          lessonID: 'lesson-4',
          lessonType: 'video',
          lessonTitle: 'Lesson #4 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-5',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #5 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-6',
          lessonType: 'audio',
          lessonTitle: 'Lesson #6 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        },
        {
          lessonID: 'lesson-7',
          lessonType: 'video',
          lessonTitle: 'Lesson #7 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/countdown.mp4',
          posterImage: './static/poster-image.png'
        },
        {
          lessonID: 'lesson-8',
          lessonType: 'pdf',
          lessonTitle: 'Lesson #8 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/demo.pdf',
          posterImage: ''
        },
        {
          lessonID: 'lesson-9',
          lessonType: 'audio',
          lessonTitle: 'Lesson #9 Title',
          lessonDescription: 'A short paragraph on what the person is going to learn in this lesson.',
          contentURL: './static/tcm.mp3',
          posterImage: ''
        }
      ]

    }
  },

  created () {
    this.loadContent(this.currentLesson)
  },

  methods: {

    loadContent: function (lessonID) {
      // Let's set the currentLesson to load the right content
      this.currentLesson = lessonID

      // Loop thru and find the right content to display
      for (let index = 0; index < this.lessonContent.length; index++) {
        // Let's check to see if the item matches so we can grab the right content
        if (lessonID === this.lessonContent[index].lessonID) {
          this.activeLesson = this.lessonContent[index]
          break
        }
      }

      // Loop thru the lessons to set the current item and module as active in the sidebar
      for (let index = 0; index < this.courseContentList.length; index++) {
        this.courseContentList[index].active = false
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (lessonID === this.courseContentList[index].lessons[subIndex].lessonID) {
            this.courseContentList[index].lessons[subIndex].active = true
            this.courseContentList[index].active = true
          } else {
            this.courseContentList[index].lessons[subIndex].active = false
          }
        }
      }
    },

    completeLesson: function (lessonID) {
      // Loop thru the lessons to set the current item as completed in the sidebar
      for (let index = 0; index < this.courseContentList.length; index++) {
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (lessonID === this.courseContentList[index].lessons[subIndex].lessonID) {
            this.courseContentList[index].lessons[subIndex].lessonComplete = true
            this.loadContent(this.courseContentList[index].lessons[subIndex].nextLesson)
            break
          }
        }
      }
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.courseProgressText {
		text-align: center;
		font-size: 1.3em;
		margin-bottom: 25px;
	}

  li.removeListPadding {
		margin-left: -50px !important;
	}

  .lessonComplete {
    color: rgb(170, 170, 170);
  }

  .floatRight {
    float: right;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  .cardMediaFormatting {
    margin: 0 !important;
    padding: 0 !important;
  }

  .audioFormatting {
    width: 100%;
    height: 200px;
    padding: 75px;
    text-align: center;
  }
</style>
