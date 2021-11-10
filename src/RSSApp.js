import React, { useRef, useState, useEffect } from 'react'
import { AddFeed } from './components/AddFeed';
import { CardGrid } from './components/CardGrid';
//let last_indx = 7;
export const RSSApp = () => {

    //check local storage for lastest feeds
    const url_feeds_saved = JSON.stringify(localStorage.getItem('feeds_saved'));
    const myArr = JSON.parse(url_feeds_saved);
    const initial_value = myArr ? myArr.split(',') : [];
    const [feeds, setFeeds] = useState(initial_value);
    console.log(initial_value.lenght);
    //const [feeds, setFeeds] = useState(initial_value);
    //const mainRef = useRef(null);
    //let maxScroll = mainRef.current?.scrollHeight - mainRef.current?.clientHeight;    
    //const handleScroll = () => {
        // console.log('HandleScrol'+  maxScroll);
        // if( mainRef.current?.scrollTop >= maxScroll - 52 ) {
        //     console.log('Fin!');
        //     console.log("lenght", initial_value.length , "las indx", last_indx);
        //     if(initial_value.length >= last_indx){
        //         console.log("SCROLL", last_indx, last_indx + 3);
        //         console.log(initial_value.slice(last_indx, last_indx + 3));
        //         setFeeds([...initial_value, initial_value.slice(last_indx, last_indx + 3)]);
        //         last_indx = last_indx + 4;
        //     }
        // }
   // }
    // useEffect(() => {
    //     maxScroll = mainRef.current?.scrollHeight - mainRef.current?.clientHeight;
    // }, [])
    return (
        // <div ref={mainRef} onScroll={handleScroll} style={{ overflowY: 'scroll', height: '90vh' }}>
        <div>
            <h2>RSS READER</h2>
            <AddFeed setFeeds={setFeeds} />
            <hr />
            <div className="container">

                <div className="row" id="container-feeds" >
                    {
                        feeds.map(feed => (
                            <CardGrid
                                key={feed}
                                feed_url={feed}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
