import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ACN React Test Level 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Accenture Coding Test.
        </h1>

        <p className="mt-3 text-2xl">
         Kindly refer to README.md for your task.
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.accenture.com/my-en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/accenture.svg" alt="Accenture Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
