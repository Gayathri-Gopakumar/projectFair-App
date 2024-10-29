import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

// register - called by auth 
export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login called by auth
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
  
}

// addProject API called by Add
export const addProjectAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-project`,reqBody,reqHeader)
}

// home projects
export const homeProjectsAPI=async ()=>{
    return await commonAPI("GET",`${SERVERURL}/home-projects`,"")
}

// allProjectsAPI called by projects
export const allProjectsAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-projects?search=${searchKey}`,"",reqHeader)
}

// userProjectsAPI called by view
export const userProjectsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)
}

// delete project API called by view
export const deleteProjectAPI=async(pId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/${pId}/remove-project`,{},reqHeader)
}

// editProjectAPI called by edit : PUT req to http://localhost:3000/pid/edit-project
export const editProjectAPI=async(pId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/${pId}/edit-project`,reqBody,reqHeader)
}

// editUserAPI called by profile component : PUT to http://localhost:3000/user/edit
export const editUserAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader)
}