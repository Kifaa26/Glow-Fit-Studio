<template>
                <div class="dots d-flex justify-content-center pt-4">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
</template>
<script>
export default {
    name: 'SpinnerComp'
}
</script>

<style scoped>
.dots {
    list-style: none;
    display: flex;
}
.dots div {
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #ff7979;
    --webkit-animation: bounce 1s infinite alternate;
    --moz-animation: bounce 1s infinite alternate;
    --o-animation: bounce 1s infinite alternate;
    animation: bounce 1s infinite alternate;
}
@-webkit-keyframes bounce {
    to {
        opacity: .2;
        transform: translateY(-20px);
    }
}
@-moz-keyframes bounce {
    to {
        opacity: .2;
        transform: translateY(-20px);
    }
}
@-o-keyframes bounce {
    to {
        opacity: .2;
        transform: translateY(-20px);
    }
}
@keyframes bounce {
    to {
        opacity: .2;
        transform: translateY(-20px);
    }
}
.dots div:nth-child(2) {
    animation-delay: 300ms;
}
.dots div:nth-child(3) {
    animation-delay: .6s;
}
</style>