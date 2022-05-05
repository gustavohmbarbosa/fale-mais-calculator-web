// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $CodeService: NuxtAxiosInstance;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $CodeService: NuxtAxiosInstance;
  }

  interface Context {
    $CodeService: NuxtAxiosInstance;
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $CodeService: NuxtAxiosInstance;
  }
}
