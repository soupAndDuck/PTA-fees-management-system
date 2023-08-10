<template>
    <div class="contailer-fluid">
        <div class="container w-75 border rounded-3">
            <div class="container mt-3 mb-3">
                <h5>Upload Masterlist</h5>
            </div>
            <div class="container mb-3">
                <div class="label mb-3">
                    <span>Upload File:</span>
                </div>
                <div class="containter d-flex justify-content-center">
                    <div @drop.prevent="onDrop" class="drop-area d-flex justify-content-center align-items-center">
                        <slot>
                            <span>Drag and Drop Files or Browse</span>
                        </slot>
                    </div>
                </div>
                
            </div>
            <div class="container">
                <div class="label">
                    <span>Your File:</span>
                </div>
                <div class="file-info">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">FIle Type</th>
                            <th scope="col">Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>File 1</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                            <tr>
                                <td>File 2</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                            <tr>
                                <td>File 3</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['files-dropped'])

function onDrop(e) {
    emit('files-dropped', [...e.dataTransfer.files])
}

function preventDefaults(e) {
    e.preventDefault()
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop']

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults)
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults)
    })
})
</script>

<style scoped>
    .drop-area {
        width: 80%;
        height: 100px;
        border: 1px dashed black;
    }

</style>