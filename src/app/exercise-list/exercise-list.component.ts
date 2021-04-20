// ./src/app/product-list/product-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  // define private class properties
  public exercises: any[] = [];
  public videoUrl : any;

  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getExercise()
    .then((y) => {
        const x = JSON.parse(JSON.stringify(y));
        this.exercises = x[0].fields.exercises;
        this.videoUrl = x[0].fields.exercises[0];
        debugger;
    })
  }

  
  toggleVideo() {
    this.videoplayer.play();
  }
}