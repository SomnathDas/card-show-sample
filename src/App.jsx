import "./App.css";
import Card from "./components/Card";

import img1 from "./assets/rp1.jpg";
import img2 from "./assets/rp2.png";
import img3 from "./assets/rp3.jpg";
import img4 from "./assets/rp4.jpg";

const App = () => {
  const CardObject = {
    firstCard: {
      head: "AI + RPA is what we do",
      body: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      image: { img1 },
      linkObj: { link: "", title: "AI + RPA Automation" },
    },

    secondCard: {
      head: "Make Bolder Choices",
      body: "Digital focused strategies to realize market-changing ideas",
      image: { img2 },
      linkObj: { link: "", title: "Build Better Apps" },
    },

    thirdCard: {
      head: "Innovate with Speed",
      body: "Create higher quality software, deliver on customer expectations and business goals",
      image: { img3 },
      linkObj: { link: "", title: "DevOps" },
    },

    fourthCard: {
      head: "Embrace Cloud",
      body: "With Cloud-First accelerate innovation and optimize performance",
      image: { img4 },
      linkObj: { link: "", title: "Cloud Services" },
    },
  };
  return (
    <section className="card-section">
      <h1>Let's Collaborate</h1>
      <Card
        head={CardObject.firstCard.head}
        body={CardObject.firstCard.body}
        image={CardObject.firstCard.image}
        linkObj={CardObject.firstCard.linkObj}
      />

      <Card
        head={CardObject.secondCard.head}
        body={CardObject.secondCard.body}
        image={CardObject.secondCard.image}
        linkObj={CardObject.secondCard.linkObj}
      />

      <Card
        head={CardObject.thirdCard.head}
        body={CardObject.thirdCard.body}
        image={CardObject.thirdCard.image}
        linkObj={CardObject.thirdCard.linkObj}
      />

      <Card
        head={CardObject.fourthCard.head}
        body={CardObject.fourthCard.body}
        image={CardObject.fourthCard.image}
        linkObj={CardObject.fourthCard.linkObj}
      />
    </section>
  );
};

export default App;
