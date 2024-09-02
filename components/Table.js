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
    <table>
      <thead>
        <tr>
          <th :class="tableHeaderTheme">RANK</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>POINTS</th>
          <th>COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ranking, index) in filteredRankings" :key="index">
          <td>{{ ranking.rank }}</td>
          <td>{{ ranking.name }}</td>
          <td>{{ ranking.age }}</td>
          <td>{{ ranking.points }}</td>
          <td>{{ ranking.country }}</td>
        </tr>
      </tbody>
    </table>
  `  
}
  
export default Table
