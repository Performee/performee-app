<template>
  <div class="objectives">
    <h1>Objectives Page</h1>
    <ObjectiveFilterNav @filter-change="current = $event" :current="current"/>
    <ObjectiveNavbar/>
    <div v-if="objectives.length">
      <div v-for="objective in filteredObjectives" :key="objective.id">
        <SingleObjective :objective="objective" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>

import SingleObjective from "@/components/objectives/SingleObjective.vue";
import ObjectiveFilterNav from "@/components/objectives/ObjectiveFilterNav.vue";
import ObjectiveNavbar from "@/components/objectives/ObjectiveNavbar.vue";

export default {
  name: 'ObjectivesView',
  components: {ObjectiveNavbar, SingleObjective, ObjectiveFilterNav},
  data() {
    return {
      objectives: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/objectives')
        .then(res => res.json())
        .then(data => this.objectives = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.objectives = this.objectives.filter((objective) => {
        return objective.id !== id
      })
    },
    handleComplete(id) {
      let objective = this.objectives.find(objective => {
        return objective.id === id
      })
      objective.status = !objective.status
    }
  },
  computed: {
    filteredObjectives() {
      if (this.current === 'completed') {
        return this.objectives.filter(objective => objective.status)
      }
      if (this.current === 'ongoing') {
        return this.objectives.filter(objective => !objective.status)
      }
      return this.objectives
    }
  }
}
</script>
