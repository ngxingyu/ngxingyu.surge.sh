
<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import BlogPostPreview from "../../components/blog-post/previews/index.svelte";
  import BlogPostPreviewLead from "../../components/blog-post/previews/lead.svelte";
  /* import Subscribe from "../components/subscribe.svelte"; */
  import { headerStore, searchStore } from "../../stores";
  export let posts;
  // Without cloning the posts, it is an empty array when hydration kicks in.
	const postsArray = [...posts];

  $: filteredPosts = postsArray.filter(post =>
    post.metadata.title.toLowerCase().includes($searchStore.toLowerCase()) ||
    post.metadata.summary.toLowerCase().includes($searchStore.toLowerCase())
  );
  const titleAction = node => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        headerStore.setHeaderTransparent(entry.isIntersecting);
      });
    });
    observer.observe(node);
    return {
      destroy() {
        headerStore.setHeaderTransparent(false);
        observer.disconnect();
      }
    };
  };
</script>

<div class="flex flex-col min-h-screen bg-gray-200 font-sans leading-normal tracking-normal">


  <div class="flex-grow container px-4 md:px-0 max-w-6xl mx-auto mt-32">
    <div class="mx-0 sm:mx-6">
      <div
        class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800
        leading-normal rounded-t">
        {#if filteredPosts.length > 0}
          <BlogPostPreviewLead post={filteredPosts.shift()} />
          <div class="flex flex-wrap justify-between py-12 md:-mx-6">
            {#each filteredPosts as post (post.metadata.slug)}
              <BlogPostPreview {post} />
            {/each}
          </div>
        {:else}
          <p>No blog posts match your search criteria.</p>
        {/if}
      </div>
	</div>
    </div>
</div>
