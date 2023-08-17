<template>
  <system-nav-bar/>
  <logo-nav-bar/>
  <router-view/>
</template>

<script>
import SystemNavBar from "@/components/SystemNavBar.vue";
import LogoNavBar from "@/components/LogoNavBar.vue";

import {defineComponent} from "vue";

export default defineComponent({
  components: {LogoNavBar, SystemNavBar}
})


</script>
<style>

</style>
