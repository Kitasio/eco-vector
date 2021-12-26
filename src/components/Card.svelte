<script lang="ts">
    export let color = 'eco-purple'
    export let imgPath = '';
    export let btnText = 'Подробнее';
    export let heading = 'Издание книг';
    export let text = 'Издательство «Эко-Вектор» ежегодно, с 2009 года, издает десятки монографий, учебников, учебных и учебно-методических пособий';
</script>

<div class="bg-{color} w-full text-white flex flex-col items-center py-10 px-5 sm:flex-row max-w-screen-2xl mx-auto xl:px-20 2xl:px-40 sm:justify-between xl:rounded-b">
    <div class="flex flex-col space-y-4 lg:space-y-10 sm:w-1/2">
        <span class="text-4xl font-semibold lg:text-6xl">
            <div name="heading">{@html heading}</div>
        </span>
        <span class="font-extralight lg:text-2xl lg:font-light lg:leading-relaxed">
            <div name="text">{@html text}</div>
        </span>
        <div class="flex items-center">
            <a href="/book-releases" class="btn btn-outline text-white hover:bg-white hover:text-{color} border-white border-2 hover:border-white rounded xl:btn-lg">{btnText}</a>
        </div>
    </div>
    <img src={imgPath} alt="icon" class="hidden sm:inline-block w-48 md:w-60 lg:w-96 xl:w-[30rem]">
</div>

<div class="hidden bg-eco-purple"></div>
<div class="hidden bg-eco-yellow"></div>
<div class="hidden bg-eco-green"></div>
<div class="hidden hover:text-eco-green"></div>
<div class="hidden hover:text-eco-purple"></div>