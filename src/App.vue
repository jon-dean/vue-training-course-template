<template>
	<v-app id="app">
		<main>
			<v-container fluid>
        <router-view/>
			</v-container>
		</main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ currentYear }} All Rights Reserved.</span>
    </v-footer>
	</v-app>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
