import React, {useState, useEffect} from 'react'
import ListCard from './ListCard'
import './css/AllStartups.css'

function AllStartups() {
    return (
      <div className="all-Startups">
        <div className="heading">Startups</div>
        <div className="container">
          <div className="navigation">
            <input type="text" className="search" placeholder="search..." />
          </div>
          <div className="list-container">
            <ListCard name="Name" desc="Creating Reusable Rockets for space exploration and transportation of supplies and sending satellites to the orbit" branch="CSE" founder="Himanshu" />
            
          </div>
        </div>
      </div>
    );
}

export default AllStartups
