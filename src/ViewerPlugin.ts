import type { App } from 'vue';
import { 
    UITable, 
    Table, 
    Input, 
    PermanentNotification, 
    InputTextOverlay, 
    FloatingClosable, 
    InteractionObject, 
    SPAInteraction,
    Feedback
} from './components';

export default {
  install: (app: App) => {
    app.component('UITable', UITable);
    app.component('Table', Table);
    app.component('Input', Input);
    app.component('PermanentNotification', PermanentNotification);
    app.component('InputTextOverlay', InputTextOverlay);
    app.component('FloatingClosable', FloatingClosable);
    app.component('InteractionObject', InteractionObject);
    app.component('InteractionObject', Feedback);
  }
};

export { 
  UITable,
  Table,
  Input,
  PermanentNotification,
  InputTextOverlay,
  FloatingClosable,
  InteractionObject,
  SPAInteraction,
  Feedback
};