<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function getTasks()
    {
        return Task::orderBy('id', 'desc')->get();
    }
    public function newTask($taskname)
    {
        $nt = new Task();
        $nt->taskname=$taskname;
        $nt->state=0;
        return json_encode($nt->save());
    }
    public function changeState($id)
    {
        $t = Task::where('id', $id)->first();
        if($t->state == 0){
            $t->state = 1;
        }else{
            $t->state = 0;
        }
        return json_encode($t->save());
    }
    public function dropCompleted()
    {
        $t = Task::where('state', "1")->get();
        return json_encode($t->each(function ($task, $key) {$task->delete();}));
    }
    public function dropTask($id)
    {
        $t = Task::where('id', $id)->first();
        return json_encode($t->delete());
    }
    
}
