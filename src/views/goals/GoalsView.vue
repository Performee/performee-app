<template>
  <div class="goals">
    <h1>Goals Page</h1>
    <GoalFilterNav @filter-change="current = $event" :current="current"/>
    <GoalNavbar/>
    <div v-if="goals.length">
      <div v-for="goal in filteredGoals" :key="goal.id">
        <SingleGoal :goal="goal" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>

import SingleGoal from "@/components/goals/SingleGoal.vue";
import GoalFilterNav from "@/components/goals/GoalFilterNav.vue";
import GoalNavbar from '@/components/goals/GoalNavbar.vue'

export default {
  name: 'GoalsView',
  components: {SingleGoal, GoalFilterNav, GoalNavbar},
  data() {
    return {
      goals: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/goals')
        .then(res => res.json())
        .then(data => this.goals = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.goals = this.goals.filter((goal) => {
        return goal.id !== id
      })
    },
    handleComplete(id) {
      let p = this.goals.find(goal => {
        return goal.id === id
      })
      p.status = !p.status
    }
  },
  computed: {
    filteredGoals() {
      if (this.current === 'completed') {
        return this.goals.filter(goal => goal.status)
      }
      if (this.current === 'ongoing') {
        return this.goals.filter(goal => !goal.status)
      }
      return this.goals
    }
  }
}
</script>
