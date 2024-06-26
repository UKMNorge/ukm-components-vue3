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

### Import css fra main.ts
```js
// Import CSS for ukm-components-vue3
import "../node_modules/ukm-components-vue3/dist/style.css";
```

# Legg til/modifiser komponenter

## Miljø
Man må koble pakken mot et prosjekt for å utvikle eller redigere komponenter

### 1. metode - npm link (fungerer ikke hos utviklingsmiljøet vårt)
Bruk `npm link` for å lenke pakken mot node_modules. Les mer her: https://docs.npmjs.com/cli/v8/commands/npm-link

### 2. metode - gjennom node_modules

```bash
# naviger til prosjektets node_modules
$ cd UKMvideo/client/node_modules

# slett pakken fra NPM
$ rm -r ukm-components-vue3

# Klon repoet fra GIT
$ git clone https://github.com/UKMNorge/ukm-components-vue3.git
$ cd ukm-components-vue3

# Hent andre pakker
$ npm i

# Build pakken
$ npm run build

# Pakken genererer koden i `/dist` mappe

# OBS: Husk å rydde node_modules etter at du er ferdig med utvikling
```

# Legg til ny komponent


1. Opprett mappe med navn "Komponentnavn" i `components`
2. Opprett fil i mappe "Komponentnavn" med navn "Komponentnavn.vue"
3. På src/components/index.ts legg til eksport koden `export { default as Komponentnavn } from './Komponentnavn/Komponentnavn.vue';`
4. På src/ViewerPlugin.ts legg til Komponentnavn i import, legg til component i App og legg til Komponentnavn i export

### Publiser pakken på NPM

1. Endre versjon i `package.json`

```bash
# Publiser til NPM
$ npm publish
```

HUSK å pushe koden til GIT etter publisering på NPM



# All Components
## Før importing av komponent
Det er viktig å ha siste versjon av denne pakken, derfor må det kjøres npm update på pakken. Sjekk også versjon på `package.json`
```
npm update ukm-components-vue3
```

## Permanent Notification
```vue
<PermanentNotification :typeNotification="'warning'" :tittel="'Beskjed'" :description="'Beskrivelse'" />
```

![Screenshot 2024-02-22 at 15 35 25](https://github.com/UKMNorge/ukm-components-vue3/assets/10181004/8e5b9f8f-e2e5-41b2-a431-2a314af4fe13)


## Text Input with overlay
```vue
<InputTextOverlay :placeholder="'Søk etter kontakter'" :callbackChange="searchInputChanged" />
```

![image](https://github.com/UKMNorge/ukm-components-vue3/assets/10181004/cb38c6a0-bbdb-45a9-ae8e-c972d30fcc30)



## Container with closing option
```vue
<FloatingClosable ref="floatingLeggTilMottaker">
  <div>
      <button @click="localMethod()">
  </div>
</FloatingClosable>
```