<script lang="ts">

    export let data;
    let posts = data.posts;
    let chekeado: boolean[] = posts.map(() => false);
</script>

<div class="flex flex-col gap-4">
    <h1>Posts</h1>
    {#each posts as post, index}
        <button class="p-4 flex flex-col gap-2 border border-gray-300 rounded-lg justify-start" class:bg-red-500={chekeado[index]} on:click={() => chekeado[index] = !chekeado[index]}>
            <h2 class="text-2xl font-bold text-left">{post.title}</h2>
            <p class="text-gray-600 text-left">{post.body}</p>
        </button>
    {/each}
</div>