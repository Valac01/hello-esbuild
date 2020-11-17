<script>
  let comments = []
  let newComment = ''

  function addComment() {
    comments = [newComment, ...comments]
    newComment = ''
  }
</script>

<div>
  <textarea name="comments" cols="30" rows="10" bind:value={newComment} placeholder="Your Comment"></textarea>
  <button on:click={addComment}>Add your comment</button>
</div>

<div>
  {#each comments as comment (comment)}
  <p>{comment}</p>
  {:else}
  <p>No comments</p>
  {/each}
</div>