//routers , links
import React from "react";
import Card from "../components/Login/Card";
import AboutUsData from "../components/Login/AboutUsData";
import abt from "../pics/about-1.png";
import "../components/AboutUs.css";

function AboutUs() {
  return (
    <>
      {/* <section className="secc">
        <div className="abtpic">
          <img src={abt}></img>
        </div>
        <div>
            <h2>About LORDS!!</h2>
        </div >
        <div className="abtText">
          Salutations from Lord of the Drinks, commonly known as LOTD, best
          restaurant and bar and your favorite place to hang out. Welcome to the
          land of taste as we take you on the best incomparable best Dining
          restaurant experience with an array of lip-smacking food and art. Lord
          of the Drinks serves you the best of bending food curated from local
          and imported ingredients for all the food lovers out there. Our
          commitment to our patrons stays strong for serving the best food
          coupled with an exhilarating concept ambiance set in the medieval era
          theme. Step in and experience the Lord of the Drink’s vibes.
        </div>
      </section>  */}
      <div className="roww">
        <div className="col-md-7">
          <h2 className="aboutme">About US</h2>
          <p className="mydesc">
          The Tipsy Trail is a trendy drink bar that is dedicated to providing customers with a unique and enjoyable experience. Located in the heart of the city, The Tipsy Trail is a perfect destination for those who appreciate a well-crafted cocktail or a fine glass of wine. The bar boasts a stylish and contemporary interior that is both welcoming and comfortable, making it a perfect spot to unwind after a long day or to catch up with friends.

The Tipsy Trail prides itself on serving a wide range of delicious drinks, including classic cocktails, innovative mixes, and local craft beers. The menu is carefully curated by expert bartenders who are passionate about their craft and are always looking for new and exciting ways to surprise their customers. Whether you're in the mood for a refreshing mojito, a spicy margarita, or a bold whiskey sour, The Tipsy Trail has something for everyone.

At The Tipsy Trail, customers can expect exceptional service and an inviting atmosphere. With a friendly and knowledgeable staff, the bar aims to create a welcoming environment that encourages guests to relax and enjoy their drinks. So whether you're a seasoned cocktail connoisseur or just looking for a place to unwind, The Tipsy Trail is the perfect spot to indulge in some excellent drinks and a great time.
          </p>
        </div>
        <div className="col-md-5">
          <img src={abt} className='pic'></img>
        </div>
      </div>
      <div>
        <br></br>
      <h2 className="feedback">Client Feedback</h2>
      </div>
      <div className="home-cards">
        <Card details={AboutUsData} />
      </div>
    </>
  );
}

export default AboutUs;
