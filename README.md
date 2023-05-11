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


# Legg til/modifiser komponenter

## Miljø
Man må koble pakken mot et prosjekt for å utvikle eller redigere komponenter

### 1. metode - npm link (fungerer ikke hos utviklingsmiljøet vårt)
Bruk `npm link` for å lenke pakken mot node_modules. Les mer her: https://docs.npmjs.com/cli/v8/commands/npm-link

### 2. metode - gjennom node_modules

```bash
# naviger til prosjektets node_modules
$ cd UKMvideo/klient/node_modules

# slett pakken fra NPM
$ rm -r ukm-components-vue3

# Klon repoet fra GIT
$ git clone https://github.com/UKMNorge/ukm-components-vue3.git
# cd ukm-components-vue3

# Hent andre pakker
$ npm i

# Build pakken
$ npm run build

# Pakken genererer koden i `/dist` mappe
```

### Publiser pakken på NPM

1. Endre versjon i `package.json`

```bash
# Publiser til NPM
$ npm publish
```

HUSK å pushe koden til GIT etter publisering på NPM
