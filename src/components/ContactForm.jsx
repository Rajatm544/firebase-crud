import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialVal = {
        name: "",
        email: "",
        number: "",
        address: "",
    };

    const [val, setVal] = useState(initialVal);

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
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="email"
                        value={val.email}
                        placeholder="Enter email"
                        type="email"
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
            <div className="form-group">
                <textarea
                    className="form-control"
                    name="address"
                    value={val.address}
                    placeholder="Enter Address"
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="btn btn-outline-success btn-block">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
