<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">

      <li class="nav-item">
        <sidenav-collapse
          url="#"
          v-bind:collapse="false"
          collapseRef="tables"
          navText="Tables"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">table_view</i>
          </template>
        </sidenav-collapse>
      </li>

    </ul>

  </div>
</template>
<script>
import SidenavCollapse from "./SidenavItem.vue";

export default {
  name: "SidenavList",
  components: {
    SidenavCollapse
  }
};
</script>
