import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs/Subscription';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators';


declare var google: any;
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  previousTracks = [];

  positionSubscription: Subscription;
  
  constructor(
    private router: Router, public navCtrl: NavController, private plt: Platform, private geolocation: Geolocation, private storage: Storage
    ) { }

    ionViewDidEnter() {
      this.showMap();
    }

    showMap() {
      this.plt.ready().then(() => {
        this.loadHistoricRoutes();
   
        let mapOptions = {
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
        this.geolocation.getCurrentPosition().then(pos => {
          let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          this.map.setCenter(latLng);
          this.map.setZoom(16);
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      });
    }
   
    loadHistoricRoutes() {
      this.storage.get('routes').then(data => {
        if (data) {
          this.previousTracks = data;
        }
      });
    }
    startTracking() {
      this.isTracking = true;
      this.trackedRoute = [];
   
      this.positionSubscription = this.geolocation.watchPosition()
        .pipe(
          filter((p) => p.coords !== undefined) //Filter Out Errors
        )
        .subscribe(data => {
          setTimeout(() => {
            this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
            this.redrawPath(this.trackedRoute);
          }, 0);
        });
   
    }
   
    redrawPath(path) {
      if (this.currentMapTrack) {
        this.currentMapTrack.setMap(null);
      }
   
      if (path.length > 1) {
        this.currentMapTrack = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#7a7aea',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.currentMapTrack.setMap(this.map);
      }
    }

    stopTracking() {
      let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
      this.previousTracks.push(newRoute);
      this.storage.set('routes', this.previousTracks);
     
      this.isTracking = false;
      this.positionSubscription.unsubscribe();
      this.currentMapTrack.setMap(null);
    }
     
    showHistoryRoute(route) {
      this.redrawPath(route);
    }

  ngOnInit() {
  }
  Tabs() {
    this.router.navigate(['/tabs']);
  }

}
