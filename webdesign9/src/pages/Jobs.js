import React from 'react';
import Card from '../components/Login/Card';
import JobData from '../components/Login/JobData'
import '../components/Login/jobs.css'


function Jobs() {
    return (
        <>
        <section className="secJob">
      {/* <h1>JOBS</h1>
      <h2>Openings at</h2> */}     
      <h5 className="sectionTitle">GET IN TOUCH</h5>
      <h4 className="miniTitle">JOBS OPENINGS AT:</h4>
    </section>
    <div className="home-cards"><Card details ={JobData} /></div>
    </>
    )
}

export default Jobs