import { useSelector } from "react-redux";
import './style.css'

const DisplayComments = () => {

    const {comments} = useSelector(state => state.user)

    return (
        <div className='comment__container'>
            <div className='scroll_wrapper'>
                {comments.map((comment, index) => {
                    return (
                        <div key={index} className="comment_wrapper">
                            <p>{comment}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayComments;