export const errorHandler=(err,req,res,next)=>{

    const error=new Error();

    error.statuscode=statuscode;
    error.message=message;
    
    return error;
}