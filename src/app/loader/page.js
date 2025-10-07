async function userList() {
    let data = await fetch("http://dummyjson.com/users")
    data = await data.json();
    return data.users

}


export default async function loader() {

    let users = await userList()
    console.log(users)
    return (
        <div>
            <h1>new user list</h1>
            {
                users.map((item) =>
                    <div>
                        <h2>user name:{item.firstName}</h2>
                    </div>
                )
            }
        </div>
    )
}