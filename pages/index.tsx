import Head from 'next/head'
import { NavbarComponent } from './components/Navbar'
import { InfoComponent } from './components/Info'
import FileComponent from './components/FileList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>archives-viewer</title>
        <meta name="description" content="マスコミ研究会 アーカイブ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavbarComponent />
        <div className="container">
          <div className="mt-2">
            <InfoComponent />
          </div>
          <FileComponent />
          <hr />
          <footer className="mb-6 pb-3">
            &copy; 2000 - 2022 <a href="https://masukendp.github.io">マスコミ研究会</a>. / GitHub: <a href="https://github.com/masukendp/archives-viewer">masukendp/archives-viewer</a>
          </footer>
        </div>

      </main>


    </div>
  )
}
