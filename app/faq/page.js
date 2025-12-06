"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const page = () => {
  const faqData = [
    {
      id: 1,
      title: "ARE YOUR MENU PRICES THE SAME AS THOSE AT THE RESTAURANT?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: ".1s",
    },
    {
      id: 2,
      title: "CAN I ORDER FROM DIFFERENT RESTAURANT AT THE SAME TIME?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: ".3s",
    },
    {
      id: 3,
      title: "Does Hub support both Elementor and WP Bakery Page Builder?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: ".5s",
    },
    {
      id: 4,
      title: "CAN I ORDER FROM DIFFERENT RESTAURANT AT THE SAME TIME?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: ".7s",
    },
    {
      id: 5,
      title: "Does Hub support both Elementor and WP Bakery Page Builder?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: ".9s",
    },
    {
      id: 6,
      title: "ARE YOUR MENU PRICES THE SAME AS THOSE AT THE RESTAURANT?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      animationDelay: "1.1s",
    },
  ];

  const [active, setActive] = useState(faqData[0].id);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"faq"} />
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">frequently ask question</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Frequently ask question
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-content">
                <Accordion defaultActiveKey={active}>
                  {faqData.map((item) => (
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay={item.animationDelay}
                      key={item.id}
                    >
                      <h4 className="accordion-header">
                        <Accordion.Toggle
                          as={"button"}
                          eventKey={item.id}
                          className={`accordion-button ${
                            active == item.id ? "" : "collapsed"
                          }`}
                          onClick={() => setActive(item.id)}
                        >
                          {item.title}
                        </Accordion.Toggle>
                      </h4>
                      <Accordion.Collapse
                        className="accordion-collapse"
                        eventKey={item.id}
                      >
                        <div className="accordion-body">{item.content}</div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
