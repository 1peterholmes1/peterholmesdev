<script lang="ts">
  let items = [
    {
      company: "Personal Website Construction",
      location: "Minneapolis, MN",
      date: "June 2023 - July 2023",
      title: "Personal Frontend Development",
      bulletPoints: [
        "Expermiented with Astro and Svelte using Typescript",
        "Hosted on Cloudflare Pages",
      ],
      link: "https://github.com/1peterholmes1/peterholmesdev",
    },
    {
      company: "Raytheon",
      location: "Los Angeles, CA",
      date: "August 2022 - December 2022",
      title: "Capstone Security Vulnerability Discovery Project",
      bulletPoints: [
        "Exfiltrated and decompiled firmware and sensitive information from IoT device",
        "Exploited the discovered credentials to connect to live video stream from dashcam",
      ],
    },
    {
      company: "Personal CMS Project",
      location: "Los Angeles, CA",
      date: "May 2023",
      title: "Chard Hall of Records",
      bulletPoints: [
        "Experimented with Astro and Sanity.io CMS",
        "Was my first time working with a CMS",
      ],
      link: "https://github.com/1peterholmes1/ChardHallofRecords",
    },
    {
      company: "USC Student CTF Project",
      location: "Los Angeles, CA",
      date: "January 2022 - May 2022",
      title: "CTF Cybersecurity Exercises",
      bulletPoints: [
        "Built backend in Python Flask",
        "Wrote alert scripts to notify when losing points",
        "Scanned for backdoors on server",
      ],
    },
    {
      company: "Personal Firebase Project",
      location: "Los Angeles, CA",
      date: "March 2023 - May 2023",
      title: "First Bank of Chard",
      bulletPoints: [
        "Built banking system to keep track of bets among my friends",
        "Frontend in React and Backend in Firebase",
        "Was my first experience with React and Firebase",
      ],
      link: "https://github.com/1peterholmes1/first-bank-of-chard",
    },
    {
      company: "USC Student Web Project",
      location: "Los Angeles, CA",
      date: "August 2020 - December 2020",
      title: "University Messaging System",
      bulletPoints: [
        "Wrote in Java using Apache and MySQL",
        "Experimented with using Firebase as a backend",
      ],
    },
    {
      company: "USC Student Android Project",
      location: "Los Angeles, CA",
      date: "August 2021 - December 2021",
      title: "Easy Team Up",
      bulletPoints: [
        "Worked with SQL databases and REST APIs",
        "Built Android app in Java",
      ],
    },
    {
      company: "Experimental Vehicle Team",
      location: "St Thomas Academy, MN",
      date: "2018 - 2019",
      title: "Team Captain, Electronics Lead",
      bulletPoints: [
        "Designed and built solar-powered car and all-terrain vehicles. Specialist in electronics and CAD",
        "Won 2017 World Championship in London, 2-time North American Champion vehicle",
      ],
    },
  ];
</script>

<div
  class="bg-white/10 backdrop-blur rounded-lg flex flex-col justify-start divide-y px-4"
>
  {#each items as item}
    <div class="py-4">
      <div class="flex justify-between flex-col sm:flex-row text-left">
        <span
          ><span class="font-bold">{item.company}</span>, {item.location}</span
        >
        <span>{item.date}</span>
      </div>
      <div class="italic text-left flex gap-2 items-center">
        {item.title}{#if item.link != undefined}<span
            ><a href={item.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                class="fill-base-content/50 hover:fill-base-content/100 hover:scale-110 transition-all duration-100"
                ><title>github</title><path
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                /></svg
              ></a
            ></span
          >{/if}
      </div>
      <ul class="text-left pl-8 list-disc">
        {#each item.bulletPoints as bullet}<li>{bullet}</li>{/each}
      </ul>
    </div>
  {/each}
</div>
