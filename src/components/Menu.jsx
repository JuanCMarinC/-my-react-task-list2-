import React, { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageTasks from "../pages/pageTasks";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const HomePage = lazy(() => import("../pages/PageHome"));
const NotFound = lazy(() => import("../pages/NotFound"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

export function Menu(){

    return(

        
        <div>

            <Tabs isFitted variant='enclosed' >
                <TabList mb='1em'>
                    <Tab>Home</Tab>
                    <Tab>About</Tab>
                    <Tab>Tasks</Tab>
                </TabList>

                <TabPanels>

                    <TabPanel>
                        <HomePage></HomePage>
                    </TabPanel>
                    
                    <TabPanel>
                        <AboutPage></AboutPage>
                    </TabPanel>
                    
                    <TabPanel>
                        <PageTasks></PageTasks>
                    </TabPanel>
                </TabPanels>
            </Tabs>



       
      </div>
    )
}