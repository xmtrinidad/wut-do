<script>
import AttributesDemo from "../components/demos/attributes-demo.svelte";
import HtmlRenderDemo from '../components/demos/html-render-demo.svelte';
import BindDemo from '../components/demos/bind-demo.svelte';
import PropsDemo from '../components/demos/props-demo.svelte';
import DynamicComponentsDemo from "../components/demos/dynamic-components-demo.svelte";
import ConstDemo from '../components/demos/const-demo.svelte';
// Prop being passed into PropsDemo
const things = [
  { title: 'Thing Title 1', description: 'This be a test description 1'},
  { title: 'Thing Title 2', description: 'This be a test description 2'},
  { title: 'Thing Title 3', description: 'This be a test description 3'},
  { title: 'Thing Title 4', description: 'This be a test description 4'},
];
</script>

<!-- This is a demo page to learn the ways of Svelte -->
<div class="demos">
  <div class="demo">
    <AttributesDemo></AttributesDemo>
  </div>
  <div class="demo">
    <HtmlRenderDemo></HtmlRenderDemo>
  </div>
  <div class="demo">
    <PropsDemo things={things}></PropsDemo>
  </div>
  <div class="demo">
    <BindDemo></BindDemo>
  </div>
  <div class="demo">
    <DynamicComponentsDemo></DynamicComponentsDemo>
  </div>
  <div class="demo">
    <ConstDemo></ConstDemo>
  </div>
</div>

<style>
  .demos {
    padding: 24px;
  }

  .demo {
    margin-bottom: 24px;
  }

  :global(.html-render-demo) {
    border: 3px solid green;
  }
</style>