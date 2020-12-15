const connection = require("../../../../Config/Database/connection");
const md5 = require("md5");

module.exports = {

   async login(request, response) {

        const { email, password } = request.body;
        
       const Login = await connection("tb_parceiro").select('email', "password", 'id').where("password", md5(password)).andWhere('email', email).first();
       console.log(request.body);
       console.log('aqui' + Login);
        try {
                return response.status(200).json({
                    id: Login.id,
                    message: "Logged in User"
                });
        } catch (error) {
            console.log(error);
            return response.status(401).json("Login or Password Invalid");
        }
    }
}