import axios from "axios";


const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

const MemberService = {
    register: (member) => {
        //service.post("/member/create",member)

    },
    update: () => {},
    rec: () => {},
    test: () => {
        return service.get("member/get-test")
    }
}
export default MemberService