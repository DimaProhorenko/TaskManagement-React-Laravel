<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();
        $sortField = request('sortField', 'created_at');
        $sortDirection = request('sortDirection', 'desc');

        if (request('name')) {
            $query = $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('email')) {
            $query = $query->where('email', 'like', '%' . request('email') . '%');
        }
        $users = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('User/index', [
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {

        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        User::create($data);
        return to_route('user.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
