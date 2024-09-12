import { connection as db } from '../config/index.js'

class Instructors {
    fetchInstructors(req, res) {
        try {
            const strQry = `
                select  instructor_id, first_name, last_name, email, specialization, bio, profile_url
                from instructors;
                `
            db.query(strQry, (err, results) => {
              if (err) throw new Error(err.message)
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
    
    fetchInstructor(req, res) {
      try {
          const instructorId = req.params.id;
          const strQry = `
              select instructor_id, first_name, last_name, email, specialization, bio, profile_url
              from instructors
              where instructor_id = ?;
          `;
          db.query(strQry, [instructorId], (err, results) => {
              if (err) {
                  console.error(err.message);
                  res.status(500).json({
                      status: 500,
                      msg: 'Internal server error'
                  });
              } else if (results.length === 0) {
                  res.status(404).json({
                      status: 404,
                      msg: 'Instructor not found'
                  });
              } else {
                  res.json({
                      status: res.statusCode,
                      result: results[0]
                  });
              }
          });
      } catch (e) {
          console.error(e.message);
          res.status(500).json({
              status: 500,
              msg: 'Internal server error'
          });
      }
  }
  //   fetchInstructor(req, res) {
  //     try {
  //         const instructorId = req.params.id;
  //         const strQry = `
  //             select instructor_id, first_name, last_name, email, specialization, bio, profile_url
  //             from instructors
  //             where instructor_id = ?;
  //         `;
  //         db.query(strQry, [instructorId], (err, results) => {
  //             if (err) throw new Error(err.message);
  //             if (results.length === 0) {
  //                 res.status(404).json({
  //                     status: 404,
  //                     msg: 'Instructor not found'
  //                 });
  //             } else {
  //                 res.json({
  //                     status: res.statusCode,
  //                     result: results[0]
  //                 });
  //             }
  //         });
  //     } catch (e) {
  //         res.status(500).json({
  //             status: 500,
  //             msg: e.message
  //         });
  //     }
  // }
    
    async registerInstructor(req, res) {
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

   async updateInstructor(req, res) {
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

    deleteInstructor(req, res) {
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
