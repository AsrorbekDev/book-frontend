<script>
export default {
    name: "CategoriesSkeleton",
}
</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <RouterLink
                    v-for="n in 5"
                    :key="n"
                    to="#"
                    class="list-group-item list-group-item-action"
            >
                <span class="placeholder col-7"></span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>
