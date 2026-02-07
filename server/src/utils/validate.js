import validator from 'validator'



export const validate = (data)=>{

   try {

      if(!data)
         throw new Error('Data not present')

      const {email, password} = data

      if(!validator.isEmail(email))
         throw new Error('Invalid Email')

      if(!validator.isStrongPassword(password))
         throw new Error('Weak password')
      
      return {success : true}
        
   } catch (error) {
        
      return {success: false, message: error.message}
   }

}

