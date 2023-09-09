import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Shop.css'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import js_logo from '../../images/js.svg'; 
import c_sharp from '../../images/C_sharp.svg';
import ruby_logo from '../../images/ruby.svg';
import java_logo from '../../images/java.svg';
import mysql_logo from '../../images/mysql.svg';
import swift_logo from '../../images/swift.svg';
import kotlin_logo from '../../images/kotlin.svg';
import python_logo from '../../images/python.svg';

const shop = () => {
    return (
<div className='product-container'>
 
        <div className="row ">
          <div className="col-md-4 card px-md-5 card">
                  <img src={java_logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Java: Building Blocks of Tech</h5>
                 <p className="card-text">Master the art of object-oriented programming with our Java course.</p>
                 <h3 class="price">$300</h3>
                <button class="buy-now-button">Buy Now</button>
             </div>
           </div>
       
        <div className="col-md-4 px-md-5 card">
      <img src={js_logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">JavaScript: Animate the Web </h5>
        <p className="card-text">Bring your websites to life with our hands-on JavaScript course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
    </div>
    
        <div className="col-md-4 px-md-5 card">
      <img src={c_sharp} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">C#: Power in Your Hands</h5>
        <p className="card-text">Develop powerful applications with our comprehensive C# course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
      </div>
      
  </div>


  <div className="row">
          <div className="col-md-4 px-md-5 card">
                  <img src={swift_logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Swift: Speed Up App Development</h5>
                 <p className="card-text">Fast-track your iOS app development with our Swift course.</p>
                 <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
             </div>
           </div>
       
        <div className="col-md-4 card">
      <img src={mysql_logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">MySQL: Manage Your Data </h5>
        <p className="card-text">Learn to organize and manipulate data with our MySQL course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
    </div>
    
        <div className="col-md-4 card">
      <img src={kotlin_logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Kotlin: Simplify Android Development </h5>
        <p className="card-text">Make Android development a breeze with our Kotlin course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
      </div>
      
  </div>

  <div className="row">

  <div className="col-md-4 card">
      <img src={ruby_logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Ruby: Jewel of the Web </h5>
        <p className="card-text">Create beautiful web applications with our engaging Ruby course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
       </div> 
       <div className="col-md-4 card">
      <img src={python_logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Python: Unleash the Power of Data</h5>
        <p className="card-text">Dive into data science with our interactive Python course.</p>
        <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
      </div>
       </div>

          <div className="col-md-4 card">
                  <img src={swift_logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Swift: Speed Up App Development</h5>
                 <p className="card-text">Fast-track your iOS app development with our Swift course.</p>
                 <h3 class="price">$300</h3>
        <button class="buy-now-button">Buy Now</button>
             </div>
           </div>
       </div>

  </div>

  
  




    
  


    );
};

export default shop;