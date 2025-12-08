
import { api } from "./Api";


export const getdata = async() => {
    try {
    const res =await  api.get("/")
    console.log(res.data);
    
    } catch (error) {
        console.log(error);
    }
}


export const postdata = async (data) =>{
    try {
        const res1= await api.post("/",data)
    } catch (error) {
        console.log(error);
        
    }
}