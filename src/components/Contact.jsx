import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDB from "../firebase";

const Contact = () => {
    const [contacts, setContacts] = useState({});
    const [currentId, setCurrentId] = useState("");
    useEffect(
        () =>
            firebaseDB.child("contacts").on("value", (snapshot) => {
                const contactObj = snapshot.val();
                contactObj ? setContacts({ ...contactObj }) : setContacts({});
            }),
        []
    );

    const addOrEdit = (obj) => {
        if (!currentId) {
            firebaseDB
                .child("contacts")
                .push(obj, (err) =>
                    err ? console.error(err) : setCurrentId("")
                );
        } else {
            firebaseDB
                .child(`contacts/${currentId}`)
                .set(obj, (err) =>
                    err ? console.error(err) : setCurrentId("")
                );
        }
    };

    function handleDelete(id) {
        if (window.confirm("Do you want to delete this contact?")) {
            firebaseDB
                .child(`contacts/${id}`)
                .remove((err) => (err ? console.error(err) : setCurrentId("")));
        }
    }
    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Logger</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...{ addOrEdit, currentId, contacts }} />
                </div>
                <div className="col-md-7">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark text-center">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">City</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {Object.keys(contacts).map((id) => (
                                <tr key={id}>
                                    <td>{contacts[id].name}</td>
                                    <td>{contacts[id].email}</td>
                                    <td>{contacts[id].city}</td>
                                    <td>{contacts[id].number}</td>
                                    <td>
                                        <button
                                            className="btn text-primary"
                                            onClick={() => setCurrentId(id)}
                                            title="Edit Contact"
                                        >
                                            <i className="fas fa-pen text-primary"></i>
                                        </button>
                                        <button
                                            className="btn text-danger"
                                            onClick={() => handleDelete(id)}
                                            title="Delete Contact"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Contact;
