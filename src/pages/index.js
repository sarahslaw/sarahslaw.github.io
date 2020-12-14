import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import AboutMeGallery from '../components/Gallery/components/AboutMeGallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = "Sarah's Law"
  const siteDescription = 'My law profile'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              About me
            </h2>
          </header>
          <p>
            After graduating from UWE Bristol and completing the UK Bar, I have encountered many 
            opportunities to be creatively involved in and execute civil litigation disputes efficiently. 
            My practice thus far has been under the general litigation umbrella involving varying levels 
            of complexity, with key focus areas in corporate and commercial disputes, family matters and 
            contractual disputes. With almost 5 years of legal practice and incredible mentorship, I have 
            gained invaluable experience from employing legal aptitude on a daily basis.
          </p>
          <AboutMeGallery />

        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I'm always eager to hear about potential opportunities to apply my
            wealth of experience. If you want to know more about the cases I've
            worked on or just want a peek at my resume, feel free to reach out
            via email or message and I'll respond as soon as possible!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Selangor/WP district
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +6012-282 7480
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">sarahreshmi@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
