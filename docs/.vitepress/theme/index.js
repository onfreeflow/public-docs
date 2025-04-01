import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FooterInfo', {
      render() {
        return h('footer', { class: 'footer' }, [
            `© ${new Date().getFullYear()} FreeFlow — Docs v${import.meta.env.__APP_VERSION__}`,
            h('br'),
            h('a', { href: 'https://github.com/onfreeflow/public-docs', target: '_blank' }, 'GitHub Repo')
        ])
      }
    })
  }
}