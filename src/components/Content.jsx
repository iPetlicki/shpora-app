import React from 'react';
import {Routes, Route} from "react-router-dom";
import VirtualDom from "../pages/VirtualDom";
import Components from "../pages/Components";
import Fragment from "../pages/Fragment";
import Refs from "../pages/Refs";
import Keys from "../pages/Keys";
import LifeCycle from "../pages/LifeCycle";
import State from "../pages/State";
import Props from "../pages/Props";
import ReactMemo from "../pages/ReactMemo";
import UseEffect from "../pages/UseEffect";
import Context from "../pages/Context";
import Form from "../pages/Form";
import Router from "../pages/Router";
import Events from "../pages/Events";

const Content = () => {
    return (
        <>
           <Routes>
               <Route path='/virtual-dom' element={<VirtualDom />} />
               <Route path='/components' element={<Components />} />
               <Route path='/fragments' element={<Fragment />} />
               <Route path='/refs' element={<Refs />} />
               <Route path='/keys' element={<Keys />} />
               <Route path='/events' element={<Events/>} />
               <Route path='/life-cycle' element={<LifeCycle />} />
               <Route path='/state' element={<State />} />
               <Route path='/props' element={<Props />} />
               <Route path='/react-memo' element={<ReactMemo />} />
               <Route path='/use-effect' element={<UseEffect />} />
               <Route path='/context' element={<Context />} />
               <Route path='/form' element={<Form />} />
               <Route path='/router' element={<Router />} />
           </Routes>
        </>
    );
};

export default Content;
