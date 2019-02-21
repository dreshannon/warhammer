<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newArmyModalLabel"><slot name="title"></slot></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <slot name="button"></slot>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modalId']
}
</script>

<style lang="scss" scoped>
.modal-content {
    background-color: #212629;

    .modal-header {
        border-bottom-color: black;
    }

    .modal-footer {
        border-top-color: black;
    }
}
</style>
