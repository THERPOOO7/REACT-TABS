
import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "react-bootstrap/Button";
import Burger from "../Pages/Burger";

import Sandwich from "../Pages/Sandwich";
import Sides from "../Pages/Sides";
import KidManu from "../Pages/KidManu";
import Salad from "../Pages/Salad";
import ColdDrink from "../Pages/ColdDrink";



const Home = () => {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">

          <Tabs selected={1}>
            <div className="row" style={{ marginTop: '5%', marginBottom: '5%' }}>
              <div className="  col-lg-2 col-md-2 col-sm-12 " >
                <div className="tab_sticky tabs mt-5 mb-3">
                  <TabList className="list ">
                    <Tab>
                      <Button className="tab-btn  bg-dark" style={{ padding: '10px' }}>Burger</Button>
                    </Tab>
                    <Tab>
                      <Button className="tab-btn tab-link bg-dark" style={{ padding: '10px' }}>Sandwich</Button>
                    </Tab>
                    <Tab>
                      <Button className="tab-btn tab-link bg-dark" style={{ padding: '10px' }}>Sides</Button>
                    </Tab>
                    <Tab>
                      <Button className="tab-btn tab-link bg-dark" style={{ padding: '10px' }}>Kid Manu</Button>
                    </Tab>
                    <Tab>
                      <Button className="tab-btn tab-link bg-dark" style={{ padding: '10px' }}>Salad</Button>
                    </Tab>
                    <Tab>
                      <Button className="tab-btn tab-link bg-dark" style={{ padding: '10px' }}>Cold Drink</Button>
                    </Tab>
                  </TabList>
                </div>
              </div>

              <div class="col-lg-10 col-md-10 col-sm-12 " style={{ marginTop: '-12px' }}>
                <TabPanel className="catagory">
                  <Burger />
                </TabPanel>
                <TabPanel className="catagory">
                  <Sandwich />
                </TabPanel>
                <TabPanel className="catagory">
                  <Sides />
                </TabPanel>
                <TabPanel className="catagory">
                  <KidManu />
                </TabPanel>
                <TabPanel className="catagory">
                  <Salad />
                </TabPanel>
                <TabPanel className="catagory">
                  <ColdDrink />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};



export default Home;





















// import React from 'react'
// import {Button, Tab,Tabs, TabList, TabPanel} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import 'react-tabs/style/react-tabs.css';




// const Home = () => {
//     return(
//         <div className="Root">
//             <Tabs selected={1}>
//                 <TabList>
//                     <Tab>
//                         <Button>Foo</Button>
//                     </Tab>
//                     <Tab>
//                         <Button>Bar</Button>
//                     </Tab>
//                     <Tab>
//                         <Button>Baz</Button>
//                     </Tab>
//                 </TabList>

//                 <TabPanel>
//                     Related to foo
//                 </TabPanel>

//                 <TabPanel>
//                     Related to bar
//                 </TabPanel>

//                 <TabPanel>
//                     Related to baz
//                 </TabPanel>
//             </Tabs>
//     </div>
    
//     )
// }
   





// export default Home