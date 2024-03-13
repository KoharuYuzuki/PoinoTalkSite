import { defineComponent } from 'vue'
import Link from './link'

export default defineComponent({
  render() {
    return (
      <div
        id="license"
        class="flex flex-col items-center gap-6"
      >
        <h2 class="text-3xl">利用規約について</h2>
        <div class="flex flex-col items-center gap-4">
          <p>PoinoTalkは無料ですが、ライセンス (利用規約) に沿って使用する必要があります。</p>
          <p>ご利用の前には必ずPoinoTalkのメニューのヘルプからライセンスをご確認ください。</p>
          <p>
            また、不明な点については
            <Link
              newTab={ true }
              href="https://github.com/KoharuYuzuki/PoinoTalkLicence?tab=readme-ov-file#qa"
            >
              {() => 'ライセンスQ&A'}
            </Link>
            や
            <Link
              newTab={ true }
              href="https://github.com/KoharuYuzuki/PoinoTalk/blob/main/Q&A.txt"
            >
              {() => 'PoinoTalk Q&A'}
            </Link>
            をご参照ください。
          </p>
        </div>
      </div>
    )
  }
})
