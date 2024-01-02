const videocardcontainer = document.querySelector(".video-wrapper");

let api_key = "AIzaSyAIN8qceMfdmGjtZo6u846w942rGrzMKnU"
let video_http = "https://www.googleapis.com/youtube/v3/videos"
let channel_http = "https://www.googleapis.com/youtube/v3/channels?"

fetch(
  video_http + new URLSearchParams({
    part: "snippet,contentDetails,statistics,player",
    chart: "mostPopular",
    maxResult: 20,
    regionCode: "IN",
    key: api_key,
  })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      getChannelIcon(item);

    });
  })
  .catch((err) => console.log(err));
const getChannelIcon = (video_data) => {
  fetch(
    channel_http + new URLSearchParams({
      key: api_key,
      part: "snippet",
      id: video_data.snippet.channelId,
    })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelthumbnail = data.item[0].snippet.thumbnail.default.url;
      makevideocard(video_data);
    });

};

const makevideocard = (data) => {
  const videocard = document.createElement("div")
  videocard.classList.add("video");
  videocard.innerHTML = ` 
  <div class="video-content">
    <img src="${data.snippet.thumbnail.high.url}" alt="not found" class="thumbnail">
  </div>
  <div class="video-details">
    <div class="channel-logo">
      <img src="${data.channelthumbnail}" alt="not found" class="channel-icon">
    </div>
    <div class="detail">
      <h3 class="title">${data.snippet.title}</h3>
      <div class="channel-name">${data.snippet.channelTitle}</div>
    </div>
  </div>
`;
  videocardcontainer.appendChild(videocard)

}