const Table = {
  props: {
    theme: {
      type: String,
      default: 'Simple'
    },
    filteredRankings: {
      type: Array,
    }
  },
  computed: {
    tableHeaderTheme() {
      switch (this.theme) {
        case 'Playful':
          return 'text-purple-600'
        case 'Elegant':
          return 'text-black'
        case 'Brutalist':
          return 'text-teal-400'
        case 'Simple':
        default:
          return 'text-gray-800'
      }
    }
  },
  template: `
    <table class="w-2/5">
      <thead>
        <tr :class="tableHeaderTheme">
          <th class="px-4">RANK</th>
          <th class="px-4">NAME</th>
          <th class="px-4">AGE</th>
          <th class="px-4">POINTS</th>
          <th class="px-4">COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ranking, index) in filteredRankings" :key="index" :class="{ 'bg-gray-100': index % 2 === 1 }">
          <td class="text-left pl-4">{{ ranking.rank }}</td>
          <td class="pl-8">{{ ranking.name }}</td>
          <td class="text-right pr-5">{{ ranking.age }}</td>
          <td class="text-right pr-5">{{ ranking.points }}</td>
          <td class="text-center">{{ ranking.country }}</td>
        </tr>
      </tbody>
    </table>
  `
}
  
export default Table
