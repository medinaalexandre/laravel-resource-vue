<?php

Auth::routes();

Route::get('/{any}', 'SpaController@index')->where('any', '.*');
