import FeedBackItem from './FeedBackItem'   

function FeedBackList({feedBack, handleDelete}) {
    if (!feedBack || feedBack.length === 0) {
        return <div>No ratings</div>
    }

    var feedBackListItems = feedBack.map((item)=>(
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}></FeedBackItem>
    ));

    return (
        <div className="feedback-list">
            {feedBackListItems}
        </div>
    )
}

export default FeedBackList