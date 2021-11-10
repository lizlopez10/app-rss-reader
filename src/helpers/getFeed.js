
let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const getFeed = async( feed_url, test=false ) => {
    
    try {  
        const proxyUrl = test ? '' : CORS_PROXY;
        let feed = await parser.parseURL(proxyUrl + feed_url);
        const {link : link_feed, image: image_feed, title : title_feed} = feed;
        const items = feed.items.slice(0,5).map( item => {
            return {
                content: item.content,
                title: item.title,
                link: item.link
            }
        });
        const feed_complete = {
            title : title_feed,
            main_link: link_feed,
            main_image: image_feed ? image_feed.url : null,
            items: items
        }    

        //SAVE LOCAL STORAGE
        if(feed_url){
            const url_feeds_saved = localStorage.getItem('feeds_saved');
            let text = url_feeds_saved;
            if(!text) {
                text = feed_url; 
            }       
            else  {        
                const array = url_feeds_saved.split(',');
                const elem  = array.find(x => x == feed_url);
                console.log("ELEMENTO", elem);
                if(!elem)
                {
                    text = `${text},${feed_url}`
                }else{
                    console.log("REPETIDO");
                }
            };     
            localStorage.setItem('feeds_saved', text);
        }
        return feed_complete;  
    } catch (error) {
          throw error;  
    } 
}