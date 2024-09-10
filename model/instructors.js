import { connection as db } from '../config/index.js'

class Instructors {
    fetchinstructors(req, res) {
        try {
            const strQry = `
                select  instructor_id, first_name, last_name, email, specialization, bio, profile_url, pwd
                from instructors;
                `
            db.query(strQry, (err, results) => {
              if (err) throw new Error(`There was an issue when retrieiving all instructors`)
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
    
    fetchinstructor(req, res) {
        try{
            const strQry = `
            select  instructor_id, first_name, last_name, email, specialization, bio, profile_url, pwd
            from instructors where user_id = ${req.params.id};
            `
            db.query(strQry, (err, result) => {
              if (err) throw new Error(err.message)
              res.json({
            status: res.statusCode,
            result: result[0]
              })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }
    
    async registerinstructor(req, res) {
        try {
            let data = req.body
              data.pwd = await hash(data.pwd, 12)

            let user = {
            email: data.email,
            pwd: data.pwd
            } 
            
            let strQry = `
            insert into  instructors
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

   async updateinstructor(req, res) {
        try {
            let data = req.body
            if (data.pwd) {
              data.pwd = await hash(data.pwd, 12)
            }
            const strQry = `
            update instructors
            set ?
            where instructor_id = ${req.params.id}
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

    deleteinstructor(req, res) {
        try {
            const strQry = `
            delete from instructors 
            where instructor_id = ${req.params.id}
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
            select  instructor_id, first_name, last_name, email, specialization, bio, profile_url, pwd
            from instructors
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
    Instructors
}
