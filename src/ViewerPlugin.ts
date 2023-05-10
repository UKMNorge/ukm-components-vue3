import type { App } from 'vue';
import { HelloWorldW, UITable, UKMTable } from './components';

export default {
  install: (app: App) => {
    app.component('HelloWorldW', HelloWorldW);
    app.component('UITable', UITable);
    app.component('UKMTable', UKMTable);
  }
};

export { 
  HelloWorldW, 
  UITable, 
  UKMTable 
};