<template>
    <transition name="modal">
        <div class="modal-mask" @click="show = false">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-default-button btn" @click="$emit('close')">Close</button>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['show']
}
</script>
