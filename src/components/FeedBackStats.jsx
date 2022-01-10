function FeedBackStats({feedBack}) {
    let average = feedBack.reduce((acc, cur) => acc + cur.rating, 0) / feedBack.length;

    average = average.toFixed(1).replace(/[.,]0$/,"");

    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedBackStats
