import React from "react";
import "./Features.css";
import Picture5 from "../../assets/4141223.jpg";
import Picture6 from "../../assets/cand.png";
import Picture7 from "../../assets/victoy.jpg";
import Feature from "./Feature/Feature";

export default function Features() {
  let feature_content = {
    item_1: {
      id: 1,
      image: Picture5,
      heading: "+ Publish and share your profile",
      list: {
        desc_1: "Create Your profile",
        desc_2: "Get your referral EASY PEASY",
      },
    },
    item_2: {
      id: 2,
      image: Picture6,
      heading: "+ HOW REFREME WORKS ?",
      list: {
        desc_1:
          "15-min unmoderated video sessions to 60-minute moderated group sessions ",
        desc_2: "Set panels for quicker feedback",
        desc_3:
          "Ideal for website/app UI/UX testing and offline CPG product testing",
      },
    },
    item_3: {
      id: 3,
      image: Picture7,
      heading: "+ In-depth analysis and richer insight",
      list: {
        desc_1: "Real reactions and honest feedback from users",
        desc_2:
          "Sentiment analysis, wordcloud, net promotor scores, statistics",
        desc_3:
          "Ideal for media/storyboard feedback, price/packaging/taste A/B tests",
      },
    },
  };

  return (
    <section id="features">
      <h1 className="title">Features & Benefits</h1>
      <Feature item={feature_content.item_1} right />
      <Feature item={feature_content.item_2} left />
      <Feature item={feature_content.item_3} right />
    </section>
  );
}
