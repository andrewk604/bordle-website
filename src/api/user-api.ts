/* eslint-disable */

import axios from "axios"
import API_ENDPOINT from "../constants/config"

const UserApi = {
  async checkWord(word: string) {
    try {
      const result = (
        await axios.post(`${API_ENDPOINT.API_ENDPOINT}/check?word=${word}`)
      ).data
      return result
    } catch (error) {
      console.log(error)
    }
  },
  async getTodayWord() {
    try {
      const result = (await axios.get(`${API_ENDPOINT.API_ENDPOINT}/todayword`))
        .data
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export default UserApi

/* eslint-enable */
