import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <div
        id="about"
        class="flex flex-col items-center gap-6"
      >
        <h2 class="text-3xl">PoinoTalkとは</h2>
        <div class="flex flex-col items-center gap-4">
          <p>PoinoTalkはフォルマント合成を用いたテキスト読み上げソフトです。</p>
          <p>一般的な音声合成ソフトは、声優さんの声を元に音声を合成していますが、</p>
          <p>PoinoTalkはエンベロープからフォルマントを計算し、逆フーリエ変換で音声を合成しています。</p>
        </div>
        <h3 class="text-2xl">poinoとの違い</h3>
        <div class="flex flex-col items-center gap-4">
          <p>PoinoTalkはニューラルネットワークを使用した音声合成エンジンを搭載しています。</p>
          <p>そのため、poinoと比較して滑らかな発音ができるようになりました。</p>
          <p>また、テキスト読み上げに特化し、ブラウザで動作するようになったため、</p>
          <p>インストール不要ですぐに使い始めることができます。</p>
          <p>他にもpoinoにはなかった辞書やプリセット機能も搭載しています。</p>
        </div>
      </div>
    )
  }
})
