import { ref, onMounted } from 'vue'
import rankingsData from './backend/rankings.js'
import Header from './components/Header.js'
import Table from './components/Table.js'

const App = {
  components: {
    Header,
    Table
  },
  setup() {
    const count = ref(30)
    const rankings = ref([])
    const week = ref('')
    const countries = ref([])
    const selectedCountry = ref('')
    const selectedTheme = ref('Simple')

    const fetchRankings = async () => {
      rankings.value = rankingsData['data']
      week.value = rankingsData['week']
      const countriesSet = new Set(rankingsData['data'].map(player => player.country))
      countries.value = Array.from(countriesSet).sort()
      countries.value.unshift('ALL')
      selectedCountry.value = countries.value[0]
    }

    const handleThemeChange = (newTheme) => {
      selectedTheme.value = newTheme
    }

    onMounted(async () => {
      fetchRankings()
    })

    return { count, rankings, week, countries, selectedCountry, selectedTheme, handleThemeChange }
  },
  computed: {
    filteredRankings() {
      return this.selectedCountry === 'ALL'
        ? this.rankings
        : this.rankings.filter(ranking => ranking.country === this.selectedCountry)
    }
  },
  template: `
    <Header :theme="selectedTheme" @update:theme="handleThemeChange" />
    <p>{{ selectedTheme }}</p>
    <h2>Week: {{ week }}</h2>
    <select v-model="selectedCountry" name="countries" id="countries">
      <option v-for="country in countries" :key="country" :value="country">
        {{ country }}
      </option>
    </select>
    <Table :theme="selectedTheme" :filteredRankings="filteredRankings" />
  `
}

export default App
