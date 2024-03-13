import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <div
        id="characters"
        class="flex flex-col items-center gap-6"
      >
        <h2 class="text-3xl">搭載キャラクター</h2>
        <h3 class="text-2xl">レイチー</h3>
        <img
          class="w-4/5 max-w-[500px] h-auto"
          src="./assets/laychie.png"
          alt="レイチー"
        ></img>
        <div class="flex flex-col items-center gap-4">
          <p>搭載キャラクター No.01、レイチーです。</p>
          <p>01なのでレイチーです。</p>
        </div>
        <h3 class="text-2xl">レイニー</h3>
        <img
          class="w-4/5 max-w-[500px] h-auto"
          src="./assets/layney.png"
          alt="レイニー"
        ></img>
        <div class="flex flex-col items-center gap-4">
          <p>搭載キャラクター No.02、レイニーです。</p>
          <p>レイチーの妹です。</p>
        </div>
      </div>
    )
  }
})
