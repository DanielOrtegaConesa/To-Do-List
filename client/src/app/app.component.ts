import { Component, OnInit } from '@angular/core';
import {TaskServices} from "./services/TaskSerivices";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskServices]
})
export class AppComponent {
  title = 'To-Do List';
  tasks = [];
  nuevaTarea= "";
  
  constructor(
    private _TaskServices:TaskServices){}
    
    ngOnInit(){
      this.getTasks();
    }
    
    getTasks(){
      this._TaskServices.getTasks().subscribe(
        tasks=>{
          this.tasks = tasks;
        },
        error =>{
          console.log(JSON.parse(error));
        });
      }
      
      dropCompleted(){
        this._TaskServices.dropCompleted().subscribe(
          Result=>{            
            this.getTasks();
          },
          error =>{
          });
          
        }
        
        changeState(id){
          this._TaskServices.changeState(id).subscribe(
            Result=>{
              console.log(Result);
            },
            error =>{
              console.log(JSON.parse(error));
            });
          }
          
          onSubmit(){
            this._TaskServices.newTask(this.nuevaTarea).subscribe(
              Result=>{
                console.log(Result);
                this.nuevaTarea = "";
                this.getTasks();
              },
              
              error =>{
                console.log(error);
              });
              
            }
            
            dropTask(id){
              this._TaskServices.dropTask(id).subscribe(
                Result=>{
                  console.log(Result);
                  
                  this.getTasks();
                },
                
                error =>{
                  console.log(error);
                });
              }
              
              validar(){
                return this.nuevaTarea.length > 0;
              }
              
            }
            
            