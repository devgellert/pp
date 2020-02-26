import React, { Component } from 'react';
import '../style/css/about.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class About extends Component {

    
    render() {
        
        return (
            <div>
            <section id="about-wrapper">
                <h1>Szolgáltatásaink</h1>
                <div className="horizontal-half-line"></div>
                <Tabs>
                    <TabList>
                        <Tab>Szobák</Tab>
                        <Tab>Szórakozás</Tab>
                        <Tab>Udvar</Tab>
                        <Tab>További lehetőségek</Tab>
                    </TabList>

                    <TabPanel>
                        <p>Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor. Sed vitae eros ultrices, mattis lacus at, aliquet justo. Donec condimentum elit libero, eget mattis nibh fermentum at. Mauris tincidunt turpis eu justo scelerisque, et interdum orci consectetur. Suspendisse potenti. Sed fringilla placerat rhoncus. In luctus turpis non tellus bibendum, ultrices suscipit leo venenatis. Donec varius tempus nulla, et volutpat orci. Sed condimentum, nibh at aliquet tristique, tortor nibh commodo tellus, a consequat ex sapien vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in rutrum ligula, nec gravida nisi.</p>
                    
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor. Sed vitae eros ultrices, mattis lacus at, aliquet justo. Donec condimentum elit libero, eget mattis nibh fermentum at. Mauris tincidunt turpis eu justo scelerisque, et interdum orci consectetur. Suspendisse potenti. Sed fringilla placerat rhoncus. In luctus turpis non tellus bibendum, ultrices suscipit leo venenatis. Donec varius tempus nulla, et volutpat orci. Sed condimentum, nibh at aliquet tristique, tortor nibh commodo tellus, a consequat ex sapien vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in rutrum ligula, nec gravida nisi.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                        Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor. Sed vitae eros ultrices, mattis lacus at, aliquet justo. Donec condimentum elit libero, eget mattis nibh fermentum at. Mauris tincidunt turpis eu justo scelerisque, et interdum orci consectetur. Suspendisse potenti. Sed fringilla placerat rhoncus. In luctus turpis non tellus bibendum, ultrices suscipit leo venenatis. Donec varius tempus nulla, et volutpat orci. Sed condimentum, nibh at aliquet tristique, tortor nibh commodo tellus, a consequat ex sapien vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in rutrum ligula, nec gravida nisi.
                        </p>
                        <p>
                        Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor. Sed vitae eros ultrices, mattis lacus at, aliquet justo. Donec condimentum elit libero, eget mattis nibh fermentum at. Mauris tincidunt turpis eu justo scelerisque, et interdum orci consectetur. Suspendisse potenti. Sed fringilla placerat rhoncus. In luctus turpis non tellus bibendum, ultrices suscipit leo venenatis. Donec varius tempus nulla, et volutpat orci. Sed condimentum, nibh at aliquet tristique, tortor nibh commodo tellus, a consequat ex sapien vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in rutrum ligula, nec gravida nisi.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            <li>Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor.</li>
                            <li>Nam commodo felis pretium, facilisis est et, feugiat arcu. Nulla tincidunt placerat quam id consequat. Vestibulum sodales eleifend malesuada. Fusce feugiat mauris enim, ac consectetur quam ullamcorper vel. Nunc id cursus eros. Quisque porta risus risus, quis rutrum mi consectetur eget. Nullam ut tempor nisl, sit amet hendrerit tellus. Quisque faucibus cursus volutpat.</li>
                            <li>Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor.</li>
                            <li>Nam commodo felis pretium, facilisis est et, feugiat arcu. Nulla tincidunt placerat quam id consequat. Vestibulum sodales eleifend malesuada. Fusce feugiat mauris enim, ac consectetur quam ullamcorper vel. Nunc id cursus eros. Quisque porta risus risus, quis rutrum mi consectetur eget. Nullam ut tempor nisl, sit amet hendrerit tellus. Quisque faucibus cursus volutpat.</li>
                        </ul>
                    </TabPanel>
                </Tabs>

                
                </section>
                <div id="why-wrapper">
                    <div>
                        <h2>Lorem ipsum?</h2>
                        <ul>
                            <li>Nam commodo felis pretium, facilisis est et, feugiat arcu. Nulla tincidunt placerat quam id consequat. Vestibulum sodales eleifend malesuada. Fusce feugiat mauris enim, ac consectetur quam ullamcorper vel. Nunc id cursus eros. Quisque porta risus risus, quis rutrum mi consectetur eget. Nullam ut tempor nisl, sit amet hendrerit tellus. Quisque faucibus cursus volutpat.</li>
                            <li>                            Etiam gravida varius enim in lacinia. Suspendisse sed euismod tortor, et tempor massa. Sed non lorem fermentum, semper turpis at, consequat tortor. Sed vitae eros ultrices, mattis lacus at, aliquet justo. Donec condimentum elit libero, eget mattis nibh fermentum at. Mauris tincidunt turpis eu justo scelerisque, et interdum orci consectetur. Suspendisse potenti. Sed fringilla placerat rhoncus. In luctus turpis non tellus bibendum, ultrices suscipit leo venenatis. Donec varius tempus nulla, et volutpat orci. Sed condimentum, nibh at aliquet tristique, tortor nibh commodo tellus, a consequat ex sapien vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in rutrum ligula, nec gravida nisi.
</li>
                            <li>Nam commodo felis pretium, facilisis est et, feugiat arcu. Nulla tincidunt placerat quam id consequat. Vestibulum sodales eleifend malesuada. Fusce feugiat mauris enim, ac consectetur quam ullamcorper vel. Nunc id cursus eros. Quisque porta risus risus, quis rutrum mi consectetur eget. Nullam ut tempor nisl, sit amet hendrerit tellus. Quisque faucibus cursus volutpat.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default About;
