import DefaultTheme from 'vitepress/theme'
import AppTable from '../components/AppTable.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(AppTable.name, AppTable)
  }
}