import _ from 'lodash';
import $ from 'jquery';
import printMe from './print.js';
import './style.css';

function component() {
    return $("<div/>").html(_.join(['Hello', 'webpack', 'Alex'], ' ')).addClass('red').append($('<button/>').click(printMe).html('Click Me'));
  }
  
$('body').append(component());

  
  