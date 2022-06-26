import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
    name: 'App',

    operators: [
        {
            value: 'sum',
            label: '➕',
        },
        {
            value: 'subtract',
            label: '➖',
        },
        {
            value: 'multiply',
            label: '✖',
        },
        {
            value: 'divide',
            label: '➗',
        },
    ],

    data() {
        return {
            operands: [0,0],
            selectedOperator: 'sum',
        };
    },

    computed: {
        result() {
            let result = 'Ошибка!';

            switch(this.selectedOperator) {
                case 'sum':
                    result = this.operands[0] + this.operands[1];
                    break;
                case 'subtract':
                    result = this.operands[0] - this.operands[1];
                    break;
                case 'multiply':
                    result = this.operands[0] * this.operands[1];
                    break;
                case 'divide':
                    if (this.operands[1] === 0) {
                        result = 'Ошибка! На "0" делить нельзя!';
                    } else {
                        result = this.operands[0] / this.operands[1];
                    };
                    break;
            };
            
            return result;
        },
    },
});

const app = createApp(App);
const vm = app.mount('#app');