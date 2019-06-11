
function renderTweets(tweets) {
    result = tweets.map(element => {
        return createTweet(element)
    }).join("")
    return `
        <div class="text-center mt-5">
        ${result}
        </div>
    `
}

function createTweet(tweet) {
    return `<div class="tweet-holder">
        <div class="row header-row">
<div class="image"><img src="${tweet.user.profilePic}"></img></div><div class="info"><h3>${tweet.user.username}</h3><h4>${tweet.user.handle}</h4></div>
        </div>
        <div class="row">
            <h1>${tweet.text}</h1>
            </div>
        <div class="row">
            <table style="width:40%">
                <tr>
                    <td>${tweet.replies}<i class="fa fa-retweet"></i></td>
                    <td>${tweet.retweets}<i class="fa fa-retweet"></i></td> 
                    <td>${tweet.likes}<i class="fa fa-retweet"></i></td>
                </tr>
                </table>
            </div>
        </div>`
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}