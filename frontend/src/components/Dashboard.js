// Dashboard.js
import React, { useState } from 'react';
import './dashboard.css';
import { useLandlord } from '../context/LandlordContext';
import { Link } from 'react-router-dom';



function Dashboard() {
  const { landlord } = useLandlord();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [activeProperty, setActiveProperty] = useState(null);
 

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setActiveProperty(null);

    // Show chart when 'payments' menu item is clicked
   
  };

  function YearStatsSection() {
    return (
      <section className={`section about-section gray-bg ${selectedMenuItem === 'payments' ? 'visible' : 'hidden'}`}>
        <body>
	<div class="main-container">
		<div class="year-stats">
			<div class="month-group">
				<div class="bar h-100"></div>
				<p class="month">Jan</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Feb</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Mar</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Apr</p>
			</div>
			<div class="month-group selected">
				<div class="bar h-100"></div>
				<p class="month">May</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Jun</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Jul</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Aug</p>
			</div>
			<div class="month-group">
				<div class="bar h-50"></div>
				<p class="month">Sep</p>
			</div>
			<div class="month-group">
				<div class="bar h-75"></div>
				<p class="month">Oct</p>
			</div>
			<div class="month-group">
				<div class="bar h-25"></div>
				<p class="month">Nov</p>
			</div>
			<div class="month-group">
				<div class="bar h-100"></div>
				<p class="month">Dez</p>
			</div>
		</div>

		<div class="stats-info">
			<div class="graph-container">
				<div class="percent">
					<svg viewBox="0 0 36 36" class="circular-chart">
						<path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path class="circle" stroke-dasharray="85, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path class="circle" stroke-dasharray="60, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path class="circle" stroke-dasharray="30, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
					</svg>
				</div>
				<p>Total: $2075</p>
			</div>

			<div class="info">
				<p>Most expensive category <br /><span>Restaurants & Dining</span></p>
				<p>Updated categories <span>2</span></p>
				<p>Bonus payments <span>$92</span></p>
			</div>
		</div>
	</div>
</body>
      </section>
    );
  }
  

  return (
    <div className="dashboard-container">
      {/* Menu */}
      <aside>
  <p>HouseHunt</p>
  <a href="javascript:void(0)" onClick={() => handleMenuItemClick('profile')}>
    <i className="fa fa-user" aria-hidden="true"></i>
    My profile
  </a>
  <a href="javascript:void(0)" onClick={() => handleMenuItemClick('properties')}>
    <i className="fa fa-home" aria-hidden="true"></i>
    My properties
  </a>
  <a href="javascript:void(0)" onClick={() => handleMenuItemClick('payments')}>
    <i className="fa fa-money" aria-hidden="true"></i>
    My payments
  </a>
  <a href="javascript:void(0)" onClick={() => handleMenuItemClick('logout')}>
    <i className="fa fa-sign-out" aria-hidden="true"></i>
    Logout
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

                {/* Profile Section */}
                            <section className={`section about-section gray-bg ${selectedMenuItem === 'profile' ? 'visible' : 'hidden'}`}>
              <div className="container">
                <div className="row align-items-center flex-row-reverse">
                  <div className="col-lg-6">
                    <div className="about-text go-to">
                      <h3 className="dark-color">{landlord?.username}</h3>
                      <h6 className="theme-color lead">{`A Lead UX & UI designer based in ${landlord?.residence || 'Nairobi'}`}</h6>
                      <p> {landlord?.bio}</p>
                      <div className="row about-list">
                        <div className="col-md-6">
                          <div className="media">
                            <label>Age</label>
                            <p>25</p>
                          </div>
                          <div className="media">
                            <label>Residence</label>
                            <p>Nairobi</p>
                          </div>
                          <div className="media">
                            <label>Address</label>
                            <p>Yole</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="media">
                            <label>E-mail</label>
                            <p>{landlord?.email || ''}</p>
                          </div>
                          <div className="media">
                            <label>Phone</label>
                            <p>{landlord?.phone_number || ''}</p>
                          </div>
                          {/* Additional fields as needed */}
                        </div>
                      </div>
                      <button className="btn btn-primary" >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-avatar">
                      <img
                        src={landlord?.image || 'https://bootdey.com/img/Content/avatar/avatar7.png'}
                        title=""
                        alt=""
                        style={{ width: 'auto', height: 'auto', maxHeight: '300px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="counter">
                  {/* Counter section, if needed */}
                </div>
              </div>
            </section>
            



                {/* Add other sections based on selectedMenuItem */}

                



{/* Year Stats Section */}
<section
  className={`section about-section gray-bg ${selectedMenuItem === 'payments' ? 'visible' : 'hidden'}`}
  
>
  <div className="container">
    <div className="main-container" style={{ width: '800px', height: '400px', background: '#444e80', color: '#abafc6', borderRadius: '5px', padding: '20px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>{`Welcome, ${landlord?.username || 'Landlord'}`}</h2>
      <div className="year-stats">
        <div className="month-group">
          <div className="bar h-100"></div>
          <p className="month" style={{ color: '#fff' }}>Jan</p>
        </div>
        <div className="month-group">
          <div className="bar h-50"></div>
          <p className="month" style={{ color: '#fff' }}>Feb</p>
        </div>
        <div className="month-group">
          <div className="bar h-75"></div>
          <p className="month" style={{ color: '#fff' }}>Mar</p>
        </div>
        <div className="month-group">
          <div className="bar h-25"></div>
          <p className="month" style={{ color: '#fff' }}>Apr</p>
        </div>
        <div className="month-group selected">
          <div className="bar h-100"></div>
          <p className="month" style={{ color: '#fff' }}>May</p>
        </div>
        <div className="month-group">
          <div className="bar h-50"></div>
          <p className="month" style={{ color: '#fff' }}>Jun</p>
        </div>
        <div className="month-group">
          <div className="bar h-75"></div>
          <p className="month" style={{ color: '#fff' }}>Jul</p>
        </div>
        <div className="month-group">
          <div className="bar h-25"></div>
          <p className="month" style={{ color: '#fff' }}>Aug</p>
        </div>
        <div className="month-group">
          <div className="bar h-50"></div>
          <p className="month" style={{ color: '#fff' }}>Sep</p>
        </div>
        <div className="month-group">
          <div className="bar h-75"></div>
          <p className="month" style={{ color: '#fff' }}>Oct</p>
        </div>
        <div className="month-group">
          <div className="bar h-25"></div>
          <p className="month" style={{ color: '#fff' }}>Nov</p>
        </div>
        <div className="month-group">
          <div className="bar h-100"></div>
          <p className="month" style={{ color: '#fff' }}>Dez</p>
        </div>
      </div>

      <div className="stats-info">
        <div className="graph-container">
          <div className="percent">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle" stroke-dasharray="100, 100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
              {/* Add similar paths for other circles */}
            </svg>
          </div>
          <p>Total: $2075</p>
        </div>

        <div className="info">
          <p style={{ marginBottom: '10px', color: '#fff' }}>Most popular property category: <br /><span>Modern Apartments:</span>2 </p>
          <p style={{ marginBottom: '10px', color: '#fff' }}>Current number of listed properties: <span> 4</span></p>
          <p style={{ marginBottom: '10px', color: '#fff' }}>Total rental income: <span>Ksh 446,897</span></p>
        </div>

      </div>
    </div>
  </div>
</section>


                
                {/* Properties Section */}
<section
  id="gallery"
  className={`section about-section gray-bg ${selectedMenuItem === 'properties' ? 'visible' : 'hidden'}`}
>
  <div className="container">
    <div className="row">
      {landlord?.properties && landlord.properties.length > 0 ?  (
        landlord?.properties.map((property) => (
          <div key={property.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={property.image} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.description}</p>
                <button
                  onClick={() => setActiveProperty(property)}
                  className="btn btn-outline-success btn-sm"
                >
                  Read More
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-lg-12 text-center">
          <p>No properties found. Add properties to display here.</p>
        </div>
      )}

      {/* Add a link button to 'addproperty.js' */}
      <div className="col-lg-12 text-center">
        <Link to="/addproperty" className="btn btn-primary">
          Add Property
        </Link>
      </div>
    </div>
  </div>
</section>




                {/* Properties Section */}
                
          

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
