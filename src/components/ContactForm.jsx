/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialVal = {
        name: "",
        email: "",
        number: "",
        city: "",
    };

    const [val, setVal] = useState(initialVal);

    useEffect(() => {
        // Empty string
        !props.currentId
            ? setVal({ ...initialVal })
            : setVal({ ...props.contacts[props.currentId] });
    }, [props.currentId, props.contacts]);

    function handleChange(e) {
        const { name, value } = e.target;
        setVal({ ...val, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addOrEdit(val);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input
                    className="form-control"
                    name="name"
                    value={val.name}
                    placeholder="Enter Name"
                    type="text"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="city"
                        value={val.city}
                        placeholder="Enter City"
                        type="text"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="number"
                        value={val.number}
                        placeholder="Enter Number"
                        type="text"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input
                    className="form-control"
                    name="email"
                    value={val.email}
                    placeholder="Enter Email"
                    type="email"
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="btn btn-outline-success btn-block">
                {props.currentId ? "Update" : "Submit"}
            </button>
        </form>
    );
};

export default ContactForm;
