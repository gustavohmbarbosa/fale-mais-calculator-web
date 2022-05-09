// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $CodeService: NuxtAxiosInstance;
    $PlanService: NuxtAxiosInstance;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $CodeService: NuxtAxiosInstance;
    $PlanService: NuxtAxiosInstance;
  }

  interface Context {
    $CodeService: NuxtAxiosInstance;
    $PlanService: NuxtAxiosInstance;
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $CodeService: NuxtAxiosInstance;
    $PlanService: NuxtAxiosInstance;
  }
}
