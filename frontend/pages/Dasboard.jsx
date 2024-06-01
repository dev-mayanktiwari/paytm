import { useEffect, useState } from "react"
import  Appbar  from "../components/Appbar"
import Balance  from "../components/Balance"
import Users  from "../components/Users"
import axios from "axios"

const Dashboard = () => {

    const [balance, setBalance] = useState(0);
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("api/v1/account/balance", 
        {
            headers : {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setBalance(response.data.balance);
            setUser(response.data.username)
        }).catch(error => {
            console.log(error);
        }) 
    })    
    return <div>
        <Appbar user = {user.toUpperCase()}/>
        <div className="m-8">
            <Balance value={balance.toFixed(2)} />
            <Users />
        </div>
    </div>
}

export default Dashboard;