import axios from "axios"
import { useState } from "react"
import getRandomNumber from "../utils/getRandomNumber"

const useFech = (url) => {
    
    const numberRandom = getRandomNumber(126)
    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () =>{
        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
    }

    return [ infoApi, getApi, hasError ]

}

export default useFech