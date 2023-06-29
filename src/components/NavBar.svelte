<script lang="ts">
  import { panes } from "@/panes";
  import { themeChange } from "theme-change";
  import { onMount } from "svelte";

  const container = document.getElementById("container");
  const scrollTo = (id: string) => {
    const item = document.getElementById(id);
    const itemPos = item?.offsetTop;
    container?.scrollTo({ top: itemPos, behavior: "smooth" });
  };

  let dark = true;
  let theme: string;
  onMount(() => {
    themeChange(false);
    const initTheme = window.localStorage.getItem("theme") || "coffee";
    theme = initTheme;
    if (initTheme === "retro") dark = false;
  });

  container.onscroll = () => {
    const paneTops = new Set();
    panes.forEach((pane) => {
      const item = document.getElementById(pane.id);
      const itemPos = item?.offsetTop;
      paneTops.add(itemPos);
      const itemHeight = item?.offsetHeight;
      // console.log(itemPos, itemHeight, container.scrollTop);
      if (
        container.scrollTop >= itemPos &&
        container.scrollTop <= itemPos + itemHeight
      ) {
        document
          .getElementById(`btn-${pane.id}`)
          ?.classList.add(`bg-${pane.color}/100`);
        document.getElementById(`btn-${pane.id}`)?.classList.remove("shadow");
      } else {
        document
          .getElementById(`btn-`)
          ?.classList.remove(`bg-${pane.color}/50`);
      }
    });
    if (!paneTops.has(Math.round(container.scrollTop))) {
      document.getElementById("navbar")?.classList.add("shadow");
      document.getElementById("navbar")?.classList.remove("bg-transparent");
      document.getElementById("navbar")?.classList.add("bg-white/5");
    } else {
      document.getElementById("navbar")?.classList.remove("shadow");
      document.getElementById("navbar")?.classList.add("bg-transparent");
      document.getElementById("navbar")?.classList.remove("bg-white/5");
    }
  };

  const toggleTheme = () => {
    const currentTheme = theme;
    if (currentTheme === "night") {
      window.localStorage.setItem("theme", "retro");
      themeChange(true);
      theme = "retro";
    } else {
      window.localStorage.setItem("theme", "coffee");
      themeChange(true);
      theme = "coffee";
    }
  };
</script>

<nav class="fixed w-full top-0 z-10">
  <div
    id="navbar"
    class="w-full backdrop-blur-xl bg-white/5 h-10 pr-4 flex justify-between"
  >
    <div class="flex">
      {#each panes as pane}
        <button
          id={`btn-${pane.id}`}
          class={`px-4 bg-${pane.color} text-base-content/100 filter-none`}
          on:click={() => {
            scrollTo(pane.id);
          }}>{pane.name}</button
        >
      {/each}
    </div>
    <div class="flex content-center items-center">
      <input
        data-toggle-theme="coffee,retro"
        type="checkbox"
        class="toggle opacity-50"
        on:change={() => toggleTheme()}
        bind:value={dark}
      />
    </div>
  </div>
</nav>
