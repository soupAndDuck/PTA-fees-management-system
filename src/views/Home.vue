<template>

    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="contents container border w-75 mb-5 rounded-3">
            <div class="container mt-3 clearfix">
                <div class="row">
                    <h5>Home</h5>
                </div>
                <div class="row">
                    <p>Search Student</p>
                    <hr class="h-color mx">
                    <div class="container-fluid d-flex flex-column align-items-stretch justify-content-center w-75">
                        <form action="" class="" >
                            <div class="row mb-3">
                                <label for="inputLRN" class="col col-lg-3 col-form-label">LRN Number</label>
                                <div class="col">
                                    <input type="text" class="form-control" id="inputLRN">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputLastName" class="col col-lg-3 col-form-label">Last Name</label>
                                <div class="col">
                                <input type="text" class="form-control" id="inputLastName">
                                </div>
                            </div>
                        </form>
                        <input id="submit" type="button" class="btn align-self-center border w-25 mb-3" value="Search">
                    </div>
                </div>
            </div>
            
        </div>

        <div class="contents container border w-75 rounded-3">
            <div class="row">
                <div class="container mt-3 clearfix">
                    <p>Records Found:</p>
                    <hr class="h-color mx">
                    <div class="container-fluid d-flex flex-column align-items-stretch justify-content-center w-75">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
    #submit {
        background: #800000;
        color: white;
        border-radius: 15px;
        font-weight: bold;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }
</style>