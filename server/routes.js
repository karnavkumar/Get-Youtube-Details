
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('A P I K E Y');
fs = require('fs');
module.exports = app => {
	let videoIds = [{ "videoId": "Yx3WO6obuu0" },
	{ "videoId": "c4rkOF5gDHo" }]

	//  GETTING VIDEO DETAILS BY ITS ID 

	setTimeout(async () => {
		videoIds.forEach(element => {
			let link = 'https://www.youtube.com/watch?v=' + element.videoId;
			console.log(link)
			youtube.getVideo(link).then(video => {
				fs.appendFile('sample.js', JSON.stringify({ title: video.title, link }));
				console.log(`The video's title is ${video.title}`);
			})
				.catch(console.log);
		});

	}, 50000);

	//  GETTING YOUR CHANNELS ALL VIDEO's DETAILS

	setTimeout(() => {
		var ypi = require('youtube-channel-videos');
		let APIKEY = 'A P I K E Y';
		ypi.channelVideos(APIKEY, "", function (channelItems) {
			fs.writeFileSync('youTubeData.json', JSON.stringify(channelItems));
		});
	}, 50000);
};
