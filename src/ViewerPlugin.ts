import type { App } from 'vue';
import { UITable, Table, Input } from './components';

export default {
  install: (app: App) => {
    app.component('UITable', UITable);
    app.component('Table', Table);
    app.component('Input', Input);
  }
};

export { 
  UITable,
  Table,
  Input
};