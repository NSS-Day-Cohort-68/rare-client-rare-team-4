import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from '../lists/CategoryList';
import CategoryView from './CategoryView';
import CategoryForm from '../forms/CategoryForm';

export const ApplicationViews = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" exact component={CategoryList} />
        <Route path="/create-category" exact component={CategoryForm} />
        <Route path="/categories/:categoryId" component={CategoryView} />
      </Routes>
    </Router>
  );
};

export default ApplicationViews;