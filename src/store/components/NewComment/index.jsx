import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCommentThunk } from "../../modules/user/thunks";
import "./style.css";

const NewComment = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(comment.length > 0){
            dispatch(addCommentThunk(comment))
            setComment("");
        }
    }
    return (
        <div className='comment_form__container'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Mensagem" onChange={e => setComment(e.target.value)} value={comment}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
        
    )
}

export default NewComment;