<template>
    <button class="dropdown-btn">Dropdown
        <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
    <h5>Account Management</h5>
    <ul class="list-unstyled px-2">
        <li>
            <router-link 
                to="/"
                class="nav-link"
                active-class="active"
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
                active-class="active "
            >Create Student Account</router-link>
        </li>

        <li class="">
            <router-link 
                to="/view"
                class="nav-link"
                active-class="active emphasize"
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

<style scoped>
    .active.router-link-exact-active.nav-link {
        font-weight: bold;
        text-shadow: 1px 1px 4px black;
    }

    .dropdown-btn {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: #818181;
        display: block;
        border: none;
        background: none;
        width:100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    }

    /* On mouse-over */
    .dropdown-btn:hover {
        color: #f1f1f1;
    }

    /* Add an active class to the active dropdown button */
    .active {
        background-color: green;
        color: white;
    }

    /* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
    .dropdown-container {
        display: none;
        background-color: #262626;
        padding-left: 8px;
    }

    /* Optional: Style the caret down icon */
    .fa-caret-down {
        float: right;
        padding-right: 8px;
    }
</style>