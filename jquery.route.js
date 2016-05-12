/*!
 * jQuery Route v1.0.0
 * 
 * Copyright 2016
 * Authors: Victor Silva
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Project: https://github.com/victorlss/jquery-route
 */
(function($){
  $.fn.route = function( options ) {

    var settings = $.extend({
      default: '',
      routes: [],
      content: this
    }, options );  

    window.onhashchange = function(){
      loadPage(window.location.hash);
    }

    loadPage(window.location.hash ? window.location.hash : "#" + settings.default);

    function loadPage(hash)
    {
      var url = hash.substring(1);
      var route = {};
      
      $.each(settings.routes,function(index,value){
        var paramsNames = value.url.match(/\{([a-z]+)\}/g);
        if(paramsNames){
          var params = url.match(/([0-9]+)/g);
          if(paramsNames.length == params.length){
            route = value;
            route.url = url;
            $.each(paramsNames,function(index,name){
              route.view = route.view.replace(name,params[index])
            });
          }	
        }	
        else if(value.url == url)
          route = value;
      });

      if(route){
        $.get(route.view).done(function() {           
          settings.content.load(route.view);
          document.location.hash = "#" + route.url;
        }).fail(function(){
          console.log("404"); //TODO: 404 page
        });
      }
      else
       console.log("404"); //TODO: 404 page
    }
  };

  return this;
}(jQuery));
