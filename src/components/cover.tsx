import { defineComponent } from 'vue'
import Link from './link'

export default defineComponent({
  render() {
    return (
      <div
        id="cover"
        class="flex flex-col items-center gap-6 mt-16"
      >
        <h1 class="text-5xl font-medium">PoinoTalk</h1>
        <p class="text-lg text-center break-keep">
          なかの人がいない
          <wbr/>
          テキスト読み上げソフト
        </p>
        <Link
          newTab={ true }
          underline={ false }
          href="https://koharuyuzuki.github.io/poinotalk/latest/"
        >
          {() => (
            <div class="w-fit h-fit bg-accent px-4 py-3 rounded-xl">
              <p class="text-main">ブラウザで使ってみる</p>
            </div>
          )}
        </Link>
        <img
          class="w-full max-w-[800px] h-auto"
          src="./assets/screenshot-1100x800.png"
          alt="スクリーンショット"
        ></img>
      </div>
    )
  }
})
