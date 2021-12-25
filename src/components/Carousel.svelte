<script lang="ts">
let items = [
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
    { img: "https://via.placeholder.com/200" },
]
</script>

<div class="carousel carousel-center gap-10">
    {#each items as i, index (index)}
        <div class="carousel-item">
            <img class="aspect-[2/3]" src={i.img} alt="">
        </div>
    {/each}
</div>
