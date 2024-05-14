<?php

function sortQueryModel($query)
{
    $sortField = request('sortField', 'created_at');
    $sortDirection = request('sortDirection', 'desc');

    if (request('name')) {
        $query = $query->where('name', 'like', '%' . request('name') . '%');
    }
    if (request('status')) {
        $query = $query->where('status', request('status'));
    }
    $items = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
    return $items;
}
