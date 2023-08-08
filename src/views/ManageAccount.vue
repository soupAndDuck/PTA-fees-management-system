<template>

    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="contents container border w-75 mb-5 rounded-3">
            <div class="container mt-3">
                <div class="row mb-5">
                    <h5>Manage Account</h5>
                </div>
                <div class="row">
                    <div class="container-fluid d-flex flex-column align-items-stretch justify-content-center w-75">
                        <form action="" class="" >
                            <div class="row mb-3">
                                <label for="inputLRN" class="col col-lg-3 col-form-label">LRN No.</label>
                                <div class="col">
                                    <input type="text" class="form-control" id="inputLRN">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputFistName" class="col col-lg-3 col-form-label">Fist Name</label>
                                <div class="col">
                                <input type="text" class="form-control" id="inputFistName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputMiddleName" class="col col-lg-3 col-form-label">Middle Name</label>
                                <div class="col">
                                <input type="text" class="form-control" id="inputMiddleName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputLastName" class="col col-lg-3 col-form-label">Last Name</label>
                                <div class="col">
                                <input type="text" class="form-control" id="inputLastName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="" class="col col-lg-3 col-form-label">Sex/Gender</label>
                                <div class="col">
                                <input type="text" class="form-control" id="">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Grade Level</label>
                                </div>
                                <div class="col-md-3">
                                    <select v-model="selected" class="form-select">
                                        <option v-for="option in options" :key="option.value" :value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-2">Section</div>
                                <div class="col-md-4">
                                    <select v-model="selected_sec" class="form-select">
                                        <option v-for="section in sections" :key="section.value" :value="section.value">
                                            {{ section.text }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row d-flex justify-content-end">
                    <input id="submit" type="button" class="btn border w-25 mb-3" value="Next">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    const selected = ref('Select Grade');
    const selected_sec = ref('Select Section');

    const options = ref([
        { text: 'Select Grade', value: 'Select Grade' },
        { text: 'Grade 7', value: 'Grade 7'},
        { text: 'Grade 8', value: 'Grade 8'},
        { text: 'Grade 9', value: 'Grade 9 ' }
    ]);

    const sections = ref([
        { text: 'Select Section', value: 'Select Section' },
        { text: 'Section A', value: 'Section A'},
        { text: 'Section B', value: 'Section B'},
        { text: 'Section C', value: 'Section C ' }
    ])
    
</script>