/*import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import '../Styles/About.css'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Bigutar Development Foundation Nepal</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
    </Layout>
  );
}; <div className="about--section--img">
        <img src="./img/about.jpg" alt="About Me" />
      </div>

export default About;*/
import Layout from "../Components/Layout/Layout";
import "../Styles/About.css";
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const About = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/team/')
      .then(response => {
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the gallery items!', error);
      });
  }, []);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/members/')
    .then(response => {
      setMembers(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the member items!', error);
    });
}, []);
  
  return (
    <Layout>
    <div className="about-us-container">
      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing exceptional services that empower businesses and individuals to reach their full potential.
          With a passionate team and a customer-first approach, we strive for excellence in everything we do.
        </p>
        <p>
          Our journey started with a vision to create impactful solutions, and over the years, we have established ourselves as a trusted name in the industry.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver innovative solutions that drive success for our clients. We aim to foster growth and build long-term relationships based on trust and results.
        </p>
      </section>

      {/* Vision and Values Section */}
      <section className="vision-values">
        <h2>Vision and Values</h2>
        <p>
          <strong>Vision:</strong> To be the global leader in providing top-notch solutions that inspire progress and change.
        </p>
        <p>
          <strong>Values:</strong> Integrity, Innovation, Excellence, and Collaboration guide every aspect of our work.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="our-services">
        <h2>Our Services</h2>
        <ul>
          <li>Consulting and Strategy</li>
          <li>Software Development</li>
          <li>Data Analysis and Reporting</li>
          <li>Customer Support and Training</li>
        </ul>
      </section>
    </div>
    <section>
    <div className="gallery">
      <h3>Current working Committee</h3>
      {galleryItems.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.image} />
          <h2>{item.name}</h2>
          <p>{item.post}</p>
        </div>
      ))}
    </div>
    </section>
    <section>
    <div className="member-container">
      <h3>Life Time Members</h3>
      {members.length > 0 ? (
        <table className="member-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Membership No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.serial_number}</td>
                <td>{member.membership_number}</td>
                <td>{member.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No members found.</p>
      )}
    </div>
    </section>
    </Layout>
  );
};


export default About;
