import { defineComponent } from 'vue'
import Link from './link'

export default defineComponent({
  render() {
    return (
      <div
        id="privacy-policy"
        class="flex flex-col items-center gap-6"
      >
        <h2 class="text-3xl">プライバシーポリシー</h2>
        <div class="flex flex-col gap-2">
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。</p>
          <p>このGoogleアナリティクスはデータの収集のためにCookieを使用しています。</p>
          <p>このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</p>
          <p>
            この規約に関しての詳細は
            <Link
              newTab={ true }
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            >
              {() => 'Googleアナリティクスサービス利用規約'}
            </Link>
            のページや
            <Link
              newTab={ true }
              href="https://policies.google.com/technologies/ads?hl=ja"
            >
              {() => 'Googleポリシーと規約ページ'}
            </Link>
            をご覧ください。
          </p>
        </div>
      </div>
    )
  }
})
