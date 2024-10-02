import { createContext, useState } from "react"
let race: "black" | "white"
const initialValue = {
    setmatricNumber: () => null,
    setphotoUrl: () => null,
    settoken: () => null,
    setuserId: () => null,
    setusername: () => null,
    userId: '',
    matricNumber: '',
    photoUrl: '',
    token: '',
    username: '',
    // race="black"

}
export const userDetailContext = createContext<data>(initialValue)
type data = {
    userId: string,
    matricNumber: string,
    photoUrl: string,
    token: string,
    username: string,
    setmatricNumber: (data: string) => void,
    setphotoUrl: (data: string) => void,
    settoken: (data: string) => void,
    setuserId: (data: string) => void,
    setusername: (data: string) => void,
    //  race: "black" | "white"
}



interface Prop { children: React.ReactNode }
const UserContext = ({ children }: Prop) => {
    const [userId, setuserId] = useState<string>('')
    const [matricNumber, setmatricNumber] = useState<string>('')
    const [photoUrl, setphotoUrl] = useState<string>('')
    const [token, settoken] = useState<string>('')
    const [username, setusername] = useState<string>('')

    return (
        <div>
            <userDetailContext.Provider value={{ userId, matricNumber, photoUrl, token, username, setmatricNumber, setphotoUrl, settoken, setuserId, setusername }}>
                {children}
            </userDetailContext.Provider>
        </div>
    )
}
export default UserContext