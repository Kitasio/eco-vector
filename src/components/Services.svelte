<script lang="ts">
    import { onMount } from "svelte";
    import { slide, fade } from "svelte/transition";
    export let items = [];

    let active;
    onMount(() => {
        active = items[0];
    });

    const changeActive = (index) => {
        if (active != items[index]) {
            active = items[index];
        }
    };
</script>

<div>
    <h1 class="heading">Услуги</h1>

    <!-- MOBILE -->
    <div class="mt-5 space-y-5 lg:hidden">
        {#each items as i, index (index)}
            <div class="w-full rounded shadow-brand p-5">
                <div
                    on:click={() => (i.shown = !i.shown)}
                    class="text-xl font-medium flex gap-3 justify-between items-center cursor-pointer"
                >
                    <h1>{i.title}</h1>
                    {#if !i.shown}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 stroke-current text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </div>
                    {:else}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 stroke-current text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 12H6"
                                />
                            </svg>
                        </div>
                    {/if}
                </div>
                {#if i.shown}
                    <div transition:slide class="pt-3 mt-3 border-t-2">
                        <p class="whitespace-pre-line small-text">
                            {i.text}
                        </p>
                        <a
                            href={i.link}
                            class="mt-3 btn btn-outline border-2 rounded border-eco-blue text-eco-blue hover:text-white hover:bg-eco-blue hover:border-eco-blue xl:btn-lg"
                            >Заказать</a
                        >
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    <!-- DESKTOP -->
    <div class="hidden lg:grid grid-cols-4 grid-rows-2 gap-10 mt-5">
        {#if active}
            <div class="col-span-1 space-y-2">
                {#each items as i, index (index)}
                    <h1
                        on:click={() => changeActive(index)}
                        class={active.title == i.title
                            ? "text-lg leading-6 text-slate-900 cursor-pointer transition"
                            : "text-lg leading-6 text-slate-500 hover:text-slate-900 cursor-pointer transition"}
                    >
                        {i.title}
                    </h1>
                {/each}
            </div>
            <div class="col-span-3 rounded shadow-brand p-10 min-h-32 row-span-2">
                {#key active}
                    <div
                        class="w-full space-y-5"
                    >
                        <h1 class="text-xl font-medium">{active.title}</h1>
                        <p class="whitespace-pre-line small-text">
                            {active.text}
                        </p>
                        <a
                            href={active.link}
                            class="btn btn-outline border-2 rounded border-eco-blue text-eco-blue hover:text-white hover:bg-eco-blue hover:border-eco-blue"
                            >Заказать</a
                        >
                    </div>
                {/key}
            </div>
        {/if}
    </div>
</div>
