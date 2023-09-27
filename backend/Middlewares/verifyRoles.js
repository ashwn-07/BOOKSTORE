const verifyRoles = (...allowedRoles)=>{
   
    return async (req, res, next)=>{
   
   if(!(req.roles)) return res.Sendstatus(401)

    const rolesArray = [...allowedRoles]
    const result = req.roles.map((role)=>rolesArray.includes(role)).find((val => val===true))
       
    if(!result) return res.Sendstatus(403)

    next();

}


}