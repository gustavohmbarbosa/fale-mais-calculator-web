export default function ({ $axios, $config }: any, inject: any) {
  const PlanService = $axios.create({
    baseURL: `${$config.apiUrl}/${$config.apiVersion}`
  })

  inject('PlanService', PlanService)
}
