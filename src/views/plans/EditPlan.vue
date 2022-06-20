<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">
    <label>Username:</label>
    <input type="text" required v-model="userName">
    <label>Start date:</label>
    <input type="date" required v-model="startDate">
    <label>End date:</label>
    <input type="date" required v-model="endDate">
    <label>Comments:</label>
    <textarea required v-model="comments"></textarea>
    <label>Objectives:</label>
    <textarea required v-model="objectives"></textarea>
    <button>Update Plan</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      userName: '',
      startDate: '',
      endDate: '',
      comments: '',
      objectives: '',
      uri: 'http://localhost:3000/plans/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
        .then(res => res.json())
        .then(data => {
          this.title = data.title
          this.userName = data.userName
          this.startDate = data.startDate
          this.endDate = data.endDate
          this.comments = data.comments
          this.objectives = data.objectives
        })
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: this.title,
          userName: this.userName,
          startDate: this.startDate,
          endDate: this.endDate,
          comments: this.comments,
          objectives: this.objectives
        })
      })
          .then(() => {
            this.$router.push('/plans')
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