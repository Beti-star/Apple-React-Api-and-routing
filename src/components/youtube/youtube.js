import {useEffect,useState} from 'react';
import "./youtube.css"

function Youtube() {
    const [youTubeVideos, setYouTubeVideos]= useState([]);

    useEffect(() =>{
fetch(
 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAjVDQLqx8tPwr9y96tGAm3jWk9vhOdVUc'

)
 .then((response) => response.json())
      .then((data) => {
         setYouTubeVideos(data.items) ;
       
      });
  },[]);
    // console.log(youTubeVideos);
  return (
    
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>
            {youTubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel ="noreferrer">
                        <img src={singleVideo.snippet.thumbnails.high.url}alt="thumbnails" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

          
          </div>
        </div>
      </div>
    
  );
}

export default Youtube;
// AIzaSyAjVDQLqx8tPwr9y96tGAm3jWk9vhOdVUc apikey


// https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyAjVDQLqx8tPwr9y96tGAm3jWk9vhOdVUc


// id UCE_M8A5yxnLfW0KghEeajjw
// data    https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAjVDQLqx8tPwr9y96tGAm3jWk9vhOdVUc
