import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const App = defineComponent({
    name: 'App',

    data() {
        return {
            id: 1,
            title: null,
        };
    },

    watch: {
      id(newValue) {
        this.fetchMeetupById(newValue);
      },
    },

    methods: {
      async fetchMeetupById(meetupId) {
        const response = await fetch(`${API_URL}/meetups/${meetupId}`);
        if (response.ok) {
          response.json().then((meetupData) => {
            this.title = meetupData.title;
          });
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      }
    },
});

const app = createApp(App);
const vm = app.mount('#app');