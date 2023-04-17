<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "TheCategories",
    computed: {
        ...mapGetters(['getCategories', 'getTotalCategories']),
    },
    methods: {
        ...mapActions(['fetchCategories']),
    },
    mounted() {
        this.fetchCategories();
    },
};
</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <RouterLink
                    v-for="category in getCategories"
                    :key="category.id"
                    :to="'/categories/' + category.id"
                    class="list-group-item list-group-item-action"
            >
                {{ category.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>
