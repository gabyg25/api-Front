import React from "react";

const BookList = ({ book, setBook, books, setListUpdated }) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true)
    }

    let { titulo, autor, edicion } = book
    const handleUpdate = id => {
        edicion = parseInt(edicion, 10)
        if (titulo === '' || autor === '' || edicion <= 0) {
            alert('Campos Obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }
        fetch('' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })

        setListUpdated(true)
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Edition</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.titulo}</td>
                        <td>{book.autor}</td>
                        <td>{book.edicion}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(book.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookList;