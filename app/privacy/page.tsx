export default function PrivacyPage() {
return ( <main className="min-h-screen bg-black text-white"> <div className="max-w-4xl mx-auto px-6 py-24"> <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
Privacy Policy </h1>

    <p className="text-gray-400 mb-12">
      Last Updated: June 2026
    </p>

    <div className="space-y-10 text-gray-300 leading-8">
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Introduction
        </h2>
        <p>
          Welcome to LinkBurst. Your privacy is important to us.
          This Privacy Policy explains how we collect, use, and
          protect your information when you use our mobile game.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Information We Collect
        </h2>

        <p>
          LinkBurst may collect certain information automatically,
          including:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Device information</li>
          <li>Game progress and usage statistics</li>
          <li>Crash reports and diagnostics</li>
          <li>Advertising identifiers</li>
          <li>Performance analytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          How We Use Information
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Improve gameplay experience</li>
          <li>Fix bugs and technical issues</li>
          <li>Analyze game performance</li>
          <li>Develop new features</li>
          <li>Maintain app security</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Advertising
        </h2>

        <p>
          LinkBurst may display advertisements provided by
          third-party advertising partners such as Google AdMob.
          These services may use anonymous identifiers to provide
          relevant advertisements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Analytics
        </h2>

        <p>
          We may use analytics tools such as Firebase Analytics
          to understand how players interact with the game and
          improve the overall experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Children's Privacy
        </h2>

        <p>
          LinkBurst is intended for a general audience. We do not
          knowingly collect personal information from children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Data Security
        </h2>

        <p>
          We take reasonable measures to protect user information.
          However, no method of electronic transmission or storage
          is completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Third-Party Services
        </h2>

        <p className="mb-4">
          LinkBurst may use third-party services including:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Google Play Services</li>
          <li>Google AdMob</li>
          <li>Firebase Analytics</li>
          <li>Firebase Crashlytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Changes To This Policy
        </h2>

        <p>
          We may update this Privacy Policy from time to time.
          Any changes will be posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Contact Us
        </h2>

        <p>
          If you have questions regarding this Privacy Policy,
          please contact us:
        </p>

        <div className="mt-4 p-6 rounded-2xl border border-purple-500/20 bg-white/5">
          <p><strong>Developer:</strong> Qyvenix</p>
          <p><strong>Email:</strong> support@qyvenix.com</p>
        </div>
      </section>
    </div>
  </div>
</main>

);
}
