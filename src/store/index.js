import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import { createStore } from 'vuex'
import router from '@/router'
import { toast } from 'vue3-toastify'

const apiURL = 'hhttps://glow-fit-studio.onrender.com/'
export default createStore({
  state: {
    users: null,
    user: null,
    instructors: [],
    instructor: null,
    recentInstructors: null,
    registrationStatus:null
  },
  getters: {
      user: state => state.user
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setInstructors(state, value) { 
      state.instructors = value;
    },
    setInstructor(state, value) {
      state.instructor = value
    },
    setRecentInstructors(state, value) {
      state.recentInstructors = value
    },
    setLoginStatus(state, status) {
      state.loginStatus = status;
    },
    setRegistrationStatus(state, status) {
      state.registrationStatus = status;
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // Instructors
    async fetchInstructors(context) {
      try {
        const { results } = await (await axios.get(`${apiURL}instructors`)).data
        if (results) {
          context.commit('setInstructors', results)
        } else {
          toast.error('No instructors found', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    // async fetchInstructors(context) {
    //   try {
    //     const { results } = await (await axios.get(`${apiURL}/instructors`)).data
    //     if (results) {
    //       context.commit('setInstructors', results)
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },

    // async fetchInstructor({ commit }, id) {
    //   try {
    //     const response = await axios.get(`${apiURL}/instructor/${id}`)
    //     const data = response.data
    //     if (data.result) {
    //       commit('setInstructor', data.result)
    //     } else {
    //       toast.error('Instructor not found', {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (error) {
    //     toast.error(`Error fetching instructor: ${error.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // },
    async fetchInstructor(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}instructors/${id}`)).data
        if (result) {
          context.commit('setInstructor', result)
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addInstructor(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}instructors/addInstructors`, payload)).data
        if (msg) {
          context.dispatch('fetchInstructors')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateInstructor(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}update/${payload.instructor_id}`, payload)).data
        if (msg) {
          context.dispatch('fetchInstructors')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteInstructor(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}delete/${id}`)).data
        if (msg) {
          context.dispatch('fetchInstructors')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async login(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}users/login`, payload)).data;
        if (token) {
          localStorage.setItem('authToken', token);
          context.commit('setLoginStatus', 'success');
          context.dispatch('fetchUserData');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
          router.push({ name: 'home' }); 
        } else {
          context.commit('setLoginStatus', 'error');
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        context.commit('setLoginStatus', 'error');
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    }
   
  },
  modules: {
  }
})