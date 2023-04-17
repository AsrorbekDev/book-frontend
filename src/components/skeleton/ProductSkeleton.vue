<script>
export default {
    name: "ProductSkeletonn",
}
</script>

<template>
    <div
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
            v-for="n in 5"
            :key="n"
    >
        <div class="card" aria-hidden="true">
            <img
                    src="../../assets/Loading_icon.gif"
                    class="card-img-top"
                    alt="Skeleton loading"
            />
            <div class="card-body">
                <h5 class="card-title title text-truncate">
                    <span class="placeholder col-7"></span>
                </h5>
                <p class="card-text title text-truncate">
                    <span class="placeholder col-4"></span> <span class="placeholder col-3"></span>
                </p>
                <RouterLink to="#" class="btn btn-primary">Read</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
