<template>
  <div class="goal" :class="{complete: goal.status}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ goal.title }}</h3>
      <div class="icons">
        <router-link :to="{name: 'EditGoal', params: { id: goal.id}}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteGoal" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ goal.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goal'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/goals/' + this.goal.id
    }
  },
  methods: {
    deleteGoal() {
      fetch(this.uri, {method: 'DELETE'})
          .then(() => this.$emit('delete', this.goal.id))
          .catch(err => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: !this.goal.status})
      })
          .then(() => this.$emit('complete', this.goal.id))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.goal {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.goal.complete {
  border-left: 4px solid #00ce89;
}

.goal.complete .tick {
  color: #00ce89;
}
</style>