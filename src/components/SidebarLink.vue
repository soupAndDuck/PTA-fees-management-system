<template>
    <h5>Settings</h5>
    <ul class="list-unstyled px-2">
        <li>
            <router-link 
                to="/"
                class="nav-link"
                active-class="active emphasize"
            >Account Settings</router-link>
        </li>
        <li class="">
            <router-link 
                to="/create-clerk"
                class="nav-link"
                active-class="active"
            >Create Clerk Account</router-link>
        </li>
        <li class="">
            <router-link 
                to="/create-stud"
                class="nav-link"
                active-class="active"
            >Create Student Account</router-link>
        </li>

        <li class="">
            <router-link 
                to="/view"
                class="nav-link"
                active-class="active"
            >View Account/User Profile</router-link>
        </li>
    </ul>
    <hr class="h-color mx-1">
    <h5>Students Profiling</h5>
    <ul class="list-unstyled px-2">
        <li>
            <router-link 
                to="/"
                class="nav-link"
                active-class="active emphasize"
            >Upload Masterlist</router-link>
        </li>
    </ul>
    <hr class="h-color mx-1">
    <h5>Fees Setting</h5>
    <ul class="list-unstyled px-2">
        <li class="">
            <router-link 
                to="/messages"
                class="nav-link"
                active-class="active"
                aria-current="page"
            >Set School Year</router-link>
        </li>
        <li class="">
            <router-link 
                to="/messages"
                class="nav-link"
                active-class="active"
                aria-current="page"
            >Set Fees Breakdown</router-link>
        </li>
        <li class="">
            <router-link 
                to="/messages"
                class="nav-link"
                active-class="active"
                aria-current="page"
            >Set Discounts</router-link>
        </li>
        <li class="">
            <router-link 
                to="/messages"
                class="nav-link"
                active-class="active"
                aria-current="page"
            >Set Official Reciept Number</router-link>
        </li>
    </ul>
    <hr class="h-color mx-1">
    <h5>Payment Management</h5>
    <ul class="list-unstyled px-2">
        <li class="">
            <router-link 
                to="/messages"
                class="nav-link"
                active-class="active"
                aria-current="page"
            >Search Student Profile</router-link>
        </li>
    </ul>
</template>