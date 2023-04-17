<template>
    <div class="container-fluid">
        <TheHeader/>
        <div class="row mt-4">
            <TheCategories/>
            <div class="col-12 col-md-10 mt-4 mt-md-0">
                <RouterView/>
            </div>
        </div>
    </div>
    <TheFooter/>
</template>

<style></style>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheCategories from "@/components/layout/TheCategories.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
    name: "App",
    components: {
        TheHeader,
        TheCategories,
        TheFooter,
    },
};
</script>
