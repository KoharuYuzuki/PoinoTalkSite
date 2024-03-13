import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <footer
        id="footer"
        class="w-full h-fit p-4 flex flex-col"
      >
        <div class="h-12 rounded-2xl bg-accent flex justify-center items-center">
          <p class="text-light">© 2024 KoharuYuzuki</p>
        </div>
      </footer>
    )
  }
})
