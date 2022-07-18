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
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <!-- ナビゲーションバー -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Potofolio Site</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="navbar-item">
          <v-btn id="profile_nav" text>Profile</v-btn>
          <v-btn id="work_nav" text>Work</v-btn>
          <v-btn id="background_nav" text>Background</v-btn>
          <v-btn id="likes_nav" text>Likes</v-btn>
          <v-btn id="skill_nav" text>Skill</v-btn>
          <v-btn id="portofolio_nav" text>Portofolio</v-btn>
          <v-btn id="services_nav" text>Service</v-btn>
          <v-btn href="https://github.com/tarao96/myportofolio-vue" text>Source</v-btn>
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
          var profileLocate = $('#profile_locate').offset().top;
          $(window).scrollTop(profileLocate - 150);
      },
      scrollWork: function() {
        var workLocate = $('#work_locate').offset().top;
        $(window).scrollTop(workLocate - 150);
      },
      scrollBackground: function() {
        var backgroundLocate = $('#background_locate').offset().top;
        $(window).scrollTop(backgroundLocate - 150);
      },
      scrollLikes: function() {
        var likesLocate = $('#likes_locate').offset().top;
        $(window).scrollTop(likesLocate - 150);
      },
      scrollSkill: function() {
        var skillLocate = $('#skill_locate').offset().top;
        $(window).scrollTop(skillLocate - 150);
      },
      scrollPortofolio: function() {
        var portofolioLocate = $('#portofolio_locate').offset().top;
        $(window).scrollTop(portofolioLocate - 150);
      },
      scrollServices: function() {
        var servicesLocate = $('#services_locate').offset().top;
        $(window).scrollTop(servicesLocate);
      }
    },

    mounted: function() {
      var profileLocate = $('#profile_locate').offset().top;
      var workLocate = $('#work_locate').offset().top;
      var backgroundLocate = $('#background_locate').offset().top;
      var likesLocate = $('#likes_locate').offset().top;
      var skillLocate = $('#skill_locate').offset().top;
      var portofolioLocate = $('#portofolio_locate').offset().top;
      var servicesLocate = $('#services_locate').offset().top;

      $('#profile_nav').click(function() {
          $(window).scrollTop(profileLocate - 150);
      });

      $('#work_nav').click(function() {
          $(window).scrollTop(workLocate - 150);
      });

      $('#background_nav').click(function() {
          $(window).scrollTop(backgroundLocate - 150);
      });

      $('#likes_nav').click(function() {
          $(window).scrollTop(likesLocate - 150);
      });

      $('#skill_nav').click(function() {
          $(window).scrollTop(skillLocate - 150);
      });

      $('#portofolio_nav').click(function() {
          $(window).scrollTop(portofolioLocate - 150);
      });

      $('#services_nav').click(function() {
          $(window).scrollTop(servicesLocate);
      });

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
