<template>
    <div class="modal" tabindex="-1" role="dialog" style="display:block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ instructor ? 'Edit Instructor' : 'Add Instructor' }}</h5>
            <button type="button" class="close" @click="$emit('close')">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" class="form-control" v-model="form.first_name" required>
              </div>
              <div class="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" class="form-control" v-model="form.last_name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="form.email" required>
              </div>
              <div class="form-group">
                <label for="specialization">Specialization</label>
                <input type="text" class="form-control" v-model="form.specialization" required>
              </div>
              <button type="submit" class="btn btn-primary">{{ instructor ? 'Update' : 'Create' }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['instructor'],
    data() {
      return {
        form: {
          first_name: this.instructor ? this.instructor.first_name : '',
          last_name: this.instructor ? this.instructor.last_name : '',
          email: this.instructor ? this.instructor.email : '',
          specialization: this.instructor ? this.instructor.specialization : ''
        }
      };
    },
    methods: {
      submitForm() {
        this.$emit('save', { ...this.instructor, ...this.form });
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(250, 170, 190, 0.9); 
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
}

.modal-header {
  text-align: center;
  color: #ff6f61; 
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ff6f61;
  border-radius: 5px;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.submit-btn {
  background-color: rgba(247, 212, 109, 0.9); 
  color: #333;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.close-btn {
  background-color: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}
  </style>