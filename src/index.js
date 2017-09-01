import _ from 'lodash';
import $ from 'jquery';
import './style.css';

function component() {
    return $("<div/>").html(_.join(['Hello', 'webpack', 'Alex'], ' ')).addClass('red');
  }
  
$('body').append(component());

  
  