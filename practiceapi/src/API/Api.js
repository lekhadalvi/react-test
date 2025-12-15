import { url } from "./URL";

export const getdata=async()=>{
    try {
        const res=url.get("/")
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const postdata=async (data)=>{
    try {
        const res=url.post("/",data);
        console.log(res);
        
    } catch (error) {
        console.log(error);      
    }
}

export const updatedata= async (data)=>{
    try {
        const res=url.patch("/",data)
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
}

export const deletedata=()=>{
    try {
        const res=url.delete("/");
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
}