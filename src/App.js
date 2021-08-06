import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import BuyerServices from './components/Products/BuyerServices/BuyerServices';
import SellerServices from './components/Products/SellerServices/SellerServices';
import WebDevelopment from './components/Products/WebDevelopment/WebDevelopment';
import EMarketing from './components/Products/EMarketing/EMarketing';
import BusinessProductivityServices from './components/Products/BusinessProductivityServices/BusinessProductivityServices';
import MachineLearning from './components/Products/MachineLearning/MachineLearning';
import ProfessionalsToolbox from './components/Products/ProfessionalsToolbox/ProfessionalsToolbox';
import Services from './components/Home/Services/Services'
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import HeaderForAll from './components/HeaderForAll/HeaderForAll';
// import Admin from './components/Admin/Admin';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import AdminDashboardLogin from './components/Dashboard/AdminDashboard/AdminDashboardLogin';

import Join from './components/Join/Join';
// textData
import WebText from './TextData'

function App() {
  // useEffect(() => {
  //   fetch('http://localhost:4400/getData')
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  // }, [])

  return (
    <>
      <Sidebar/>
      <div className="mainContent">
        <Router>
          <Switch>
            <Route exact path='/'>
           
              <Header/>
              <Home/>
             
            </Route>
            <Route path='/account'>
              <Navbar active=""/>
              <HeaderForAll title='Account'/>
              <Registration/>
              <Footer />
            </Route>
            <Route path='/services'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.servicesPage.header.title} 
                description={WebText.servicesPage.header.description}
              />
              <Services/>
              <Footer />
            </Route>
            <Route path='/BuyerServices'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.BuyerServices.header.title} 
                description={WebText.BuyerServices.header.description}
              />
              <BuyerServices/>
              <Footer />
            </Route>
            <Route path='/SellerServices'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.SellerServices.header.title} 
                description={WebText.SellerServices.header.description}
              />
              <SellerServices/>
              <Footer />
            </Route>
            <Route path='/webDesign'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.webDevelopment.header.title} 
                description={WebText.webDevelopment.header.description}
              />
              <WebDevelopment/>
              <Footer />
            </Route>
            <Route path='/aiAndml'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.eMarketing.header.title} 
                description={WebText.eMarketing.header.description}
              />
              <EMarketing/>
              <Footer />
            </Route>
            <Route path='/learnAndCode'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.businessPS.header.title} 
                description={WebText.businessPS.header.description}
              />
              <BusinessProductivityServices/>
              <Footer />
            </Route>
            <Route path='/brandingSolutions'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.machineLearning.header.title} 
                description={WebText.machineLearning.header.description}
              />
              <MachineLearning/>
              <Footer />
            </Route>
            <Route path='/professionalsToolbox'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.professionalsToolbox.header.title} 
                description={WebText.professionalsToolbox.header.description}
              />
              <ProfessionalsToolbox/>
              <Footer />
            </Route>
            {/* <Route path='/chat'>
              <Chat/>
              <Footer />
            </Route> */}
            <Route path='/about'>
              <Navbar active="about"/>
              <HeaderForAll 
                title={WebText.aboutPage.header.title} 
                description={WebText.aboutPage.header.description}
              />
              <AboutPage/>
              <Footer/>
            </Route>
         
            {/* <Route path='/cart'>
              <Cart/>
              <Footer />
            </Route> */}
            <Route path='/join'>
              <Navbar active=""/>
              <HeaderForAll 
                title={WebText.joinPage.header.title}
                description={WebText.joinPage.header.description}
              />
              <Join />
              <Footer />
            </Route>
            <Route path='/contact'>
              <Navbar active="contact"/>
              <HeaderForAll 
                title={WebText.contactPage.header.title} 
                description={WebText.contactPage.header.description}
              />
              <ContactPage/>
              <Footer/>
            </Route>

            <Route path='/admin'>
              <Navbar active=""/>
              <HeaderForAll title='Admin Login Page'/>
              {/* <Admin/> */}
              <AdminDashboardLogin/>
              <Footer/>
            </Route>


           

            <Route path='/dashboard'>
              <AdminDashboard/>
              <Footer />
            </Route>

            
            <Route path='*'>
              <PageNotFound/>
            </Route>

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
