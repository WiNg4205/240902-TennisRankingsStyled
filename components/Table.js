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
    },
    tableRowTheme() {
      switch (this.theme) {
        case 'Playful':
          return ['bg-purple-50', '']
        case 'Elegant':
          return ['bg-gray-100', '']
        case 'Brutalist':
          return ['bg-teal-50', '']
        case 'Simple':
        default:
          return ['bg-gray-100', '']
      }
    }
  },
  template: `
    <table class="min-w-1/2 table-fixed">
      <thead>
        <tr :class="tableHeaderTheme">
          <th class="px-4 w-1/12">RANK</th>
          <th class="px-4 w-6/12">NAME</th>
          <th class="px-4 w-1/12">AGE</th>
          <th class="px-4 w-2/12 text-right">POINTS</th>
          <th class="px-4 w-2/12 text-right">COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ranking, index) in filteredRankings" :key="index" :class="tableRowTheme[index % 2]">
          <td class="text-left">{{ ranking.rank }}</td>
          <td class="pl-8">{{ ranking.name }}</td>
          <td class="text-center">{{ ranking.age }}</td>
          <td class="text-right pr-4">{{ ranking.points }}</td>
          <td class="text-center">{{ ranking.country }}</td>
        </tr>
      </tbody>
    </table>
  `
}
  
export default Table
