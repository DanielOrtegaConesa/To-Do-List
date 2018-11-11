import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {map} from 'rxjs/operators';
import { observable } from "rxjs";

@Injectable()
export class TaskServices{
    public url: string;
    
    constructor(private _http: Http){
        this.url = "http://localhost/laravel/public/";
    };

    getTasks(){        
        return this._http.get(this.url+"tasks", "").pipe(map(res => res.json()));
    }
    newTask(taskname){        
        return this._http.get(this.url+"task/"+taskname, "").pipe(map(res => res.json()));
    }
    changeState(id){
        return this._http.get(this.url+"changeState/"+id, "",).pipe(map(res => res.json()));
    }
    dropCompleted(){
        return this._http.get(this.url+"dropCompleted", "",).pipe(map(res => res.json()));
    }
    dropTask(id){
        return this._http.get(this.url+"dropTask/"+id, "",).pipe(map(res => res.json()));
    }
}