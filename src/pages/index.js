import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Work_Layout from "../components/work_layout"







const MainPage = ({ data }) => {




      return (
          <Work_Layout>




            <Masonry className="showcase">
              {data.allMarkdownRemark.edges.map(({ node: work }) => (
                <div key={work.id} className="showcase__item">
                  <figure className="card">
                    <Link to={`${work.fields.slug}`} className="card__image">
                    </Link>
                    <figcaption className="card__caption">
                      <h6 className="card__title">
                        <Link to={`${work.fields.slug}`}>{work.fields.title}</Link>
                      </h6>
                      <div className="card__description">
                        <p>{work.excerpt}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </Masonry>

          </Work_Layout>

    )
}

export default MainPage


export const query = graphql`
  query {
      allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
                title
              }
              excerpt
              html
            }
          }
    }

  }

`

{/*

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 750, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
*/}
