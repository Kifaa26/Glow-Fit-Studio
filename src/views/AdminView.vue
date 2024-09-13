<template>
    <div class="admin-page">
      <h1 class="display-4 text-center">Admin</h1>
  
      <section class="management-section">
        <h2 class="display-5 text-center">Users</h2>
        <button class="btn btn-success mb-3" @click="openUserForm">Add User</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <th scope="row">{{ user._id }}</th>
              <td>{{ user.first-name }}</td>
              <td>{{ user.last-name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button class="btn btn-primary" @click="editUser(user)">Edit</button>
                <button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section class="management-section">
        <h2 class="display-5 text-center">Instructors</h2>
        <button class="btn btn-success mb-3" @click="openInstructorForm">Add Instructor</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Specialization</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="instructor in instructors" :key="instructor._id">
              <th scope="row">{{ instructor._id }}</th>
              <td>{{ instructor.first_name }}</td>
              <td>{{ instructor.last_name }}</td>
              <td>{{ instructor.email }}</td>
              <td>{{ instructor.specialization }}</td>
              <td>
                <button class="btn btn-primary" @click="editInstructor(instructor)">Edit</button>
                <button class="btn btn-danger" @click="deleteInstructor(instructor._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <UserFormModal v-if="showUserForm" @close="closeUserForm" @save="saveUser" :user="selectedUser"/>
      <InstructorFormModal v-if="showInstructorForm" @close="closeInstructorForm" @save="saveInstructor" :instructor="selectedInstructor"/>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  import UserFormModal from '@/components/UserFormModal.vue'
  import InstructorFormModal from '@/components/InstructorFormModal.vue'
  
  export default {
    components: { UserFormModal, InstructorFormModal },
    data() {
      return {
        showUserForm: false,
        showInstructorForm: false,
        selectedUser: null,
        selectedInstructor: null,
      }
    },
    computed: {
      ...mapState(['users', 'instructors']),
    },
    methods: {
      ...mapActions(['fetchUsers', 'fetchInstructors', 'deleteUser', 'deleteInstructor']),
      
      openUserForm(user = null) {
        this.selectedUser = user
        this.showUserForm = true
      },
      closeUserForm() {
        this.showUserForm = false
        this.selectedUser = null
      },
      saveUser(user) {
        if (user._id) {
          this.$store.dispatch('updateUser', user)
        } else {
          this.$store.dispatch('register', user)
        }
        this.closeUserForm()
      },
  
      openInstructorForm(instructor = null) {
        this.selectedInstructor = instructor
        this.showInstructorForm = true
      },
      closeInstructorForm() {
        this.showInstructorForm = false
        this.selectedInstructor = null
      },
      saveInstructor(instructor) {
        if (instructor._id) {
          this.$store.dispatch('updateInstructor', instructor)
        } else {
          this.$store.dispatch('addInstructor', instructor)
        }
        this.closeInstructorForm()
      },
  
      editUser(user) {
        this.openUserForm(user)
      },
      editInstructor(instructor) {
        this.openInstructorForm(instructor)
      },
    },
    created() {
      this.fetchUsers()
      this.fetchInstructors()
    }
  }
  </script>

  <style scoped>
  .admin-page {
  background: linear-gradient(to right, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
  padding: 20px;
  min-height: 100vh;
}

.management-section {
  margin-bottom: 50px;
}

.table {
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.table th, .table td {
  text-align: center;
  vertical-align: middle;
}

.btn {
  font-size: 16px;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
}

.btn-success {
  background-color: rgba(247, 212, 109, 0.9); 
  color: #333;
}

.btn-primary {
  background-color: #ff6f61; 
  border: none;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
  color: white;
}

h1, h2 {
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

h1 {
    padding: 80px;
}
  </style>