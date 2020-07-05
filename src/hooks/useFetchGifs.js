import { useState, useEffect } from "react"
import getGifs from "../helpers/getGifs"

export default (cat) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(cat)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [cat])

    return state

}
