import React from "react";
import "../index.css";
import About from "./About";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <>
   
<br />
<br />
<br />
      <div className="container flex mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 col-xxl-6 ">
            <div className="text-center mx-auto my-auto  ">
              <span className="txt1"><b>Smart Farming</b></span><hr />

              <div className="txt3">
              Smart farming is a management concept focused on providing the agricultural industry with the infrastructure to leverage advanced technology – including big data, the cloud and the internet of things (IoT) – for tracking, monitoring, automating and analyzing operations. Also known as precision agriculture, smart farming is software-managed and sensor-monitored. Smart farming is growing in importance due to the combination of the expanding global population, the increasing demand for higher crop yield, the need to use natural resources efficiently, the rising use and sophistication of information and communication technology and the increasing need for climate-smart agriculture.
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
            <div>
              <figure>
                <img
                  src={require("../photos/caro2.jpg")}
                  alt="smart farming"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
     
<br />
<br />
     
      
      <section style={{marginBottom:"100px"}}>
        <div className="text-center mt-5">
          <h1 className="display-4 head txt1">
            Smart farming techniques:{" "}
          </h1>
          <hr className="w-75 h-60 mx-auto" />
        </div>
        <br /><br />
        <div className="container">
          <div className="row">
          <div className="col-sm-3 ">
              <div className="card">
                <img
                  src={require("../photos/img1.jpg.jpg")}
                  className="card-img-top zoom"
                  alt="..."
                  height={204}
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://www.plugandplaytechcenter.com/resources/how-automation-transforming-farming-industry/"
                      class="btn btn-primary zoom"
                    >
                      Automation and Robotic Labour
                    </a>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-sm-3 ">
              <div className="card">
                <img
                src={require("../photos/planting-seeds.jpg")}
           className="card-img-top zoom"
                  alt="..."
                  height={204}
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://community.nasscom.in/communities/digital-transformation/agritech/smart-agriculture-methods-and-strategy-for-farmers.html"
                      class="btn btn-primary zoom"
                    >
                      Seeding and Planting
                    </a>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-sm-3 ">
              <div className="card">
                <img
                 src={require("../photos/Irrigation-Technology.jpg")}
                className="card-img-top zoom"
                  alt="..."
                  height={204}
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://intellias.com/smart-irrigation-in-agriculture/"
                      class="btn btn-primary zoom"
                    >
                      Irrigation and crop management
                    </a>
                  </center>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12 col-12 col-xxl-4"> */}
            <div className="col-sm-3 ">
              <div className="card">
                <img
                src={require("../photos/smart-farming.jpg")}
               className="card-img-top img-fluid zoom"
              // height={150}
                  alt="..."
                  height={205}
                  

                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://www.equinoxsdrones.com/agriculture"
                      class="btn btn-primary zoom"
                    >
                      Drones and sensors
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
              <br /><br /><br />
            <img
                  src="https://media.istockphoto.com/photos/growing-corn-seedling-in-cultivated-field-with-modern-technology-picture-id1149771173?k=20&m=1149771173&s=612x612&w=0&h=QeJb3InWRqQ_1TE30boJ0lIlO8zILj0DJn-pGNSWnjg="
                  className="card-img-top zoom mx-auto my-auto img-fluid" 
                  alt="..."
                />
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
            <div className="text-center mx-auto my-auto">
              <div className="txt1 mt-5">Smart farming in India</div>
<div>
  <p class="txt3" style={{fontSize:'25px'}} >Smart farming has emerged to be the need of the hour for the Indian agriculture sector. It is much more efficient than the traditional methods of farming. Smart farming, which involves the application of sensors and automated irrigation practices, can help monitor agricultural land, temperature, soil moisture, etc. This would enable farmers to monitor crops from anywhere. Moreover, smart farming can help integrate digital and physical infrastructures which would benefit small farmers. </p>
<br />
    <p class="txt1" style={{fontSize:'25px'}}>
    Government Partnerships:
    </p>
<ol  style={{color:"crimson"}}>
<li style={{fontSize:'20px' }}><b>Crop yield prediction model using artificial intelligence (AI): </b>In 2018, the National Institution for Transforming India (NITI Aayog) partnered with IBM for developing a crop yield prediction model using AI. This helps in providing real-time advisory to farmers.</li>
<li style={{fontSize:'20px'}}><b>AI sensors for smart farming:</b>The Indian government has partnered with Microsoft for empowering small-holder farmers in India. The partnership seeks to increase the income of the farmers through greater crop yield and superior price control using AI sensors. </li>
<li style={{fontSize:'20px'}}><b>Drones for monitoring soil and crop health:</b>The government has launched a project, Sensor-based Smart Agriculture (SENSAGRI), involving six institutes. In this project, drones would be used for smooth scouting over land fields, for collecting precious information and transferring the data to farmers on a real-time basis. </li>

</ol>

 
</div>
</div>
</div>
</div>
</div>
</section>

<About />
     
</>
);
};
export default Home;
