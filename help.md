## For external host add this script on package.json
"dev:shared": "nuxt --hostname 0.0.0.0"

//For static website generate add this script on package.json
"generate": "nuxt generate",

## For SSR - Server Side Rendering add this script on package.json and exec in this order in your server.
"build": "nuxt build",
"start": "nuxt start",

//Ex. code for SSR:
<template>
  <div class="post">
    <h1>Postagem</h1>

    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default Vue.extend({
  //if not SSR change asyncData() for create()
  async asyncData() {
    await sleep()

    //In SSR this is not work, necessary export data in return
    const title = 'My Post Title'
    const content = 'Lorem ipsum dolor sit...'

    return { title, content }
  },
  data() {
    return {
      title: '',
      content: ''
    }
  }
})
</script>


## Install normalize CSS
>> npm install normalize.css

add this flag on nuxt.config.ts
css: [
    'normalize.css/normalize.css', ...
  ],


## Install loader SCSS (nuxt não vem com SCSS instalado)
>> npm install node-sass sass-loader -D


//Install style-resources for using scss environment variables
https://www.npmjs.com/package/@nuxtjs/style-resources
>> npm i @nuxtjs/style-resources -D


## ALL auto import, include inside subfolder of components folder: add this on nuxt.config.ts
components: [{ path: '@/components', pathPrefix: false }],



####################

# Using Store with Vuex + Typescript

## install Module Decorators
>> npm install vuex-module-decorators

## file: store/books.ts
import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  books = ['livro 1', 'livro 2', 'livro 3']
}

## file: store/index.ts
import { Store } from 'vuex'
import { initializeStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'

## file: utils/store-accessor.ts
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Books from '@/store/books'

/* eslint-disable import/no-mutable-exports */
let books: Books

const initializeStores = (store: Store<any>): void => {
  books = getModule(Books, store)
}

export { initializeStores, books }

## file: plugins/accessor.ts
import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor

## file: utils/nuxt-instance.ts
import { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }

## file: nuxt.config.ts
export default {
  // ...
  plugins: ['@/plugins/accessor']
}

######################

## Clear CSS of HTML generated
// nux.config.ts
build: {
    extractCSS: true,
  }


#######################

## Install cookie-universal-nuxt

>> npm i --save cookie-universal-nuxt

// Add this flag on nuxt.config.ts
{
 ...
  modules: [
    // Simple usage
    'cookie-universal-nuxt',
 ]
 ...
}
// Anable TypeScript add this flag on tsconfig.json
 "types": [
      ...
      "cookie-universal-nuxt"
    ]



