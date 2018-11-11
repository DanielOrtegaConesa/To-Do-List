<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "int";

    protected $table = "tasks";
    protected $fillable = ["id", "taskname", "state"];
    public $timestamps = false;

}
