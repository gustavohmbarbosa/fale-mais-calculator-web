export default function ({ $axios, $config }: any, inject: any) {
  const CodeService = $axios.create({
    baseURL: `${$config.apiUrl}/${$config.apiVersion}`
  })

  inject('CodeService', CodeService)
}
