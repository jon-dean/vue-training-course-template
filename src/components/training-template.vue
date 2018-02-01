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
          <v-flex xs11 sm11 md12 lg12 xl12>

            <div class="alignToTop">
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ activeLesson.lessonTitle }}</h3>
                    <div>{{ activeLesson.lessonDescription }}</div>
                  </div>
                </v-card-title>
                <v-card-actions class="floatRight">
                  <!-- Tablet / desktop screen large button display -->
                  <v-btn color="error" dark large class="elevation-0 hidden-sm-and-down" @click="completeLesson(activeLesson.lessonID)">Complete And Go To Next Lesson</v-btn>

                  <!-- Small screen small button display -->
                  <v-btn color="error" dark small class="elevation-0 hidden-md-and-up" @click="completeLesson(activeLesson.lessonID)">Complete And Go To Next Lesson</v-btn>
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
                      <audio id="audioPlayer" :oncanplay="audioLoaded()" ref="audioPlayer" @timeupdate="onAudioTimeUpdate" @ended="resetAudioPlayer">
                        <source :src="activeLesson.contentURL" type="audio/mpeg">
                      </audio>

                        <div id="playPauseButton">
                          <v-btn color="error" fab large dark @click="audioPlayPause()">
                            <v-icon v-if="audioPlaying">pause</v-icon>
                            <v-icon v-else>play_arrow</v-icon>
                          </v-btn>
                        </div>

                        <div id="leftSideTime" class="white--text">{{ elapsedTime }}</div>

                        <div id="scrubBar">
                          <v-slider v-model="scrubBar" @input="changeCurrentTrackTime()" step="0" min="0" :max="scrubBarMax" color="red"></v-slider>
                        </div>

                        <div id="rightSideTime">
                          <div v-if="startedAudioPlayback" class="white--text">-{{ remainingTime }}</div>
                          <div v-else class="white--text">-{{ trackLength }}</div>
                        </div>

                    </div>
                  </v-card-media>
                </div>

                <div v-if="activeLesson.lessonType=='pdf'">
                  <v-card-media class="cardMediaFormatting">
                    <!-- Tablet / desktop screen PDF display -->
                    <vue-pdf-viewer class="hidden-sm-and-down text-center" height="950px" :url="activeLesson.contentURL"></vue-pdf-viewer>

                    <!-- Small screen PDF display -->
                    <vue-pdf-viewer class="hidden-md-and-up text-center" height="400px" :url="activeLesson.contentURL"></vue-pdf-viewer>
                  </v-card-media>
                </div>

              </v-card>
            </div>

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

      audioPlayer: [],
      audioPlaying: false,
      elapsedTime: 0,
      remainingTime: 0,
      trackLength: 0,
      startedAudioPlayback: false,
      scrubBar: 0,
      scrubBarMax: 0,

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
          contentURL: './static/demo3.pdf',
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
          contentURL: './static/demo6.pdf',
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
    // Load the right content on page creation
    this.loadContent(this.currentLesson)
  },

  updated () {
    // Let's check to see if we have an audio player
    let audioPlayer = document.getElementById('audioPlayer')
    if (audioPlayer) {
      // Set the player so we can override the controls
      this.audioPlayer = audioPlayer
    }
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
      this.calculateCompletedPercentage()
      if (this.audioPlayer) {
        this.resetAudioPlayer()
      }
    },

    completeLesson: function (lessonID) {
      // Loop thru the lessons to set the current item as completed in the sidebar
      for (let index = 0; index < this.courseContentList.length; index++) {
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (lessonID === this.courseContentList[index].lessons[subIndex].lessonID) {
            this.courseContentList[index].lessons[subIndex].lessonComplete = true
            this.loadContent(this.courseContentList[index].lessons[subIndex].nextLesson)
            this.calculateCompletedPercentage()
            break
          }
        }
      }
    },

    calculateCompletedPercentage: function () {
      // Let's loop through and calculate the completed percentage
      let totalLessons = 0
      let completedLessons = 0
      for (let index = 0; index < this.courseContentList.length; index++) {
        for (let subIndex = 0; subIndex < this.courseContentList[index].lessons.length; subIndex++) {
          if (this.courseContentList[index].lessons[subIndex].lessonComplete === true) {
            completedLessons++
          }
          totalLessons++
        }
      }
      this.percentageCompleted = Math.round((completedLessons / totalLessons) * 100)
    },

    audioLoaded: function () {
      // Check to see if the audio player is fully loaded so we can properly access the track duration and other audio API elements
      if (this.audioPlayer !== null) {
        let retryFunction
        if (!isNaN(this.audioPlayer.duration)) {
          // We're OK so let's clear the timeout
          clearTimeout(retryFunction)
          this.trackLength = this.formatTrackTime(Math.floor(this.audioPlayer.duration))
          this.elapsedTime = this.formatTrackTime(this.audioPlayer.currentTime)
          this.scrubBarMax = this.audioPlayer.duration
        } else {
          // It's not fully loaded, let's retry in half a second
          retryFunction = setTimeout(this.audioLoaded, 500)
        }
      }
    },

    audioPlayPause: function () {
      // Let's check to see if we're already playing
      if (this.audioPlayer.paused) {
        // Start playing and switch the flag to show the pause button
        this.audioPlayer.play()
        this.audioPlaying = true

        // Set the startedAudioPlayback flag to switch the remaining time counter
        this.startedAudioPlayback = true
      } else {
        // Pause playing and switch the flag to show the play button
        this.audioPlayer.pause()
        this.audioPlaying = false
      }
    },

    onAudioTimeUpdate: function () {
      // Update the scrub bar with the elapsed time
      this.scrubBar = this.audioPlayer.currentTime

      // Update the elapsed and remaining times for the track
      this.elapsedTime = this.formatTrackTime(this.audioPlayer.currentTime)
      this.remainingTime = this.formatTrackTime(this.audioPlayer.duration - this.audioPlayer.currentTime)
    },

    changeCurrentTrackTime: function () {
      // Change the track time when the user drags the slider bar
      this.audioPlayer.currentTime = this.scrubBar
    },

    resetAudioPlayer: function () {
      // Let's reset the values back to their defaults
      this.elapsedTime = 0
      this.remainingTime = 0
      this.audioPlayer.currentTime = 0
      this.startedAudioPlayback = false
      this.audioPlaying = false
    },

    formatTrackTime: function (timeToFormat) {
      let minutes = Math.floor((timeToFormat) / 60)
      let seconds = Math.floor(timeToFormat % 60)
      seconds = (seconds >= 10) ? seconds : '0' + seconds
      return minutes + ':' + seconds
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

  .cardMediaFormatting p {
    padding: 15px;
    text-align: center;
  }

  .audioFormatting {
    width: 100%;
    height: 285px;
    padding: 75px;
    text-align: center;
  }

  #leftSideTime, #scrubBar {
    float: left;
  }

  #leftSideTime, #rightSideTime {
    width: 5%;
    padding-top: 22px;
  }

  #leftSideTime {
    text-align: right;
  }

  #rightSideTime {
    float: right;
    text-align: left;
  }

  #scrubBar {
    width: 90%;
    padding: 0 10px 0 25px;
  }

  .alignToTop {
    height: 100vh !important;
    align-self: flex-start;
  }

</style>
