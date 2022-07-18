<template>
  <v-app>
    <!-- ナビゲーションリスト -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text ext--darken-2">
              Navigation Lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <!-- ナビゲーションリスト項目 -->
        <v-list dense nav>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-vuetify</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollProfile()" class="list-item">Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-briefcase</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollWork()" class="list-item">Work</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-format-list-bulleted-square</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollBackground()" class="list-item">Background</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-head-heart</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollLikes()" class="list-item">Likes</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-remote-desktop</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollSkill()" class="list-item">Skill</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group no-action>
            <template v-slot:activator>
            <v-list-item class="pl-0">
              <v-list-item-icon><v-icon>mdi-book-open-page-variant</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollPortofolio()" class="list-item">Portofolio</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="list-item" @click="moveIsara()">iSara</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="list-item" @click="moveLancers()">Lancers</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="list-item" @click="moveLikson()">LIKSON</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </v-list-group>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-account-wrench</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="scrollServices()" class="list-item">Services</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-github</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="moveGithub()" class="list-item">Source</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-switch
                  v-model="theme"
                  :prepend-icon="themeIcon"
                ></v-switch>
              </v-list-item-icon>
            </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <!-- ナビゲーションバー -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Potofolio Site</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="navbar-item">
          <v-btn @click="scrollProfile()" text>Profile</v-btn>
          <v-btn @click="scrollWork()" text>Work</v-btn>
          <v-btn @click="scrollBackground()" text>Background</v-btn>
          <v-btn @click="scrollLikes()" text>Likes</v-btn>
          <v-btn @click="scrollSkill()" text>Skill</v-btn>
          <v-btn @click="scrollPortofolio()" text>Portofolio</v-btn>
          <v-btn @click="scrollServices()" text>Service</v-btn>
          <v-btn href="https://github.com/tarao96/myportofolio-vue" text>Source</v-btn>
          <v-switch
                  v-model="theme"
                  :prepend-icon="themeIcon"
                  class="mt-5"
          ></v-switch>
      </v-toolbar-items>
    </v-app-bar>
    <v-main class="brown lighten-5">
      <router-view />
    </v-main>
    <v-footer color="primary" dark app>
      <v-btn id="portofolio-top" text>Portofolio Site</v-btn>
    </v-footer>
  </v-app>  
</template>

<script>
import $ from 'jquery'

export default {
    data() {
      return {
        drawer: null,
        theme: true,
      }
    },
    methods: {
      moveIsara: function() {
        let url = 'https://tarao96.github.io/iSara/'
        window.location.href = url
      },
      moveLancers: function() {
        let url = 'https://tarao96.github.io/Lancers/'
        window.location.href = url
      },
      moveLikson: function() {
        let url = 'https://tarao96.github.io/LIKSON/'
        window.location.href = url
      },
      moveGithub: function() {
        let url = 'https://github.com/tarao96/myportofolio-vue'
        window.location.href = url
      },
      scrollProfile: function() {
          let profileLocate = document.getElementById('profile_locate');
          let rect = profileLocate.getBoundingClientRect();
          let elemtop = rect.top + window.pageYOffset - 100;
          document.documentElement.scrollTop = elemtop;
      },
      scrollWork: function() {
        let profileLocate = document.getElementById('work_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      },
      scrollBackground: function() {
        let profileLocate = document.getElementById('background_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      },
      scrollLikes: function() {
        let profileLocate = document.getElementById('likes_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      },
      scrollSkill: function() {
        let profileLocate = document.getElementById('skill_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      },
      scrollPortofolio: function() {
        let profileLocate = document.getElementById('portofolio_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      },
      scrollServices: function() {
        let profileLocate = document.getElementById('services_locate');
        let rect = profileLocate.getBoundingClientRect();
        let elemtop = rect.top + window.pageYOffset - 100;
        document.documentElement.scrollTop = elemtop;
      }
    },

    computed: {
    themeIcon() {
      return this.theme ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
    },

    watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    }
    },

    mounted: function() {
      $('#portofolio-top').click(function() {
                $('body, html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });

      $('.work-item').hover(function() {
                $('.caption', this).animate({
                    top: "200px"
                }, 500);
            }, function() {
                $('.caption', this).animate({
                    top: "350px"
                }, 500);
            });
    },
};
</script>

<style scoped>
.list-item {
  cursor: pointer;
}

@media(max-width: 480px) {
  .navbar-item {
    display: none;
}
}
</style>
