import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.lightGreen.darken1,
                    secondary: colors.lightGreen.lighten1,
                },
                fonts: {
                    heading: ['RubikGlitch', 'sans-serif'],
                    body: ['Kanit', 'sans-serif'],
                },
            }

        }
    }
})

createApp(App).use(vuetify).mount('#app');
