import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCommentThunk } from "../../modules/user/thunks";

const NewComment = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCommentThunk(comment))
        setComment("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setComment(e.target.value)} value={comment}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
        
    )
}

export default NewComment;