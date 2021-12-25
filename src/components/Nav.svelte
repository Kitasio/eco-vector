<script lang="ts">
    import { slide, fly } from "svelte/transition";

    let menuShown = false;
    let items = [
        { color: "eco-purple", name: "Издание книг", link: "/book-releases" },
        { color: "eco-green", name: "Издание журналов", link: "/journal-releases" },
        { color: "eco-gray", name: "IT-платформа", link: "#" },
        { color: "black", name: "Академия", link: "#" },
        { color: "eco-yellow", name: "Электронные ресурсы", link: "#" },
        { color: "eco-red", name: "Услуги", link: "#" },
        { color: "eco-purple", name: "Партнеры", link: "#" },
        { color: "eco-blue", name: "Контакты", link: "#" },
    ];
</script>

<div class="shadow-lg bg-white sticky top-0 w-full lg:px-5 xl:px-24 z-10">
    <div
        class="w-full flex justify-between items-center px-5 py-5 lg:px-0 lg:py-8 max-w-screen-2xl mx-auto"
    >
        <a href="/#">
            <img class="w-20 lg:w-28" src="/assets/logo.png" alt="" />
        </a>
        <div class="hidden lg:flex lg:space-x-4 xl:space-x-6 2xl:space-x-10 whitespace-nowrap">
            {#each items as i, index (index)}
                <a class="2xl:text-lg after:bg-{i.color}" href={i.link}>
                    {i.name}
                </a>
            {/each}
        </div>
        <div class="lg:hidden" on:click={() => (menuShown = !menuShown)}>
            {#if !menuShown}
                <svg
                    in:fly
                    class="h-8 w-8 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            {:else}
                <svg
                    in:fly
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            {/if}
        </div>
    </div>
    {#if menuShown}
        <div
            transition:slide
            class="flex lg:hidden absolute bg-white flex-col space-y-3 py-5 px-5 w-full shadow-lg"
        >
            {#each items as i, index (index)}
                <a class="text-lg" href={i.link}>{i.name}</a>
            {/each}
        </div>
    {/if}
</div>

<style>
    a {
        display: block;
        position: relative;
        padding: 0.2em 0;
    }
    /* Fade in */
    a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        /* background-color: hotpink; */
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
    }

    a:hover::after,
    a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
    }
</style>
