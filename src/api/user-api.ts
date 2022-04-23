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
  }
}

export default UserApi

/* eslint-enable */
