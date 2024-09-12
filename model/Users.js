import { connection as db } from "../config/index.js"  
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js";

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
                select user_id, first_name, last_name, role, email, phone_numb, pwd, profile_url
                from users;
                `
            db.query(strQry, (err, results) => {
              if (err) throw new Error (err.message);
              res.json({
                status: res.statusCode,
                results 
              })
            })
          } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
          }
    }
    
    fetchUser(req, res) {
        try{
            const strQry = `
            select user_id, first_name, last_name, role, email, phone_numb, pwd, profile_url
            from users where user_id = ?;
            `
            db.query(strQry, [req.params.id], (err, result) => {
              if (err) throw new Error(err.message);
              res.json({
                status: res.statusCode,
                result: result[0],
              })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }
    
    async registerUser(req, res) {
        try {
            let data = req.body
              data.pwd = await hash(data.pwd, 12)

            let user = {
            email: data.email,
            pwd: data.pwd
            } 
            
            let strQry = `
            insert into  users
            set ?;
            `
            db.query(strQry, [data], (err) => {
            if(err) {
                res.json({
                status: res.statusCode,
                msg: 'This email is already in use.'
            })
          } else {
            const token = createToken(user)
            res.json({
              token,
              msg: 'You are now registered'
            })
          }
         })   
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

   async updateUser(req, res) {
        try {
            let data = req.body
            if (data.pwd) {
              data.pwd = await hash(data.pwd, 12)
            }
            const strQry = `
            update users
            set ?
            where user_id = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
              if (err) throw new Error('Unable to update user')
                res.json({
                  status: res.statusCode,
                  msg: 'User details updated successfully'
                })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

    deleteUser(req, res) {
        try {
            const strQry = `
            delete from users 
            where user_id = ${req.params.id}
            `
            db.query(strQry, (err) => {
              if(err) throw new Error('There is an issue trying to Delete User.')
                res.json({
                  status: res.statusCode,
                  msg: 'User\'s information successfully deleted. '
                })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

    login(req, res) {
        try {
            const {emailAdd, pwd} = req.body
            const strQry = `
            select user_id, first_name, last_name, role, email, phone_numb, pwd, profile_url
            from users
            where email = '${email}'                  
            `
            db.query(strQry, async (err, result) => {             
              if(err) throw new Error(err)
              if(!result?.length) {
                res.json(
                  {
                    status: 401,
                    msg: 'Invalid email. Please provide a valid email or register.'
                  }
                )
              } else {
                const isValidPass = await compare 
                (pwd, result[0].pwd)
                if (isValidPass) {
                  const token = createToken({
                    email, pwd
                  })
                  res.json({
                      status: res.statusCode,
                      msg: 'Login Successful.',
                    token,
                    result: result[0]
                  })
                } else {
                  res.json({
                    status: 401,
                    msg: 'Invalid Password. Please input correct password or register.'
                  })
                }
              }
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }
}

export {
    Users
}
