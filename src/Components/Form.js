import React from "react";

const Form = ({book, setBook}) => {
    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let {titulo, autor, edicion} = book

    const handleSubmit = () => {
        edicion = parseInt(edicion,10)
        if (titulo === '' || autor === '' || edicion <= 0) {
            alert('Campos Obligatorios')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(book)
        }

        fetch('', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setBook({
            titulo:'',
            autor:'',
            edicion: ''
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" id="author" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">Edition</label>
                <input value={edicion}  name="edicion" onChange={handleChange} type="number" id="edition" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;