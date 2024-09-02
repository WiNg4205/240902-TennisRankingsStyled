const Header = {
  props: {
    theme: {
      type: String,
      default: 'Simple'
    }
  },
  template: `
    <header :class="headerTheme">
      <h1>Men's Tennis Rankings ATP</h1>
      <select v-model="selectedTheme">
        <option value="Simple">Simple</option>
        <option value="Playful">Playful</option>
        <option value="Elegant">Elegant</option>
        <option value="Brutalist">Brutalist</option>
      </select>
    </header>
  `,
  data() {
    return {
      selectedTheme: this.theme
    }
  },
  computed: {
    headerTheme() {
      switch (this.selectedTheme) {
        case 'Playful':
          return 'bg-yellow-300 text-red-800 p-4 text-center'
        case 'Elegant':
          return 'bg-gray-800 text-white p-4 text-center'
        case 'Brutalist':
          return 'bg-gray-900 text-gray-300 p-4 text-center'
        case 'Simple':
        default:
          return 'bg-gray-200 text-gray-800 p-4 text-center'
      }
    }
  },
  watch: {
    selectedTheme(newTheme) {
      this.$emit('update:theme', newTheme)
    }
  }
}

export default Header