import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions/filter.action'

const FilterButton = ({ text, filterType, active, filterTodo }) => {
   return (
      <button onClick={() => filterTodo(filterType)} disabled={active ? true : false}>{text}</button>
   );
}

const MapStateToProps = (state, ownProps) => ({
   active: state.filter === ownProps.filterType
})

const MapDispatchToProps = dispatch => ({
   filterTodo: filterType => dispatch(filter(filterType))
})

export default connect(MapStateToProps, MapDispatchToProps)(FilterButton);