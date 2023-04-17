<script>
export default {
    name: "TheHeader",
};
</script>

<template>
    <div class="row">
        <div class="col">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <RouterLink class="navbar-brand" to="/">Books</RouterLink>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/login"> Login</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/register">
                                        Register
                                    </RouterLink>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><RouterLink class="dropdown-item" to="/create-category">Create category</RouterLink></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Book
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><RouterLink class="dropdown-item" to="/create-book">Create book</RouterLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input
                                        class="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                />
                                <button class="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<style scoped></style>
