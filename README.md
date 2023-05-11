# UKM Komponenter på Vue 3

Komponenter distribueres gjennom NPM

# Kom i gang

### Installer pakken
```bash
# naviger til prosjektet
$ cd UKMvideo

# Installer pakken gjennom NPM
# NPM lenke: https://www.npmjs.com/package/ukm-components-vue3
$ npm i ukm-components-vue3
```

INFO: etter installering av pakken, ligger det i node_modules

Komponenter kan hentes fra hver .vue fil eller kan defineres globalt fra main.ts

### Import fra *.vue filer
```js
import { UKMTable } from 'ukm-components-vue3';

// Bruk i template
<template>
  <UKMTable msg='Hello Table test' color="red" />
</template>
```

### Import globalt fra main.ts
```js
import { UKMTable } from 'ukm-components-vue3';

// Legg til i Vue app
app.component('ukm-table', UKMTable);
```

