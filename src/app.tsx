import { defineComponent, createApp } from 'vue'
import './vue-flag'
import { isFirefox } from './utils'
import Header from './components/header'
import Footer from './components/footer'
import Cover from './components/cover'
import About from './components/about'
import Characters from './components/characters'
import License from './components/license'
import PrivacyPolicy from './components/privacy-policy'
import ThirdPartyLicense from './components/third-party-license'

const component = defineComponent({
  render() {
    return (
      <>
        <Header></Header>
        <main class="
          w-[calc(100%-2rem)] h-fit max-w-[1000px] min-h-[calc(100dvh-10rem)] mx-auto mt-[5rem] mb-[4rem]
          flex flex-col justify-between gap-16 [&>*]:scroll-mt-[8rem]
        ">
          <Cover></Cover>
          <About></About>
          <Characters></Characters>
          <License></License>
          <PrivacyPolicy></PrivacyPolicy>
          <ThirdPartyLicense></ThirdPartyLicense>
        </main>
        <Footer></Footer>
      </>
    )
  },
  mounted() {
    if (isFirefox()) {
      document.body.classList.add('is-firefox')
    }
  }
})

const app = createApp(component)
app.mount('#app')
