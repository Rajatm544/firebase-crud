import React from "react";
import ContactForm from "./ContactForm";
import firebaseDB from "../firebase";

const Contact = () => {
    const addOrEdit = (obj) => {
        firebaseDB
            .child("contacts")
            .push(obj, (err) => (err ? console.error(err) : console.log("")));
    };
    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Logger</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
                <div className="col-md-7">ALL THE CONTACTS</div>
            </div>
        </>
    );
};

export default Contact;
