import React, { Fragment } from 'react';
import { RiSettings3Fill } from "react-icons/ri";
import Circle from 'react-circle';
import { Route, Switch } from 'react-router-dom';
import { About } from "./routes/About";
import { Home } from "./routes/Home";

import './App.css';

export const App = () => {
    return (<Fragment>
        <div className="container">
            <div className="nav">
                <div>
                    <p>LinkedIn AutoConnect</p>
                </div>
                <div className='icon'>
                    <RiSettings3Fill />
                </div>
            </div>
            <div className="box">
                <div>
                    <p className="text">Invitations Sent </p>
                </div>
                <div className="circle-contain">
                    <Circle
                        showPercentage={true}
                        showPercentageSymbol={false}
                        textColor={"white"}
                        lineWidth={"30"}
                        progress={88}
                        textStyle={{
                            font: 'bold 130px Helvetica, Arial, sans-serif'
                        }}
                        size={"200"}
                        progressColor="rgb(76, 154, 255)"
                    />
                </div>
                <div className="button-contain">
                    <button id="button1" className="button">
                        Start Connection
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
        //     <Switch>
        //         <Route path="/about">
        //             <About/>
        //         </Route>
        //         <Route path="/">
        //             <Home/>
        //         </Route>
        //     </Switch>
        // )
    )
};
