<template>
  <div class="plans">
    <h1>Plans Page</h1>
    <PlanFilterNav @filter-change="current = $event" :current="current"/>
    <PlanNavbar/>
    <div v-if="plans.length">
      <div v-for="plan in filteredPlans" :key="plan.id">
        <SinglePlan :plan="plan" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>

import SinglePlan from "@/components/plans/SinglePlan.vue";
import PlanFilterNav from "@/components/plans/PlanFilterNav.vue";
import PlanNavbar from "@/components/plans/PlanNavbar";

export default {
  name: 'PlansView',
  components: {PlanNavbar, SinglePlan, PlanFilterNav},
  data() {
    return {
      plans: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/plans')
        .then(res => res.json())
        .then(data => this.plans = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.plans = this.plans.filter((plan) => {
        return plan.id !== id
      })
    },
    handleComplete(id) {
      let plan = this.plans.find(plan => {
        return plan.id === id
      })
      plan.status = !plan.status
    }
  },
  computed: {
    filteredPlans() {
      if (this.current === 'completed') {
        return this.plans.filter(plan => plan.status)
      }
      if (this.current === 'ongoing') {
        return this.plans.filter(plan => !plan.status)
      }
      return this.plans
    }
  }
}
</script>
