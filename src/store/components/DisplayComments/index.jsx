import { useSelector } from "react-redux";

const DisplayComments = () => {

    const {comments} = useSelector(state => state.user)

    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <p>{comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayComments;