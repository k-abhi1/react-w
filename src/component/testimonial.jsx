import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Name: 'Sarah Lee',
  author4Position: 'Administrator',
  heading1: 'Testimonials',
  review3:
    'I have seen a significant improvement in the scholarship application process since the introduction of the online system. It has reduced paperwork and delays, benefiting both students and institutions.',
  author2Alt: 'Image of Jane Smith',
  author4Src:
    'https://images.unsplash.com/photo-1441441247730-d09529166668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTgwMDg0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  review2:
    "As a parent, I appreciate the transparency and speed of the digital process. It's reassuring to know that my child's documents are securely verified and processed.",
  review4:
    'Managing scholarship applications has become much more efficient with the digital submission system. It has streamlined our workflow and improved overall productivity.',
  author1Src:
    'https://images.unsplash.com/photo-1632377082368-66155ad702d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTgwMDg0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTgwMDg0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Lee',
  author2Name: 'Jane Smith',
  content1:
    'The online document submission system made the scholarship application process so much easier and faster. I was able to track my documents and payments seamlessly.',
  author2Position: 'Parent',
  author1Name: 'John Doe',
  author3Position: 'Educator',
  author2Src:
    'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTgwMDg0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: 'The system is user-friendly and efficient. Highly recommended!',
  author1Position: 'Student',
  author3Alt: 'Image of David Johnson',
}

Testimonial.propTypes = {
  author4Name: PropTypes.string,
  author4Position: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  review4: PropTypes.string,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Name: PropTypes.string,
  content1: PropTypes.string,
  author2Position: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  author2Src: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial
