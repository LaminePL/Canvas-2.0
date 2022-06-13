<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$calendarEvents = [
    ['title' => 'Hardik Event', 'date' => '2022-04-01'],
    ['title' => 'HD Event', 'date' => '2022-04-02'],
];

echo json_encode($calendarEvents);
