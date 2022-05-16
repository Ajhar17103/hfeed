import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../shop.css";


function TopCategories() {
  return (
   <>
  
                <h6 style={{fontSize:'18px', fontWeight:'700'}}>Top Categories</h6>
                <Row className="mb-5">

                   

                  <Col md={3} sm={12} className="category-cards" >
                  
                    <div>
                         <img src="/img/cat-1.png"/> 
                    </div>

                    <div className="category-items">

                          <h6>Electronic Appliances </h6>
                          <ul>
                              <li>Test-1</li>
                              <li>Test-2</li>
                              <li>Test-3</li>
                              <li>Test-4</li>
                              <li>Test-5</li>
                          </ul>
                    </div>
                    
                  </Col>

                  <Col md={3} sm={12} className="category-cards" >
                     <div>
                         <img src="/img/cat-2.png"/> 
                    </div>

                    <div className="category-items">
                          <h6>Electrical Appliances </h6>
                          
                          <ul>
                              <li>Test-1</li>
                              <li>Test-2</li>
                              <li>Test-3</li>
                              <li>Test-4</li>
                              <li>Test-5</li>
                          </ul>
                           
                          
                    </div>
                  </Col>
                  <Col md={3} sm={12} className="category-cards" >
                     <div>
                         <img src="/img/cat-3.png"/> 
                    </div>

                    <div className="category-items">
                          <h6>Beauty and Personal Care </h6>
                          
                          <ul>
                              <li>Skin Care</li>
                              <li>Hair Care</li>
                              <li>Personal Care</li>
                              <li>Fragrance</li>
                              <li>Makeup</li>
                          </ul>
                           
                          
                    </div>
                  </Col>

                {/*  <Col md={3} sm={12} className="category-cards" >
                     <div>
                         <img src="/img/cat-4.png"/> 
                    </div>

                    <div className="category-items">
                          <h6>Grocery and Essentails </h6>
                          
                          <ul>
                              <li>Test-1</li>
                              <li>Test-2</li>
                              <li>Test-3</li>
                              <li>Test-4</li>
                              <li>Test-5</li>
                          </ul>
                           
                          
                    </div>
                  </Col>
                   <Col md={3} sm={12} className="category-cards" >
                     <div>
                         <img src="/img/cat-5.png"/> 
                    </div>

                    <div className="category-items">
                          <h6>Men's Collection </h6>
                          
                          <ul>
                              <li>Test-1</li>
                              <li>Test-2</li>
                              <li>Test-3</li>
                              <li>Test-4</li>
                              <li>Test-5</li>
                          </ul>
                          
                    </div>
                  </Col>
                  <Col md={3} sm={12} className="category-cards" >
                     <div>
                         <img src="/img/cat-6.png"/> 
                    </div>

                    <div className="category-items">
                          <h6>Women's Collection </h6>
                          <ul>
                              <li>Test-1</li>
                              <li>Test-2</li>
                              <li>Test-3</li>
                              <li>Test-4</li>
                              <li>Test-5</li>
                          </ul>
                           
                          
                    </div>
                  </Col> */}

                  
                 

                
                </Row>
             
   </>
  )
}

export default TopCategories