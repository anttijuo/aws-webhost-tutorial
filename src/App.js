import React from "react"

import Header from "./Header"
import Footer from "./Footer"

function App(){
  return (
    <div>
      <Header />
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
      </ul>
      <nav>
        <main>
          <p>This is where my content is</p>
        </main>
        <Footer />
      </nav>
    </div>
  )
}

export default App