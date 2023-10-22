import './FormCreateCard.css'
import { Link } from 'react-router-dom'

export function FormCreateCard(){
    return (
        <form className="form" >
            <label>
                Передняя сторона карточки:
                <input type={"text"} name={"fronttext"} />
            </label>
            <label>
                Задняя сторона карточки:
                <input type={"text"} name={"backtext"} />
            </label>
            <Link className='btn__create__card btn' to="/">Cоздать карточку</Link>
        </form>
    );
}