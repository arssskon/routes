// import './FormCreateCard'
// import './FormCreateSet.css'
// import { Link } from 'react-router-dom'
// import { React } from "react"
// import { useState } from 'react-hook-form'

export function FormCreateSet() {

    // const [name, setName] = React.useState('');

    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }

    // const onSubmit = async (data) => {
    //     data.preventDefault()
    //     console.log(data)
    //     fetch("http://localhost:5000/api/set/create", {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //         })
    //         .catch(function (response) {
    //             console.log(response)
    //         })
    // }
//     return (
//         <form className="form" onSubmit={onSubmit}>
//             <label className="label">
//                 Название набора:
//             </label>
//             <input type={"text"} name={"name"} id={"name"} value={name} onChange={handleNameChange}/>
//             <label className="label">
//                 Описание:
//             </label>
//             <textarea name={"description"}/>
//             {/* <input type={"submit"} value={"Создать сет"}/> */}
//             <Link className='btn__create btn' to="/admin/card">Cоздать сет</Link>
//         </form>,
//         <form onSubmit={handleSubmit}>
//             function handleSubmit(e) {
//                 e.preventDefault();
//                 console.log(name)
//             }
//         </form>

//     );
// }

const [name, setName] = React.useState(' ');
function handleNameChange(e) {
    setName(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
}

return (
    <form onSubmit={handleSubmit}>
        <div className="form__item">
            <label htmlForm='name'>
                    Название набора:
            </label>
            <input 
            type="text" 
            name="name" 
            id='name' 
            value={name} 
            onChange={handleNameChange}
            />
        </div>

        <div className="form__item">
                <label htmlForm='discription'>
                    Описание:
                </label>
            <textarea name="discription" id="discription" />
        </div>

        <div className="form__item">
            <input type="submit" value="создать сет" />
        </div>
    </form>
);

}