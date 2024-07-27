import { Container, Row, Col } from "react-bootstrap"
import { dataSwiper } from "../../data"
import FaqComponent from "../components/FaqComponent"

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">All Testimony</h1>
            <p className="text-center text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur illum voluptate ipsum hic corrupti iure in repudiandae?</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-1">
        {dataSwiper.map((data) => {
          return (
            <Col key={data.id} className='mb-5 shadow-sm p-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
              <p className='desc'>{data.desc}</p>
              <div className='people'>
                <img src={data.image} alt="" />
                <div>
                  <h5 className='mb-1'>{data.name}</h5>
                  <p className='m-0 fw-bold'>{data.skill}</p>
                </div>
              </div>
            </Col>
            );
          })}
        </Row>
      </Container>
      </div>
      
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;