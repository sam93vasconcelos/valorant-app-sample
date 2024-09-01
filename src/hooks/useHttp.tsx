import axios from "axios"

const useHttp = () => {
  const getInstance = () => {
    return axios.create({
      baseURL: 'https://valorant-api.com/v1',
    })
  }

  return {
    http: getInstance(),
  }
}

export default useHttp
