import './App.css'

export const App = () => {
  return (
    <main className="page">
      <header className="header">
        <div>
          <p className="label">Web Portfolio</p>
          <h1>藤貫 哲生</h1>
          <p className="lead">
            React / TypeScript / Firebase を中心に、Webアプリケーション開発を学んでいる大学生です。
          </p>
        </div>

        <nav className="contactLinks">
          <a href="https://github.com/tessho3316" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:tessho.3316@icloud.com">
            Email
          </a>
        </nav>
      </header>

      <section className="section">
        <h2>プロフィール</h2>
        <p>
          大学では情報系の学習に取り組みながら、Webアプリ開発と情報検索に関心を持って学んでいます。
          これまでに、学生向けのコミュニティプラットフォームをチームで開発し、
          Firebaseを用いたユーザー認証、Firestoreのデータ設計、タイムライン機能などを担当しました。
        </p>
      </section>

      <section className="section">
        <h2>スキルセット</h2>

        <div className="skillGrid">
          <div className="card">
            <h3>Frontend</h3>
            <p>React / TypeScript / JavaScript / HTML / CSS</p>
          </div>

          <div className="card">
            <h3>Backend / BaaS</h3>
            <p>Firebase Authentication / Firestore </p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git / GitHub / VS Code</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>制作物</h2>

        <article className="workCard">
          <div className="workHeader">
            <div>
              <h3>学生向けコミュニティプラットフォーム</h3>
              <p className="meta">チーム開発 / 4人 / 開発期間：約6か月</p>
            </div>
            <p className="tech">React / TypeScript / Firebase</p>
          </div>

          <p>
            大学内の学生が、サークルやコミュニティを探し、情報を確認できるWebアプリを開発しました。
            私は主に、ユーザー認証、データベース設計、タイムライン機能、投稿編集権限の制御を担当しました。
          </p>

          <div className="workDetails">
            <div>
              <h4>担当範囲</h4>
              <ul>
                <li>Firebase Authenticationを用いたログイン機能</li>
                <li>Firestoreを用いたユーザー・投稿・コミュニティ情報の管理</li>
                <li>タイムライン機能の実装</li>
                <li>投稿編集権限の制御</li>
                <li>ページ遷移や権限管理に関する不具合修正</li>
              </ul>
            </div>

            <div>
              <h4>成果</h4>
              <ul>
                <li>登録ユーザー数：56人</li>
                <li>作成コミュニティ数：43件</li>
                <li>ユーザーレビュー：約20回</li>
                <li>筑波大学生限定でアクセスできる仕組みを実装</li>
              </ul>
            </div>
          </div>

          <div className="problem">
            <h4>開発で意識したこと</h4>
            <p>
              初めてのチーム開発では、仕様の認識ずれや実装方針の違いが課題になりました。
              そのため、レビュー内容や改善方針をチーム内で確認する時間を設け、
              実装前に方向性を揃えることを意識しました。
            </p>
          </div>
        </article>
      </section>

      <section className="section">
        <h2>現在学習していること</h2>
        <ul className="learningList">
          <li>React / TypeScript による保守しやすいコンポーネント設計</li>
          <li>Firebase Security Rulesを含む安全なデータ管理</li>
          <li>GitHubを用いたチーム開発フロー</li>
          <li>情報検索・自然言語処理に関する研究</li>
        </ul>
      </section>

      <section className="section">
        <h2>研究・関心分野</h2>
        <p>
          大学では、長い自然言語クエリの要約が検索性能に与える影響について学習・実験しています。
          Webアプリケーション開発だけでなく、検索技術や自然言語処理にも関心があります。
        </p>
      </section>

      <footer className="footer">
        <p>Contact</p>
        <a href="mailto:tessho.3316@icloud.com">tessho.3316@icloud.com</a>
      </footer>
    </main>
  )
}