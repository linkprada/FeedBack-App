import FeedBackItem from './FeedBackItem'   

function FeedBackList({feedBack}) {
    if (!feedBack || feedBack.lenght === 0) {
        return <div>No ratings</div>
    }

    var feedBackListItems = feedBack.map((item)=>(
        <FeedBackItem key={item.id} item={item}></FeedBackItem>
    ));

    return (
        <div className="feedback-list">
            {feedBackListItems}
        </div>
    )
}

export default FeedBackList