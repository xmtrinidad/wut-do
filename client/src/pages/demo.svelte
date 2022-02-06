<script>
import AttributesDemo from "../components/demos/attributes-demo.svelte";
import HtmlRenderDemo from '../components/demos/html-render-demo.svelte';

  console.log('demo page loaded');
</script>

<!-- This is a demo page to learn the ways of Svelte -->
<div class="demos">
  <div class="demo">
    <AttributesDemo></AttributesDemo>
  </div>
  <div class="demo">
    <HtmlRenderDemo></HtmlRenderDemo>
  </div>
</div>

<style>
  .demos {
    padding: 24px;
  }

  .demo {
    margin-bottom: 24px;
  }
</style>