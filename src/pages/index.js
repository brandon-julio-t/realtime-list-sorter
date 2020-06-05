import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [listString, setListString] = useState("")

  function handleChange(event) {
    setListString(event.target.value)
  }

  return (
    <Layout>
      <SEO />

      <section className="my-5">
        <h1 className="text-center">Example</h1>

        <div className="row">
          <div className="col">
            <ul>
              <li>zebra</li>
              <li>nanaba</li>
              <li>anchor</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>anchor</li>
              <li>nanaba</li>
              <li>zebra</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="form-row h-100 my-5">
        <div className="col">
          <div className="form-group">
            <h2>Your lists</h2>
            <textarea
              rows="16"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col">
          <h2>Your sorted list</h2>
          <ul>
            {listString
              .split("\n")
              .filter(e => e) // prevent '' string
              .sort()
              .map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
