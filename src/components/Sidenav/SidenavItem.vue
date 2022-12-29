<template>
  <router-link
    :to="`#${collapseRef}`"
    class="nav-link bg-gradient-success"
    :class="getRoute() === collapseRef ? `active bg-gradient-sucess` : ''"
    v-bind="$attrs"
  >
    <div
      class="text-center d-flex align-items-center justify-content-center me-2"
    >
      <slot name="icon"></slot>
    </div>
    <span class="nav-link-text ms-1">{{
      navText
    }}</span>
  </router-link>
</template>
<script>

export default {
  name: "SidenavCollapse",
  props: {
    collapseRef: {
      type: String,
      required: true
    },
    navText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
