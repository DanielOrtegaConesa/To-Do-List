<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)        
    ->header("Access-Control-Allow-Origin", "*")
    ->header("Access-Control-Allow-Headers", "Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-XSRF-TOKEN")
    ->header("Access-Control-Allow", "GET, POST, OPTIONS, PUT, DELETE")
    ->header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    }
}