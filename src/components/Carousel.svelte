<script lang="ts">
    import { flip } from "svelte/animate";
    export let items = [];
    export let title = "";
    export let link = "";
    export let linkName = "";

    let transitionSpeed = 500;

    const rotateLeft = () => {
        const transitioningImage = items[items.length - 1];
        document.getElementById(transitioningImage.id).style.opacity = "0";
        items = [items[items.length - 1], ...items.slice(0, items.length - 1)];
        setTimeout(() => {
            document.getElementById(transitioningImage.id).style.opacity = "1";
        }, transitionSpeed);
    };

    const rotateRight = () => {
        const transitioningImage = items[0];
        document.getElementById(transitioningImage.id).style.opacity = "0";
        items = [...items.slice(1, items.length), items[0]];
        setTimeout(() => {
            document.getElementById(transitioningImage.id).style.opacity = "1";
        }, transitionSpeed);
    };
</script>

<div class="space-y-10 py-10 md:container relative">
    <div class="flex space-y-2 flex-col md:flex-row md:justify-between md:items-center px-5 md:px-0">
        <h1 class="heading">{title}</h1>
        <a class="flex space-x-5 md:space-x-10 items-center md:mt-2 group" href={link}>
            <p class="whitespace-nowrap text-blue-500 group-hover:text-blue-600 transition font-semibold">{linkName}</p>
            <img src="/assets/arrow.svg" alt="" class="group-hover:scale-105 transition duration-200" />
        </a>
    </div>

    <!-- MOBILE -->
    <div class="carousel carousel-center gap-10 relative md:hidden px-5">
        {#each items as i, index (index)}
            <div animate:flip id="slide{index}" class="carousel-item">
                <a href={i.link} class="w-52">
                    <img class="aspect-[2/3] w-full" src={i.img} alt="" />
                    <p class="text-xl font-bold mt-1">{i.cost}</p>
                    <p class="mt-1 font-semibold text-blue-500">{i.name}</p>
                    <p class="font-light">{i.text}</p>
                </a>
            </div>
        {/each}
    </div>

    <!-- DESKTOP -->
    <div class="w-full relative md:flex flex-col overflow-x-hidden hidden">
        <div class="flex flex-nowrap justify-center">
            {#each items as i (i.id)}
                <div
                    animate:flip={{ duration: transitionSpeed }}
                    id={i.id}
                    class="min-w-[200px] mx-[27px]"
                >
                    <a href={i.link} class="w-full">
                        <img
                            class="aspect-[2/3] w-full"
                            src={i.img}
                            alt=""
                        />
                        <p class="text-xl font-bold mt-1">{i.cost}</p>
                        <p class="mt-1 font-semibold text-blue-500">{i.name}</p>
                        <p class="font-light">{i.text}</p>
                    </a>
                </div>
            {/each}
        </div>
    </div>
        <button on:click={rotateLeft} class="absolute md:inline-block left-6 xl:left-24 md:top-48 xl:top-60 hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button on:click={rotateRight} class="absolute md:inline-block right-6 xl:right-24 md:top-48 xl:top-60 hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
</div>
