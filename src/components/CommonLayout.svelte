<div class="grid-bg"></div>
<div class="content m-auto mb-8">
	<slot />
</div>


<style>
.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: 
    linear-gradient(to right, #8882 1px, transparent 1px),
    linear-gradient(to bottom, #8882 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
