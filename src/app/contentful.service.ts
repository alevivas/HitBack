
// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: 'cllryrw4zmwf',
  accessToken: 'CFPAT-hj6rOSbSd4Q9AnrrK_7QuDE-nf5iqCZHZGPImmXa2nM',

  contentTypeIds: {
    exercises: 'Exercises'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: 'cllryrw4zmwf',
    accessToken: 'ZfiYLaLw3RCdkuTwTU8zqIthxJk7roIh_nStW8g9lG8'
  });

  constructor() { }

  getExercise(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'exerciseInRoutine'
    }, query))
    .then(res => res.items);
  }
}