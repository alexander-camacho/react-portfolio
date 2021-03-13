import React from "react"


const Contact = () => {
    return (
        <div className="container">
            <form className="container-sm">
                <h1>Leave a message</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Leave a message!</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary disabled">Submit</button>
            </form>

            <p ><b>Email me at:</b> alsbrain@optonline.net</p>
        </div>
    )
}

export default Contact