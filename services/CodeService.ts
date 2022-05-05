export default function ({ $axios }: any, inject: any) {
  const CodeService = $axios.create({
    baseURL: `${process.env.API_URL}/${process.env.API_VERSION}`
  })

  inject('CodeService', CodeService)
}
