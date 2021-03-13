import React from "react"


const Contact = () => {
    return (
        <div>
            <form class="container-sm">
                <h1>Leave a message</h1>
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Leave a message!</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a message"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact