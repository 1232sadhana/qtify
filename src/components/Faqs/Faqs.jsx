import React, { useEffect, useState } from "react";
import { faqData, getUId } from "../AxiosData/AxiosData";
import "./Faqs.css";
import ExploreAccordion from "../ExploreAccordion/ExploreAccordion";
const Faqs = () => {
  const [questionData, setQuestionData] = useState([]);

  // Fetch the top album data when the component is rendered
  useEffect(() => {
    const loadHandler = async () => {
      let res = await faqData();
      console.log(res.data)
      setQuestionData(res.data);
    };
    loadHandler();
  }, []);
  return (
    <div className="faqs">
      <h2 className="faqs_heading">FAQs</h2>
      <div className="faqs_explore">
        {questionData.map((qItem) => {
          let id = getUId();
          return <ExploreAccordion data={qItem}/>;
        })}
      </div>
    </div>
  );
};

export default Faqs;
