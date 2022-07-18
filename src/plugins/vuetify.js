import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
          dark: {
            primary: colors.red.darken2,
            accent: colors.grey.darken3,
            secondary: colors.amber.darken3,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3,
            brown: colors.grey.darken4,
            black: colors.grey.lighten5,
            grey: colors.grey.darken4
          },
          light: {
            primary: colors.blue.darken2,
            accent: colors.blue.darken3,

          }
        }
      }
});
