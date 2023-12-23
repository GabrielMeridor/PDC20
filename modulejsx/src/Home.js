function MyButton(){
   return(
   <div>
        <button type="button" class="btn btn-success">Sign In</button>
    </div>
   )
}

function UserEntry(){
    return(
        <div>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            <br/>
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
        </div>
    )
}


export default function App(){
    return(
        <div>
            <h1>Sign In</h1>
            <hr></hr>
            <UserEntry/>
            <MyButton/>
        </div>
    )
}