<div id="services-cta" ng-controller="ServicesCTACtrl">
  <div class="service-section container">
    <h1 class="service-header">Services</h1>

    <div class="row service-content">
      <div class="col-md-4" ng-repeat="service in services" ng-cloak>
        <h2>{{service.heading}}</h2>
        <p>
          {{service.desc}}
        </p>
      </div>
    </div>
  </div>
</div>
