# Camp-Finder

A web application built with Node.js. Camp Finder is a camping database where users can upload their own campgrounds and post comments.

## Demo
https://blooming-mesa-65054.herokuapp.com/

<h3>Video Walkthrough</h3>

<img src='Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Features

<ul>
  <li>Authentication:
    <ul>
    <li> Username and password login</li>
    </ul>
  </li>
  
  <li>
  Authorization:
  <ul>
    <li>Must be logged in to comment and create campgrounds</li>
    <li>Only users who created campground can edit/delete that campground</li>
    <li>Users can only edit/delete their own comments</li>
  </ul>
  </li>
  
  <li>User Accounts:
  <ul>
  <li>Profile page containing sign up information</li>
  </ul>
  </li>
  
  <li>Success or failure messages</li>
  <li>Responsive web design</li>
  
</ul>

## Built With

<h4>Front-end</h4>

<ul>
  <li>EJS</li>
  <li>Bootstrap</li>
</ul>

<h4>Back-end</h4>

<ul>
  <li>MongoDB</li>
  <li>mongoose</li>
  <li>express</li>
  <li>express-session</li>
  <li>async</li>
  <li>passport</li>
  <li>passport-local</li>
  <li>method-override</li>
  <li>connect-flash</li>
</ul>



