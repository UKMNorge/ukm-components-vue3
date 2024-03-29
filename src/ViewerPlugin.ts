import type { App } from 'vue';
import { UITable, Table, Input, PermanentNotification, InputTextOverlay } from './components';

export default {
  install: (app: App) => {
    app.component('UITable', UITable);
    app.component('Table', Table);
    app.component('Input', Input);
    app.component('PermanentNotification', PermanentNotification);
    app.component('InputTextOverlay', InputTextOverlay);
  }
};

export { 
  UITable,
  Table,
  Input,
  PermanentNotification,
  InputTextOverlay
};