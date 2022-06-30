import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

const IndexPage = ({ data }) => {
  const { frontmatter: {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro
  } } = data.markdownRemark;

  const heroImage = getImage(image) || image;

  return (
    <Layout>
      <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <h1>{mainpitch.title}</h1>
      <div>
        <section>
          <h2>{heading}</h2>
          <p>{description}</p>
          <Features gridItems={intro.blurbs} />
        </section>
      </div>
    </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
