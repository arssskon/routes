// export function FormCreateSet() {
//     return (
//         <form>
//             <label>
//                 <input type="text" name="name" /> //нэйм👀
//             </label>
//             <label>
//                 Описание:
//                     <textarea name="discription"/>
//             </label>
//             <input tupe="submit" value="Создать сет" />
//         </form> 
//     );
// }
import './FormCreateCard'
import './FormCreateSet.css'
import { Link } from 'react-router-dom'

export function FormCreateSet() {

    const onSubmit = async (data) => {
        data.preventDefault()
        console.log(data)
        fetch("http://localhost:5000/api/set/create", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (response) {
                console.log(response)
            })
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="label">
                Название набора:
            </label>
            <input type={"text"} name={"name"}/>
            <label className="label">
                Описание:
            </label>
            <textarea name={"description"}/>
            {/* <input type={"submit"} value={"Создать сет"}/> */}
            <Link className='btn__create btn' to="/admin/card">Cоздать сет</Link>
        </form>
    );
}