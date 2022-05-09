export default function ({ $axios }: any, inject: any) {
  const PlanService = $axios.create({
    baseURL: `${process.env.API_URL}/${process.env.API_VERSION}`
  })

  inject('PlanService', PlanService)
}
