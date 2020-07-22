import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './home.css';

class Order extends React.Component {
    state = { name: '' };
      
    handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${this.state.name}`);
      this.props.onSubmit(resp.data);
      this.setState({ name: '' });
    };
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <ul className="formtext">
            <ul><input 
              type="text" 
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              placeholder="Full Name" 
              required 
            /></ul>

            <ul><input 
              type="text" 
              placeholder="Email" 
              required 
            /></ul>

            <ul><input 
              type="text" 
              placeholder="Phone" 
              required 
            /></ul>

            <ul><input 
              type="text" 
              placeholder="Credit Card" 
              required 
            /></ul>
            
            <ul><button type="submit">SUBMIT</button></ul>
            </ul>
          </form>
        );
      }
  }

export default Order;