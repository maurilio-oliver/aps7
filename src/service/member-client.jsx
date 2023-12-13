import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

const MemberService = {
    createNewMember : (member) => {
        service.post("/member/create-new", member).then(response => {
            console.log(response.data)
        })

    }
}
export default MemberService
