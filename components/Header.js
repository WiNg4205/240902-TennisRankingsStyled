const Header = {
  props: {
    theme: {
      type: String,
      default: 'Simple'
    }
  },
  template: `
    <header :class="headerTheme">
      <h1 class="text-lg font-bold">Men's Tennis Rankings ATP</h1>
      <select class="text-black w-28 font-semibold" v-model="selectedTheme">
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
          return 'bg-violet-600 text-white p-4 text-center font-pally'
        case 'Elegant':
          return 'bg-gray-800 text-white font-serif p-4 text-center font-source-serif-pro'
        case 'Brutalist':
          return 'bg-gray-900 text-gray-300 p-4 text-center font-ibm-plex-mono'
        case 'Simple':
        default:
          return 'bg-gray-900 text-white p-4 text-center font-inter'
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