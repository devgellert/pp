import React, { Component } from 'react';
import '../style/css/about.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class About extends Component {

    
    render() {
        
        return (
            <section id="about-wrapper">
                <h1>Szolgáltatásaink</h1>
                <Tabs>
                    <TabList>
                        <Tab>Szobák</Tab>
                        <Tab>Szórakozás</Tab>
                        <Tab>Udvar</Tab>
                        <Tab>További lehetőségek</Tab>
                    </TabList>

                    <TabPanel>
                        <p>75 m2 alapterületű, 1 háló szobával (3fő) + 1 nyitott galériával (3fő), nagy nappalival, étkezővel, teljesen felszerelt konyhával, fürdőszobával rendelkezik</p>
                    
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                        <p>A lakáshoz külön terasz tartozik, nagy zárt és parkosított udvarral ahol kiváló lehetőség nyílik különböző szabadidős programokhoz felnőttek és gyermekek részére egyaránt</p>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            <li>Ingyenes parkolás</li>
                            <li>Balatoni strand 200m-re</li>
                            <li>Ingyenes WIFI</li>
                            <li>Fagylaltozó 200m-re</li>
                        </ul>
                    </TabPanel>
                </Tabs>

            </section>
        );
    }
}

export default About;
