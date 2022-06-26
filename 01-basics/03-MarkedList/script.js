import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const fetchData = () => fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

const App = defineComponent({
    name: 'App',

    computed: {
        filtredData() {
            if (this.emails) {
                let search = this.search;
                
                return this.emails.map(function(row) {
                    let found = false;
                    if (search && row.includes(search)) {
                        found = true;
                    }
                    return {'email': row, 'found': found,};
                });
            } else {
                return null;
            }
        },
    },

    data() {
        return {
            search: null,
            emails: null,
        };
    },

    async mounted() {
        // Получение списка email адресов
        await fetchData().then((data) =>{
            if (Object.keys(data).length != 0) {
                this.emails = data.map(function(row) {
                    return row['email'];
                });
            }
        });
    },
});

const app = createApp(App);
const vm = app.mount('#app');
