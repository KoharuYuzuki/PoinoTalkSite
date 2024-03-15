import { defineComponent } from 'vue'
import Link from './link'

export default defineComponent({
  data(): {
    menuIsOpen: boolean
  } {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    open() {
      const dialog = this.$refs.sideMenuDialog as HTMLDialogElement
      const delayMs = 100

      dialog.showModal()

      setTimeout(() => {
        this.menuIsOpen = true
      }, delayMs)
    },
    close() {
      this.menuIsOpen = false
      const delayMs = 200

      setTimeout(() => {
        const dialog = this.$refs.sideMenuDialog as HTMLDialogElement
        dialog.close()
      }, delayMs)
    }
  },
  render() {
    return (
      <header
        id="header"
        class="w-full h-fit flex flex-col fixed top-0 left-0 bg-gradient-to-b from-main to-transparent"
      >
        <div class="h-12 m-4 rounded-2xl bg-accent flex justify-between items-center">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-main [mask-image:url(./assets/icon.svg)]"></div>
            <Link underline={ false } href="./">
              {() => <p class="text-light text-lg">PoinoTalk Official Site</p>}
            </Link>
          </div>
          <div class="flex items-center gap-4 mr-4">
            <div class="items-center gap-4 hidden min-[900px]:flex">
              <Link underline={ false } href="#about">
                {() => <p class="text-light">PoinoTalkとは</p>}
              </Link>
              <Link underline={ false } href="#characters">
                {() => <p class="text-light">搭載キャラクター</p>}
              </Link>
              <Link underline={ false } href="#license">
                {() => <p class="text-light">利用規約について</p>}
              </Link>
              <Link newTab={ true } underline={ false } href="https://koharuyuzuki.github.io/poinotalk/latest/">
                {() => (
                  <div class="w-fit h-fit bg-main flex rounded-lg">
                    <p class="text-accent text-sm mx-2 my-1">ブラウザで使ってみる</p>
                  </div>
                )}
              </Link>
            </div>
            <button
              class="
                w-[24px] h-[20px] relative
                [&>*]:w-[24px]
                [&>*]:h-[2px]
                [&>*]:absolute
                [&>*]:left-0
                [&>*]:right-0
                [&>*]:m-auto
                [&>*]:bg-main
                [&>*]:rounded-[1px]
                [&>*]:transition-[top,bottom,transform,opacity]
                [&>*]:transform-gpu
              "
              onClick={() => this.menuIsOpen ? this.close() : this.open() }
            >
              <div class={`top-0 ${this.menuIsOpen ? 'bottom-0 rotate-[-45deg]' : 'bottom-[18px] rotate-0'}`}></div>
              <div class={`top-0 bottom-0 ${this.menuIsOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div class={`bottom-0 ${this.menuIsOpen ? 'top-0 rotate-[45deg]' : 'top-[18px] rotate-0'}`}></div>
            </button>
          </div>
          <div
            class={`w-dvw h-dvh fixed top-0 left-0 ${this.menuIsOpen ? 'block' : 'hidden'}`}
            onClick={ this.close }
          ></div>
          <dialog
            ref="sideMenuDialog"
            class={`
              w-72 h-fit max-h-[calc(100dvh-10rem)] m-auto mt-4 rounded-2xl bg-accent
              fixed top-16 flex-col transition-[margin]
              ${this.menuIsOpen ? 'mr-4 flex' : 'mr-[-20rem]'}
            `}
            onClick={ this.close }
            // @ts-ignore
            onCancel={(event: Event) => event.preventDefault()}
          >
            <div
              class="p-4 flex flex-col grow overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div class="flex flex-col gap-2 grow overflow-y-scroll overscroll-contain scrollbar-light">
                <div class="flex flex-col gap-2">
                  <p class="text-accent-light">Menu</p>
                  <div
                    class="w-fit h-fit"
                    onClick={ this.close }
                  >
                    <Link underline={ false } href="#about">
                      {() => <p class="text-light">PoinoTalkとは</p>}
                    </Link>
                  </div>
                  <div
                    class="w-fit h-fit"
                    onClick={ this.close }
                  >
                    <Link underline={ false } href="#characters">
                      {() => <p class="text-light">搭載キャラクター</p>}
                    </Link>
                  </div>
                  <div
                    class="w-fit h-fit"
                    onClick={ this.close }
                  >
                    <Link underline={ false } href="#license">
                      {() => <p class="text-light">利用規約について</p>}
                    </Link>
                  </div>
                  <div
                    class="w-fit h-fit"
                    onClick={ this.close }
                  >
                    <Link underline={ false } href="#privacy-policy">
                      {() => <p class="text-light">プライバシーポリシー</p>}
                    </Link>
                  </div>
                  <div
                    class="w-fit h-fit"
                    onClick={ this.close }
                  >
                    <Link underline={ false } href="#third-party-license">
                      {() => <p class="text-light">サードパーティーライセンス</p>}
                    </Link>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-accent-light">Links</p>
                  <Link newTab={ true } underline={ false } href="https://koharuyuzuki.github.io/poinotalk/latest/">
                    {() => <p class="text-light">ブラウザで使ってみる</p>}
                  </Link>
                  <Link newTab={ true } underline={ false } href="https://github.com/KoharuYuzuki/PoinoTalk">
                    {() => <p class="text-light">GitHub</p>}
                  </Link>
                  <Link newTab={ true } underline={ false } href="https://twitter.com/KoharuYuzuki25">
                    {() => <p class="text-light">開発者Twitter</p>}
                  </Link>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </header>
    )
  }
})
