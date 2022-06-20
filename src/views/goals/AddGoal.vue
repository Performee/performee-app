<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">
    <label>Description:</label>
    <textarea required v-model="description"></textarea>
    <label>Resources:</label>
    <textarea required v-model="resources"></textarea>
    <label>Acceptance criteria:</label>
    <textarea required v-model="acceptanceCriteria"></textarea>
    <label>Comments:</label>
    <textarea required v-model="comments"></textarea>
    <button>Add Goal</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      resources: '',
      acceptanceCriteria: '',
      comments: ''
    }
  },
  methods: {
    handleSubmit() {
      let goal = {
        title: this.title,
        status: false,
        description: this.description,
        resources: this.resources,
        acceptanceCriteria: this.acceptanceCriteria,
        comments: this.comments
      }
      fetch('http://localhost:3000/goals', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(goal)
      })
          .then(() => {
            this.$router.push('/goals')
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>