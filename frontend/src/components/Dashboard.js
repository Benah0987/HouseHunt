import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Menu */}
      <aside>
        <p>HouseHunt</p>
        <a href="javascript:void(0)">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          My properties
        </a>
        <a href="javascript:void(0)">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          My properties
        </a>
        <a href="javascript:void(0)">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          My properties
        </a>
        <a href="javascript:void(0)">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          My properties
        </a>
        <a href="javascript:void(0)">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          My properties
        </a>
        {/* Add other menu items as needed */}
      </aside>

      {/* Header */}
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
                <div className="page-caption">
                  <h1 className="page-title">HouseHunt</h1>
                </div>
              </div>
              <div className="card-section">
                <div className="card-block bg-white mb-3">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="section-title mb-0">
                        <h2>Find Your Perfect Property with HouseHunt</h2>
                        <p>Explore a variety of properties listed by landlords. Your dream home is just a click away.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Add properties section */}
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="section-title mb-0">
                      <h2>My Properties</h2>
                      <p>View and manage the properties you have listed as a landlord.</p>
                      {/* Add property cards or listing components here */}
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    Created for <a href="https://easetemplate.com/downloads/digital-marketing-website-template-hike-bold-design/" target="_blank">easetemplate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
