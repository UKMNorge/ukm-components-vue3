import type { App } from 'vue';
import { UITable, Table } from './components';

export default {
  install: (app: App) => {
    app.component('UITable', UITable);
    app.component('Table', Table);
  }
};

export { 
  UITable,
  Table 
};