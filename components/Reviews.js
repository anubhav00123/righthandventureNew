import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows for simplicity
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          margin: "0 5px",
        }}
      />
    ),
  };

  const testimonials = [
    {
      id: 1,
      name: "Untrain",
      role: "Deepanshu Mishra",
      image: "image/image-600x600-21.jpg",
      quote:
        "Right Hand Venture has transformed Untrain's business with their exceptional and innovative marketing strategies, significantly increasing our online presence and conversions. Their personalized approach and commitment to understanding our brand have resulted in a bespoke marketing plan perfectly aligned with our goals.",
    },
    {
      id: 2,
      name: "Animatrix",
      role: "Farman Saifi",
      image: "image/image-600x600-20.jpg",
      quote:
        "Right Hand Venture has revolutionized Animatrix’s approach to marketing. Their deep understanding of the streetwear market and innovative strategies have amplified our brand’s reach and engagement. The impressive results speak for themselves, and we couldn't be happier with our partnership",
    },
    {
      id: 3,
      name: "Frshmoo",
      role: "Sourav Sharma",
      image: "image/image-600x600-22.jpg",
      quote:
        "Working with Right Hand Venture has been a game-changer for Frshmoo. Their expertise in marketing has significantly boosted our brand visibility and increased our sales. We are impressed by their creativity, dedication, and ability to deliver outstanding results.",
    },
    {
      id: 4,
      name: "Angry Label",
      role: "Support Manager",
      image: "image/image-600x600-22.jpg",
      quote:
        "Right Hand Venture has been instrumental in elevating Angry Label's market presence. Their innovative strategies and tailored approach have driven remarkable growth in our online engagement and sales. We are thrilled with their results and highly recommend them to any business aiming for success.",
    },
  ];

  return (
    <>
      <div className="section bg-accent-6">
        <div className="r-container">
          <div className="d-flex justify-content-center">
            <div className="row row-cols-xl-2 row-cols-1 w-100 overflow-hidden rounded-4">
              <div className="col col-xl-6 d-flex align-items-center text-center text-xl-start bg-accent p-5">
                <div className="d-flex flex-column gap-3 mx-auto mb-4 align-items-center align-items-xl-start">
                  <div className="linear-gradient">
                    <span className="text-white">Testimonials</span>
                  </div>
                  <h3 className="fw-bold">
                    What Our Clients Saying About Prodigy
                  </h3>
                  <p className="text-color-2">
                    Here’s a testimonial from a satisfied client who embarked on
                    a journey towards financial prosperity with the help of our
                    esteemed Finance and Investment Consultant.
                  </p>
                  <hr />
                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column gap-1">
                      <h3 className="fw-semibold">100%</h3>
                      <div className="flex-row">
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "var(--text-color-1)" }}
                        />
                      </div>
                      <h4 className="text-color-2">Satisfied Clients</h4>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <h3 className="fw-semibold">4.9</h3>
                      <div className="flex-row">
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "#FFD43B" }}
                        />
                        <i
                          className="fa-solid fa-xs fa-star"
                          style={{ color: "var(--text-color-1)" }}
                        />
                      </div>
                      <h4 className="text-color-2">Average Rating</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* // Slick  */}

              <div
                className="col col-xl-6 col-12 d-flex align-items-center bg-accent-2"
                style={{ backgroundImage: "url(image/BG1.png)" }}
              >
                <div className="overflow-hidden w-100">
                  <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="d-flex flex-column gap-3 p-5"
                      >
                        <div className="d-flex flex-row gap-3 align-items-center">
                          <div className="customer-item">
                            <img
                              src={testimonial.image}
                              className="img-fluid border-light rounded-circle"
                              alt={testimonial.name}
                              width={60}
                            />
                          </div>
                          <div className="d-flex flex-column">
                            <h5>{testimonial.name}</h5>
                            <span style={{ fontSize: 12 }}>
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                        <span className="fst-italic" style={{ fontSize: 24 }}>
                          {testimonial.quote}
                        </span>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* // Slick  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
