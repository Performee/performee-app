<template>
  <div class="objective" :class="{complete: objective.status}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ objective.title }}</h3>
      <div class="icons">
        <router-link :to="{name: 'EditObjective', params: { id: objective.id}}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteObjective" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ objective.category }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['objective'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/objectives/' + this.objective.id
    }
  },
  methods: {
    deleteObjective() {
      fetch(this.uri, {method: 'DELETE'})
          .then(() => this.$emit('delete', this.objective.id))
          .catch(err => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: !this.objective.status})
      })
          .then(() => this.$emit('complete', this.objective.id))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.objective {
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

.objective.complete {
  border-left: 4px solid #00ce89;
}

.objective.complete .tick {
  color: #00ce89;
}
</style>