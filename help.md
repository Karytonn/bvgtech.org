
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



