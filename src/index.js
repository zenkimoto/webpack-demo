import _ from 'lodash';
import $ from 'jquery';

function component() {
    return $("<div/>").html(_.join(['Hello', 'webpack', 'Alex'], ' '));
  }
  
$('body').append(component())

  
  