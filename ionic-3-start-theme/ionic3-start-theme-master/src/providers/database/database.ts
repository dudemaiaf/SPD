import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private _DB : any;
  constructor(public http: Http) {
    this._DB = firebase.firestore();
  }

  createAndPopulateDocument(collectionObj : string,
                            docID         : string,
                            dataObj       : any) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._DB
        .collection(collectionObj)
        .doc(docID)
        .set(dataObj, { merge: true })
        .then((data : any) =>
        {
          resolve(data);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
  }

  getDocuments(collectionObj : string) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._DB.collection(collectionObj)
        .get()
        .then((querySnapshot) =>
        {

          // Declare an array which we'll use to store retrieved documents
          let obj : any = [];
          querySnapshot
            .forEach((doc : any) =>
            {
              obj.push({
                id             : doc.id,
                name           : doc.data().name,
                user     : doc.data().user,
                password    : doc.data().password,
                wallet :doc.data().wallet
              });
            });
          resolve(obj);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
  }

  addDocument(collectionObj : string,
              dataObj       : any) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._DB.collection(collectionObj).add(dataObj)
        .then((obj : any) =>
        {
          resolve(obj);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
  }

  deleteDocument(collectionObj : string,
                 docID         : string) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._DB
        .collection(collectionObj)
        .doc(docID)
        .delete()
        .then((obj : any) =>
        {
          resolve(obj);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
  }

  updateDocument(collectionObj : string,
                 docID         : string,
                 dataObj       : any) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._DB
        .collection(collectionObj)
        .doc(docID)
        .update(dataObj)
        .then((obj : any) =>
        {
          resolve(obj);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
  }

}
