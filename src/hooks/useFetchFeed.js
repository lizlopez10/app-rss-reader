import { useState, useEffect } from 'react'
import { getFeed } from '../helpers/getFeed';


export const useFetchFeed = ( feed_url ) => {
    
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {

        getFeed( feed_url )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
            .catch(
                error =>window.alert("Error: The URL is invalid")
                )

    }, [feed_url])




    return state; // { data:[], loading: true };


}


