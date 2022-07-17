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
          <v-list-group
          v-for="nav_list in nav_lists"
          :key="nav_list.name"
          :prepend-icon="nav_list.icon"
          no-action
          :append-icon="nav_list.lists ? undefined : ''">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="list in nav_list.lists" :key="list">
            <v-list-item-content>
              <v-list-item-title>{{ list }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <!-- ナビゲーションバー -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Potofolio Site</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
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
      Portofolio Site
    </v-footer>
  </v-app>  
</template>

<script>
import $ from 'jquery'

export default {
    data() {
      return {
        drawer: null,
        supports: [
          'iSara',
          'Lancers',
          'LIKSON',
        ],
        nav_lists: [
          {name: 'Profile', icon: 'mdi-vuetify'},
          {name: 'Skill', icon: 'mdi-remote-desktop', lists: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'Sass', 'jQuery', 'Bootstrap', 'Vuetify', 'WordPress']},
          {name: 'Work', icon: 'mdi-briefcase', lists: ['iSara', 'Lancers', 'LIKSON']},
          {name: 'Service', icon: 'mdi-account-wrench', lists: ['Coding', 'WordPress', 'Web Development']},
          {name: 'Source', icon: 'mdi-github'},
        ]
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
