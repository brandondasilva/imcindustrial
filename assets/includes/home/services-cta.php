<div id="services-cta" ng-controller="ServicesCTACtrl">
  <div class="service-section container">
    
    <h1 class="section-header">Services</h1>

    <div class="row service-content">
      <div class="col-md-4" ng-repeat="service in services" ng-cloak>

        <h2>{{service.heading}}</h2>

        <div class="service-image-wrapper">
          <div class="service-image" style="background-image: url(<?php bloginfo("template_directory"); ?>{{service.image}}); ">

            <p>{{service.desc}}</p>

            <a href="{{service.link}}" class="button-wrapper">
              <span class="button service-button">
                More Info
              </span>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
