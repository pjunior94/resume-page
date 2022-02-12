import React, { useEffect, useState } from 'react';
import './App.css';

import { getResumeData } from "./services/ResumeService";
import { Resume } from './models/Resume';

import  PageIndex from "./pages/index/page-index";

function App() {
  return (
    <PageIndex />
  );
}

export default App;
