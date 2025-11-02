import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const BASE_URL=import.meta.env.VITE_API_BASE_URL;

if (!API_KEY) {
    console.warn('Missing Strapi API Key');
}
if (!BASE_URL) {
    console.warn('Missing API Base URL');
}

const axiosClient=axios.create({
    baseURL: BASE_URL ? BASE_URL + "/api/" : "/api/",
    headers:{
        'Content-Type':'application/json',
        ...(API_KEY && {'Authorization':`Bearer ${API_KEY}`})
    }
})


const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}